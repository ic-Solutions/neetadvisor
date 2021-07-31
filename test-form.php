<?php
   $to = "sharath.dt@gmail.com";
   $subject = "Test mail";
   $message = "Hello! This is a simple test email message.";
   $from = "info@neetadvisor.com";
   $headers = "From:" . $from;
   mail($to,$subject,$message,$headers);
   echo "Mail Sent.";
?>
