var modal = document.getElementById('myModal');
var btn = document.getElementById("btn2");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "flex";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("btn1");
var span1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function() {
    modal1.style.display = "flex";
  }
  
  // When the user clicks on <span> (x), close the modal
  span1.onclick = function() {
    modal1.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
  var modal2 = document.getElementById('myModal2');
  var btn2 = document.getElementById("btn4");
  var span2 = document.getElementsByClassName("close2")[0];
  btn2.onclick = function() {
      modal2.style.display = "flex";
    }
    
    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
      modal2.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }
    var sp=document.getElementById("btn8");
sp.onclick=function()
{
  modal.style.display = "flex";
  modal1.style.display = "none";
}
// var btn10 = document.getElementsById('btn3');
// btn10.onclick = function(){
//   document.location.href='p.html';
// }