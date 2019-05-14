function Robot(){
	this.work=()=>console.log('Я Robot – я просто працюю');
}

function RobotCooker(){
	Robot.call(this);
	this.work=()=>console.log('Я RobotCoocker – я просто готую');
}

function CoffeRobot(){
	Robot.call(this);
	this.work=()=>console.log('Я CoffeRobot – я варю каву');
}

function RobotDancer(){
	Robot.call(this);
	this.work=()=>console.log('Я RobotDancer – я просто танцюю');
}

robot = new Robot();
robotCooker = new RobotCooker();
coffeRobot = new CoffeRobot();
robotDancer = new RobotDancer();

robot.work();
robotCooker.work();
coffeRobot.work();
robotDancer.work();
console.log('------------------------------------------------------------');

var robots = [robot, robotCooker, coffeRobot, robotDancer];
for (var i = 0; i < robots.length; i++) 
	robots[i].work();




















