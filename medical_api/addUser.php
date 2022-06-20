<?php

    include 'db_connection.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: * ");

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $name = $data->name;
    $age = $data->age;
    $gender = $data->gender;
    $email = $data->email;
    $pass = $data->pass;
    $num = $data->num;
    $doc_id = $data->doc_id;
    $special = $data->special;
    $room = $data->room;


    $sql = "INSERT INTO eish ( id, name, age, gender, email, pass, number, docId, docSpecial, docRoom) VALUES (NULL, '$name', '$age', '$gender', '$email', '$pass', '$num', '$doc_id', '$special', '$room');";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo ("All is Goood! Added user");
    }

?>

