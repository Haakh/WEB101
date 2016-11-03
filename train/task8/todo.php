<?php
  session_start();
  if(!isset($_SESSION['todoCollection']))
    $_SESSION['todoCollection'] = [];
?>
<!DOCTYPE HTML>
<html>
<head>
  <title>TODO App</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!--  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
-->
</head>
<body>
  <!--Write html here.-->
  <div class ="container">
  <form action="storeItem.php" method="post">
    Enter Name:<input type="text" name ="name">
  </form>

  <ul>
    <?php
      for ($i=0; $i < count($_SESSION['todoCollection']); $i++) { ?>
        <li><?php print ($_SESSION['todoCollection'][$i]['caption']);?></li>
      <?php }
    ?>
  </ul>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</body>
</html>
