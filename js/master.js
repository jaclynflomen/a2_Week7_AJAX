(() => {
const car = document.querySelectorAll('.data-ref');

    function getData(){

        let targetURL = `includes/connect.php?modelNo=${this.id}`; //whenever we click on a thumbnail, pass its id to the php query

        fetch (targetURL) // go get the data and bring it back! good doggy
        .then(res => res.json()) //turn the result into a plain JS object
        .then(data => {
            console.log(data);
            //run a function to parse our data
            showCarData(data[0]);
        }) //lets see what we got
        .catch(function(error) {
            console.log(error); //if anything broke, log it to the console
        });
    }

    function showCarData(data) {
        //debugger;
        //parse the DB info and put it where it needs to go
        const{ modelName, pricing, modelDetails } = data; //destructuring assignment => MDN JS destructuring

        //grab the elements we need, and populate them with data
        document.querySelector('.modelName').textContent = modelName
        document.querySelector('.priceInfo').textContent = `$ ${pricing}.00`;
        document.querySelector('.modelDetails').textContent = modelDetails
    }

    car.forEach(car => car.addEventListener("click", getData));

    getData(); //trigger the getData function
})();
