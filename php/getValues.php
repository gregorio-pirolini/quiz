<?php
include 'connect.php';

 $_POST = json_decode(file_get_contents('php://input'), true);
 if(isset($_POST)){
    $dataClass= $_POST['dataClass'];
 }

//   $dataClass= "wiso2";
  // Do something with the dataClass variable

// !has player already played?
// !no
// $sql="SELECT q.* FROM questions q 
// JOIN subject s ON q.subjectId = s.id WHERE s.name = '$dataClass'
// AND q.status > 0";
$sql="SELECT q.*, a.answers as answer
FROM questions q 
JOIN subject s ON q.subjectId = s.id
JOIN answers a ON q.id = a.questionid  
WHERE s.name = '$dataClass' AND q.status >0
AND a.status > 0";
$stmt = $conn->query($sql);
$result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
$myValues=[];
foreach ($stmt as $row) {
array_push($myValues,  $row);
}

$myValuesAnswersAsArray=[];


// var_dump($myValues);
//reunite answers($myValues)
//echo '<pre>' . var_export($myValues, true) . '</pre>';

for ($i=0;$i<count($myValues);$i++) {
 
if($i<1){
   // echo "set firts row<br>";
      $add = $myValues[$i]['answer'];
      $myValuesAnswersAsArray[$i]['id']=$myValues[$i]['id'];
      $myValuesAnswersAsArray[$i]['question']=$myValues[$i]['question'];
      $myValuesAnswersAsArray[$i]['typeOfQuestion']=$myValues[$i]['typeOfQuestion'];
      $myValuesAnswersAsArray[$i]['subjectId']=$myValues[$i]['subjectId'];
      $myValuesAnswersAsArray[$i]['answer']=[];
      array_push($myValuesAnswersAsArray[$i]['answer'], $add);
continue;
   }

for ($j=0;$j<count($myValuesAnswersAsArray);$j++) {
      if ($myValuesAnswersAsArray[$j]['id']==$myValues[$i]['id']) { 
// $index=$j
// ! already have this question just add to array answers
// echo "already have this question just add to array answers ".$myValuesAnswersAsArray[$j]['id']."==".$myValues[$i]['id']."<br>";
$add = $myValues[$i]['answer'];
array_push($myValuesAnswersAsArray[$j]['answer'], $add);
      }else{
// ! first time that we  have this question create array
// echo "first time that we  have this question create array..........................<br>";
   $add = $myValues[$i]['answer'];
  $myValuesAnswersAsArray[$i]['id']=$myValues[$i]['id'];
  $myValuesAnswersAsArray[$i]['question']=$myValues[$i]['question'];
  $myValuesAnswersAsArray[$i]['typeOfQuestion']=$myValues[$i]['typeOfQuestion'];
  $myValuesAnswersAsArray[$i]['subjectId']=$myValues[$i]['subjectId'];
  $myValuesAnswersAsArray[$i]['answer']=[];
  array_push($myValuesAnswersAsArray[$i]['answer'], $add);
  break;
   
      }  # code...
   }
}
  


   
  
// echo "<pre>";
// var_dump($myValuesAnswersAsArray);
// echo "<pre>";

echo json_encode($myValuesAnswersAsArray);

$conn = null;
