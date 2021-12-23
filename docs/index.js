/*const { response } = require("express");

window.onload = () => {
    async function getData(){
        let response = await fetch('https://web2-nightshops.herokuapp.com/saveNightshop', {
            method: 'POST',
            body: new FormData(formElem)
          });
        if (response.status == 200){
            return await response.json();
        }else{
            console.log('An error has occured')
        }
    }
    getData().then(data => {
        addDataToDom(data);
    })
    function addDataToDom(data){
        document.getElementById(form).innerText = JSON.stringify(data);
    }
}

https://web2-nightshops.herokuapp.com/saveNightshop


        window.onload = () => {
        async function getData(){
            let response = await fetch('https://web2-nightshops.herokuapp.com/saveNightshop', {
                method: 'POST',
                body: new FormData(formElem)
            });
            if (response.status == 200){
                return await response.json();
            }else{
                console.log('An error has occured')
            }
        }
        getData().then(data => {
            addDataToDom(data);
        })
        function addDataToDom(data){
            document.getElementById(form).innerText = JSON.stringify(data);
        }

*/
