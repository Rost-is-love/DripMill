/* function clickRadio(el) {
  var siblings = document.querySelectorAll("input[type='radio'][name='" + el.name + "']");
  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i] != el)
      siblings[i].oldChecked = false;
  }
  if (el.oldChecked)
    el.checked = false;
  el.oldChecked = el.checked;
} */

// Validation

const thanks = document.querySelector('.thanks-popup');
const body = document.body;

let disableScroll = function () {
  body.classList.add('disable-scroll');  
}

const validateForms = (selector, rules, successModal, yaGoal) => {
  new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
            thanks.classList.add('thanks-popup-open');
            disableScroll();
					}
				}
			};  

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();
    }
  });
};

validateForms('.form', { email: {required: true, email: true}, /* tel: {required: true}  */}, '.thanks-popup-open', 'send goal');

// textarea

const tx = document.getElementsByTagName('textarea');
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
} 