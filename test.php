<?php

$post_data = array();

if (isset($_POST['name'])) { $post_data['name'] = htmlspecialchars($_POST['name']); } else { $post_data['name'] = ''; }
if (isset($_POST['phone'])) { $post_data['phone'] = htmlspecialchars($_POST['phone']); } else { $post_data['phone'] = ''; }
$post_data['site'] = 'iphone-express.ru';

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'http://portal.dev-platform.ru/Modules/RequestsForm/Listening/Index/5942200c877a5');
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
$output = curl_exec($curl);