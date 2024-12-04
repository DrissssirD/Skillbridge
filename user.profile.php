<?php
$servername = ""; 
$username = "";        
$password = "";            
$dbname = "";    

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
<?php include('db.php'); ?>



<?php
include('db.php');

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //  form data
    $full_name = mysqli_real_escape_string($conn, $_POST['full_name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $location = mysqli_real_escape_string($conn, $_POST['location']);
    $social_links = mysqli_real_escape_string($conn, $_POST['social_links']);
    $dob = mysqli_real_escape_string($conn, $_POST['dob']);
    $job_title = mysqli_real_escape_string($conn, $_POST['job_title']);
    $job_type = mysqli_real_escape_string($conn, $_POST['job_type']);
    $salary_expectations = mysqli_real_escape_string($conn, $_POST['salary_expectations']);
    $availability = mysqli_real_escape_string($conn, $_POST['availability']);
    $preferred_industries = mysqli_real_escape_string($conn, $_POST['preferred_industries']);
    $skills = mysqli_real_escape_string($conn, $_POST['skills']);
    $work_experience = mysqli_real_escape_string($conn, $_POST['work_experience']);
    $education = mysqli_real_escape_string($conn, $_POST['education']);
    $languages = mysqli_real_escape_string($conn, $_POST['languages']);

    // Check if user already has a profile
    $query = "SELECT * FROM employee_profiles WHERE email = '$email'";
    $result = mysqli_query($conn, $query);
    
    if (mysqli_num_rows($result) > 0) {
        // Update existing profile
        $sql = "UPDATE employee_profiles SET 
                full_name = '$full_name', 
                phone = '$phone', 
                location = '$location', 
                social_links = '$social_links', 
                dob = '$dob', 
                job_title = '$job_title', 
                job_type = '$job_type', 
                salary_expectations = '$salary_expectations', 
                availability = '$availability', 
                preferred_industries = '$preferred_industries', 
                skills = '$skills', 
                work_experience = '$work_experience', 
                education = '$education', 
                languages = '$languages' 
                WHERE email = '$email'";
    } else {
        // Create new profile
        $sql = "INSERT INTO employee_profiles (full_name, email, phone, location, social_links, dob, job_title, job_type, salary_expectations, availability, preferred_industries, skills, work_experience, education, languages)
                VALUES ('$full_name', '$email', '$phone', '$location', '$social_links', '$dob', '$job_title', '$job_type', '$salary_expectations', '$availability', '$preferred_industries', '$skills', '$work_experience', '$education', '$languages')";
    }

    // Execute the query
    if (mysqli_query($conn, $sql)) {
        echo "Profile saved successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    
    mysqli_close($conn);
}
?>
