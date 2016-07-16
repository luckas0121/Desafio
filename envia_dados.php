<?php
ini_set('default_charset','UTF-8');


	$conn = mysqli_connect("localhost","root","");
	mysqli_select_db($conn,"desafio");
	
	$cod = $_POST['cod_mercadoria'];
	$tipo = $_POST['tipo_mercadoria'];
	$nome = $_POST['name_mercadoria'];
	$qtd = $_POST['qtd'];
	$preco = $_POST['preco'];
	$tipoNegocio = $_POST['tipo'];
	
	$insert = "INSERT INTO desafio VALUES ('$cod','$tipo','$nome',$qtd,$preco,'$tipoNegocio')";
	if($res = mysqli_query($conn,$insert)>0){
		echo "Dados inseridos com sucesso !";
	}else{
		echo "Error";
	}
	
	mysqli_close($conn);

?>


















