<?php 

include 'db_connection.php';


$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$selectedUser = $data->name;
$medNumber = $data->medAidNumber;
$email = $data->email;
$number = $data->number;
$password = $data->password;

    $sql = "SELECT * FROM patients";

    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);
    

    if($resultCheck > 0){

    while($row = mysqli_fetch_assoc($result)){
        if($medNumber = ''){
            $medNumber = $row['medical_aid_number']
        }
        if($email = ''){
            $email = $row['email']
        }
        if($number = ''){
            $number = $row['phone_number']
        }
        if($password = ''){
            $password = $row['password']
        }
        $update = "UPDATE patients SET medical_aid_number='$medNumber', email='$email', phone_number='$number', password='$password' WHERE name_and_surname='$selectedUser';";
        $result2 = mysqli_query($conn,$update)

    }

    } else {
        echo "false";
    }

?>