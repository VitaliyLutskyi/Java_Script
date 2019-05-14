function Robot(){
	this.work = function(){
		switch(this.constructor.name){
			case 'Robot':
				console.log('Я Robot – я просто працюю');
				break;
			case 'RobotCooker':
				console.log('Я RobotCoocker – я просто готую');
				break;
			case 'CoffeRobot':
				console.log('Я CoffeRobot – я варю каву');
				break;
			case 'RobotDancer':
				console.log('Я RobotDancer – я просто танцюю');
				break;
			default:
				console.log('Я невідомий робот')
		}
	}
}

function RobotCooker(){ Robot.call(this);}

function CoffeRobot(){	Robot.call(this);}

function RobotDancer(){	Robot.call(this);}

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




















