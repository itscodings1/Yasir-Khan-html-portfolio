<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate form inputs
    if (empty($name) || empty($email) || empty($message)) {
        die("All fields are required.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // Database connection
    $servername = "localhost";
    $username = "root"; // Change if needed
    $password = "";     // Change if needed
    $dbname = "my_portfolio";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert data into the database
    $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        // Successful insertion
        echo "<script>
                alert('Message sent successfully!');
                window.location.href = 'index.html';
              </script>";
    } else {
        // Error handling
        echo "<script>
                alert('Error: Could not send the message. Please try again later.');
                window.location.href = 'index.html';
              </script>";
    }

    // Close the connection
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>
