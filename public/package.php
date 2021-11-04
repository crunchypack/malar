<?php 
if(isset($_POST['submit'])){
    $to = "patrik@malaresset.se"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    
    $package = $_POST['package'];
    $subject = "Kontakt formulär Paket:" . $package ;
    $subject2 = "Målaresset kontakt Paket";
    $message =  "Vald paket:  " . $package . "\n\n" . " meddelande:"  . $_POST['message'];
    $message2 = "Vi har fått följande meddelande och hör av oss så fort vi kan. ". "\n\n". "Vald paket:  " . $package . "\n\n" . " meddelande:"  . $_POST['message'];

    $headers = "From:" . $from ."\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $headers2 = "From:" . $to."\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    //echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use 
    header('Location: https://www.malaresset.se/'); //to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    exit;
    }
?>
