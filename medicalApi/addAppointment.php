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
    $room = $data->room;
    $doctor = $data->doctor;
    $patient = $data -> patient;
    $patientId = $data -> patientId;
    $date = $data -> date;
    $time = $data -> time; 


    $sql = "INSERT INTO appointments(id, room, doctor, patient, patientId, appDate, time) 
    VALUES (NULL,'$room','$doctor','$patient','$patientId','$date','$time');";
    echo $sql;

    if(!$result){
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo ("Appointment has been succesfully added!!!");
    }

?>