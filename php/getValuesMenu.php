<?php
include 'connect.php';

 
;
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

for ($i=0;$i<count($myValues);$i++) {
   // echo " i: ".$i. " loop 1<br>";
    $alreadyIn=false;
if($i<1){
   //   echo "set firts row ".$myValues[$i]['id']."<br>";
      $add = $myValues[$i]['answer'];
      $myValuesAnswersAsArray[$i]['id']=$myValues[$i]['id'];
      $myValuesAnswersAsArray[$i]['question']=$myValues[$i]['question'];
      $myValuesAnswersAsArray[$i]['typeOfQuestion']=$myValues[$i]['typeOfQuestion'];
      $myValuesAnswersAsArray[$i]['subjectId']=$myValues[$i]['subjectId'];
      $myValuesAnswersAsArray[$i]['answer']=[];
      array_push($myValuesAnswersAsArray[$i]['answer'], $add);
continue;
   }
  
   // echo "will stop at ". count($myValuesAnswersAsArray);
for ($j=0;
$j<count($myValuesAnswersAsArray);
$j++) {
   // echo "<br>i:    ".$i."..............j:    ".$j."<br>";
   if ($myValuesAnswersAsArray[$j]['id']==$myValues[$i]['id']) { 
      $alreadyIn=true;
      $index=$j;
       
   }else{
      $alreadyIn=false;
      $index=$j+1;
   }
}

 if($alreadyIn==true){
   $add = $myValues[$i]['answer'];
  array_push($myValuesAnswersAsArray[$index]['answer'], $add);
//   echo" found you 見つけました";
 }else{
   $add = $myValues[$i]['answer'];
   $myValuesAnswersAsArray[ $index]['id']=$myValues[$i]['id'];
   $myValuesAnswersAsArray[ $index]['question']=$myValues[$i]['question'];
   $myValuesAnswersAsArray[ $index]['typeOfQuestion']=$myValues[$i]['typeOfQuestion'];
   $myValuesAnswersAsArray[ $index]['subjectId']=$myValues[$i]['subjectId'];
   $myValuesAnswersAsArray[ $index]['answer']=[];
   array_push($myValuesAnswersAsArray[ $index]['answer'], "$add");
}
  }
      
     
// $index=$j
 
 


   
  
// echo "<pre>";
// var_dump($myValuesAnswersAsArray);
// echo "<pre>";

echo json_encode($myValuesAnswersAsArray);

$conn = null;
