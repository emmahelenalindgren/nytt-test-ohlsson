const cars = document.getElementById("eachCar");

addClickListenersToAllCars();

function addClickListenersToAllCars(){
	for(let i = 0; i < cars.length; i++){
        console.log("alla bilar" + cars);
		cars[i].addEventListener("click", bookCar);
	}
}

function bookCar(e){
	let carID = PATH_TO_ID
	let bookedDate = PATH_TO_DATE
	//skicka dessa till /update routern
	fetch(`/update/?bookedDate=${bookedDate}&id=${carID}`)
	.then((response)=>{
		console.log("skickar till routern" + response)
	})
	.catch((err)=>{console.log(err)})
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

           
   