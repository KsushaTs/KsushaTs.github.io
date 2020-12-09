<?php
if (isset($_POST)) {
  $to = 'info@millmax.eu';
  $subject = 'From millmax.eu';
  $subject = '=?UTF-8?B?' . base64_encode($subject) . '?=' . PHP_EOL;
  $message = '<table cellpadding=\'0\' cellspacing=\'0\' border=\'0\'>';
  foreach($_POST as $key => $value) {
    $message .= '<tr><td align=\'right\'>'.$key.':</td><td>&nbsp;<b>'.Trim(stripslashes($value)).'</b></td></tr>';
  }
  $message .= '</table>';
  $headers = 'From: robot@millmax.eu' . PHP_EOL . 'Reply-To: robot@millmax.eu' . PHP_EOL . 'Content-Type: text/html; charset=UTF-8' . PHP_EOL . 'MIME-Version: 1.0' . PHP_EOL . 'Content-Transfer-Encoding: 8bit ' . PHP_EOL;

  $mail = mail($to, $subject, $message, $headers);

  if($mail) {
    header('Location: /thanks.html');
   	die();
  } else {
    print_r(400);
  }
}
?>