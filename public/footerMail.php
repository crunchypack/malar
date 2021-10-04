<?php 
if(isset($_POST['submit'])){
    $to = "patrik@malaresset.se"; // this is your Email address
    $from = $_POST['footEmail']; // this is the sender's Email address
    $first_name = $_POST['footName'];
    $subject = "Kontakt formulär footer";
    $subject2 = "Målaresset kontakt formulär";
    $message = $first_name . " meddelande:" . "\n\n" . $_POST['footMsg'];
    $message2 = "Vi har fått följande meddelande och hör av oss så fort vi kan. \n\n" . $first_name . "\n\n" . $_POST['footMsg'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    //echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use 
    header('Location: https://www.malaresset.se/'); //to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    exit;
    }
?>
