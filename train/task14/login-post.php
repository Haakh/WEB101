<?php
  session_start();
  if(!isset($_SESSION['email']))
    $_SESSION['email'] = [];
  //All Variables
  $servername = "localhost";
  $username = "root";
  $password = "goldtree9";
  $db = "user";
  $email = $_POST['email'];
  $pass = $_POST['pwd'];

  //Connect to the database USER
  $conn = mysqli_connect($servername, $username, $password, $db);
  //Check for connection faliure
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }

  //QUERY
  $sql = "SELECT * FROM users WHERE email ='".$email."' AND password = '".$pass."'";
  $result = mysqli_query($conn, $sql);
  if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $a =  $row["name"];
        $b = $row["email"];
    }
    $_SESSION['email'] = $email;
    $_SESSION['id'] = session_id();
    header("Location:dash.php");
    }
 else {
    header("Location:login.php");
}

mysqli_close($conn);
 ?>
