function runForm(){
    var c = document.querySelector('#call').value;
    
    var s = document.querySelector('#sms').value;
    if(s=="" && c==""){
        alert("Please fill all the fields");
        document.myForm.sms.focus();
        return false;
    }
    if(s==""){
        s=0;
    }
    if(c==""){
        c=0;
    }
    var msg1=" ";
    var msg2=" ";
    if(c<=50){
        var callCost = (c*0.50);
        msg1= "Charges for Call :  "+callCost+"/-";   
    }
    else if(c<=150){
        var callCost=((50*0.50) + (c-50)*0.70) ;
        msg1=("Charges for Call :  "+callCost+"/-");
    }
    else if(c<=300){
        var callCost=((50*0.50) + (100*0.70) + (c-150)*0.85);
        msg1=("Charges for Call :  "+callCost+"/-");
    }
    else{
        var callCost=((50*0.50) + (100*0.75) + (150*0.85) + (c-300)*0.95);
        msg1=("Charges for Call :  "+callCost+"/-");
    }
    if(s<=50){
        var smsCost=0;
        msg2=("Charges for SMS :  0/-");
    }
    else if(s<=200){
        var smsCost= (s-50)*0.25;
        msg2=("Charges for SMS :  "+smsCost+"/-");
    }
    else if(s<=400){
        var smsCost= ((150)*0.25 + (s-200)*0.40);
        msg2=("Charges for SMS :  "+smsCost+"/-");
    }
    else{
        var smsCost= ((150)*0.25 + (200)*0.40 + (s-400)*0.45);
        msg2=("Charges for SMS :  "+smsCost+"/-");
    }
    var totalCost= callCost+smsCost;
    alert(msg1 + "\n"+msg2 + "\nTotal Charges :  "+totalCost+"/-");


    

    return true;
}