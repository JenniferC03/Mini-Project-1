//This is a javascript comment!!!!

//variables:

x=1;
console.log(x);


function setup () {
    createCanvas(windowWidth,windowHeight);
}



function draw () {
    background(167);


    //left side

    fill(255,0,0);
    rect(0,0,windowWidth/12, windowHeight);

    fill(0,255,0);
    rect(windowWidth/12,0,windowWidth/12,windowHeight);

    fill(0,0,0);
    rect(windowWidth/6,0,windowWidth/12,windowHeight);

    fill(0,0,255);
    rect(windowWidth/12, 0, windowWidth,windowHeight/7);

    fill(0,0,255);
    ellipse(windowWidth/2,windowHeight/2,100)

    fill(0,0,255);
    ellipse(windowWidth/1.25,windowHeight/2,100)
    
    fill(0,0,0);
    arc(windowWidth/1.55,windowHeight/1.5,200,200,0,PI);
 
}



   