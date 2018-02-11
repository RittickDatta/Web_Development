<?php
$servername = "localhost";
$username = "username";
$password = "";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Connection error".$conn->connect_error);
}

$conn->close();

?>