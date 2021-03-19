var ball;
var database;
function setup(){
    database = firebase.database();
    console.log( database);
    createCanvas(500,500);
    ball = createSprite(380,250,10,10);
    ball.shapeColor = "red";

    var ballPosition = database.ref('ball/position');
    ballPosition.on("value", readPosition, showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
       //ball.x = ball.x -5;

    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}


function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function writePosition(a,b){
    database.ref('ball/position').set({
        'x' : position.x + a,
        'y' : position.y + b
    })
}




function showError(){
    console.log("database is not connected properly check code again pls");
}