function runForm(){
    // alert("hi");
    var s=document.querySelector("#time").value;
    
    s = s.replaceAll(" ","");
    
    if(s == ""){
        alert("Pls fill the field");
        return false;
    }
    if(s.length!=10){
        alert("pls fill the form in the proper format");
        return false;
    }
    if(s.slice(8).toUpperCase() == "AM"){

        // alert(s.slice(0,2));
        if(s.slice(0,2)==12){
            alert("00"+s.slice(2,8));
        }
        else{
            alert(s.slice(0,8));
        }
    }
    else{
        if(s.slice(0,2)==12){
            alert(s.slice(0,8));
            
        }
        else{
            alert((parseInt(s.slice(0.2))+12)+s.slice(2,8));
        }
    }
    return true;
}
