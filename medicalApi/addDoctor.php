<?php
    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        exit;
    }

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

include 'db_connection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

    $id = $data-> id; 
    $name = $data->name;
    $age = $data -> age;
    $gender = $data -> gender;
    $email = $data -> email;
    $password = $data -> password; 
    $number = $data -> number;
    $id = $data->id;
    $special = $data->special;
    $room = $data->room;

    $sql = "INSERT INTO doctors(id, name, age, gender, email, pass, number, docID, docSpecial, docRoom) 
    VALUES (NULL,'$name','$age','$gender', '$email','$password','$number','$id','$special','$room');";
    echo $sql;
    // $result = mysqli_query($conn, $sql);

    //     if(!$result){
    //         echo ("Error Description: " . mysqli_error($conn));
    //     } else {
    //         echo ("Doctor has been successfuly added to the database!");
    //     }
    
?>