function xyz() {
var xmlhttp = new XMLHttpRequest();
var url = "http://jsonplaceholder.typicode.com/posts/";
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        idfunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function idfunction(arr) {
    var out = "";
    var input = document.getElementById('value').value
   if (input<=100 && input>0) {

      out +=  "<div align ='center'><p><span >  ID NUMBER :  &nbsp;</span>"+ arr[input-1].id + "</p></div>" + 
      "<div align ='center'><p><span>USER ID:&nbsp;</span>  " +arr[input-1].userId +"</p></div>"+"<p><span>TITLE </span> </p>"+
        arr[input-1].title
        + "<p><span>BODY </span></p>"
        + arr[input-1].body + '<br>';
   }

    else {out += "<div align ='center'><p> <span class= 'res'>Invalid ID</span></p></div>";}

    
    document.getElementById("id01").innerHTML = out;
}
}