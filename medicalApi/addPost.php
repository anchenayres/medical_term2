<?php

    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        exit;
    }

    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $message = $data->message;
    $user = $data->user;






?>
