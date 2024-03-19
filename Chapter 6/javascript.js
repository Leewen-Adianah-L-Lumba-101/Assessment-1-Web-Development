function petroltotal() {

    var no1 = parseFloat(document.getElementById("no1").value);
    var no2 = parseInt(document.getElementById("no2").value);

    if (no1 == "") {
        alert("Please enter the price of petrol per litre.");

    } else if (no2 === "") {
        alert("Please enter the litres purchased.");

    } else if (no1 === "" && no2 === "") {
        alert("Please enter values for the calculator.");

    } else {
        document.getElementById("total").innerHTML = "The total price of your purchase is " + no1 * no2 + "dhs.";
        
    }
}

function res(f1) {
    alert("The calculator fields have been reset.");
}

