var doc1 = document.getElementById("one");
var doc2 = document.getElementById("two");
var doc3 = document.getElementById("three");
var doc4 = document.getElementById("four");
var doc5 = document.getElementById("five");
var doc6 = document.getElementById("six");
var output = document.getElementById("output");

function leastGreat(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
}
function median(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
}
function largest(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
    var large = one;
    if(large < two){
        large = two;
    }
    if(large < three){
        large = three;
    }
    if(large < four){
        large = four;
    }
    if(large <five){
        large = five;
    }
    if(large < six){
        large = six;
    }
    output.innerHTML = large;
}
function smallest(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
    var small = one;
    if(small > two){
        small = two;
    }
    if(small > three){
        small = three;
    }
    if(small > four){
        small = four;
    }
    if(small > five){
        small = five;
    }
    if(small > six){
        small = six;
    }
    output.innerHTML = small;
}
function mean(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
    var numStr = (one + two + three + four + five + six) / 6;
    output.innerHTML = numStr;
}
function mode(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
}
function range(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
}
function duplicate(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
}
function unique(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
}