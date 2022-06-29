<?php 
    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        exit;
    }

    include 'db_connection.php';

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $room = $data->room;
    $email = $data->email;
    $num = $data->num;
    $pass = $data->pass;
    $id = $data->id;

    $sql = "UPDATE doctors SET email='$email',pass='$pass', number='$num', docRoom='$room' WHERE id='$id'";
    $result = mysqli_query($conn, $sql);


    if(!$result){
        echo ("Err Desc:". mysqli_error($conn));
    } else{
        echo 'True'; 
    }
?>