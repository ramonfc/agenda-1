'use strict'

function Zona(nombre, sedes) {
    this.nombre = nombre;
    this.sedes = sedes;
}

window.addEventListener("load", () => {


    //Limpiar el select de ciudades
    function removeOptions(selectElement) {
        var i, L = selectElement.options.length - 1;
        for (i = L; i >= 0; i--) {
            selectElement.remove(i);
        }
    }

    var formulario = document.querySelector("#formulario");
    var zonas = document.querySelector("#zonas");
    var ciudades = document.querySelector("#ciudades");
    var labelCiudades = document.querySelector("#labelCiudades");
    labelCiudades.style.display = "none";
    ciudades.style.display = "none";

    removeOptions(zonas);
    removeOptions(ciudades);

    //zona inicial en el select de zonas vacia
    var option = document.createElement("option");
    option.value = null;
    option.text = "";
    zonas.appendChild(option);

    //asignar valores al select de zonas, el contenido está en el archivo datosDeZona.js:
    for (var i = 0; i < datosDeZona.length; i++) {
        var zona = datosDeZona[i];
        // console.log(typeof zona);
        var option = document.createElement("option");
        option.value = zona.id;
        option.text = zona.nombre;
        zonas.appendChild(option);
    }



    zonas.addEventListener('change', function() {
        console.log(zonas.value);

        //obtener el indece de la zona que se ha seleccionado:
        /* var zonaSeleccionada = null;

         for(var i = 0; i < datosDeZona.length; i++) {
             var zona = datosDeZona[i];
             if (zona.id.toString() === zonas.value.toString()) {
                 zonaSeleccionada = zona;
             }
         }*/

        //obtener el indece de la zona que se ha seleccionado:
        var zonaSeleccionada = datosDeZona.find(zona => zona.id.toString() === zonas.value.toString());

        console.log(zonaSeleccionada.id);



        //alert(this.value);

        removeOptions(ciudades);



        var sedesCiudades = zonaSeleccionada.sedes;
        console.log(sedesCiudades);

        /* AGREGAR CIUDADES */
        labelCiudades.style.display = "initial";
        ciudades.style.display = "initial";
        //ciudad vacia
        var option = document.createElement("option");
        option.value = null;
        option.text = "";
        ciudades.appendChild(option);


        for (var i = 0; i < sedesCiudades.length; i++) {

            var optionCiudades = document.createElement("option");
            optionCiudades.value = datosDeSede[sedesCiudades[i]].id; //indice de la sede        
            optionCiudades.text = datosDeSede[sedesCiudades[i]].ciudad;
            ciudades.appendChild(optionCiudades);
        }

        ciudades.addEventListener('change', function() {

            var ciudadSeleccionada = datosDeSede.find(ciudad => ciudad.id.toString() === ciudades.value.toString());

            console.log(ciudadSeleccionada.direccion);


            ///botón de buscar

            formulario.addEventListener("submit", function() {



                var p_direccion = document.querySelector("#p_direccion span");
                var p_barrio = document.querySelector("#p_barrio span");
                var p_tel = document.querySelector("#p_telefonos span");


                p_direccion.innerHTML = ciudadSeleccionada.direccion;
                p_barrio.innerHTML = ciudadSeleccionada.barrio;
                p_tel.innerHTML = ciudadSeleccionada.tel;


            }); //boton_buscar.addEventListener submit



        }, false); //listener de change en ciudades




    }, false); //listener de change en zonas

});