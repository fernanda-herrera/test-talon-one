function formatPhone() {
  var phone_number = document.getElementById('phone').value;
  if (phone_number.length === 10) {
    phone_number = phone_number.replace(/[^0-9]/g, '');
    phone_number = phone_number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");


    document.getElementById('phone').value = "+1" + phone_number;
  }
  else {
    document.getElementById('phone').value = phone_number;
  }
}

var s = document.getElementById('phone');

s.addEventListener('input', formatPhone);
s.addEventListener('propertychange', formatPhone);




//switch darkmode lightmode;
document.querySelector('[data-switch-dark]').addEventListener('click', function () {
  document.body.classList.toggle('dark');
});



const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);



onclick => changeColorButton();

function changeColorButton() {

  document.getElementById('#"Home, Host, HostConfig"').style.BackgroundColor = "#10D6E6";

}

document.addEventListener('click', event => {
  if (event.target.matches('btn-menu')) {
    event.target.focus()
  }
})
