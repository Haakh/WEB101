<?php

  //All Variables
  $servername = "localhost";
  $username = "root";
  $password = "goldtree9";
  $db = "user";
  $name = $_POST['name'];
  $email = $_POST['email'];
  $pass = $_POST['pwd'];
  //Connect to the database USER
  $conn = mysqli_connect($servername, $username, $password, $db);
  //Check for connection faliure
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }
  //QUERY
  $sql = "INSERT INTO users(name,email,password) VALUES ('$name','$email','$pass')";

  //Check if Query executed
  if (mysqli_query($conn, $sql)) {

    //Redirect on successful Signup
    header("Location:login.php");
    mysqli_close($conn);

  } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }


 ?>
