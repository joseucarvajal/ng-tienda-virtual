<?php

//Cabeceras HTTP para autorizar el acceso desde otro domínio (front-end).
//Son un riesgo de seguridad
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$dbhost 	= "localhost";
$dbname		= "tienda";
$dbuser		= "root";
$dbpass		= "";
if($_SERVER['REQUEST_METHOD'] == 'POST'){
	$jsonProducto = file_get_contents("php://input");    
	$productoObj = json_decode($jsonProducto);	
    $conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
    $sql = "INSERT INTO productos (id, nombre, descripcion) VALUES (:id, :nombre, :descripcion)";
    $q = $conn->prepare($sql);
    $result = $q->execute(array(':id'=>NULL,
                      ':nombre'=>$productoObj->nombre,
                      ':descripcion'=>$productoObj->descripcion));
	 if($result){
        echo json_encode(array(
            'resultado' => 1,
            'mensaje' => 'Producto guardado con exito 2: '
        ));
    }else{
        echo json_encode(array(
            'resultado' => 0,
            'mensaje' => 'Hubo un error al guardar el producto',
            exception => $q->errorInfo()
        ));
    }	
}

if($_SERVER['REQUEST_METHOD'] == 'GET')
{
    // database connection
    $conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);

    // query
    $sql = "SELECT * from productos";
    $q = $conn->prepare($sql);	
	$q->execute();

	$resultados = $q->fetchAll(PDO::FETCH_ASSOC); 
	
	echo json_encode($resultados);		
}
?>