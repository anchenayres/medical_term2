<?php
    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        exit;
    }

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

include 'db_connection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);


$name = $data->name;
$age = $data->age;
$gender = $data->gender;
$email = $data->email;
$password = $data->password;
$number = $data->number;
$id = $data->id;
$aidNumber = $data->aidNumber;


    $sql = "INSERT INTO patients(patientImage, patientName, age, gender, email, password, patientNumber, patientID, patientMedical, patientAppointments, id) 
    VALUES ('None','$name','$age','$gender','$email','$password','$number','$id','$aidNumber',NULL, NULL)";
    $result = mysqli_query($conn, $sql);

        if(!$result){
            echo ("Error Description: " . mysqli_error($conn));
        } else {
            echo ("Patient has been succesfully added!!!");
        }
    
?>