ig.module(
	'game.entities.trigger-message'
)
.requires(
	'game.entities.trigger',
	'impact.font'
)
.defines(function(){

EntityTriggerMessage = EntityTrigger.extend({
	
	_wmBoxColor: 'rgba(0, 0, 255, 0.7)',
	
	message: 'It Works!',
	messageTime: 5,
	messageTimer: null,
	font: new ig.Font( 'media/04b03.font.png' ),
	is_triggered: false,
	
	init: function( x, y, settings ) {
		this.messageTimer = new ig.Timer();
		this.parent( x, y, settings );
	},
	
	check: function( other ) {
		if( this.canFire && this.waitTimer.delta() >= 0 ) {
			this.is_triggered = true;
			if( this.wait == -1 ) {
				this.canFire = false;
			}
			else {
				this.waitTimer.set( this.wait );
			}
			
			this.messageTimer.set( this.messageTime );
		}
	},
	
	draw: function() {
		if (this.is_triggered && !this._killed) {
			var x = ig.system.width/2,
				y = ig.system.height/2;
			this.font.draw( this.message, x, y, ig.Font.ALIGN.CENTER );
			
			if (this.messageTimer.delta() > 0) {
				this.kill();
			}
		}
	}
});

});