let line1="qwertyuiop[]";
let line2="asdfghjkl;'";
let line3="zxcvbnm,./";

const line1Length=line1.length;
const line2Length=line2.length;
const line3Length=line3.length;

let firstCharTop=line1.charAt(0);
let lastCharTop=line1.charAt((line1.length)-1);
let firstCharMiddle=line2.charAt(0);
let lastCharMiddle=line2.charAt((line2.length)-1);
let firstCharBottom=line3.charAt(0);
let lastCharBottom=line3.charAt((line3.length)-1);

let square1=line1.indexOf('[');
let square2=line1.indexOf(']');

console.log(`line 1: ${line1}
	line2: ${line2}
	line3: ${line3}
	line1 length: ${line1Length}
	line2 length: ${line2Length}
	line3 length: ${line3Length}
	first char line1: ${firstCharTop}
	last char line1: ${lastCharTop}
	first char line2: ${firstCharMiddle}
	last char line2: ${lastCharMiddle}
	first char line3: ${firstCharBottom}
	last char line3: ${lastCharBottom}
	position [: ${square1}
	position ]: ${square2}`);

