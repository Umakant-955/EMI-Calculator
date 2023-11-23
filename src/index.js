function amountAdd(){
    var amount=document.getElementById("rangeAmount").value;
    document.getElementById("lblAmount").innerHTML=`&#8377 ${amount}`;
}
function yearsAdd(){
    var years=document.getElementById("rangeYears").value;
    document.getElementById("lblYears").innerHTML=years;
}
function rateAdd(){
    var rate=document.getElementById("rangeRate").value;
    document.getElementById("lblRate").innerHTML=`&#8377 ${rate}`;
}
function Calculate(){
    var p=parseFloat(document.getElementById("rangeAmount").value);
    var n=parseInt(document.getElementById("rangeYears").value)*12;
    var r=parseFloat(document.getElementById("rangeRate").value)/12/100;
    var emi=p*r/(1-(Math.pow(1/(1+r),n)));

    document.getElementById("result").innerHTML=`Your Monthly EMI will be &#8377; <b>${Math.round(emi)}</b> per month <a href="https://www.hdfcbank.com" target="_blank">Apply for loan</a>`;
}