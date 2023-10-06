const boton = document.getElementById("nb-btn");
const menu = document.getElementById("nb-div-1");
let estado = false;

boton.onclick = () => {
    {
        if (estado) {
            estado= false;
            menu.style.transform="translateX(0)";
        } else {
            estado= true;
            menu.style.transform="translateX(-10rem)";
        }
    }
};