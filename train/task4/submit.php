<?php
  $number = $_POST['number'];
  for($x = 1;$x<=10; $x++){
    $y = $x * $number;
    echo "$number x $x = $y";
    echo "<br/>";
  }
 ?>
