<?php
if (isset($_POST['nombre']) && !empty($_POST['nombre']) && isset($_POST['apellido']) && !empty($_POST['apellido']) &&
    isset($_POST['telefono']) && !empty($_POST['telefono'])){

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];

    $db = "registros";
    $db_host = "localhost";
    $db_user = "";
    $db_passwor = "root";

    $conexion = mysqli_connect($db_host, $db_user, $db_passwor, $db) or die("Error al conectar con la base de datos");
    mysqli_select_db($conexion, $db) or die("Error al seleccionar la base de datos");

    $sql = "INSERT INTO Usuarios (Nombre, Apellido, Telefono) VALUES ('$nombre', '$apellido', '$telefono')";

    if($conexion->query($sql) === TRUE) {
        echo "Guardado correctamente <br>";
        echo  "<a href=index.html>Volver a Formulario</a>";
    } else {
        echo "Error: " . $sql . "<br>" . $conexion->error;
    }
    $conexion->close();
} else {
    echo "Debe llenar todos los campos";
}
?>