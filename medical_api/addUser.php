<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if(empty($_POST['name'] && $_POST['age'] && $_POST['gender'] && $_POST['email'] && $_POST['password'] && $_POST['number'] && $_POST['id'] && $_POST['special'] && $_POST['room'])){
    echo "You need to enter in all the data please!";
} else {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $number = $_POST['number'];
    $id = $_POST['id'];
    $special = $_POST['special'];
    $room = $_POST['room'];

    $sql = "INSERT INTO doctors (name_and_surname, age, gender, email, password, phone_number, doctor_id, specialisation, room, id) VALUES ('$name','$age','$gender','$email','$password','$number','$id','$special','$room', NULL);";
    $result = mysqli_query($conn, $sql);

    header("Location: http://localhost:8888/Doctors");
}
?>