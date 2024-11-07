<?php

$host = '';       // Database host
$dbname = '';    // Name of the database
$dbUser = '';   // Database username
$dbPass = '';   // Database password


$conn = new mysqli($host, $dbUser, $dbPass, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); 
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    
    if (!$username || !$password) {
        echo "Both fields are required."; 
    } else {
        
        $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
        $stmt->bind_param("s", $username); 
        $stmt->execute();                   
        $stmt->store_result();              

        
        if ($stmt->num_rows > 0) {
            $stmt->bind_result($hashedPassword); 
            $stmt->fetch();                    

            if (password_verify($password, $hashedPassword)) {
                echo "Login successful!"; 
            } else {
                echo "Invalid password."; 
            }
        } else {
            echo "User not found."; 
        }

        
        $stmt->close();
    }
}


$conn->close();
?>
