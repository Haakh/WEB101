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

?>


<?php
header('Location: todo.php');    
?>
</body>
</html>
