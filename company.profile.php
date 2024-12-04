
<?php

$servername = ""; 
$username = "";        
$password = "";           
$dbname = "";    


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<?php include('db.php'); ?>



<?php
include('db.php');

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $company_name = mysqli_real_escape_string($conn, $_POST['company_name']);
    $industry = mysqli_real_escape_string($conn, $_POST['industry']);
    $company_size = mysqli_real_escape_string($conn, $_POST['company_size']);
    $location = mysqli_real_escape_string($conn, $_POST['location']);
    $website = mysqli_real_escape_string($conn, $_POST['website']);
    $social_links = mysqli_real_escape_string($conn, $_POST['social_links']);
    $description = mysqli_real_escape_string($conn, $_POST['description']);
    
    // Handle file upload for logo
    if (isset($_FILES['logo']) && $_FILES['logo']['error'] == 0) {
        $logo_path = 'uploads/' . basename($_FILES['logo']['name']);
        move_uploaded_file($_FILES['logo']['tmp_name'], $logo_path);
    } else {
        $logo_path = '';
    }

    // Insert or update company profile
    $query = "SELECT * FROM company_profiles WHERE company_name = '$company_name'";
    $result = mysqli_query($conn, $query);
    
    if (mysqli_num_rows($result) > 0) {
        $sql = "UPDATE company_profiles SET 
                industry = '$industry', 
                company_size = '$company_size', 
                location = '$location', 
                website = '$website', 
                social_links = '$social_links', 
                description = '$description', 
                logo = '$logo_path' 
                WHERE company_name = '$company_name'";
    } else {
        $sql = "INSERT INTO company_profiles (company_name, logo, industry, company_size, location, website, social_links, description)
                VALUES ('$company_name', '$logo_path', '$industry', '$company_size', '$location', '$website', '$social_links', '$description')";
    }

    if (mysqli_query($conn, $sql)) {
        echo "Profile saved successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
