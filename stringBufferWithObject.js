function makeBuffer() {
	var stringBuffer = '';
	
	return {
		print : () => stringBuffer,
		add: value => stringBuffer += value,
		clear: () => stringBuffer = ''
	};
// buffer = () => stringBuffer;
//
// buffer.add = value => stringBuffer += ' ' + value;
// print : function(){return stringBuffer},
// add: function(){ stringBuffer += ' ' + value}
// buffer.clear = () => stringBuffer = '';
	
	
}

var buffer = makeBuffer();

buffer.add("I ");
buffer.add("HAVE TO ");
buffer.add("BE ");
buffer.add("PATIENT!");
console.log(buffer.print());
buffer.clear();
buffer.add("I");
console.log(buffer.print());

var buffer2 = makeBuffer();
buffer2.add(2);
buffer2.add(3.56);
buffer2.add(-12);
console.log(buffer2.print());
buffer2.clear();
buffer2.add('CLEARED');
console.log(buffer2.print());