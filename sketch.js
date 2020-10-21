const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var sling2,sling3,sling4,sling5,sling6;


function setup(){
    var canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;
    let canvasmouse= Mouse.create(canvas.elt)
    canvasmouse.pixelRatio= pixelDestiny();
    let options={
     mouse:canvasmouse
    };
    mConstraint= MouseConstraint.create(engine,options);
    World.add(world,mConstraint);
    bob1= new Pendulum(600,100,"white")
    bob2=new Pendulum(630,100,"white")
    bob3=new Pendulum(660,100,"white")
    bob4=new Pendulum(690,100,"white")
    bob5=new Pendulum(720,100,"white")
    sling2= new Sling(bob1.body,{x:600,y:50})
    sling3= new Sling(bob2.body,{x:630,y:50})
    sling4= new Sling(bob3.body,{x:660,y:50})
    sling5= new Sling(bob4.body,{x:690,y:50})
    sling6= new Sling(bob4.body,{x:720,y:50})


   

 
 
}

function draw(){
    background("black")
    Engine.update(engine);
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   sling2.display();
   sling3.display();
   sling4.display();
   sling5.display();
   sling6.display();
   
}
function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
    }


