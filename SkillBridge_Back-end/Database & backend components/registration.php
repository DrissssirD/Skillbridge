<?php

// Database configuration
$host = 'localhost';
$dbname = 'your_database_name';
$dbUser = 'your_database_user';
$dbPass = 'your_database_password';

// Establish database connection
$conn = new mysqli($host, $dbUser, $dbPass, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process registration if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $email = $_POST['email'] ?? '';
    $name = $_POST['name'] ?? '';
    $surname = $_POST['surname'] ?? '';
    $userId = $_POST['id'] ?? '';
    $password = $_POST['password'] ?? '';
    $type = $_POST['type'] ?? ''; // Should be 'company' or 'worker'

    // Input validation
    if (!$email || !$name || !$surname || !$userId || !$password || !$type) {
        echo "All fields are required.";
        exit();
    }

    // Check for valid user type
    if ($type !== 'company' && $type !== 'worker') {
        echo "Invalid user type. Must be 'company' or 'worker'.";
        exit();
    }

    // Check if email already exists
    $stmt = $conn->prepare("SELECT email FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows > 0) {
        echo "Email is already registered.";
        $stmt->close();
        exit();
    }
    $stmt->close();

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert new user data into the database
    $stmt = $conn->prepare("INSERT INTO users (email, name, surname, id, password, type) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $email, $name, $surname, $userId, $hashedPassword, $type);

    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

// Close the database connection
$conn->close();

?>
