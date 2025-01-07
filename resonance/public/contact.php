<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
require __DIR__ . '/../vendor/autoload.php';
 
$mail = new PHPMailer(true);
 
try {
    $mail->SMTPDebug = 2;                                       
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gmail.com';                    
    $mail->SMTPAuth   = true;                             
    $mail->Username   = 'harsh.vyas@1702digital.com';                 
    $mail->Password   = 'xwoi tcub gefx xplj';                        
    $mail->SMTPSecure = 'tls';                              
    $mail->Port       = 587;  
 
    $mail->setFrom('harsh.vyas@1702digital.com', 'Name');           
    $mail->addAddress('harsh317vyas.hv@gmail.com');
    // $mail->addAddress('receiver2@gfg.com', 'Name');
      
    $mail->isHTML(true);                                  
    $mail->Subject = 'Subject';
    $mail->Body    = "<h3>You have received a new message:</h3>
                          <p><strong>Email:</strong> {$email}</p>
                          <p><strong>Message:</strong> {$message}</p>";
    $mail->AltBody =  "You have received a new message:\n
    Email: {$email}\n
    Message: {$message}";
    
    $mail->send();
    echo "Mail has been sent successfully!";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
 
?>