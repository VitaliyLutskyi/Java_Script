function Robot(){}
Robot.prototype.work = () => console.log('Я Robot – я просто працюю');


function RobotCooker(){}
RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;
RobotCooker.prototype.work = () => console.log('Я RobotCoocker – я просто готую');


function CoffeRobot(){}
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;
CoffeRobot.prototype.work=()=>console.log('Я CoffeRobot – я варю каву');


function RobotDancer(){}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.work=()=>console.log('Я RobotDancer – я просто танцюю');


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




















