<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $recipient = "contact@krutidevtounicodeconverter.in";
    $subject = "Contact Form Submission";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $name <$email>";

    mail($recipient, $subject, $email_content, $headers);
    header("Location: thank-you.html");
} else {
    header("Location: contact.html");
}
?>
