ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({
    
    size: {x:18, y:22},
    offset: {x: 6, y:24 },
    max_speed: 30,
    collides: ig.Entity.COLLIDES.PASSIVE,
    type: ig.Entity.TYPE.A,
    
    animSheet: new ig.AnimationSheet( 'media/tremel.png', 32, 48 ),
    
    init: function( x, y, settings ) {
        this.parent( x, y, settings );
        
        var anim_spd = 1 * (6 / this.max_speed);
        this.addAnim( 'idle', 1, [0] );
        this.addAnim( 'walk_down', anim_spd, [0,1,2,3]);
        this.addAnim( 'walk_left', anim_spd, [4,5,6,7]);
        this.addAnim( 'walk_right', anim_spd, [8,9,10,11]);
        this.addAnim( 'walk_up', anim_spd, [12,13,14,15]);
    },
    
    update: function() {
        
        if( ig.input.state('up') ) {
            this.vel.y = -this.max_speed;
            this.currentAnim = this.anims.walk_up;
        }
        else if( ig.input.state('down') ) {
            this.vel.y = this.max_speed;
            this.currentAnim = this.anims.walk_down;
        }
        else {
            this.vel.y = 0;
            this.currentAnim = this.anims.idle;
        }
        
        if ( ig.input.state('right') ) {
        	this.vel.x = this.max_speed;
        	this.currentAnim = this.anims.walk_right;
        } else if ( ig.input.state('left') ) {
        	this.vel.x = -this.max_speed;
        	this.currentAnim = this.anims.walk_left;
        }
        else {
            this.vel.x = 0
        }
        
        this.parent();
    }
});

});