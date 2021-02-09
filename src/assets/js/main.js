
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("pizza");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }

  if(c == ""){
    c = "all";
  }
  document.getElementById('products-type').innerHTML = c + "-pizza";
  document.getElementById('products-type').setAttribute("style", "text-transform: capitalize");
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function handleAdd(event) {
  const card =event.target.closest('.pizza')
  card.classList.add('add-active')
}

function plusLessFunction(event, type, index) {

  const input = document.getElementsByClassName('result');
  let oldVal = Number(input[index].value)

  const card =event.target.closest('.pizza')

  if (type == 'less') {
    if(oldVal == 0){
      input[index].value = 0;
      card.classList.remove('add-active');
    } else{
      input[index].value = oldVal - 1;
    }
  } else {
    input[index].value = oldVal + 1;
  }
}

var btnContainer = document.getElementById("productInfo");
var btnTypes = btnContainer.getElementsByClassName("pizzaType");
var btnSizes = btnContainer.getElementsByClassName("pizzaSize");

for (var i = 0; i < btnTypes.length; i++) {
  btnTypes[i].addEventListener("click", function(){
    var current = btnContainer.getElementsByClassName("pizzaType active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

for (var i = 0; i < btnSizes.length; i++) {
  btnSizes[i].addEventListener("click", function(){
    var current = btnContainer.getElementsByClassName("pizzaSize active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
