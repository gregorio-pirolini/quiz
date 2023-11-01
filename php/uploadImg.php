<?php

try {
    // Check if a file was uploaded
    if (isset($_FILES['file'])) {
        $file = $_FILES['file'];

        // Check for file upload errors
        if ($file['error'] === UPLOAD_ERR_OK) {
            $filename = $file['name'];

            // Check if the uploaded file is an image
            $imageInfo = getimagesize($file['tmp_name']);
            if ($imageInfo === false) {
                throw new Exception("Uploaded file is not a valid image.");
            }

            // Generate a unique filename
            $random = uniqid();
            $extension = pathinfo($filename, PATHINFO_EXTENSION);
            $newFilename = $random . "." . $extension;

            $location = "../img/" . $newFilename;
            $src = substr($location, 3);

            // Move the uploaded file to the destination
            if (move_uploaded_file($file['tmp_name'], $location)) {
                $response = [
                    "success" => true,
                    "message" => "Picture was uploaded",
                    "location" => $location,
                    "src" => $src
                ];
            } else {
                throw new Exception("Failed to move the uploaded file");
            }
        } else {
            throw new Exception("File upload error: " . $file['error']);
        }
    } else {
        throw new Exception("No file uploaded");
    }
} catch (Exception $e) {
    // Handle the error without exposing undefined variables
    $errorMessage = "Error: " . $e->getMessage();
    $response = ["success" => false,
    "message" => $errorMessage];
}

header('Content-Type: application/json');
echo json_encode($response);
