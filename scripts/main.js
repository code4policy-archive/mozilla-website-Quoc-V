const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('#myImage').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img')
let myButton = document.querySelector('button');

function changeImage() {
	let image = document.getElementById('myImage');
	if (image.src.match("firefox")){
		image.src = "Images/Dogecoin.jpg"
	}
	else {
		image.src = "Images/firefox-icon.png"
	}
}

function hideImage(){
	let image = document.getElementById('myImage');
	if (image.src.match("Images")){
		image.src = ""
	}
	else {
		image.src = "Images/firefox-icon.png"
	}

}

