function AddSauceInList(id) {
    
    if (id.checked == true) {
        AddSauceInTable(id);
    } else {
        RemoveSauceFromTable(id);
    }
}

function GetSauceInformation(id) {
    var sauce_info = id.value.split(" ");
    return sauce_info;
}

function GetTable() {
    var table = document.getElementById("checkouttable");
    var nr_of_rows = table.getElementsByTagName('tr').length;
    return table, nr_of_rows;
}

function AddSauceInTable(id) {

    var table = document.getElementById("checkouttable");
    var nr_of_rows = table.getElementsByTagName('tr').length;


    var sauce_info = id.value.split(" ");


    var row = table.insertRow(nr_of_rows - 1);
    var number_cell = row.insertCell(0);
    number_cell.className = "border-bottom pt-2 pb-2";
    number_cell.innerHTML = "<h3> " + (nr_of_rows - 1) + " </h3>";
    // inputul il pun la nume
    var foto_cell = row.insertCell(1);
    foto_cell.className = "border-bottom pt-2 pb-2";
    foto_cell.innerHTML = "<h3>" + "</h3>";
    var name_cell = row.insertCell(2);
    name_cell.className = "border-bottom pt-2 pb-2";
    name_cell.innerHTML = "<h5>" + sauce_info[1] + " Sauce </h5> <input type=\"hidden\" value=" + sauce_info[0] + " id=" + "productId" + (nr_of_rows - 1) + " />";
    var amount_cell = row.insertCell(3);
    amount_cell.className = "border-bottom pt-2 pb-2";
    amount_cell.innerHTML = "<h5> x " + sauce_info[2] + "</h5>";
    var price_cell = row.insertCell(4);
    price_cell.className = "border-bottom pt-2 pb-2";
    price_cell.innerHTML = "<h5>" + sauce_info[3] + " lei </h5>";
    var weight_cell = row.insertCell(5);
    weight_cell.className = "border-bottom pt-2 pb-2";
    weight_cell.innerHTML = "<h5>" + sauce_info[4] + " g </h5>";
    var total_cell = row.insertCell(6);
    total_cell.className = "border-bottom pt-2 pb-2";
    total_cell.innerHTML = "<h5>" + sauce_info[5] + " lei </h5>";


    var total_price_label = document.getElementById("totalprice");
    var total_price_current_value = total_price_label.textContent.trim().split(" ")[0]; // valoarea de la indexul 1 e 'lei'
    total_price_label.innerHTML = " " + (parseFloat(total_price_current_value) + parseFloat(sauce_info[5])) + " lei ";
}

function RemoveSauceFromTable(id) {
    var sauce_info = id.value.split(" ");


    var table = document.getElementById("checkouttable");
    var nr_of_rows = table.getElementsByTagName('tr').length;

    for (var i = 1; i < (nr_of_rows - 1); ++i) {
        if (table.rows[i].cells[2].textContent.trim().split(" ")[0] == sauce_info[1]) {
            table.deleteRow(i);
        }
    }

    for (var number_in_cart = 1; number_in_cart < (nr_of_rows - 2); ++number_in_cart) {
        table.rows[number_in_cart].cells[0].innerHTML = "<h3> " + number_in_cart + " </h3>";
    }

    var total_price_label = document.getElementById("totalprice");
    var total_price_current_value = total_price_label.textContent.trim().split(" ")[0];
    total_price_label.innerHTML = " " + (parseFloat(total_price_current_value) - parseFloat(sauce_info[5])) + " lei ";
}

function AddPizzaInputs(id, ) {
    let hiddenElement = document.createElement("input");
    hiddenElement.id = id + "pizza";
    hiddenElement.type = "hidden";
    hiddenElement.value = null;
    hiddenElement.setAttribute("data-val", "true");
    //hiddenElement.setAttribute("data-val-required", "The SlicesIds field is required.");
    hiddenElement.setAttribute("name", );
    document.getElementById(id).appendChild(hiddenElement);
}