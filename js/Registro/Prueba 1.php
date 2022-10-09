<?php
//codigo para calcular peso ideal
$peso = 0;
$altura = 0;
$peso = $_POST['peso'];
$altura = $_POST['altura'];
$pesoideal = 0;
$pesoideal = ($altura - 100) - (($altura - 150) / 4);
echo "Su peso ideal es: " . $pesoideal;


?>