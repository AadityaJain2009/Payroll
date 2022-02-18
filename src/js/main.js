function login(){
    window.location = "../html/home.html";
    document.getElementById("input-box").value = "";
    document.getElementById("input-box1").value = "";
}

function cancel(){
    document.getElementById("input-box").value = "";
    document.getElementById("input-box1").value = "";
}
function btn1(){
    
    document.getElementById("display-box").innerHTML = '<div id="display-box"> <br> <h1 id="display1">Employe id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="displayl1" class="input1" placeholder="Type Here"></h1> <h1 id="display1">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="displayl2"class="input1" placeholder="Type Here"> </h1> <h1 id="display1">City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="displayl3"class="input1"  placeholder="Type Here"></h1> <h1 id="display1">Pan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input id="displayl4" class="input1" placeholder="Type Here"></h1> <h1 id="display1">Bank Ac No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="displayl5" class="input1" placeholder="Type Here"></h1> <h1 id="display1">Bank Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="displayl6" placeholder="Type Here"></h1> <h1 id="display1">DOJ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="displayl7" class="input1" placeholder="Type Here"></h1> <h1 id="display1">DOB &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="displayl8"class="input1"  placeholder="Type Here"></h1> <h1 id="display1">DOL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="displayl9" class="input1" placeholder="Type Here"> </h1></div>';
}