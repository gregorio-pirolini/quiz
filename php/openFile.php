<?php
include 'connect.php';
session_start(); 
$location = $_GET['location'];
$userId =$_SESSION["id"];
$log=[]; //where is save uploads
$errors=[];//where is save errors


//functions

function uploadMe($userId,$question1,$answer1,$typeOfQuestion,$status,$subjectId,$conn,$i){
	global $log;
    global $errors;
	$errors=[];

	 
	$question	=	trim($question1);
	$answer	=	trim($answer1);
	
 
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
	echo $err;
	 array_push( $log,$err) ;
 }
 $sql2 =  "INSERT INTO answers (questionId,answers,status,userId ) select id,'$answer', 1, 3  from questions ORDER BY id DESC LIMIT 1 " ;
 $stmt = $conn->prepare($sql2);
//  $stmt->bindParam(':answer', $answer);
 
 //$stmt->bindParam(':userId', intval($userId));
 if($stmt->execute()){
    $tmpLog=[$i." - New record created successfully"];
    array_push( $log,$tmpLog);

} else {
	// it didn't
	$err = ["Error: ".$i."-> " . $sql2 . "<br>" . $conn->error];
	echo $sql2;
	 array_push( $log,$err) ;
 }
	 $i++;
	}


	// print_r($log) ;
	


	
		
		//unused in this yet
		function checkLaenge($val,$name,$laenge){
		
			global $errors;
		
		// if(strlen($val) > $laenge){
		if(strlen($val) >  $laenge){
		  array_push( $errors, $val.' '.$name.' is: '.strlen($val). ' Should be: '.$laenge .'! ');
		}
		
		}
		
		
		
		

// First, import the needed library and load the Reader of XLSX.


 

require '../vendor/autoload.php';
use PhpOffice\PhpSpreadsheet\Spreadsheet;
 
$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
  
 

 //Read the excel file using the load() function. Here test.xlsx is the file name.



 $spreadsheet = $reader->load($location);


// Get the first sheet in the Excel file and convert it to an array using the toArray() function. And Get the Number of rows in the sheet using the count() function.


 $d=$spreadsheet->getSheet(0)->toArray();
//  echo nl2br (count($d)."\n\n\n");


// If you want to iterate all the rows in the excel file, then first convert it to an array and iterate using for or foreach.


 $sheetData = $spreadsheet->getActiveSheet()->toArray();


// Remove titles from array.;

 unset($sheetData[0]);


 $i=1;
 foreach ($sheetData as $t) {
	 
	 $question=$t[0];
	 $answer=$t[1];
	 $typeOfQuestion=$t[2];
	 $status=1;
	 $subjectId=23;
 // process element here;
 // access column by index
 	// echo $i."---".$t[0].",".$t[1].",".$t[2].",".$t[3]." <br>";
 	// $i++;
	 uploadMe($userId,$question,$answer,$typeOfQuestion,$status,$subjectId,$conn,$i);
	 $i++;
	 
 }


 $conn = null;
 echo json_encode($log);
// echo '$location: ' .$location;

 