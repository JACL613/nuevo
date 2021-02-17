<?php 
$usuario = $_POST['user'];
$clave = $_POST['pass'];

echo json_encode('Estos datos son enviados desde el servidor:'.$usuario .$clave);
?>