<?php
  session_start();
  if(!isset($_SESSION['todoCollection']))
    $_SESSION['todoCollection'] = [];
?>

<!DOCTYPE HTML>
<html>
<head>
  <title>TODO App</title>
  <style></style>
</head>
<body>


<?php

  array_push($_SESSION['todoCollection'], ['caption' => $_POST['name'], 'isCompleted' => 0]);
  print_r($_SESSION);
  echo "<br>";
  echo count($_SESSION['todoCollection']);


 print ($_SESSION['todoCollection'][3]['caption']);
?>
  <ul>
    <?php
      for ($i=0; $i < count($_SESSION['todoCollection']); $i++) { ?>
        <li><?php print ($_SESSION['todoCollection'][$i]['caption']);?></li>
      <?php }
    ?>
  </ul>


</body>
</html>
