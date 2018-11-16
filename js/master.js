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

        this.addPreloader(document.querySelector('.modelInfo'));

        //trigger an ajax call with a mocked click event
        document.querySelector('#F55').click();
    },

    beforeUpdate : function () {
        console.log('things are gonna change...');
    },

    updated : function() {
        console.log('things are different now');
        //move the preloader out of the element and hide it
        let preloader = document.querySelector('.preloader-wrapper');

        //hide the preloader with css
        //mpve it to the bottom of the page - ready for the next AJAX call
        setTimeout(function(){
            preloader.classList.add('hidden');
            document.body.appendChild(preloader);
        }, 1000); //1000m = 1second

    },

    methods : {

        addPreloader(parentEl) {
            //load the preloader into the parent element and make it draw
            let preloader = document.querySelector('.preloader-wrapper');

            parentEl.appendChild(preloader);

            let animItem = bodymovin.loadAnimation ({
                wrapper : document.querySelector('.preloader'),
                animType : 'svg',
                loop : true,
                path : 'data/search.json'
            })
        },

        getData(e) {
            //trigger the preloader
            this.addPreloader(document.querySelector('.modelInfo'));
            let preloader = document.querySelector('.preloader-wrapper').classList.remove('hidden');
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
