(() => {

//rework this with a Vue instance

const vm = new Vue({
    el : "#app",

    data : {
        modelname : "",
        modelpricing : "",
        modeldetails : ""
    },

    mounted : function(){
        console.log('vue is ready to go on the page');

        //trigger an ajax call with a mocked click event
        document.querySelector('#F55').click();
    },

    beforeUpdate : function () {
        console.log('things are gonna change...');
    },

    updated : function() {
        console.log('things are different now');
    },

    methods : {
        getData(e) {
            //debugger;
            let targetURL = `./includes/connect.php?modelNo=${e.currentTarget.id}`;
             //gets the id of the element via the event object
             fetch(targetURL) // go get the data and bring it back! good doggy
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
