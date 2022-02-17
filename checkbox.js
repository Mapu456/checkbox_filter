// not exactly vanilla as there is one lodash function
function myFunction() {
  alert("Hello! I am an alert box!");
}
var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
console.log(allCheckboxes);
var allPlayers = Array.from(document.querySelectorAll('.player'));
console.log("this is the array", allPlayers);
var checked = {};

//getChecked() is used to check whether a user has checked a checkbox or
//radio button by using the element ID
getChecked('startingReserves');
getChecked('injured');
getChecked('position');
getChecked('nbaTeam');
getChecked('conference');

//El array no se usa en absoluto pero da acceso al uso del prototipo foreach
// y call es un prototipo que llama a otras funciones
Array.prototype.forEach.call(allCheckboxes, function (el) {
  console.log("this is a proof", el);
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allPlayers.map(function (el) {
    var startingReserves = checked.startingReserves.length ? _.intersection(Array.from(el.classList), checked.startingReserves).length : true;
    var injured = checked.injured.length ? _.intersection(Array.from(el.classList), checked.injured).length : true;
    var position = checked.position.length ? _.intersection(Array.from(el.classList), checked.position).length : true;
    var nbaTeam = checked.nbaTeam.length ? _.intersection(Array.from(el.classList), checked.nbaTeam).length : true;
    var conference = checked.conference.length ? _.intersection(Array.from(el.classList), checked.conference).length : true;
    if (startingReserves && injured && position && nbaTeam && conference) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}
