<?php

    $dbhost = "localhost";
    $dbusername = "root";
    $dbpassword = "root";
    $db = "development_project";

    $conn = new mysqli($dbhost, $dbusername, $dbpassword, $db);

    if($mysqli -> connect_error){
        echo 'Failed to connect to Database: ' . $mysqli -> connect_error;
        exit();
    }

?>