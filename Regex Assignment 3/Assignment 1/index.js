function runForm(){
    // alert("hi");
    var s=document.querySelector("#text").value;
    if(s == null){
        alert("Pls fill the field");
        return false;
    }
    s = s.replaceAll(document.querySelector("#word1").value,document.querySelector("#word2").value);
    
    alert(s);
    return true;
}
