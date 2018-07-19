function mostrarOcultarContenido(event) {
    if (event.target.checked) {
        document.querySelector("#contenido").style.display = "block";
    } else {
        document.querySelector("#contenido").style.display = "none";
    }
}

document.getElementById("form").addEventListener('submit', function(e){
	e.preventDefault();
	let comment = document.getElementById("comments").value;
	if(comment.toLowerCase().includes("excelente")){
		swal("Enviado!", "El formulario ha sido enviado correctamente! Felicitaciones, el comentario tiene la palabra EXCELENTE", "success");
	}else{
		swal("Enviado!", "El formulario ha sido enviado correctamente!", "success");
	}

	document.getElementById("form").reset();
},false);
