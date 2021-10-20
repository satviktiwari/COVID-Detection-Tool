/*
Source Articles:
https://www.frontiersin.org/articles/10.3389/fpubh.2020.00473/full
*/

function check() {
    var c = 0;
    var qa = document.quiz.q1.value;
    var qb = document.quiz.q2.value;
    var qc = document.quiz.q3.value;
    var qd = document.quiz.q4.value;
    var qe = document.quiz.q5.value;
    var qf = document.quiz.q6.value;
    var qg = document.quiz.q7.value;
    var qh = document.quiz.q8.value;
    var qi = document.quiz.q9.value;
    var qj = document.quiz.q10.value;
    var qk = document.quiz.q11.value;
    var ql = document.quiz.q12.value;

    //Question 1
    if (qa == "a" || qa == "b" || qa == "c") {
        c += 0;
    }

    //Question 2
    if (qb == "a") {
        c += 0.145;
    }
    if (qb == "b") {
        c += 0.699;
    }
    if (qb == "c") {
        c += 0.731;
    }
    if (qb == "d") {
        c += 0.745;
    }

    //Question 3
    if (qc == "a") {
        c += 1;
    }
    if (qc == "b") {
        c += 0.848;
    }
    if (qc == "c") {
        c += 0.116;
    }

    //Question 4
    if (qd == "a") {
        c += 1;
    }
    if (qd == "b") {
        c += 0.5;
    }
    if (qd == "c") {
        c += 0;
    }

    //Question 5
    if (qe == "a") {
        c += 0.883;
    }
    if (qe == "b") {
        c += 0.687;
    }
    if (qe == "c") {
        c += 0.121;
    }

    //Question 6
    if (qf == "a") {
        c += 0.883;
    }
    if (qf == "b") {
        c += 0.687;
    }
    if (qf == "c") {
        c += 0.111;
    }

    //Question 7
    if (qg == "a") {
        c += 0.895;
    }
    if (qg == "b") {
        c += 0.843;
    }
    if (qg == "c") {
        c += 0.119;
    }

    //Question 8
    if (qh == "a") {
        c += 0.821;
    }
    if (qh == "b") {
        c += 0.599;
    }
    if (qh == "c") {
        c += 0.132;
    }

    //Question 9
    if (qi == "a") {
        c += 0.991;
    }
    if (qi == "b") {
        c += 0.861;
    }
    if (qi == "c") {
        c += 0.124;
    }

    //Question 10
    if (qj == "a") {
        c += 0.8;
    }
    if (qj == "b") {
        c += 0.2;
    }

    //Question 11
    if (qk == "a") {
        c += 0.756;
    }
    if (qk == "b") {
        c += 0.194;
    }

    //Question 12
    if (ql == "a") {
        c += 0.111;
    }
    if (ql == "b") {
        c += 0.648;
    }
    if (ql == "c") {
        c += 1;
    }

    c = c / 11;

    //document.write(`<h1 class="style1">"Chances of user suffering from COVID-19 are " + c + "%" </h1>`);

    
    if (c > 0 && c < 0.4) {
        document.write('<h1 class="style1" style="color:black; text-align:center; ">' + "<br>" + "Chances of user suffering from COVID-19 are " + c * 100 + "%" + "<br>" + "<hr>" + " <b>You are safe.</b> For further details, visit " + "<a href = `https://www.mohfw.gov.in/`>https://www.mohfw.gov.in/</a>" + "<br>" + "<hr>" + " <b>You are advised to go through following diet chart:</b> " + "<a href = `https://covid-predictiontool-dtl.github.io/Diet-Plan-No-Covid/`>DIET CHART</a>" + '</h1>');
    }
    else if (c > 0.4 && c < 0.6) {
        document.write('<h1 class="style1" style="color:green; text-align:center; ">' + "<br>" + "Chances of user suffering from COVID-19 are " + c * 100 + "%" + "<br>" + "<hr>" + " <b>You are advised to have RTPCR test.</b> For further details, visit " + "<a href = `https://www.mohfw.gov.in/`>https://www.mohfw.gov.in/</a>" + "<br>" + "<hr>" + " <b>You are advised to go through following diet chart:</b> " + "<a href = `https://covid-predictiontool-dtl.github.io/Diet-Plan-Mild-Covid/`>DIET CHART</a>" + '</h1>');
    }
    else if (c > 0.6 && c < 0.8) {
        document.write('<h1 class="style1" style="color:brown; text-align:center; ">' + "<br>" + "Chances of user suffering from COVID-19 are " + c * 100 + "%" + "<br>" + "<hr>" + " <b>You are advised to have RTPCR test, Chest X-RAY and Consult doctor.</b> For further details, visit " + "<a href = `https://www.mohfw.gov.in/`>https://www.mohfw.gov.in/</a>" + "<br>" + "<hr>" + " <b>You are advised to go through following diet chart:</b> " + "<a href = `https://covid-predictiontool-dtl.github.io/Diet-Plan-Mild-Covid/`>DIET CHART</a>" + '</h1>');
    }
    else if (c > 0.8) {
        document.write('<h1 class="style1" style="color:red; text-align:center; ">' + "<br>" + "Chances of user suffering from COVID-19 are " + c * 100 + "%" + "<br>" + "<hr>" + " <b>You are advised to have RTPCR test and get yourself admitted to hospital.</b> For further details, visit " + "<a href = `https://www.mohfw.gov.in/`>https://www.mohfw.gov.in/</a>" + "<br>" + "<hr>" + " <b>You are advised to go through following diet chart:</b> " + "<a href = `https://covid-predictiontool-dtl.github.io/Diet-Plan-Severe-Covid/`>DIET CHART</a>" + '</h1>');
    }


    document.body.style.backgroundColor = "skyblue";
    document.write(`<hr>`)
    document.write('<h1 class="style1" style="color:black; text-align:center; ">' + "Book your vaccines here: " + "<a href = `https://www.cowin.gov.in/`>https://www.cowin.gov.in/</a>" + '</h1>');
    document.write(`<hr>`)
    document.write('<h1 class="style1" style="color:black; text-align:center; ">' + "Get COVID related updates here: " + "<a href = `https://www.covid19india.org/`>https://www.covid19india.org/</a>" + '</h1>');


}