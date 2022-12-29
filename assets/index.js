function seleccionMenu(link){
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    let x = document.getElementById("nav");
    x.className = "";
}



/* Mostrar menu */

function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

/* Deteccion del scrolling para aplicar animacion */

window.onscroll = function(){
    efectoHabilidades();
};

function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("php").classList.add("barra-progreso3");
        document.getElementById("ts").classList.add("barra-progreso4");
        document.getElementById("bd").classList.add("barra-progreso5");
        document.getElementById("angular").classList.add("barra-progreso6");
        document.getElementById("jquery").classList.add("barra-progreso7");
    }
}