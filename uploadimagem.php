<?php

//Conversão e Upload da imagem 
	$img = $_REQUEST['imgBase64'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$file = '_cache/' . $_REQUEST['nomeImagem'] . '.png';//uniqid() . '.png';
	$success = file_put_contents($file, $data);
	print $success ? $file : 'Arquivo salvo com sucesso.';

?>