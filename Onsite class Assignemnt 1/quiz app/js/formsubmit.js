document.getElementById("quizForm").onsubmit = function(){
	event.preventDefault();
	let answersData = document.getElementsByClassName('answer_list');
	let cnt = 0;
	var totalNumbers = 0;
	var checkBoxnumbers = 0;
	for (var answer of answersData) {  

		let answerVal = answer.querySelector('.option'); 
		
	   if( answerVal.type == "radio"){
			var markedRadio = document.querySelector(`input[name=${answerVal.name}]:checked`); 
			if(markedRadio){
				totalNumbers =  (markedRadio.value == correctAnswers[cnt]) ? totalNumbers + marks[cnt] : totalNumbers;
			}

	   }else{
			var markedCheckbox = document.querySelectorAll(`input[name="${answerVal.name}"]:checked`); 
			var k = 0; 
			for (var checkbox of markedCheckbox) {  
				checkBoxnumbers = correctAnswers[cnt][k].includes(checkbox.value);
				if(!checkBoxnumbers){ break; }
				k++;
				
			} 
			 
			totalNumbers =  checkBoxnumbers ? totalNumbers + marks[cnt] : totalNumbers;
	   }

	   
	   //console.log(totalNumbers);
	   cnt++;
	} 
	document.getElementById("total_numbers").innerHTML = totalNumbers;
	
};