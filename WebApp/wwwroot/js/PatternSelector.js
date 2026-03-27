function createChosePizzaElement(id) {  // Functia creaza div-urile pentru alegerea pattern-ului de pizza
    for (let choseDivIndex = 0; choseDivIndex < pizzas.length; ++choseDivIndex) { //pizza are 9 elemente
        let divElement = document.createElement('div');
        divElement.setAttribute("id", "choseDiv" + choseDivIndex);

        for (var i = 0; i < pizza_object_array.length; ++i) {
            if (pizza_object_array[i].id == id.id) {
                if (pizza_object_array[i].pattern_div_id == divElement.id) {
                    // Scoatem ultimul delimitator indiferent de situatie
                    if (choseDivIndex == pizzas.length - 1) {
                        divElement.className = "pizza boxAlign showAntSelected text-center";
                    } else {
                        divElement.className = "pizza boxBorder boxAlign showAntSelected text-center";
                    }
                } else {
                    // Scoatem ultimul delimitator indiferent de situatie
                    if (choseDivIndex == pizzas.length - 1) {
                        divElement.className = "pizza boxAlign text-center";
                    } else {
                        divElement.className = "pizza boxBorder boxAlign text-center";
                    }
                }
            }
        }
        divElement.addEventListener('click', function () { chosePizza(id, choseDivIndex, pizzas[choseDivIndex].pizza_id); showSelectedPattern(choseDivIndex); });

        let pElement = document.createElement('p');
        pElement.innerHTML = pizzas[choseDivIndex].pizza_name;
        pElement.className = "mt-2 mb-2";
        document.getElementById('pizzaListDiv').appendChild(divElement);
        document.getElementById('choseDiv' + choseDivIndex).appendChild(pElement);
    }
}

function showSelectedPattern(choseDivIndex) {
    for (var rmClassIndex = 0; rmClassIndex < pizzas.length; ++rmClassIndex) {
        var needElement = document.getElementById("choseDiv" + rmClassIndex);
        if (needElement.classList.contains("showSelected")) {
            needElement.classList.remove("showSelected");
        }
        if (needElement.classList.contains("showAntSelected")) {
            needElement.classList.remove("showAntSelected");
        }
    }
    document.getElementById("choseDiv" + choseDivIndex).classList.add("showSelected");
}

function removeElements() {
    if (document.getElementById('result')) {
        document.getElementById('result').remove();
    }

    for (let choseDivIndex = 0; choseDivIndex < pizzas.length; ++choseDivIndex) {
        if (document.getElementById('choseDiv' + choseDivIndex)) {
            document.getElementById('choseDiv' + choseDivIndex).remove();
        }
    }
}

function restoreHElement() {
    var hElement = document.createElement('h4');
    hElement.setAttribute('id', 'result');
    hElement.className = 'boxAlign text-center';
    hElement.innerHTML = "Press on slice and chose a pizza";
    document.getElementById('pizzaListDiv').appendChild(hElement);
}