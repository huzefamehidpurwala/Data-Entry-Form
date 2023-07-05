let x = 0;

function Gender() {
    var ele = document.getElementsByName('gender');
 
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i].value;
    }

    return "";
}

function AddRow() {
    var fname = document.getElementById("full-name").value.toString();
    var email = document.getElementById("email").value.toString();
    var gender = Gender().toString();
    var skills = document.getElementById("skills").value.toString();

    if (fname !== "" && email !== "" && gender !== "") {
        if (x === 0) {
            var newHeader = document.createElement('header');
            newHeader.innerHTML = "<h1>Database</h1>"
            document.getElementById('header').appendChild(newHeader);
            x++;
        }

        var div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = "<div class=\"card-img\"><img src=\"./form.png\" height=\"120px\" width=\"110px\"></div>" + "<div class=\"card-text\">" + "<p>Full Name: "+ fname + "</p>" + "<p>Email: "+ email + "</p>" + "<p>Gender: "+ gender + "</p>" + "<p>Skills: "+ skills + "</p>" + "</div>";
        document.getElementById('data').appendChild(div);

        document.getElementById("full-name").value = "";
        document.getElementById("email").value = "";
        // Gender().toString();
        document.getElementById("skills").value = "";
    } else {
        alert("Full Name, Email and Gender are required to move ahead!");
    }
}
