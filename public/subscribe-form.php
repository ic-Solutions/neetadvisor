<?php 
$ToEmail = 'prajwal.us@icsoln.com'; 
$EmailSubject = 'New Subscriber'; 
$mailheader = "From: ".$_POST["email"]."\r\n"; 
$mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
$MESSAGE_BODY .= "Email: ".$_POST["sbemail"]."<br>"; 
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 
if (isset($_POST['submitForm']))
    {   
?>
<script type="text/javascript">
window.location = "https://neetadvisor.com/";
</script>      
    <?php
    }