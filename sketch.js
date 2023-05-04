//Johanna Tenström
//Landscape Editor
//2.12.2020

//The idea of this editor is that you can play around and make a customized landscape illustration for yourself.
//I wanted to come up with a simple idea and something that uses only the basic shapes to keep the project simple and not too challenging for me to make. 
//The code consists mostly of different sliders, which scales and moves the shapes. Additionally I made a color slider to get the day-to-night effect and a fun way to set the mood for the whole illustration!

var slider, label;
var slider2, label2;
var slider3, label3;
var slider4, label4;
var slider5, label5;
var slider6, label6;
var slider7, label7;
var color1, label8, label9;
var text1, text2, text3;

function setup() {
    createCanvas(400,600);
    background(200);
    
    noStroke();
    angleMode(DEGREES);

    //sliders for the shapes
    slider = createSlider(5, 500, 100, 1);
    slider.size(200);
    slider.class("slider");
    slider.position(500,180);
    label = createP("");

    slider2 = createSlider(0, 500, 100, 1);
    slider2.size(200);
    slider2.class("slider");
    slider2.position(500,240);
    label2 = createP("");
    
    slider3 = createSlider(0, 600, 300, 1);
    slider3.size(200);
    slider3.class("slider");
    slider3.position(500,330);
    label3 = createP("");
    
    slider4 = createSlider(100, 600, 400, 1);
    slider4.size(200);
    slider4.class("slider");
    slider4.position(500,390);
    label4 = createP("");
    
    slider5 = createSlider(0, 600, 300, 1);
    slider5.size(200);
    slider5.class("slider");
    slider5.position(500,450);
    label5 = createP("");
    
    slider6 = createSlider(100, 600, 600, 1);
    slider6.size(200);
    slider6.class("slider");
    slider6.position(500,510);
    label6 = createP("");
    
    slider7 = createSlider(0, 600, 300, 1);
    slider7.size(200);
    slider7.class("slider");
    slider7.position(500,600);
    label7 = createP("");
    
    //slider for the color
    color1 = createSlider(50, 255, 255, 1);
    color1.size(200);
    color1.class("slider");
    color1.position(500,90);
    label8 = createP("");
    label9 = createP("");
    
    //for the texts 
    text1 = createP("");
    text1.class("text1");
    
    text2 = createP("");
    text2.class("text2");
    
    text3 = createP("");
    text3.class("text3");

}

function draw() {
    
    //more definitions for the sliders
    var val = slider.value();
    label.html("Sun size ");
    label.position(500,140);
    
    var val2 = slider2.value();
    label2.html("Sun position ");
    label2.position(500,200);
    
    var val3 = slider3.value();
    label3.html("Mountain 1 height ");
    label3.position(500,290);
    
    var val4 = slider4.value();
    label4.html("Mountain 1 position ");
    label4.position(500,350);
    
    var val5 = slider5.value();
    label5.html("Mountain 2 height ");
    label5.position(500,410);
    
    var val6 = slider6.value();
    label6.html("Mountain 2 position ");
    label6.position(500,470);
    
    var val7 = slider7.value();
    label7.html("Water position ");
    label7.position(500,560);
    
    var val8 = color1.value();
    label8.html("Night");
    label8.position(500,50);    
    label9.html("Day");
    label9.position(670,50);
    
    
    //All the shapes that make the whole illustration + using value variables to get them to work with the sliders
    background(val8,val8-10,230);
    
    fill(255,val8-30,50); //if-else statement for the sun to become a white moon in the night time
    if(val8 < 55){
        fill(255)
    }
    else fill(255,val8-30,50)
    ellipse(width/2,val2,val);
    
    fill(0,0,val8);
    rect(0,val7,400,600);

    fill(10,val8,180);
    arc(400, val4, 400, val3, 180, 0);
    arc(100, val4, 500, val3, 180, 0);
    
    arc(50, val6, 300, val5, 180, 0);
    arc(250, val6, 500, val5, 180, 0);
    
    //description text
    text1.html("Make your own landscape postcard illustration!");
    text1.position(50,700);
             
    text2.html("With this editor you can play around and make a customized landscape illustration for yourself. ");
    text2.position(50,700);

    text3.html("Made by Johanna Tenström");
    text3.position(50,800);
}

