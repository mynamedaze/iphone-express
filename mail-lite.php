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
mail("imdaze@yandex.ru", "Заявка на ремонт. Iphone Express.", "ФИО:".$firstname.". Телефон: ".$telephone ,"From: imdaze@yandex.ru \r\n")
?>