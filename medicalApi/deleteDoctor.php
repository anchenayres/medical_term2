<?php 
    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        exit;
    }

    include 'db_connection.php';

    header('Access-Control-Origin: *');
    header('Access-Control-Headers: *');

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $id = $data->id;

    $sql = "DELETE FROM doctors WHERE name ='$name';";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo ("Err Desc:". mysqli_error($conn));
    } else{
        echo 'Profile has been deleted'; 
    }
?>