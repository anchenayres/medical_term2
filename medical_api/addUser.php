<?php

        // include 'db_connection.php';

        // header('Access-Control-Allow-Origin: *');
        // header("Access-Control-Allow-Headers: * ");

        // $request_body = file_get_contents('php://input');
        // $data = json_decode($request_body);

        // $fullName = $data->fullaName;
        // $gender = $data->gender;
        // $email = $data->email;
        // $contact = $data->contact;
        // $username = $data->username;
        // $password = $data->password;
        // $image = $data->image;

        // $passwordEncrypt = md5($password);

        // list($type, $image) = explode(';', $image);
        // list(, $image)      = explode(',', $image);
        // $image = base64_decode($image);

        // $newPath = 'profiles/' . time() . '.jpg';
        
        // file_put_contents($newPath, $image);

        // $sql = "INSERT INTO users (id, first, last, email, contact, username, password, userCreate, imgPath) VALUES (NULL, '$first','$last', '$email', '$contact', '$username', '$passwordEncrypt', CURRENT_TIMESTAMP, '$newPath');";
        // $result = mysqli_query($conn, $sql);

        // if(!$result){
        //     echo ("Error Description: " . mysqli_error($conn));
        // } else {
        //     echo ("All is Goood! Added user");
        // }

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

