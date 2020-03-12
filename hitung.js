var array = [];
function input() {
    x1 = document.getElementById("no1").value;
    x2 = document.getElementById("no2").value;
    x3 = document.getElementById("no3").value;
    x4 = document.getElementById("no4").value;
    x5 = document.getElementById("no5").value;

    array.push(x1, x2, x3, x4, x5);
}
function output(){
    max();
    min();
    mean();
    median();
}

function reset(){
    input();
    array.length = 0;
    document.getElementsByClassName("formNumber").reset();
    document.getElementById("outputMax").innerHTML = " ";
    document.getElementById("outputMin").innerHTML = " ";
    document.getElementById("outputMedian").innerHTML = " ";
    document.getElementById("outputMean").innerHTML = " ";
}

function max(){
    input();
    var max = Math.max.apply(Math, array);
    document.getElementById("outputMax").innerHTML = "Nilai Maximum = "+ max;
}
function min(){
    input();
    var min = Math.min.apply(Math, array);
    document.getElementById("outputMin").innerHTML = "Nilai Minimum = "+ min;
}
function mean(){
    input();
    array;
    var sum = 0;
    for (var i=0; i<array.length; i++) {
        sum += parseFloat(array[i]);
    } 
    var avg = (sum/array.length).toFixed(2);
    document.getElementById("outputMean").innerHTML = "Nilai Rata-Rata = "+ avg;
}
function median(){
    input();
    array;
    if(array.length === 0) return 0;
    array.sort(function(a,b){
        return a-b;
    });

    var half = Math.floor(array.length / 2 );

    if(array.length % 2){
        return array[half];
    }
    document.getElementById("outputMedian").innerHTML = "Nilai Median = " +array[half-1];
}
