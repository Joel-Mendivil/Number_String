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
    output.innerHTML = "";
    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(one, two, three, four, five, six);

    if(o1 === one){
        one = two;
        two = three;
        three  = four;
        four = five;
        five = six;
    }
    else if(o1 === two){
        one = one;
        two = three;
        three = four;
        four = five;
        five = six;
    }
    else if(o1 === three){
        one = one;
        two = two;
        three = four;
        four = five;
        five = six;
    }
    else if(o1 === four){
        one = one;
        two = two;
        three = three;
        four = five;
        five = six;
    }
    else if(o1 === five){
        one = one;
        two = two;
        three = three;
        four = four;
        five = six;
    }
    else if(o1 === six){
        one = one;
        two = two;
        three = three;
        four = four;
        five = five;
    }

    o2 = Math.min(one, two, three, four, five);

    if(o2 === one){
        one = two;
        two = three;
        three  = four;
        four = five;
    }
    else if(o2 === two){
        one = one;
        two = three;
        three = four;
        four = five;
    }
    else if(o2 === three){
        one = one;
        two = two;
        three = four;
        four = five;
    }
    else if(o2 === four){
        one = one;
        two = two;
        three = three;
        four = five;
    }
    else if(o2 === five){
        one = one;
        two = two;
        three = three;
        four = four;
    }

    o3 = Math.min(one, two, three, four);

    if(o3 == one){
        one = two;
        two = three;
        three = four;
    }
    else if(o3 == two){
        one = one;
        two = three;
        three = four;
    }
    else if(o3 == three){
        one = one;
        two = two;
        three = four;
    }
    else if(o3 == four){
        one = one;
        two = two;
        three = three;
    }

    o4 = Math.min(one, two, three);

    if(o4 === one){
        one = two;
        two = three;
    }
    else if(o4 === two){
        one = one;
        two = three;
    }

    o5 = Math.min(one, two);

    if(o5 === one){
        one = two;
    }

    o6 = one;
    
    output.innerHTML = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6;
}
function median(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
    output.innerHTML = "";
    var mid2 = one;
    if(mid2 < two){
        mid2 = two;
    }
    if(mid2 < three){
        mid2 = three;
    }
    if(mid2 < four){
        mid2 = four;
    }
    if(mid2 > five){
        mid2 = five;
    }
    if(mid2 > six){
        mid2 = six;
    }
    var mid = one;
    if(mid < two){
        mid = two;
    }
    if(mid < three){
        mid = three;
    }
    if(mid > four){
        mid = four;
    }
    if(mid > five){
        mid = five;
    }
    if(mid > six){
        mid = six;
    }
    output.innerHTML = (mid2 - mid) / 2 + mid;
}
function largest(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
    output.innerHTML = "";
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
    if(large < five){
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
    output.innerHTML = "";
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
    output.innerHTML = "";
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
    output.innerHTML = "";
    
    var n1 = 1;
    var n2 = 1;
    var n3 = 1;
    var n4 = 1;
    var n5 = 1;
    var n6 = 1;

    if(one === two){
        n1++;
    }
    if(one === three){
        n1++;
    }
    if(one === four){
        n1++;
    }
    if(one === five){
        n1++;
    }
    if(one === six){
        n1++;
    }
    if(two === three){
        n2++;
    }
    if(two === four){
        n2++;
    }
    if(two === five){
        n2++;
    }
    if(two === six){
        n2++;
    }
    if(three === four){
        n3++;
    }
    if(three === five){
        n3++;
    }
    if(three === six){
        n3++;
    }
    if(four === five){
        n4++;
    }
    if(four === six){
        n4++;
    }
    if(five === six){
        n5++;
    }
    var max = Math.max(n1,n2,n3,n4,n5,n6);
    if(n1 === 1 && n2 === 1 && n3 === 1 && n4 === 1 && n5 === 1 && n6 === 1){
        output.innerHTML = "There is no duplicates"
    }
    else{
        output.innerHTML = "The mode is ";
        if(max === n1){
            output.innerHTML += " "+ one + " and it appears " + n1+ " times";
        }
        if(max === n2){
            output.innerHTML += " "+ two + " and it appears " + n2+ " times";
        }
        if(max === n3){
            output.innerHTML += " "+ three + " and it appears " + n3+ " times";
        }
        if(max === n4){
            output.innerHTML += " "+ four + " and it appears " + n4+ " times";
        }
        if(max === n5){
            output.innerHTML += " "+ five + " and it appears " + n5+ " times";
        }
        if(max === n6){
            output.innerHTML += " "+ six + " and it appears " + n6+ " times";
        }
    }
    return true;
}
function range(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
    output.innerHTML = "";
    var ran = one;
    if(ran < two){
        ran = two;
    }
    if(ran < three){
        ran = three;
    }
    if(ran < four){
        ran = four;
    }
    if(ran < five){
        ran = five;
    }
    if(ran < six){
        ran = six;
    }
    var ran2 = one;
    if(ran2 > two){
        ran2 = two;
    }
    if(ran2 > three){
        ran2 = three;
    }
    if(ran2 > four){
        ran2 = four;
    }
    if(ran2 > five){
        ran2 = five;
    }
    if(ran2 > six){
        ran2 = six;
    }
    output.innerHTML = ran-ran2;
}
function duplicate(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
    output.innerHTML = "";
    if(one === two || one === three || one === four || one === five || one === six){
        output.innerHTML += " " + one; 
    }
    if(two === three || two === four || two === five || two === six){
        output.innerHTML += " " + two; 
    }
    if(three === four || three === five || three === six){
        output.innerHTML += " " + three; 
    }
    if(four === five || four === six){
        output.innerHTML += " " + four; 
    }
    if(five === six){
        output.innerHTML += " " + five; 
    }
}
function unique(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);
    output.innerHTML = "";
    if(one !== two && one !== three && one !== four && one !== five && one !== six){
        output.innerHTML += " " + one; 
    }
    if(two !== one && two !== three && two !== four && two !== five && two !== six){
        output.innerHTML += " " + two; 
    }
    if(three !== one && three !== two && three !== four && three !== five && three !== six){
        output.innerHTML += " " + three; 
    }
    if(four !== one && four !== two && four !== three && four !== five && four !== six){
        output.innerHTML += " " + four; 
    }
    if(five !== one && five !== two && five !== three && five !== four && five !== six){
        output.innerHTML += " " + five; 
    }
    if(six !== one && six !== two && six !== three && six !== four && six !== five){
        output.innerHTML += " " + six; 
    }
}