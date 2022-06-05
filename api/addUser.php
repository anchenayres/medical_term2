<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$first = $data->first;
$last = $data->last;
$email = $data->email;
$contact = $data->contact;
$username = $data->username;
$password = $data->password;

$passwordEncrypt = md5($password);

$sql = "INSERT INTO users (id, first, last, email, contact, username, password, userCreate) VALUES (NULL, '$first','$last', '$email', '$contact', '$username', '$passwordEncrypt', CURRENT_TIMESTAMP);";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Added user");
}

?>