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
<!--Write html here.-->
<form action="storeItem.php" method="post">
  Enter Name:<input type="text" name ="name">
</form>

</body>
</html>
