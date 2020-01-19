var street = function(game){
	this.game = game;
	this.image = null;
	this.loaded = false;
	this.x = 0;

	this.init = function(){
		this.loadImage();
	}

	this.loadImage = function(){
		this.image = new Image();
		this.image.onload = function(){
			self.loaded = true;
		}
		this.image.src = 'street.jpg';
	}
	this.draw = function(){
		if(self.loaded == false){
			return;
		}
		this.game.context.drawImage(this.image,0,0);
	}
}