<?php
$db_host = "localhost";
$db_user = "root";
$db_passwor = "root";

$conexion = mysqli_connect($db_host, $db_user, $db_passwor);

if($conexion) {
    echo "Conectado a la base de datos <br>";
    echo "Informacion del host: " . mysqli_get_host_info($conexion). "<br>";
    echo "Informacion del servidor: " . mysqli_get_server_info($conexion). "<br>";
    $cierre_db = mysqli_close($conexion);

} else {
    echo "Fallo al conectar con la base de datos <br>";
    echo "Error: " . mysqli_connect_error() . "<br>";
    echo "Mensaje de erro" . mysqli_connect_errno() . "<br>";
}
?>