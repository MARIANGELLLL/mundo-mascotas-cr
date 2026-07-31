/* =====================================
   MUNDO MASCOTAS CR
   ARCHIVO: script.js
===================================== */



// ===============================
// BOTÓN SUBIR ARRIBA
// ===============================


const btnTop = document.getElementById("btn-top");



window.addEventListener("scroll", function(){


    if(window.scrollY > 300){


        btnTop.style.display = "block";


    }else{


        btnTop.style.display = "none";


    }


});





if(btnTop){


btnTop.addEventListener("click", function(){


    window.scrollTo({


        top:0,

        behavior:"smooth"


    });


});


}








// ===============================
// VALIDACIÓN DEL FORMULARIO
// ===============================


const formulario = document.querySelector(".contacto-formulario form");



if(formulario){


formulario.addEventListener("submit", function(e){


    e.preventDefault();



    const nombre = formulario.querySelector("input[type='text']").value;

    const correo = formulario.querySelector("input[type='email']").value;

    const mensaje = formulario.querySelector("textarea").value;



    if(nombre === "" || correo === "" || mensaje === ""){


        alert("Por favor complete todos los campos.");


    }else{


        alert(
        "¡Gracias por contactarnos, " 
        + nombre +
        "! Pronto responderemos tu mensaje."
        );



        formulario.reset();


    }



});


}







// ===============================
// ANIMACIÓN AL HACER SCROLL
// ===============================



const elementos = document.querySelectorAll(
".card, .servicio-card, .beneficio, .testimonio"
);



const mostrarElemento = () => {



elementos.forEach(elemento => {



const posicion = elemento.getBoundingClientRect().top;



const alturaPantalla = window.innerHeight;



if(posicion < alturaPantalla - 100){


    elemento.style.opacity = "1";

    elemento.style.transform = "translateY(0)";


}



});



};





elementos.forEach(elemento => {


elemento.style.opacity = "0";

elemento.style.transform = "translateY(40px)";

elemento.style.transition = "0.8s";


});



window.addEventListener(
"scroll",
mostrarElemento
);



mostrarElemento();







// ===============================
// MENÚ RESPONSIVE
// ===============================



const menuLinks = document.querySelectorAll("nav a");



menuLinks.forEach(link => {


link.addEventListener("click",()=>{


    menuLinks.forEach(item=>{


        item.classList.remove("activo");


    });



    link.classList.add("activo");


});


});








// ===============================
// MENSAJE DE BIENVENIDA
// ===============================



window.addEventListener(
"load",
()=>{


console.log(
"🐾 Bienvenido a Mundo Mascotas CR"
);


}
);







// ===============================
// AÑO AUTOMÁTICO DEL FOOTER
// ===============================


const año = new Date().getFullYear();



const footerTexto = document.querySelector(
".footer-bottom p"
);



if(footerTexto){


footerTexto.innerHTML =
"© " + año +
" Mundo Mascotas CR | Todos los derechos reservados.";


}