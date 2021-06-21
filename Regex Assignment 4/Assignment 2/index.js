
function runForm2(){
    var s = document.querySelector("textarea").value;
    if(s=="") {
        alert("pls fill the field");
        return false;
    }
    var arr = s.split(", ");
    if(arr.length!=3){
        alert("pls fill the field properly");
        return false;
    }
    var i=0;
    var n = Math.min(arr[0].length,arr[1].length);
    while(i<n && arr[0].charAt(i)==arr[1].charAt(i)) i++;
    var ans = arr[0].length+arr[1].length - (2*i);
    if(ans<=parseInt(arr[2])){ alert("Yes")}
    else{alert("NO")}
    return true;
}