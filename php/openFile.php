<?php
include 'connect.php';
include 'functions.php';

session_start();
$location = $_GET['location'];
$userId = $_SESSION["id"];
$log = []; //where is save uploads
$errors = []; //where is save errors


//functions

function uploadMe($userId, $question1, $answer1, $typeOfQuestionId, $status, $subjectId, $conn, $i)
{
	global $log;
	global $errors;
	$errors = [];


	$question = sanitizeAndTrim($question1);
	$answer = sanitizeAndTrim($answer1);
	// echo "<br> $typeOfQuestionId, $status, $subjectId " . PHP_EOL;
	;

	// checkLaenge($T0,'kurz', 25);
	// checkLaenge($T1,'lang',150);
	// checkLaenge($T2,'fach',25);
	// checkLaenge($T3,'meaning',1000);


	//! create a prepared statement 
	$sql = "INSERT INTO questions(question, status, typeOfQuestionId ) VALUES (?,?,?)";
	$stmt = $conn->prepare($sql);
	//print $sql."\n";
	//! bind parameters for markers 
	$stmt->bindParam(1, $question);
	$stmt->bindParam(2, $status);
	$stmt->bindParam(3, $typeOfQuestionId);
	//!execute query
	if ($stmt->execute()) {

		// it worked
		$tmpLog = [$i . ' - ' . $question . ' - ' . $typeOfQuestionId . ' - ' . $status . ' - ' . $subjectId . " New record created successfully"];
		array_push($log, $tmpLog);
	} else {
		// it didn't
		$err = ["Error: " . $i . "-> " . $sql . "<br>" . $conn->error];

		array_push($log, $err);

		print_r($err);
	}

	$questionId = $conn->lastInsertId();

	echo 'subjectId,  questionId' . ": ($i,$subjectId, $questionId)" . PHP_EOL;

	$sql3 = "INSERT INTO questions_subject(subjectId,questionId) VALUES (?,?)";
	$stmt = $conn->prepare($sql3);
	$stmt->bindParam(1, $subjectId);
	$stmt->bindParam(2, $questionId);
	if ($stmt->execute()) {

		// it worked
		$tmpLog = [$i . ' - ' . $subjectId . ' - ' . $questionId . " New record created successfully"];
		array_push($log, $tmpLog);
	} else {
		// it didn't
		$err = ["Error: " . $i . "-> " . $sql3 . "<br>" . $conn->error];

		array_push($log, $err);
	}

	$sql2 = "INSERT INTO answers (questionId,answers,status,userId ) values(?,?,?,? ) ";
	$stmt = $conn->prepare($sql2);
	$stmt->bindParam(1, $questionId);
	$stmt->bindParam(2, $answer);
	$stmt->bindParam(3, $status);
	$stmt->bindParam(4, $userId);
	//  $stmt->bindParam(':answer', $answer);

	//$stmt->bindParam(':userId', intval($userId));
	if ($stmt->execute()) {
		$tmpLog = [$i . " - New record created successfully"];
		array_push($log, $tmpLog);

	} else {
		// it didn't
		$err = ["Error: " . $i . "-> " . $sql2 . "<br>" . $conn->error];
		echo $sql2;
		array_push($log, $err);
	}
	$i++;
}


// print_r($log) ;





//unused in this yet
function checkLaenge($val, $name, $laenge)
{

	global $errors;

	// if(strlen($val) > $laenge){
	if (strlen($val) > $laenge) {
		array_push($errors, $val . ' ' . $name . ' is: ' . strlen($val) . ' Should be: ' . $laenge . '! ');
	}

}





// First, import the needed library and load the Reader of XLSX.




require '../vendor/autoload.php';
use PhpOffice\PhpSpreadsheet\Spreadsheet;

$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();



//Read the excel file using the load() function. Here test.xlsx is the file name.



$spreadsheet = $reader->load($location);


// Get the first sheet in the Excel file and convert it to an array using the toArray() function. And Get the Number of rows in the sheet using the count() function.


$d = $spreadsheet->getSheet(0)->toArray();
//  echo nl2br (count($d)."\n\n\n");


// If you want to iterate all the rows in the excel file, then first convert it to an array and iterate using for or foreach.


$sheetData = $spreadsheet->getActiveSheet()->toArray();


// Remove titles from array.;

unset($sheetData[0]);


$i = 1;
foreach ($sheetData as $t) {

	$question = $t[0];
	$answer = $t[1];
	$typeOfQuestion = $t[2];
	$status = 1;
	$subjectId = $t[4];
	// process element here;
	// access column by index
	// echo $i."---".$t[0].",".$t[1].",".$t[2].",".$t[3]." <br>";
	// $i++;
	$typeOfQuestionId = 0;
	switch ($typeOfQuestion) {
		case 'multiSingle':
			$typeOfQuestionId = 1;
			break;
		case 'explain':
			$typeOfQuestionId = 2;
			break;
		case 'abv':
			$typeOfQuestionId = 3;
			break;
		case 'sort':
			$typeOfQuestionId = 4;
			break;
		case 'whats':
			$typeOfQuestionId = 5;
			break;
		case 'whatr':
			$typeOfQuestionId = 6;
			break;
		case 'multiMulti':
			$typeOfQuestionId = 7;
			break;
		case 'nothing':
			$typeOfQuestionId = 8;
			break;
		case 'multiSingleImage':
			$typeOfQuestionId = 9;
			break;
		case 'nothingImage':
			$typeOfQuestionId = 10;
			break;
		case 'explainImage':
			$typeOfQuestionId = 11;
			break;
		case 'whatsImage':
			$typeOfQuestionId = 12;
			break;
		case 'sortImage':
			$typeOfQuestionId = 13;
			break;

		case 'multiMultiImage':
			$typeOfQuestionId = 15;
			break;

		default:
			echo "ERROR SWITCH : " . $i . " : " . $typeOfQuestion;
			return;
			break;
	}

	uploadMe($userId, $question, $answer, $typeOfQuestionId, $status, $subjectId, $conn, $i);
	$i++;

}


$conn = null;
echo json_encode($log);
// echo '$location: ' .$location;
