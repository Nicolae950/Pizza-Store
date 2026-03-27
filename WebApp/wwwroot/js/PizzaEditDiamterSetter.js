
var object = JSON.parse(sessionStorage.getItem('editpizzainfo'));
var nr_of_slices = object[0], pizza_id = object[1];
var pizza_object_array = new Array();

if (nr_of_slices == 4) {
    document.getElementById("pizza-slices").innerHTML = patternForDOM;
    for (var add_index = 1; add_index <= 4; ++add_index) {
        document.getElementById("pizza-slices").innerHTML += '<path onclick="controlPizzaButtonState(this)" id = "' + add_index + 'slice" class="pizza" fill="url(#' + patterns[pizza_id - 1] + ')" stroke = "rgb(170,170,170)" d = ' + slices_4_shapes[add_index - 1] + ' />';
        pizza_object_array.push({ id: add_index + 'slice', firstClick: true, pattern_div_id: 'none', pressed: false, input_id: add_index + "_slice" }); //structura pentru controlul starilor fiecarui buton
        addHiddenInput(add_index);
        document.getElementById(pizza_object_array[add_index - 1].input_id).value = pizza_id;
    }
} else if (nr_of_slices == 6) {
    document.getElementById("pizza-slices").innerHTML = patternForDOM;
    for (var add_index = 1; add_index <= 6; ++add_index) {
        document.getElementById("pizza-slices").innerHTML += '<path onclick="controlPizzaButtonState(this)" id = "' + add_index + 'slice" class="pizza" fill="url(#' + patterns[pizza_id - 1] + ')" stroke = "rgb(170,170,170)" d = ' + slices_6_shapes[add_index - 1] + ' />';
        pizza_object_array.push({ id: add_index + 'slice', firstClick: true, pattern_div_id: 'none', pressed: false, input_id: add_index + "_slice" }); //structura pentru controlul starilor fiecarui buton
        addHiddenInput(add_index);
        document.getElementById(pizza_object_array[add_index - 1].input_id).value = pizza_id;
    }
} else {
    document.getElementById("pizza-slices").innerHTML = patternForDOM;
    for (var add_index = 1; add_index <= 8; ++add_index) {
        document.getElementById("pizza-slices").innerHTML += '<path onclick="controlPizzaButtonState(this)" id = "' + add_index + 'slice" class="pizza" fill="url(#' + patterns[pizza_id - 1] + ')" stroke = "rgb(170,170,170)" d = ' + slices_8_shapes[add_index - 1] + ' />';
        pizza_object_array.push({ id: add_index + 'slice', firstClick: true, pattern_div_id: 'none', pressed: false, input_id: add_index + "_slice" }); //structura pentru controlul starilor fiecarui buton
        addHiddenInput(add_index);
        document.getElementById(pizza_object_array[add_index - 1].input_id).value = pizza_id;
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