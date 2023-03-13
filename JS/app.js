/*function datos() {
    // Capturar los datos del formulario
    const nombre = document.getElementById('inputName').value;
    const apellidos = document.getElementById('inputSurname').value;
    const fechaNacimiento = document.getElementById('inputBirth').value;
    const direccion = document.getElementById('inputAddress').value;
    const ciudad = document.getElementById('inputCity').value;
    const raza = document.getElementById('inputState').value;
}
*/

const formulario =document.querySelector("#formulario");

//crear el evento
formulario.addEventListener("submit", validarFormulario)

//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#inputName").value;
    const apellidos = document.querySelector("#inputSurname").value;
    const fechaNacimiento = document.querySelector("#inputBirth").value;
    const direccion = document.querySelector("#inputAddress").value;
    const ciudad = document.querySelector("#inputCity").value;
    const raza = document.querySelector("#inputState").value;

    console.log(nombre, apellidos, fechaNacimiento, direccion, ciudad, raza);

    const respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = `Bienvenido ${nombre} ${apellidos}<br>`;

    const respuesta2 = document.getElementById("respuesta2");
    respuesta2.innerHTML = `Fecha de nacimiento: ${fechaNacimiento}<br>` + `Dirección: ${direccion}<br>` + `Ciudad: ${ciudad}<br>` + `Raza: ${raza}`;
}