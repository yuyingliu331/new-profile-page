var findObjProperties = function(obj){
   var ele = [];
   var str = "";
   for(var key in obj){
   	 ele = ele.concat(key);
   }
   if(ele.length === 1){
   	return ele[0];
   }else{

   for(var i = 0; i< ele.length -1; i++){
   	str += ele[i];
    str += ', '
   }
   str += ele[ele.length -1];
  }
  return str;
}

var Rectangle = function(color, height, width){
 this.color = color,
 this.height = height,
 this.width = width
}
