//<Feature: poder mostrar o ocultar el password>
const inputPassword = document.getElementById("password");
const btnTogglePassword = document.querySelector(".toggle_password");
const icono = btnTogglePassword.querySelector("i");

btnTogglePassword.addEventListener("click", () => {

    const esPassword = inputPassword.type === "password";

    inputPassword.type = esPassword ? "text" : "password";

    icono.classList.toggle("bi-eye-slash");
    icono.classList.toggle("bi-eye");

});


//<Feature: logearse con cuentas como facebook, x, google> ToDo
//Change - pendiente
const contenedor_formas_logis = document.getElementById("contenedor_formas_logis");
const btns_login = contenedor_formas_logis.querySelectorAll("button");
console.log(btns_login);

for (let i = 0; i < btns_login.length; i++) {
    btns_login[i].addEventListener('click', (e) => {
        const proveedor = e.currentTarget.dataset.proveedor;
        alert(`Login con ${proveedor} aún no implementado`);
    });
}


//<Feature: logearse con boton de tipo submit> ToDo
//Change - pendiente
// inputs del form_login
const input_username = document.querySelector('#username');
const input_password = document.querySelector('#password');
// form_login
const form_login = document.getElementById('form_login');

form_login.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = input_username.value;
    const password = input_password.value;

    console.log(username, password);

    alert('Login simulado (aún sin backend)');
    window.location.href = "../../index.html";
    "dashboard.html";
});
