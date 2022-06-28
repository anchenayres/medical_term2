<?php

include 'db_connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

    $first = $name;
    $age = $age;
    $gender = $gender;
    $email = $email;
    $password = $pass;
    $contact = $number;
    $doctID = $iD;
    $doctSpecial = $special;
    $doctRoom = $room;

    if($resultChecker > 0){
        echo "false";
    } else{
    $sql = "INSERT INTO doctors (id, name, age, gender, email, pass, number, docID, docSpecial, docRoom) VALUES (NULL, '$first','$age','$gender','$email','$password','$contact','$doctID','$doctSpecial','$doctRoom');";
    $result = mysqli_query($conn, $sql);

        if(!$result){
            echo ("Error Description: " . mysqli_error($connection));
        } else {
            echo ("Doctor has been added to the database");
        }
    }
?>