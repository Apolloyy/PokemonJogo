var fotos = ['blastoise', 'caterpie', 'charmander','tentacruel','gengar','oshawott'];
var dicas = ['Água','Inseto','Fogo','Água','Fantasma','Água'];
var p = 0;
var t = 0;
var filterval = "brightness(0)";
$(document).ready(function(){
	$('#central').css('opacity', '1');
	Vidas();
	Proxima(p);
	

});

$(document).on('click', '#responder', function(){
		var filterval = "brightness(100%)"
		var t = $('#valor').val();
		if(t == fotos[p]){
			alert("Acertou!");
			p++;
			setTimeout(function(){
				$('#central').css('filter', filterval);	
			}, 100);
			Proxima();
		}
		else{
			Tentativa();
			alert("Tente Novamente");
		}
		Vidas();
		$('#valor').val('');
});
function Vidas(){
	var v = '';
	for(var i = 0; i < (4-t); i++){
		v += '<img src="cora.png" width="50px">';
		
	}
	
	$('#tentativas').html(v);
	if(v == 0) {
		alert('Game Over, de f5 para recomeçar!!');
		$('.menu').css('display','none');
		$('#central').css('display','none');
		$('#telagameover').css('display','block');
	}

}


function Tentativa(){
	
	t++;
	if (t <= 4){
		$('#central').css('opacity', '1');
	}
	
}

function Proxima(){
	if(p < fotos.length){
			setTimeout(function(){
			var f = 'url("'+fotos[p]+'.png")';
			$('#texto').html('<h3> Tipo: '+ dicas[p]+ '</h3>');
			$('#central').css('background-image',f);
			$('#central').css('filter', filterval);
			t=0;
			Vidas();
		}, 1000);
	}
	else{
		$('.venceu').css('display', 'block');
		$('#central').css('display', 'none');
		$('.menu').css('display','none');

	}
}

function Iniciar(){
	var f = 'url("'+fotos[p]+'.png")';
	$('#central').css('background-image',f);
	$('#central').css('filter', filterval);
}