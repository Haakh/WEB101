<?php
  header("Access-Control-Allow-Origin:*");
  $data = file_get_contents('/home/sahusoft/Sites/projects/react/application/public/data.json');
  //$data = json_decode($data);

  //$data = json_encode($data);
  file_put_contents('data.json', $data);
  sleep(2);
  echo $data;
?>
