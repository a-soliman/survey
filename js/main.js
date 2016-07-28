
	
var surveyArray = []

function submitForm() {
	var form = document.getElementById('form')
	// get the name
	var firstName = document.getElementById('usrFirstName').value
	var lastName = document.getElementById('usrLastName').value
	// the dropdown list
	var age = document.getElementById('sel1').value
	
	// select all elements with name="radio"
	var gender = form.elements.radio
	// select all elements with name="checkbox"
	var sport = form.elements.checkbox

	var sportArray = []

	// loop through radio buttons
	for (var i = 0; i < gender.length; i++) {
		 if (gender[i].checked) {
		 	radioValue = gender[i].value
		 } //if
	} //for


	// loop through all checkboxes
	for (var i = 0; i < sport.length; i++) {
		if (sport[i].checked) {
			sportArray.push(sport[i].value)
		} //if
	}//for
		// create an object from user answers
		var newSurvey = {
			name: firstName + ' ' + lastName,
			gender: radioValue,
			age: age,
			fSport: sportArray
		} //newSurvey

		// add newSurvey to survery array
		surveyArray.push(newSurvey)

		// alert user to success
	alert('thanks for completing your survey!')

	// check survery array to confrim new object
	console.log(surveyArray)

	// reset form for next user
	form.reset()


} //survey

document.getElementById('submitButton').addEventListener('click', submitForm, false)