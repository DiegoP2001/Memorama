<?php
$username = "4242024_dbprueba";  // Replace with your MySQL username
$password = "bu)d-YZs6(9j[@ag";  // Replace with your MySQL password
$dbname = "4242024_dbprueba";

// Get data from the AJAX request
$data = json_decode(file_get_contents("php://input"));

$nombre = $data->nombre;
$score = $data->score;
$tiempo = $data->tiempo;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO ranking (nombre, puntos, tiempo) VALUES ('$nombre', '$score', '$tiempo')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array("message" => "Record inserted successfully"));
} else {
    echo json_encode(array("error" => "Error: " . $sql . "<br>" . $conn->error));
}

$conn->close();
?>
