<?php
include 'connect.php';

  

$log=[]; //where is save uploads
$errors=[];//where is save errors


//functions

function uploadMe($userId1,$question1,$answer1,$typeOfQuestion1,$status,$subjectId,$conn,$i){
	global $log;
    global $errors;
	$errors=[];
echo $userId1;
$userId = 	$conn 	->	quote	(trim($userId1));
$question	=	$conn 	->	quote	(trim($question1));
$answer	=	$conn 	->	quote	(trim($answer1));
$typeOfQuestion	=	$conn 	->	quote	(trim($typeOfQuestion1));

  
	// checkLaenge($T0,'kurz', 25);
	// checkLaenge($T1,'lang',150);
	// checkLaenge($T2,'fach',25);
	// checkLaenge($T3,'meaning',1000);

	// echo '$errors is ' . (gettype ( $errors ));
	// print_r($errors);

// if(count($errors)>0){
// 	$tmpLog=array('number'=> $i,
// 				'ERROR'=> $errors,
// 				'kurz'=>$t0,
// 				'lang'=>$t1,
// 				'fach'=>$t2,
// 				'def'=>$t3
// );


 
// 	array_push( $log, $tmpLog);
// 	$i++;
// 	return;
// }



	//$sql = "INSERT INTO abk (kurz, lang, fach, meaning) VALUES ('$t0','$t1','$t2','$t3')";
	//! create a prepared statement 
	$sql = "INSERT INTO questions(question, typeOfQuestion, status, subjectId) VALUES (?,?,?,?)";
	$stmt = $conn->prepare($sql);
	//print $sql."\n";
	// if ($conn->query($sql) === TRUE) {
	// 	array_push( $log,$i.' - '." New record created successfully");
	// } else {
	// 	$err ="Error: " . $sql . "<br>" . $conn->error;
	// 	array_push( $log,$i.' - '.$err) ;
	// }

	// $i++;
	 //! bind parameters for markers 
	 $stmt->bindParam(1, $question);
     $stmt->bindParam(2, $typeOfQuestion);
     $stmt->bindParam(3, $status);
     $stmt->bindParam(4, $subjectId);
	 //!execute query
	 if($stmt->execute()){
        


	 
  // it worked
  $tmpLog=[$i.' - '.$question.' - '.$typeOfQuestion.' - '.$status.' - '.$subjectId    ." New record created successfully"];
  array_push( $log,$tmpLog);
} else {
	// it didn't
	$err = ["Error: ".$i."-> " . $sql . "<br>" . $conn->error];
	 array_push( $log,$err) ;
 }
 $sql2 =  "INSERT INTO answers (questionId,answers ) select id ,  :answer from questions " ;
 $stmt = $conn->prepare($sql2);
 $stmt->bindParam(':answer', $answer);
 if($stmt->execute()){
    $tmpLog=[$i." - New record created successfully"];
    array_push( $log,$tmpLog);

} else {
	// it didn't
	$err = ["Error: ".$i."-> " . $sql2 . "<br>" . $conn->error];
	 array_push( $log,$err) ;
 }
	 $i++;
	}


	// print_r($log) ;
	


	
    uploadMe("userId","question","answer","typeOfQuestion",1,6,$conn,0);
		
	


 

 
 $conn = null;

 var_dump($log);
// echo '$location: ' .$location;

 