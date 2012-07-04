ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	'game.entities.player',
	
	'game.levels.start'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.UP_ARROW, 'up');
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
		
		this.loadLevel( LevelStart );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 640, 480, 2 );

});
