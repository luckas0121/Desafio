function validacao(){
		
	if(document.form.cod_mercadoria.value==""){
		alert("Por Favor,\nPreencha o Campo do Código da Mercadoria!");
		document.form.cod_mercadoria.focus();
		return false;
	}
	
	if(document.form.tipo_mercadoria.value==""){
		alert("Por Favor,\nPreencha o Campo do Tipo da Mercadoria!");
		document.form.tipo_mercadoria.focus();
		return false;
	}
	
	if(document.form.name_mercadoria.value==""){
		alert("Por Favor,\nPreencha o Campo do Nome da Mercadoria!");
		document.form.name_mercadoria.focus();
		return false;
	}
	
	if(document.form.qtd.value==""){
		alert("Por Favor,\nPreencha o Campo Quantidade!");
		document.form.qtd.focus();
		return false;
	}
	
	if(document.form.preco.value==""){
		alert("Por Favor,\nPreencha o Campo Preço!");
		document.form.preco.focus();
		return false;	
	}
	
	if(document.form.tipo.value==""){
		alert("Por Favor,\nSelecione o tipo de negocio!");
		document.form.tipo.focus();
		return false;
	}
	
}