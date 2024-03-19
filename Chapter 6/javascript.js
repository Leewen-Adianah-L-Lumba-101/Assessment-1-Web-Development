function petroltotal() {
    // The variables are named the same as the ids here just to avoid confusion. The parse functions convert the variables into the responding data types (Float, Integer, String etc..)
    var no1 = parseFloat(document.getElementById("no1").value);
    var no2 = parseInt(document.getElementById("no2").value);

    // For some reason, this doesn't work, I don't know why but these act as checks that tell the user a certain field hasn't been given any input.
    // The only thing that works here is the final else branch.
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

// This function is related to clearing the inputs from every field, it also sends an alert of the fields being reset.
function res(f1) {
    alert("The calculator fields have been reset.");
}

