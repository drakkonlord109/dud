var same = [];

function heloo() {
    var name1 = document.getElementById("in1").value;
    var name2 = document.getElementById("in2").value;
    var name3 = document.getElementById("in3").value;
    var name4 = document.getElementById("in4").value;
    var name5 = document.getElementById("in5").value;
    var name6 = document.getElementById("in6").value;
    var name7 = document.getElementById("in7").value;
    var name8 = document.getElementById("in8").value;

    same.push(name1);
    same.push(name2);
    same.push(name3);
    same.push(name4);
    same.push(name5);
    same.push(name6);
    same.push(name7);
    same.push(name8);
    document.getElementById("dpu").innerHTML = same;
    document.getElementById("b1").style.display = "none";
    document.getElementById("sb").style.display = "inline-block";
}

function ob() {
    var something = Math.floor((Math.random() * 8) + 0);
    var athor = same[something];
    document.getElementById("dpu").innerHTML = athor;

}