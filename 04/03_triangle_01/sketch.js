function setup() {
    createCanvas( 600, 400 );
    background( 'rgb(255, 153, 0)' );
}

function draw() {
    triangle( 50, 50, 250, 50, 150, 180 );
    triangle( 350, 50, 550, 50, 450, 180 );
    triangle( 10, 225, 590, 225, 375, 375 );

    line ( 50, 50, 250, 55);
    stroke( 19 );
    line( 90, 45, 60, 80 );
    stroke( 800);

    quad(38, 31, 86, 20, 69, 63, 30, 76);

}
