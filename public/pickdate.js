const
	cars = document.getElementsByClassName("eachCar"),
    dateBtn = document.getElementById("dateBtn");
var date = null;

addClickListenersToAllCars();
dateBtn.addEventListener("click", (e)=>{
    let dateSelect = document.getElementById("dateSelect");
    date = dateSelect.value;
});


function addClickListenersToAllCars(){
	for(let i = 0; i < cars.length; i++){
		cars[i].addEventListener("click", bookCar);
	}
}

function bookCar(e){
    e.preventDefault();
	let carID = e.target.parentNode.attributes["data-id"].value;
	//skicka dessa till /update routern
	fetch(`/update/?bookedDate=${date}&id=${carID}`)
	.then((response)=>{
		console.log("skickar till routern" + response);
	})
	.catch((err)=>{console.log(err);});
}



/*document.getElementById('form1').addEventListener('submit', function(evt){
                console.log("klickar på knappen");
               evt.preventDefault();
    document.getElementById('datum').value = document.getElementById('picked').value;
    })
    
          
        function myFunction (){
            document.getElementById("picked").value = datum;
        }
           */

           
   