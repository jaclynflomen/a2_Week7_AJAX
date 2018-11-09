(() => {

//rework this with a Vue instance

const vm = new Vue({
    el : "#app",

    data : {
        modelname : "",
        modelpricing : "",
        modeldetails : ""
    },

    methods : {
        getData(e) {
            debugger;
            let targetURL = e.currentTarget.id;
             //gets the id of the element via the event object
             fetch(`./includes/connect.php?modelNo=${targetURL}`) // go get the data and bring it back! good doggy
           .then(res => res.json()) //turn the result into a plain JS object
           .then(data => {
               console.log(data);
                const { modelName, pricing, modelDetails } = data[0];
                this.modelname = modelName;
                this.modeldetails = modelDetails;
                this.modelpricing = pricing;

             }) 
            .catch(function(error) {
            console.log(error); //if anything broke, log it to the console
        });
        }
    }
});
})();
