var modal5 = document.getElementById('modal5');

var btn5 = document.getElementsByClassName('a1');

var span5 = document.getElementById('Nobutton');

btn5[0].onclick = function(){
    modal5.style.display = 'block';
}
btn5[1].onclick = function(){
    modal5.style.display = 'block';
}
btn5[2].onclick = function(){
    modal5.style.display = 'block';
}
btn5[3].onclick = function(){
    modal5.style.display = 'block';
}
btn5[4].onclick = function(){
    modal5.style.display = 'block';
}

span5.onclick = function(){
    modal5.style.display='none';
}

var btn6 = document.getElementsByClassName('fa');
btn6[0].onclick = function(){
    window.location.href='post.html';
}
btn6[1].onclick = function(){
    window.location.href='post.html';
}
btn6[2].onclick = function(){
    window.location.href='post.html';
}
btn6[3].onclick = function(){
    window.location.href='post.html';
}
btn6[4].onclick = function(){
    window.location.href='post.html';
}
var modal = document.getElementById('myModal');
var btn = document.getElementById("s2");
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
var btn1 = document.getElementById("s1");
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
  var sp=document.getElementById("btn8");
  sp.onclick=function(){
      modal.style.display = "flex";
      modal1.style.display="none";
  }