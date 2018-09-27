function setup() {
        createCanvas( 1366, 627);


}

function draw() {

  background( 255, 204, 80);

        strokeWeight(1);

//ellipse rotated
push();
      point( 100, 150);
      translate( 0, 0 );
      rotate( radians( -8 ) );
      fill(255, 204, 120);
      ellipse( 100, 150, 20, 40);

pop();


// line for top of crust
fill( 255, 204, 120);
      strokeWeight( .5 );
      line( 116, 115, 650, 40);
//line for bottom of crust
      line( 124, 155, 657, 78);


//pizza part (triangle)
push()
      fill( 255, 204, 0);
      triangle( 124, 155, 657, 78, 460, 600);
pop()




// right side of crust
push()

      fill( 255, 204, 80);
      arc( 643, 61, 40, 45, radians( 290), radians( 50 ));

pop()

//pepperonies
push()
      fill( 'red');
      ellipse ( 250, 200, 75, 75);
      ellipse ( 320, 340, 75, 75);
      ellipse ( 580, 170, 75, 75);

pop()

//left eye
push()
        translate( 330, 250)
        rotate( radians( 15 ) );
        fill( 'yellow');
        arc( 0, 0, 70, 70, HALF_PI, 0, CHORD);
        fill(240, 10, 20, 150 );
        quad( 0, 0, 966, 100, 1350, 200, 1340, 250);


pop()

//right eye
push()

        translate( 500, 200)
        rotate( radians( 15 ) );
        fill( 'yellow');
        arc( 0, 0, 70, 70, HALF_PI, 0, CHORD);
        fill( 240, 10, 20, 150 );
        quad( 0, 0, 500, 400, 550, 600, 640, 650);


pop()

//mouth language
push()
        fill('blue');
        quad( 400, 400, 500, 400, 550, 600, 640, 650);

//nose
pop()
        strokeWeight( .2 );
        rect( 425, 300, 200, 20, 15);

push()

//name
  fill( 'rgba(176, 255, 29, .5)' );
  text( "Beamer.", 800, 520 );


}
