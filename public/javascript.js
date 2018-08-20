const modal = document.querySelector('.modal');
const trigger = document.querySelector('.trigger');
const closeButton = document.querySelector('#close-btn');
const noscroll = document.body;
const contactForm = document.querySelector('.contact-form');
const emailField = document.querySelector('.contact-info-email');
const sendMessageBtn = document.querySelector('.contact-info-btn');

function toggleModal() { // Popup Contact Form
	modal.classList.toggle('show-modal');
}

function noScroll() {
	// Prevent body scrolling while contact form open
	element.classList.toggle('no-scroll');
}

function windowOnClick(event) { // Close Form
	if (event.target === modal) {
		toggleModal();
	}
}

function validateEmail(email){
	var re = /\S+@\S+/;
	return re.test(email)
}

sendMessageBtn.addEventListener('click', function(event) {
	sendMessageBtn.submit();
});

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);


