<?php
  header("Access-Control-Allow-Origin:*");


  $data = $_POST['data'];
  $type = $_POST['type'];
  $index = $_POST['ind'];
  $time = $_POST['time'];
  // echo json_encode($data);
  switch ($type) {
    case 'ADD':
      $file = file_get_contents('/home/sahusoft/Sites/projects/react/application/public/data.json');
      $olddata = json_decode($file);
      unset($file);
      //you need to add new data as next index of data.
      $olddata[] = array('caption' => $data, 'complete' => false, 'time' => $time);
      $result=json_encode($olddata);
      file_put_contents('/home/sahusoft/Sites/projects/react/application/public/data.json', $result);
      unset($result);
      break;

    case 'REMOVE':
          sleep(2);
      $file = file_get_contents('/home/sahusoft/Sites/projects/react/application/public/data.json');
      $olddata = json_decode($file,true);
      unset($file);
      //Change Here filter
      // var_dump (array_search($time , $olddata));
      $x = 0;
      for ($i=0; $i < sizeof($olddata); $i++) {
        if($olddata[$i]["time"] == $time){
          $x = $i;
        }
      }
      array_splice($olddata,$x,1);


      $result=json_encode($olddata);
      file_put_contents('/home/sahusoft/Sites/projects/react/application/public/data.json', $result);
      echo $result;
      unset($result);

      break;

    case 'TOGGLE':
      $file = file_get_contents('/home/sahusoft/Sites/projects/react/application/public/data.json');
      $olddata = json_decode($file,true);
      unset($file);

      // echo gettype($olddata[0][""]);
      for ($i=0; $i < sizeof($olddata); $i++) {
        if($olddata[$i]["time"] == $time){
          $olddata[$i]["complete"] = !$olddata[$i]["complete"];
        }
      }
      // $olddata[$index]["complete"] = !$olddata[$index]["complete"];

      $result=json_encode($olddata);
      file_put_contents('/home/sahusoft/Sites/projects/react/application/public/data.json', $result);
      unset($result);

      break;

    default:

      break;
  }

?>
