let szoba = 15000;
function hozzaad(){
    let szemely = document.getElementById("szemely");
    let szam = document.getElementById("ertek1").value;
    let nap = document.getElementById("ertek2").value;

    szemely.innerHTML = szoba * szam  * nap + " Ft";
}
