var girl = function(game){
	this.game = game;
	this.image = null;
	this.loaded = false;
	this.x = 250;
	this.y = 380;

	this.init = function(){
		this.loadImage();
	}

	this.loadImage = function(){
		this.image = new Image();
		this.image.onload = function(){
			self.loaded = true;
		}
		this.image.src = 'girl.png';
	}
	this.draw = function(){
		if(self.loaded == false){
			return;
		}
		this.game.context.drawImage(this.image,this.x,this.y);
	}
}