
let form = document.querySelector('.form');

function validateName() {
	let name = document.getElementById('name');
	const error = document.querySelector('.name-error')
	console.log('===>name', name.value);
	if (name.value.length < 3){
		name.classList.add('red')
		name.classList.remove('green')
		error.innerHTML = 'Поле не должно быть пустым и не менее 3 символов';
		return false
	} else {
		name.classList.add('green')
		name.classList.remove('red')
		error.innerHTML = '';
		return true
	}
}

function validateSurname() {
	let surname = document.getElementById('surname');
	const error = document.querySelector('.surname-error')
	console.log('===>surname', surname.value);
	if (surname.value.length < 3){
		surname.classList.add('red')
		surname.classList.remove('green')
		error.innerHTML = 'Поле не должно быть пустым и не менее 3 символов';
		return false
	} else {
		surname.classList.add('green')
		surname.classList.remove('red')
		error.innerHTML = '';
		return true
	}
}

function validateMiddlename() {
	let middlename = document.getElementById('middlename');
	const error = document.querySelector('.middlename-error')
	console.log('===>middlename', middlename.value);
	if (middlename.value.length < 3){
		middlename.classList.add('red')
		middlename.classList.remove('green')
		error.innerHTML = 'Поле не должно быть пустым и не менее 3 символов';
		return false
	} else {
		middlename.classList.add('green')
		middlename.classList.remove('red')
		error.innerHTML = '';
		return true
	}
}

function validatePassword() {
	let regex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
	let password = document.getElementById('password');
	const error = document.querySelector('.password-error');
	if (regex.test(password.value) && password.value != ""){
		console.log('===>validate password', password.value);
		password.classList.add('green')
		password.classList.remove('red')
		error.innerHTML = '';
		return true
	} else {
		password.classList.add('red')
		password.classList.remove('green')
		error.innerHTML = 'Введите корректный пароль';
		return false
	}
}

function validateCheckPassword() {
	let password = document.getElementById('password');
	let checkPassword = document.getElementById('checkpassword');
	const error = document.querySelector('.checkpassword-error');
	if ((password.value) === (checkPassword.value) && validatePassword()){
		console.log('===>validate checkpassword', checkPassword.value);
		checkPassword.classList.add('green')
		checkPassword.classList.remove('red')
		error.innerHTML = '';
		return true
	} else {
		checkPassword.classList.add('red')
		checkPassword.classList.remove('green')
		error.innerHTML = 'Пароль должен совпадать';
		return false
	}
}

function validateEmail () {
	let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let email = document.getElementById('email');
	const error = document.querySelector('.email-error')
	if (regex.test(email.value) && email.value != "") {
		console.log('===>validate email', email.value);
		email.classList.add('green')
		email.classList.remove('red')
		error.innerHTML = '';
		return true
	} else {
		email.classList.add('red')
		email.classList.remove('green')
		error.innerHTML = 'Введите корректный email';
		return false
	}
}

function validateCheckEmail() {
	let email = document.getElementById('email');
	let checkEmail = document.getElementById('checkemail');
	const error = document.querySelector('.checkemail-error')
	if ((email.value) === (checkEmail.value) && validateEmail()){
		console.log('===>validate checkpassword', checkEmail.value);
		checkEmail.classList.add('green')
		checkEmail.classList.remove('red')
		error.innerHTML = '';
		return true
	}else {
		checkEmail.classList.add('red')
		checkEmail.classList.remove('green')
		error.innerHTML = 'Email должен совпадать';
		return false
	}
}

// function formValidate() {
// 	// e.preventDefault();
// 	validateName()
// 	validateSurname()
// 	validateMiddlename()
// 	validatePassword()
// 	validateEmail()
// }

form.addEventListener('submit', function (e){
	e.preventDefault();
	validateName()
	validateSurname()
	validateMiddlename()
	validateEmail()
	validateCheckEmail()
	validatePassword()
	validateCheckPassword()


	console.log('--------------------------------')
	if (validateName() && validateSurname() && validateMiddlename() && validatePassword() && validateCheckPassword() && validateEmail() && validateCheckEmail()){
		alert('Форма успешно отправлена!')
	}
})

