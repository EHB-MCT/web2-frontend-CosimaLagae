
window.onload = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY29zaW1hcm9zaWUiLCJhIjoiY2t1d3BtYnF4MDZrcTJucXFoNGN1M3hkaCJ9.RgMCkP3mQoUKWG2O5Rw4Fw';

    navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, {
        enableHighAccuracy: true
    })
    
    function succesLocation(position){
        console.log(position)        
    }
    
    function errorLocation(){
    
    }
    
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
    });
    

}