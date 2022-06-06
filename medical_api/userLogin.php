<?php 

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$name_surname = $data->$name_surname;
$password = $data->password;

$encryptedPassword = md5($password);

if($name_surname === "" && $password === ""){
    echo "Err";
} else {
    $sql = "SELECT * FROM patients WHERE name_surname = '$name_surname' AND password = '$encryptedPassword';";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);

    if($resultCheck > 0){
        echo 'true';
    } else {
        echo 'false';
    }
}

?>