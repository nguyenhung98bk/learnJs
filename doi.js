var doi = function(game){
	this.game = game;
	this.image = null;
	this.loaded = false;
	this.x = 255;
	this.y = 350;

	this.init = function(){
		this.loadImage();
	}

	this.loadImage = function(){
		this.image = new Image();
		this.image.onload = function(){
			self.loaded = true;
		}
		this.image.src = 'doi.png';
	}
	this.update = function(){
		if(this.game.gameOver == false){
			if(this.y > 180)
				this.y-=0.5;
		}
	}
	this.draw = function(){
		if(self.loaded == false){
			return;
		}
		this.game.context.drawImage(this.image,this.x,this.y);
	}
}