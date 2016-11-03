<?php
$servername = "localhost";
$username = "root";
$password = "goldtree9";
$todo = "todo";
$name = $_POST['name'];
// Create connection
$conn = mysqli_connect($servername, $username, $password, $todo);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$sql = "INSERT INTO events(name,isCompleted) VALUES ('".$name."',false)";

if (mysqli_query($conn, $sql)) {
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

$sql = "SELECT id, name, isCompleted FROM events";
$result = $conn->query($sql);

?>
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <title>My Todo</title>
  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

</head>
<body>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img alt="Brand" src="http://cdn.as7.org/59_20secretipadtodolistpapericon.png" height="30" width="40">
        </a>
      </div>
    </div>
  </nav>


  <div class="container">
    <div class="jumbotron text-center">
      <h1>My To Do App</h1>
    </div>


<div class ="list-group">
<?php

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<li >id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["isCompleted"]. "</li><br>";
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
 ?>
 </div>
 </div>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</body>
</html>
