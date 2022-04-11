<?php
    if(isset($_POST))
    {
        if(!empty(@$_POST['customer_name']) && !empty(@$_POST['customer_email']) && !empty(@$_POST['what_he_wants']))
        {
            //send email to me
            $visitor_ip = $_SERVER['REMOTE_ADDR'];
            $cust_name = @$_POST['customer_name'];
            $cust_mail = @$_POST['customer_email'];
            $cust_need = @$_POST['what_he_wants'];
            $message = <<<HERE
                <html>
                <body>
                <b>VISITOR:</b> $visitor_ip<br>
                <b>NAME:</b> $cust_name<br>
                <b>REPLY ON:</b> $cust_mail<br>
                <b>REQUEST MESSAGE:</b> $cust_need
                </body>
                </html>
HERE;
            $to = 'receiver_email@place.here';
            $subject = 'Customer Request via Form';
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            $headers .= 'From: User Inquiry <noreply@domain.com>' . "\r\n" .
                        'Reply-To: inquiry@domain.com' . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();
            echo mail($to, $subject, $message, $headers);
        }
        else
        {
            header("Location: /");
            exit();
        }
    }
    else{
        header("Location: /");
        exit();
    }
?>
