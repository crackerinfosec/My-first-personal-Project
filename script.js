
document.getElementById("parag").innerHTML = "My First JS code";

document.getElementById("btn").style.borderRadius = "25%";
document.getElementById("btn").style.backgroundColor = "red";
document.getElementById("btn").style.color = "white";
document.getElementById("btn").style.padding = "10px";
document.getElementById("btn").onclick = function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log("=> Latitude:", latitude);
                console.log("=> Longitude:", longitude);
            },
            function (error) {
                console.error("[-] Error getting location:", error.message);
            }
        );
    } else {
        console.error("[-] Geolocation is not supported by this browser.");
    }

}

document.getElementById("home").onclick = function1;
function function1() {
    let x = 5;
    console.log(x);
}


