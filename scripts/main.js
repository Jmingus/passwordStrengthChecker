'use strict';
let $ = require ('jquery');

function passwordCheck(password){
	let veryWeakReg = /\d+/;
	let weakReg = /[a-z]+/i;
	let strongReg = /(?=.*\d)(?=.*[a-z]).*/i;
	let veryStrongReg = /(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*]).*/i;

	if(password.length > 8 && veryStrongReg.test(password)){
		return `<div style="border: 5px solid green">The Password ${password} is a very strong password!</div>`
	}else if(password.length > 8 && strongReg.test(password)){
		return `<div style="border: 5px solid blue">The Password ${password} is a strong password!</div>`
	}else if(password.length < 8 && weakReg.test(password)){
		return `<div style="border: 5px solid orange">The Password ${password} is a weak password!</div>`
	}else if(password.length < 8 && veryWeakReg.test(password)){
		return `<div style="border: 5px solid red">The Password ${password} is a very weak password!</div>`
	}else{
		return `<div style="border: 5px solid red">The Password ${password} is very weak password!</div>`
	}
}

$(document).ready(function(){
	$('#password').keyup(function(){
		$('div').html(passwordCheck($('#password').val()));
	})
});
