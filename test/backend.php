<?php
require('mysql.php');

$jsonFile = file_get_contents("users.json");
$users = json_decode($jsonFile);
$db = new MySQL();
$db->Connect();


// if ($_GET['action'] == 'getUsers') {
//     global $db;
//     $results = $db->Query('SELECT * FROM users');
//     foreach($results as $result) {
//         echo $result['username'];
//     }

// } else if ($_GET['action'] == 'createUser') {
//     $newUser = json_decode(file_get_contents("php://input"));
//     $username = $newUser->username;
//     $email = $newUser->email;
//     global $db;
//     $results = $db->Query("INSERT INTO users (username, email) VALUES ('$username', '$email')");
//     echo "User created";
// }
$results1 = $db->Query("SELECT * FROM users");
$array = array(
    'name' => 'text'
);

foreach ($results1 as $result) {
    echo $result["username"];
    echo "<br/>";
    array_push($array['name'] = $result['username']);
}
var_dump($array);
$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($array, JSON_FORCE_OBJECT));
fclose($fp);

if ($_GET['test2'] == 'Create user') {
    $results2 = $db->Query("INSERT INTO users (name, email) VALUES ('form', 'works')");
    // header("location: ../index.html");
}