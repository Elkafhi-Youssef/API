<?php
$servername = 'localhost';
$username = 'root';
$passwd = '';
$dbname = 'posts';
try {
    $con = new mysqli($servername,$username,$passwd,$dbname);
    echo'donne';
} catch (Exception $e) {
    die("Opps something went wrong...");
}
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if(isset($_POST['title'])&& isset($_POST['title']) ){
    
//  print_r($_POST);

 $data = $con->prepare("INSERT INTO  `post` (`content`,`title`) values(?,?)");
 
 $data->bind_param('ss',$_POST['content'],$_POST['title']);
 $data->execute();
//  var_dump(json_encode(array("message"=>"success")));
 print_r(json_encode(array("message"=>"success")));
}

?>