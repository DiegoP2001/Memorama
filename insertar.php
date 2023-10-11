<?php
// Datos de conexión a la base de datos
$host = "fdb1030.awardspace.net";
$puerto = 3306;
$nombreBD = "4242024_dbprueba";
$usuario = "4242024_dbprueba"; 
$passwd = "bu)d-YZs6(9j[@ag";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Lee los datos JSON del cuerpo de la solicitud
  $data = json_decode(file_get_contents('php://input'), true);
}

// Realiza algún procesamiento con los datos
$nombre = $data['nombre'];
$puntos = $data['score']; 
$tiempo = $data['time'];


// Datos para la inserción
//$nombre = "Carmeloide";
//$puntos = 100;
//$tiempo = 25.50;


try {
    // Crear una conexión a la base de datos
    $conexion = new PDO("mysql:host=$host;port=$puerto;dbname=$nombreBD", $usuario, $passwd);

    // Configurar PDO para mostrar errores en caso de que ocurran
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta SQL para insertar datos en la tabla "ranking"
    $consulta = "INSERT INTO ranking (nombre, puntos, tiempo) VALUES (:nombre, :puntos, :tiempo)";

    // Preparar la consulta
    $stmt = $conexion->prepare($consulta);

    // Bind de parámetros
    $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
    $stmt->bindParam(':puntos', $puntos, PDO::PARAM_INT);
    $stmt->bindParam(':tiempo', $tiempo, PDO::PARAM_STR);

    // Ejecutar la consulta
    $stmt->execute();

    echo "Registro insertado con éxito.";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Cerrar la conexión
$conexion = null;
?>
