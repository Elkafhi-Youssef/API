<?php
 $test_host = 'localhost';
 $test_bd = 'posts';
 $test_username = 'root';
 $test_password = '';
 
 
 try {
     
    $con = new PDO("mysql:host=$test_host;dbname=$test_bd",$test_username,$test_password);
  
//   echo "Connected successfully*************************";
} catch(PDOException $e) {
  echo "Connection failed****************************: " . $e->getMessage();
}
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 $data = $con->prepare("SELECT * from post");
 
 $data->execute();
 $result = $data->fetchAll();
//  var_dump(json_encode(array("message"=>"success")));
$return=[
    'message'=>'succes',
    'data'=>$result
];
 print_r(json_encode($return));


?>