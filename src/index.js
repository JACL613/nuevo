const formulario = document.getElementById('formulario');
const usuario = document.getElementById('Cam_usuario').value;
const clave = document.getElementById('Cam_clave').value;

const ruta =  'user='+usuario+'&pass='+ clave;


formulario.addEventListener('submit',function(e){
    console.log(usuario);
    console.log(clave);
    console.log(ruta);
    e.preventDefault();
    $.ajax({
        url:'./validar.php',
        type : 'POST',
        data: ruta,
    }).done(function (res){
        $('#respuesta').html(res)
    });
    
})

