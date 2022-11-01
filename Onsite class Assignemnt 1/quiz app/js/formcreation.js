var htmlContent = "";
var optionsArray;
htmlContent += '<form enctype="multipart/form-data" class="Quiz" id="quizForm">';
for(let i = 0; i < questions.length; i++){
	htmlContent += `<h3 class="question">${questions[i]}</h3>`;
	var optionsType = options[i].type;
	optionsArray = options[i].answerOptions;
	
		htmlContent += "<ul class='answer_list'>";
		for(let j = 0; j < optionsArray.length; j++){
			htmlContent += '<li>';
				htmlContent += `<input type="${optionsType}"" class="option"  id="option_${i}" name="option_${i}" value="${optionsArray[j]}"/>`;
				htmlContent += `<label for="option">${optionsArray[j]}</label>`;
			htmlContent += '</li>';
		}
		htmlContent += "</ul>";
	
}
htmlContent += '<div> <button id="submit_quiz"> Submit </button> </div>';
htmlContent += "</form>";
if(htmlContent != ""){
	document.getElementById("quizHtml").innerHTML = htmlContent;
}
