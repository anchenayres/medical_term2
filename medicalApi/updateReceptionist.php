<?php 
    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        exit;
    }

    include 'db_connection.php';

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $email = $data->email;
    $number = $data->number;
    $password = $data->password;
    $rank = $data->rank;
    $id = $data->id;

    $sql = "UPDATE receptionists SET receptionNumber='$number',receptionEmail='$email',receptionPassword='$password',receptionStatus='$rank' WHERE id='$id'";
    $result = mysqli_query($conn, $sql);


    if(!$result){
        echo ("Err Desc:". mysqli_error($conn));
    } else{
        echo 'True'; 
    }
?>