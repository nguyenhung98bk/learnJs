var game = function(){
	this.canvas = null;
	this.context = null;
	this.width = 640;
	this.height = 451;
	this.street = null;

	this.gameOver = false;
	this.gameStart = false;


	var self = this;

	this.init = function(){
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		document.body.appendChild(this.canvas);

		this.street = new street(this);
		this.street.init();

		this.vc = new vc(this);
		this.vc.init();

		this.streetFollower = new streetFollower(this);
		this.streetFollower.init();

		this.men = new men(this);
		this.men.init();

		this.girl = new girl(this);
		this.girl.init();

		this.doi = new doi(this);
		this.doi.init();



		this.listenMouse();
	}

	this.listenMouse = function(){
		this.canvas.addEventListener('click',function(){
			self.loop();
		})
	}

	this.loop = function(){
		var x= setTimeout(self.loop, 15);
		if(x<295){
			self.update2();
			self.draw2();
		}
		else if(x<580){
			self.update3();
			self.draw3();
		}
		else{
			self.update();
			self.draw();
		}	
	}
	this.update3 = function(){
		this.doi.update();
	}

	this.draw3 = function(){
		this.streetFollower.draw();
		this.doi.draw();
	}

	this.update2 = function(){
		this.men.update();
	}

	this.draw2 = function(){
		this.streetFollower.draw();
		this.men.draw();
		this.girl.draw();
	}

	this.update = function(){
		this.vc.update();
	}

	this.draw = function(){
		this.street.draw();
		this.vc.draw();
	}
}

var g = new game();
g.init();
