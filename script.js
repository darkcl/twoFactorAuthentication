var gyroPresent = false;

//spin dial with device orientation
window.addEventListener("deviceorientation", changeOrientation, true);

function changeOrientation(event) {
    $("#warning").remove();
    gyroPresent = true;

    const letters = "0123456789YN0";
    var alpha = Math.round(event.alpha * 10) / 10;
    var index = Math.round(alpha / 30);
    var spin = alpha - 5; //this just makes the arrow on the dial look more accurate
    $("#selected").html(letters[index]);
    $("#dial").css({ "transform": "rotate(" + spin + "deg)" });
}

//generate dial with text
function circleGen(txt, radius, classIndex) {
    txt = txt.split(""),
        classIndex = document.getElementsByClassName("dialText")[classIndex];
    var deg = 360 / txt.length,
        origin = 0;
    txt.forEach((ea) => {
        ea = "<span style='height:" + radius + "px;position:absolute;transform:rotate(" + origin + "deg);transform-origin:0 100%'>" + ea + "</span>";
        classIndex.innerHTML += ea;
        origin += deg;
    });
}
circleGen("0NY987654321", 128, 0);

//add selected char to input box
function addChar() {
    newChar = document.getElementById("selected").innerHTML;
    input = document.getElementById("codeInput");
    if (newChar == "N") {
        input.value = "";
    } else if (newChar == "Y") {
        alert("Submitted");
        input.value = "";
    } else if (input.value.length < 6) {
        input.value += parseInt(newChar);
    }
}
