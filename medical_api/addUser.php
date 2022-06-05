<?php

include 'db_connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$first = $data->first;
$last = $data->last;
$email = $data->email;
$username = $data->username;
$contact = $data->contact;
$password = $data->password;

$sql = "INSERT INTO users (id, first, last, email, username, contact, password, userCreate) VALUES (NULL, '$first','$last', '$email', '$username', '$contact', '$password', CURRENT_TIMESTAMP);";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Added user");
}

?>