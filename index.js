let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let type = "";
let keyboard = document.getElementById("keyboard");
keyboard.style.opacity = 0;
const form = document.getElementById("form");
let preValue = false;
let capslock = false;
let shift = false;
const submit = document.getElementById("submit");
let fnames;

var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

function fnType(types) {
  type = types;
}

function changeKeyboardColor(color) {
  keyboard.style.backgroundColor = color;
}

function changeKeyBackGround(color) {
  let keys = document.getElementsByClassName("key");
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.backgroundColor = color;
  }
}

function changeKeyColor(color) {
  let keys = document.getElementsByClassName("key");
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.color = color;
  }

  let top_design = document.getElementsByClassName("top-design");
  for (let i = 0; i < top_design.length; i++) {
    top_design[i].style.color = color;
  }

  document.getElementById("colon").style.color = color;
  document.getElementById("doublecomma").style.color = color;
  document.getElementById("sign").style.color = color;
}

function enterFunction() {
  if (type === "fname") {
    type = "lname";
    form.elements[1].focus();
  } else if (type === "lname") {
    type = "email";
    form.elements[2].focus();
  }
}

function backspaceFunction() {
  if (type === "fname") {
    fname.value = fname.value.slice(0, fname.value.length - 1);
    fnames = fname.value;
  } else if (type === "lname") {
    lname.value = lname.value.slice(0, lname.value.length - 1);
  } else if (type === "email") {
    email.value = email.value.slice(0, email.value.length - 1);
  }
}

function capslockFunction() {
  if (capslock === false) {
    document.getElementById("_dot").className = "dot";
    capslock = true;
  } else if (capslock === true) {
    document.getElementById("_dot").className = "no_dot";
    capslock = false;
  }
}

function tabFunction() {
  if (type === "fname") {
    fname.value += "    ";
    fnames = fname.value;
  } else if (type === "lname") {
    lname.value += "    ";
  } else if (type === "email") {
    email.value += "    ";
  }
}

function spacebarFunction() {
  if (type === "fname") {
    fname.value += " ";
    fnames = fname.value;
  } else if (type === "lname") {
    lname.value += " ";
  } else if (type === "email") {
    email.value += " ";
  }
}

function input(key) {
  if (key !== "caps-lock") {
    if (capslock === true) {
      key = key.toUpperCase();
    }
  }

  if (key === ";" && shift === true) {
    key = ":";
  } else if (key === "'" && shift === true) {
    key = `"`;
  } else if (key === "," && shift === true) {
    key = "<";
  } else if (key === "." && shift === true) {
    key = ">";
  } else if (key === "/" && shift === true) {
    key = "?";
  } else if (key === "[" && shift === true) {
    key = "{";
  } else if (key === "]" && shift === true) {
    key = "}";
  } else if (key === "\\" && shift === true) {
    key = "|";
  }

  if (key === "shift" && shift === true) {
    shift = false;
  } else if (key === "shift" && shift === false) {
    shift = true;
  } else if (key === "spacebar") {
    spacebarFunction();
  } else if (key === "tab") {
    tabFunction();
  } else if (key === "enter") {
    enterFunction();
  } else if (key === "backspace") {
    backspaceFunction();
  } else if (key === "caps-lock") {
    capslockFunction();
  } else if (type === "fname") {
    fname.value += key;
    fnames = fname.value;
  } else if (type === "lname") {
    lname.value += key;
  } else if (type === "email") {
    email.value += key;
  }
}

function activeVirtualKeyboard() {
  if (preValue === false) {
    keyboard.style.opacity = 1;
    preValue = true;
  } else if (preValue === true) {
    keyboard.style.opacity = 0;
    preValue = false;
  }

  opacity = 1;
}

function hover(key1) {
  $(".selected").hover(
    function () {
      $(this).attr("data-content", key1);
    },
    function () {
      $(this).attr("data-content", "");
    }
  );
}
