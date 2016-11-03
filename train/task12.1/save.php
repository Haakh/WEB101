<!DOCTYPE HTML>
<html>
<head>
  <title>TODO App</title>
  <style></style>
</head>
<body>


<?php
  $inp = $_POST["name"] . PHP_EOL;

  $myfile = fopen('user-input.txt','a') or die("Unable to open File");
  fwrite($myfile,$inp);

  fclose($myfile);
?>

</body>
</html>
