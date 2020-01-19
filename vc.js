var vc = function(game){
	this.game = game;
	this.image = null;
	this.loaded = false;
	this.x = 270;
	this.y = 451-93;

	this.init = function(){
		this.loadImage();
	}

	this.loadImage = function(){
		this.image = new Image();
		this.image.onload = function(){
			self.loaded = true;
		}
		this.image.src = 'b.png';
	}
	this.update = function(){
		if(this.game.gameOver == false){
			if(this.y > 200)
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