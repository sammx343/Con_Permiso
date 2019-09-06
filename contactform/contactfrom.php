<?php
$errors = '';
/* your email here */
$myemail = 'alex.pico.amaya@gmail.com';
if(empty($_POST['name']) ||
   empty($_POST['phone']) ||
   empty($_POST['email']) ||
   empty($_POST['address']) ||
   empty($_POST['village']) ||
   empty($_POST['project']) ||
   empty($_POST['like']) ||
   empty($_POST['explain']))
{
	$errors .= "\n Error: todos los campos son obligatorios";
}

$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$address = $_POST['address'];
$village = $_POST['village'];
$project = $_POST['project'];
$like = $_POST['like'];
$explain = $_POST['explain'];

if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address)) {
	$errors .= "\n Error: esta es una dirección de correo electrónico no válida";
}

if( empty($errors) ) {
	$to = $myemail;
	$email_subject = "Envío de formulario de contacto: $name";
	$email_body = "Has recibido un nuevo masaje. ".
	" Aqui esta la información:\n Nombre: $name \n Telefono: $phone \n Email: $email_address  \n Eirrección: $address 
	\n Pueblo: $village \n project: $project \n like: $like \n Otros/Explique: $explain";

	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email_address";

	mail($to,$email_subject,$email_body,$headers);
	// redirect to the 'thank you' page
	header('Location: thank-you.html');
}
?>
<!Doctype html>
<html lang="en">
<head>

	<title>¡Gracias!</title>

	<link rel="icon" href="img/logo1.png">

<!-- define some style elements-->

<style>
h1 {
	font-family : 'Oxygen', Helvetica, sans-serif;
	font-size: 26px;
    letter-spacing: 2px;
    line-height: 42px;
    margin-bottom: 20px;
    font-weight: bold;	
}

label,a,body {
	font-family : 'Oxygen', Helvetica, sans-serif;
	font-size : 14px;
}
.respond {
	padding: 100px 0;
	text-align: center;
}
</style>	

<!-- a helper script for vaidating the form-->
</head>	
<body>

<div class="respond">
	<h1>¡Gracias!</h1>
	<p>Gracias por enviar el formulario. ¡Nos pondremos en contacto con usted pronto!</p>
</div>

</body>
</html>






