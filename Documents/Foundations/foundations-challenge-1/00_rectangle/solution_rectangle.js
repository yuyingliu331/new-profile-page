
var Rectangle = function(color, height, width){
 this.color = color,
 this.height = height,
 this.width = width
}

Rectangle.prototype.getArea = function(height, width){
	return this.height * this.width;
}