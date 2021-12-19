const { response } = require("express");

window.onload = () => {

    async function getData(){
        let response = await fetch('https://api.mapbox.com/datasets/v1/cosimarosie/ckx5z09s606qi28pjuwu8eqq5/features?access_token=pk.eyJ1IjoiY29zaW1hcm9zaWUiLCJhIjoiY2t1d3BtYnF4MDZrcTJucXFoNGN1M3hkaCJ9.RgMCkP3mQoUKWG2O5Rw4Fw',{
            method: 'post',
            body: JSON.stringify()
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