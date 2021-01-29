<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Random Messager</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script><link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Pacifico&amp;display=swap'><link rel="stylesheet" href="./style.css">

</head>
<?php require('inc/db.php');?>
<?php 
function clean_Input($invalue) {
  $outvalue = trim($invalue);
  $outvalue = stripslashes($outvalue);
  $outvalue = strip_tags($invalue);
  $outvalue = htmlspecialchars($outvalue);
  return $outvalue;
}
?>
<body>
<!-- partial:index.partial.html -->
<!-- 
  Letter design By Sandhya
  https://dribbble.com/shots/13118573-Minimal-Envelope-Animation 
-->

<div class="container">
<form class="form">
  <h2>Open a message :</h2>
  
  <div class="envelope-wrapper main-div">
    <div class="opened-envelope"></div>
    <div class="letter">
      <p id="letterTxt" ></p>
      
      <ion-icon class="close-icon" name="close"></ion-icon>
    </div>
    <div class="envelope">

    </div>
</div>
</form>
<form class="form" method="POST" action="">
      <h2>Write a message :</h2>
      <p type="Message:"><input placeholder="Say something nice..." name="msg"></input></p>
      <button>Upload message</button>

<?php if (isset($_POST['msg']))
    {
      if(preg_match("/\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$_POST['msg'])){

         echo "<p style='color:darkred; font-family:\'Montserrat\',sans-serif;'>Please remove URLs</p>";

        } else {
          $msg = clean_input($_POST['msg']); 
      
          if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
              $cip = $_SERVER['HTTP_CLIENT_IP'];
          } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
              $cip = $_SERVER['HTTP_X_FORWARDED_FOR'];
          } else {
              $cip = $_SERVER['REMOTE_ADDR'];
          }
        
    
          if(strlen($msg) <= 110)
          {
              try {
                  // Set SQL
                  $sql = 'INSERT INTO messages (msg, ip) VALUES (:msg, :ip)';
                  // Prepare query
                  $query = $dbh->prepare($sql);
                  // Execute query
                  $query->execute(array(':msg' => $msg, ':ip' => $cip));
		  
              } catch (PDOException $e) {
              	
              }
          }
         
        }
   
    }

    ?>

      
</form>
<!--
<form class="form" style="padding: 0em 2em 1em;">
    <p>Messages send: </p>
    <p>Messages received: </p>
</form>
-->
</div>


<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/CSSRulePlugin.min.js'></script>
  <script  src="./script.js"></script>

</body>
</html>
