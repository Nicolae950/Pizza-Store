function chosePizza(id, pizzaIndex, pizza_id) {

    for (var i = 0; i < pizza_object_array.length; ++i) {
        if (document.getElementById(pizza_object_array[i].id) == id) {
            pizza_object_array[i].pattern_div_id = "choseDiv" + pizzaIndex;
            id.setAttribute('fill', 'url(#' + patterns[pizzaIndex] + ')');
            id.setAttribute('value', pizza_id);
            id.setAttribute("fill-opacity", "0.7");
            document.getElementById(pizza_object_array[i].input_id).value = pizza_id; // raspunde de hidden-uri
        }
    }
}

function controlPizzaButtonState(id) {
    for (var i = 0; i < pizza_object_array.length; ++i) {
        if (document.getElementById(pizza_object_array[i].id) == id) {
            if (pizza_object_array[i].firstClick == true) {
                id.setAttribute("fill", "rgb(170, 170, 170)");
                id.setAttribute("stroke", "rgb(190, 190, 190)");
                id.setAttribute("fill-opacity", "1.0");
                pizza_object_array[i].firstClick = false;
                pizza_object_array[i].pressed = true;
                removeElements();
                createChosePizzaElement(id);
            } else {
                if (pizza_object_array[i].pressed) {
                    id.setAttribute("fill-opacity", "1.0");
                    pizza_object_array[i].pressed = false;
                    removeElements();
                    restoreHElement();
                } else {
                    id.setAttribute("fill-opacity", "0.5");
                    pizza_object_array[i].pressed = true;
                    removeElements();
                    createChosePizzaElement(id);
                }
            }
        } else {
            document.getElementById(pizza_object_array[i].id).setAttribute("fill-opacity", "1.0");
            pizza_object_array[i].pressed = false;
        }
    }
}