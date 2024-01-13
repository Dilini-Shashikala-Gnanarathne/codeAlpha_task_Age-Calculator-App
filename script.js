function calculateDiff(){
    let date_1= document.getElementById('bDate').value;
    let date_2= document.getElementById('cDate').value;
    console.log(date_1);
    if (!date_2) {
        date_2=new Date().toJSON().slice(0,10);
    }

    let dob= new Date(date_1);
    let cdate= new Date(date_2);

    let diff= new Date(cdate.getTime()-dob.getTime());
    let output= document.getElementById('showAge');
    output.id="showAge";

    if (diff==NaN||!date_1) {
        output.innerHTML="Please select date first!";
        return;
    }
    if (date_1> date_2) {
        output.innerHTML="Invalid Input!";
        return;
    }
    date_1=new Date(date_1).toLocaleString().slice(0,3);
    date_2=new Date(date_2).toLocaleString().slice(0,3);
    if (date_1 === date_2) {
        output.innerHTML =
            "<h5>Happy Birthday To You</h5>" +
            "<br>" +
            "Your Age" +
            "<br>" +
            " " +
            "Years : " + Number(diff.getUTCFullYear() - 1970) +
            "<br>" +
            " " +
            "Months : " + diff.getMonth() +
            "<br>" +
            " " +
            "Days : " + Number(diff.getUTCDate() - 1) +
            "</div>";
        return;
    }
    


output.innerHTML=     "Your Age"+
"<br>"  +
" " +
"Years : " + Number(diff.getUTCFullYear() - 1970) +
"<br>" +
" " +
"Months : " +    diff.getMonth() +
"<br>" +
" " +
"Days : "  +  Number(diff.getUTCDate() - 1) 
;
return;
}

function resetDates() {
    document.getElementById('bDate').value = '';
    document.getElementById('cDate').value = '';
    document.getElementById('showAge').innerHTML = 'Hi!<br>Calculate Your Age';
}