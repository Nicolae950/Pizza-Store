// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


var slices4 = document.getElementById("4slices");
slices4.addEventListener('click', function () { choseDiameter(this); });

var slices6 = document.getElementById("6slices");
slices6.addEventListener('click', function () { choseDiameter(this); });

var slices8 = document.getElementById("8slices");
slices8.addEventListener('click', function () { choseDiameter(this); });

var pizza_object_array = new Array();

function choseDiameter(id) {
    if (id == slices4) {
        document.getElementById("pizza-slices").innerHTML = patternForDOM + '<path onclick="controlPizzaButtonState(this)" id="1slice" name="1slice" value="" class="pizza" fill="rgb(190,190,190)" stroke="rgb(170,170,170)" d="M 150.76 0.764 C 232.264 1.576 298.252 67.12 299.485 148.484 L 151.518 148.484 L 151.518 0.007"/><path onclick="controlPizzaButtonState(this)" id="2slice" name="2slice" value="" class="pizza" fill="rgb(190,190,190)" stroke="rgb(170,170,170)" d="M 151.518 299.232 C 232.727 298.012 298.262 232.585 299.485 151.515 L 151.518 151.515 L 151.518 299.991"/><path onclick="controlPizzaButtonState(this)" id="3slice" name="3slice" value="" class="pizza" fill="rgb(190,190,190)" stroke="rgb(170,170,170)" d="M 148.483 299.232 C 67.275 298.012 1.737 232.585 0.517 151.515 L 148.483 151.515 L 148.483 299.991"/><path onclick="controlPizzaButtonState(this)" id="4slice" name="4slice" value="" class="pizza" fill="rgb(190,190,190)" stroke="rgb(170,170,170)" d="M 148.483 0.764 C 67.275 1.984 1.737 67.412 0.517 148.484 L 148.483 148.484 L 148.483 0.007"/>';
        for(var i = 0; i < pizza_object_array.length; ++i) {
            pizza_object_array.pop(); // sterg elementele anterioare
            removeHidden(i + 1);
        }
        for (var add_index = 1; add_index <= 4; ++add_index) {
            pizza_object_array.push({ id: add_index + 'slice', firstClick: true, pattern_div_id: 'none', pressed: false, input_id: add_index + "_slice" }); //structura pentru controlul starilor fiecarui buton 
            // input_id este pentru inputul atribuit pentru fiecare felie de pizza
            addHiddenInput(add_index);
        }
        document.getElementById("nr_of_slices").value = 4;
        removeElements();
        restoreHElement();
    } else if (id == slices6) {
        document.getElementById("pizza-slices").innerHTML = patternForDOM + '<path onclick="controlPizzaButtonState(this)" id="1slice" name="1slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 150.479 0.561 C 203.378 0.561 252.315 28.525 279.073 74.041 L 151.223 147.733 L 151.223 0.503"/><path onclick="controlPizzaButtonState(this)" id="2slice" name="2slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 279.829 76.459 L 151.978 149.997 L 279.829 223.689 C 307.537 176.478 304.514 115.46 279.829 76.459 Z"/><path onclick="controlPizzaButtonState(this)" id="3slice" name="3slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 150.48 299.487 C 203.432 299.487 252.398 271.429 279.073 225.803 L 151.223 152.264 L 151.223 299.495"/><path onclick="controlPizzaButtonState(this)" id="4slice" name="4slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 149.702 299.489 C 96.787 299.489 47.862 271.426 21.252 225.803 L 148.951 152.264 L 148.951 299.495"/><path onclick="controlPizzaButtonState(this)" id="5slice" name="5slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 20.494 76.156 L 148.194 149.997 L 20.494 223.538 C -5.159 182.994 -7.138 120.847 20.494 76.156 Z"/><path onclick="controlPizzaButtonState(this)" id="6slice" name="6slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 149.703 0.506 C 96.787 0.506 47.862 28.571 21.252 74.192 L 148.951 147.733 L 148.951 0.503"/>';
        for (var i = 0; i < pizza_object_array.length; ++i) {
            pizza_object_array.pop(); // sterg elementele anterioare
            removeHidden(i + 1);
        }
        for (var add_index = 1; add_index <= 6; ++add_index) {
            pizza_object_array.push({ id: add_index + 'slice', firstClick: true, pattern_div_id: 'none', pressed: false, input_id: add_index + "_slice" });
            addHiddenInput(add_index);
        }
        document.getElementById("nr_of_slices").value = 6;
        removeElements();
        restoreHElement();
    } else {
        document.getElementById("pizza-slices").innerHTML = patternForDOM + '<path onclick="controlPizzaButtonState(this)" id="1slice" name="1slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 150.398 0.517 C 189.569 0.619 227.135 16.091 255.016 43.614 L 151.134 147.353 L 151.134 0.501"/><path onclick="controlPizzaButtonState(this)" id="2slice" name="2slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 256.45 45.047 L 152.266 149.015 L 299.483 148.864 C 299.029 115.654 287.668 76.95 256.45 45.047 Z"/><path onclick="controlPizzaButtonState(this)" id="3slice" name="3slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 256.45 254.947 L 152.266 151.129 L 299.483 151.129 C 298.779 186.047 287.584 222.501 256.45 254.947 Z"/><path onclick="controlPizzaButtonState(this)" id="4slice" name="4slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 150.388 299.488 C 189.526 299.387 227.065 283.935 254.94 256.459 L 151.134 152.79 L 151.134 299.494"/><path onclick="controlPizzaButtonState(this)" id="5slice" name="5slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 149.604 299.475 C 110.506 299.373 73.006 283.959 45.139 256.532 L 148.87 152.79 L 148.87 299.494"/><path onclick="controlPizzaButtonState(this)" id="6slice" name="6slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 0.519 151.129 L 147.736 151.129 L 43.554 255.024 C 20.178 231.268 0.91 195.053 0.519 151.129 Z"/><path onclick="controlPizzaButtonState(this)" id="7slice" name="7slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 0.519 148.864 L 147.736 149.015 L 43.554 45.047 C 23.411 65.692 1.805 98.775 0.519 148.864 Z"/><path onclick="controlPizzaButtonState(this)" id="8slice" name="1slice" value="" class="pizza" fill="rgb(190, 190, 190)" stroke="rgb(170, 170, 170)" d="M 149.608 0.509 C 110.47 0.612 72.934 16.059 45.062 43.537 L 148.87 147.353 L 148.87 0.501"/>';
        for (var i = 0; i < pizza_object_array.length; ++i) {
            pizza_object_array.pop(); // sterg elementele anterioare
            removeHidden(i + 1);
        }
        for (var add_index = 1; add_index <= 8; ++add_index) {
            pizza_object_array.push({ id: add_index + 'slice', firstClick: true, pattern_div_id: 'none', pressed: false, input_id: add_index + "_slice" });
            addHiddenInput(add_index);
        }
        document.getElementById("nr_of_slices").value = 8;
        removeElements();
        restoreHElement();
    }
}

function addHiddenInput(nr) {
    let hiddenElement = document.createElement("input");
    hiddenElement.id = nr + "_slice";
    hiddenElement.type = "hidden";
    hiddenElement.value = null;
    hiddenElement.setAttribute("data-val", "true");
    //hiddenElement.setAttribute("data-val-required", "The SlicesIds field is required.");
    hiddenElement.setAttribute("name", "SlicesIds");
    document.getElementById("pizza-creator").appendChild(hiddenElement);
}

function removeHidden() {
    for (var i = 1; i <= 8; ++i) {
        if (document.getElementById(i + '_slice')) {
            document.getElementById(i + '_slice').remove();
        }
    }
}