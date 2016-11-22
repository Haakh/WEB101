<?php
  header("Access-Control-Allow-Origin:*");

  $cap=$_POST["para"];
  var_dump $cap;
  // $data = json_decode($cap);
  // $data = json_encode($data);
  file_put_contents('data.json', $cap);

?>
