var LINK = 'https://www.verifyzone.net/cl.php?id=0de0dae5532557e6059afbd829c9f083';
$('.linkfinal').attr('href',LINK);
$('.continuar').click(function(){
	if($.trim($('input[name=username]').val())==''){
		$('input[name=username]').addClass('shake').focus(),setTimeout(function(){$('input[name=username]').removeClass('shake')},800);
	}else{
		mostrar($('.modal .paso-03'));
		ocultar($('.modal .paso-04'));
		setInterval(change,3000);
		var text=[
			'Contacting '+cons+' services...',
			'Applying services...',
			'Checking username <strong>'+$('input[name=username]').val()+'</strong> at Epic services...',
			'Signing into system services...',
			'Authenticating system login...',
			'<strong style="color:#00ff72">Username connected!</strong>',
			'<span style="color:#ff0">Adding #<strong>'+activo+'</strong> pack...</span>',
			'<span style="color:#00ff72">Pack #<strong>'+activo+'</strong> successfully added!</span>',
			'<span style="color:#ff0">Adding <strong>'+vbucks+' V-Bucks</strong>...</span>',
			'<span style="color:#00ff72"><strong>'+vbucks+' V-Bucks</strong> successfully added!</span>',
			'Validating pack #<strong>'+activo+'</strong> and <strong>'+vbucks+' V-Bucks</strong>',
		];
		var counter=0;
		var elem=$('.txtmodal');
		function change(){elem.fadeOut(function(){elem.html(text[counter]),counter++,counter===text.length+1?($('.pasoproc h1').text('Validation Failed'),$('.txtmodal').addClass('ocultar'),$('.txtvalidation').removeClass('ocultar')):elem.fadeIn()})}
	}
});