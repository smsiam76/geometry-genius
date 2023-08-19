
// function isNanValidation(one,two){
// 	if(isNaN(one) || isNaN(two)){
// 		alert('please provide a valid number');
// 		return ;
// 	}
// }

function getTriangleCalculation(){
	const base = getInputFieldValue('base-field');
	const height = getInputFieldValue('height-field');
	if(isNaN(base) || isNaN(height)){
		alert('wrong input');
		return;
	}
	// isNanValidation(base, height);
	const triangleFormula = .5 * base * height;
	setElementText('triangle-value', triangleFormula);
	addCalculationEntry('Triangle', triangleFormula);
} 

function getRectangleCalculation(){
	const witdh = getInputFieldValue('witdh-field');
	const length = getInputFieldValue('length-field');
	if(isNaN(witdh) || isNaN(length)){
		alert('wrong input');
		return;
	}
	const rectangleFormulla = witdh * length;
	setElementText('rectangle-value', rectangleFormulla);
	addCalculationEntry('Rectangle', rectangleFormulla);
}

function getParallelogramCalculation(){
	const baseP = getInputFieldValue('b-field');
	const heightP = getInputFieldValue('h-field');
	if(isNaN(baseP) || isNaN(heightP)){
		alert('wrong input');
		return;
	}
	const paralleogramFormulla = baseP * heightP;
	setElementText('parallelogram-value', paralleogramFormulla);
	addCalculationEntry('Parallelogram', paralleogramFormulla);
}

function getRhombusCalculation(){
	const d1 = getInputFieldValue('rd1-field');
	const d2 = getInputFieldValue('rd2-field');
	if(isNaN(d1) || isNaN(d2)){
		alert('wrong input');
		return;
	}
	const rhombusFormula = .5 * d1 * d2;
	setElementText('rhombus-value', rhombusFormula);
	addCalculationEntry('Rhombus', rhombusFormula)
}

function getPentagonCalculation(){
	const pp = getInputFieldValue('pp-field');
	const pb = getInputFieldValue('pb-field');
	if(isNaN(pp) || isNaN(pb)){
		alert('wrong input');
		return;
	}
	const pentagonFormulla = .5 * pp * pb;
	setElementText('pentagon-value', pentagonFormulla);
	addCalculationEntry('Pentagon', pentagonFormulla);
}

function getEllipseCalculation(){
	const ea = getInputFieldValue('ea-field');
	const eb = getInputFieldValue('eb-field');
	if(isNaN(ea) || isNaN(eb)){
		alert('wrong input');
		return;
	}
	const ellipseFormulla = 3.14 * ea * eb;
	const ellipseDecimal = ellipseFormulla.toFixed(2)

	setElementText('ellipse-value', ellipseDecimal);
	addCalculationEntry('Ellipse', ellipseDecimal);
}


// document.getElementById('area-calc').addEventListener('click', function(event){
// 	// const newItem = document.querySelector('.area-calc');
// 	console.log(event.target.parentNode.childNodes[0].split(' '));
// })