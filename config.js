var y_lottery_choices;
var y_lottery_entrant;

/*移動する*/
var y_lottery_move = function( page_num_this, page_num_next ){
	document.getElementById("yurayura_lottery").children[page_num_this].style.display="none";
	document.getElementById("yurayura_lottery").children[page_num_next].style.display="block";
}

/*データ取得*/
var y_getLotteryChoices = function(){
	y_lottery_choices = document.getElementsByTagName("textarea")[0].value;
	console.log(y_lottery_choices);
	y_lottery_choices = y_lottery_choices.split("\n");
	console.log(y_lottery_choices);
}
var y_getLotteryEntrant = function(){
	y_lottery_entrant = document.getElementsByTagName("textarea")[1].value;
	console.log(y_lottery_entrant);
	y_lottery_entrant = y_lottery_entrant.split("\n");
	console.log(y_lottery_entrant);
}

var y_lot_release = false;

/*くじ引きする*/
var y_lottery_kuji = function(){
	var r = Math.floor(Math.random() * y_lottery_choices.length);
	document.getElementById("y_lot_result_text").innerText = y_lottery_choices[r];
	document.getElementById("y_lot_result").style.display = "block";

	if(y_lot_release){
		y_lottery_choices.splice(r,1);
	}
}
var y_lottery_kuji_delete = function(){
	document.getElementById("y_lot_result").style.display = "none";
}

/*あみだをする*/
var_y_lottery_amida = function(amida_style){
	y_getLotteryChoices();
	y_getLotteryEntrant();

	/*初期化*/
	document.getElementById("y_lot_amida_entrant").innerHTML = "";
	document.getElementById("y_lot_amida_choices").innerHTML = "";
	document.getElementById("y_lot_amida_middle").innerHTML = "<div></div>";
	document.getElementById("y_lot_amida_line").innerHTML = "";
	

	var line_num = 0;
	if(y_lottery_choices.length > y_lottery_entrant.length){
		line_num = y_lottery_choices.length;
	}
	else{
		line_num = y_lottery_entrant.length;
	}

	if(amida_style){
		for(var i=0; i < line_num; i++){
			document.getElementById("y_lot_amida_entrant").innerHTML += ("<div>" + y_lottery_entrant[i] + "</div>");
			document.getElementById("y_lot_amida_choices").innerHTML += ("<div>" + y_lottery_choices[i] + "</div>");
			if(i != 0){
				var text = "<div>"
				var r = Math.floor(Math.random() * line_num);
				for(var k=0; k < (r + 3); k++){
					text += "<div></div>";
				}
				text += "</div>";
				document.getElementById("y_lot_amida_middle").innerHTML += text;
			}
		}
		document.getElementById("y_lot_amida_middle").innerHTML += "<div></div>";
		document.getElementById("y_lot_amida_entrant").innerHTML += "<div></div>";
		document.getElementById("y_lot_amida_choices").innerHTML += "<div></div>";
	}
	else{
		for(var i=0; i < line_num; i++){
			var r = Math.floor(Math.random() * y_lottery_choices.length);
			document.getElementById("y_lot_amida_line").innerHTML += ("<div><p>" + y_lottery_entrant[i] + "</p><div></div><p>" + y_lottery_choices[r] + "</p></div>");
			y_lottery_choices.splice(r,1);
		}
	}

}
