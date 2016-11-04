
<?php
  session_start();
  if(!isset($_SESSION['todoCollection']))
    $_SESSION['todoCollection'] = [];
 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>

    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<style>
  #signup {
    text-align: center;
  }
</style>
  </head>
<body>
  <div class ="container">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img alt="Brand" src="http://cdn.as7.org/59_20secretipadtodolistpapericon.png" height="30" width="40">
        </a>
      </div>
    </div>
  </nav>

  <div id ="signup">
    <h1>Welcome</h1>
  </div>
  <div>

  </div>
  <div>
    <a href="login.php">Logout</a>
  </div>

</div>








  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  </body>
  </html>
