<?php 
$ToEmail = 'info@neetadvisor.com'; 
$EmailSubject = 'New Subscriber from NEET website'; 
$mailheader = "From: ".$_POST["sbemail"]."\r\n"; 
$mailheader .= "Reply-To: ".$_POST["sbemail"]."\r\n"; 
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
$MESSAGE_BODY .= "Email: ".$_POST["sbemail"]."<br>"; 
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 

if (isset($_POST['subscribeForm']))
    {   
?>
<script type="text/javascript">
window.location = "https://neetadvisor.com/";
</script>      
    <?php
    }