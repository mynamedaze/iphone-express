<?php
$firstname = $_POST['uname'];
$telephone = $_POST['uphone'];
$firstname = htmlspecialchars($firstname);
$telephone = htmlspecialchars($telephone);
$firstname = urldecode($firstname);
$telephone = urldecode($telephone);
$firstname = trim($firstname);
$telephone = trim($telephone);
//echo $firstname;
//echo "<br>";
//echo $telephone;
mail("iphone.exp@yandex.ru", "Заявка на ремонт. Iphone Express.", "ФИО:".$firstname.". Телефон: ".$telephone ,"From: iphone.exp@yandex.ru \r\n");

//$post_data = array();

//if (isset($_POST['uname'])) { $post_data['name'] = htmlspecialchars($_POST['uname']); } else { $post_data['name'] = ''; }
//if (isset($_POST['uphone'])) { $post_data['phone'] = htmlspecialchars($_POST['uphone']); } else { $post_data['phone'] = ''; }
//$post_data['site'] = 'iphone-express.ru';

//$curl = curl_init();
//curl_setopt($curl, CURLOPT_URL, 'http://portal.dev-platform.ru/Modules/RequestsForm/Listening/Index/5942200c877a5');
//curl_setopt($curl, CURLOPT_POST, 1);
//curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
//$output = curl_exec($curl);
?>