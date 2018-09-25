

alert('Welcome to my first project');

const MathTest = 70;
const  EnglishTest= 40;
const InputAge= 17;
const InputName= ('Aram');
const a= (((4*3)+18)/2);
if (a/2 || true) {
alert (a);
}

if (5*(InputName.lenght) < InputAge || InputName==='Rouben') {
	console.log('you are so lucky');
	}
	
  else if ( MathTest >= 50 && EnglishTest >= 50) {
		console.log ('congratulations! You passed to the next grade');
}

  else if (MathTest>=50 && EnglishTest<=50) {
		console.log ('You passed the Math test but failed the English so you dont pass to the next grade');
		}
 
  else if (MathTest<=50 && EnglishTest>=50) {
		console.log ('You passed the English test but failed the Math so you dont pass to the next grade');
		}

  else {
		console.log ('you just failed so bad, try harder next time' );
}


