
window.onload = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY29zaW1hcm9zaWUiLCJhIjoiY2t1d3BtYnF4MDZrcTJucXFoNGN1M3hkaCJ9.RgMCkP3mQoUKWG2O5Rw4Fw';
    getData();
    navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, {
        enableHighAccuracy: true
    })
    
    function succesLocation(position){
        console.log(position) 
        setupMap([position.coords.longitude, position.coords.latitude])       
    }
    
    function errorLocation(){
        setupMap([4.34878, 50.85045])
    }
    
    function setupMap(center){
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/cosimarosie/ckuwpxdftohgf18s0f4r0ngat',
            center: center,
            zoom: 14,
        });    

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav);

        var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
        });    
    }

    function getData(){
        fetch("https://api.mapbox.com/datasets/v1/cosimarosie/ckx5z09s606qi28pjuwu8eqq5/features?access_token=pk.eyJ1IjoiY29zaW1hcm9zaWUiLCJhIjoiY2t1d3BtYnF4MDZrcTJucXFoNGN1M3hkaCJ9.RgMCkP3mQoUKWG2O5Rw4Fw")
        .then(response => response.json())
        .then(data => console.log("DATA!",data));
    }
    //dataset id: ckx5z09s606qi28pjuwu8eqq5

        
    
      
}