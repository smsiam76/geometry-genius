function getInputFieldValue(inputId){
	const inputField = document.getElementById(inputId);
	const fieldValue = parseFloat(inputField.value);
	inputField.value = '';
	return fieldValue;
}
function setElementText(elementId, newValue){
	const element = document.getElementById(elementId);
	element.innerText = newValue;
}
function addCalculationEntry(areaType, area){
	const calcEntry = document.getElementById('area-calc');
	const count = calcEntry.childElementCount;
	const pAdd = document.createElement('p');
	pAdd.classList.add('my-2','font-medium', 'bg-gray-200', 'px-3', 'w-fit', 'mx-auto', 'lg:mx-0')
	pAdd.innerHTML = `${count + 1}. ${areaType} ${'&nbsp;'} ${area}cm<sup>2</sup> ${'&nbsp;'} <button id="random-$" class="btn bg-amber-300 hover:bg-amber-400 px-2 py-1 font-medium rounded-lg">Convert</button>`;
	calcEntry.appendChild(pAdd);
}