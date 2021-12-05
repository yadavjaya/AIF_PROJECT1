function clearFun(){
    document.getElementById("result").value="";
}
function show(value){
    document.getElementById("result").value+=value;
}
function calculateFun(){
    let firstNo= document.getElementById("result").value
    let secondNo=eval(firstNo);
    document.getElementById("result").value = secondNo;
}