let mj = [];
let mj_num = 300;
let mj_img;

function preload(){
    mj_img = loadImage('images/mj.png');
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    for(let i=0; i<mj_num; i++){
        //random(low, high)
        mj[i]= new Jordan(random(0, width), random(0, height), 40, 40, random(0.01, 10), color(random(0, 255), random(0, 255), random(0, 255)));
        }
}

function draw(){
    background(0);
    for(let j=0; j<mj_num; j++){
        mj[j].display();
        mj[j].move();
    }
}

class Jordan{
    constructor(tempX, tempY, tempW, tempH, tempSpeed, tempShade){
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.speed = tempSpeed;
        this.shade = tempShade;
    }

    move(){
        this.y = this.y + this.speed;
        if(this.y >  height){
            this.y = 0;
        }
    }

    display(){
        fill(this.shade);
        image(mj_img, this.x, this.y, this.w, this.h);
    }
}