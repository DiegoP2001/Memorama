<link rel="stylesheet" href="./styles/ranking.css">

<?php
$host = "fdb1030.awardspace.net";
$puerto = 3306;
$nombreBD = "4242024_dbprueba";
$usuario = "4242024_dbprueba";
$contraseña = "bu)d-YZs6(9j[@ag";

$conexion = new mysqli($host, $usuario, $contraseña, $nombreBD, $puerto);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$sql = "SELECT * FROM ranking ORDER BY puntos DESC, tiempo ASC";
$resultado = $conexion->query($sql);


?>
<br>
<h1>RANKING</h1>
<?php

if ($resultado->num_rows > 0) {
    echo "<table class='table is-bordered is-striped is-narrow is-hoverable'>";
    echo "<tr><th>Nombre</th><th>Puntos</th><th>Tiempo</th></tr>";
    while ($fila = $resultado->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $fila["nombre"] . "</td>";
        echo "<td>" . $fila["puntos"] . "</td>";
        echo "<td>" . $fila["tiempo"] . "s" . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "No se encontraron registros.";
}

$conexion->close();
?>
