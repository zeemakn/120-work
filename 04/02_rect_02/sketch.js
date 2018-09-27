function setup() {
    createCanvas( 800, 500 );
    background( '#e3f9c8' );
}

function draw() {
    // a rectangle with 10px corners
    rect( 20, 20, 300, 200, 10 );

    // a rectangle with 90px corners
    rect( 20, 280, 300, 200, 90 );

    rect( 400, 90, 250, 300, 80, 20, 50, 60 )
}
