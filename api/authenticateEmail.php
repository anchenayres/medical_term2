<?php 

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$username = $data->username;

if($email === ""){
    echo "";
} else {
    $sql = "SELECT * FROM users WHERE email = '$email';";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);

    if($resultCheck > 0){
        echo ("Not Available");
    } else {
        echo ("Available");
    }
}

?>