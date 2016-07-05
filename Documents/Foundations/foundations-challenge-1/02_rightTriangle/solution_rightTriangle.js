var rightTriangle = function(number){
	if(number === 0){
		return "";
	}else{
		var result = "";
		for(var i = number; i > 0; i--){
			for(var j = 0; j < number; j++){
				if(j < i){
					result += "*";
				}
			}
			if(i > 1){
			result += "\n";
		}
		}
		return result;
	}
}