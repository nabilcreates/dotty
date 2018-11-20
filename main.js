let ellipses = [];

function setup() {
    createCanvas(windowWidth, windowHeight)

    // PUSHING ALL THE X AND Y TO AN ARRAY
    for (var x = 0; x <= width; x += 50) {
        for (var y = 0; y <= height; y += 50) {
            ellipses.push({
                x: x,
                y: y,
                s: 50
            })
        }
    }
}

function draw() {
    background(0)

    // FOR EVERY OF THEM
    for (var i = 0; i < ellipses.length; i++) {

        // DRAW THEM OUT
        ellipse(ellipses[i].x, ellipses[i].y, ellipses[i].s)
        
        // MAP THE DISTANCE OF MOUSEX AND MOUSE Y TO THE ELLIPSES X AND Y
        let mapped = map(dist(mouseX,mouseY,ellipses[i].x,ellipses[i].y),0,500,0,10)

        // THE SCALE WILL BE THE MAPPED VARIABLE SO THAT THE CLOSER ONES TO THE MOUSE WILL BE SMALLED
        ellipses[i].s = mapped
    }
    
}