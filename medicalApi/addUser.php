<?php

include 'db_connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$first = $data->first;
$age = $data->age;
$gender = $data->gender;
$email = $data->email;
$password = $data->password;
$contact = $data->contact;
$doctID = $data->doctID;
$doctSpecial = $data->$doctSpecial;
$doctRoom = $data->doctRoom;


$sql = "INSERT INTO doctors (id, name, age, gender, email, pass, number, docID, docSpecial, docRoom) VALUES (NULL, '$first','$age','$gender','$email','$password','$contact','$doctID','$doctSpecial','$doctRoom');";
$sql = "INSERT INTO users (id, first, last, email, username, contact, password, userCreate) VALUES (NULL, '$first','$last', '$email', '$username', '$contact', '$password', CURRENT_TIMESTAMP);";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Added user");
}


?>