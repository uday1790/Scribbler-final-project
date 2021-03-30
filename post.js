const paragraph = document.getElementById("para1");
const edit_button = document.getElementById("edit-button");
const end_button = document.getElementById("end-editing");


edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "#dddbdb";
val = getElementById.save.jassi; 
mydoc = document.open(); 
mydoc.write(val); 
mydoc.execCommand("saveAs",true,".txt");
paragraph.style.backgroundColor = "#fffcfc"; //you can change the .txt to your extention
history.go(-1);
 
  
} );
const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;
var counting = 0;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
  }
});

function cmnt()
{
    document.getElementById("commentArea").style.display="block";
	var text=document.getElementById("cmntText").value;
	document.getElementById("commentArea").innerHTML+="<p style='background-color:white; margin:10px; padding-top:11px;height:35px;'>"+text+"</p>";
}
function change(){
  if (!clicked){
      clicked = true;
      var str = "Edit";
      var res = str.replace("Edit", "Save");
      document.getElementById("edit-button").innerHTML = res;
      
  }
  else{
      clicked = false;
      var str = "Save";
      var res = str.replace("Save", "Edit");
      document.getElementById("edit-button").innerHTML = res;
      alert("Changes are saved to this post");
  }
}
function liker(){
  if (!clicked){
      clicked = true;
      var str = "Like";
      var res = str.replace("Like", "Liked");
      document.getElementById("edit").innerHTML=res;
      // alert("You Liked this post");
  }
  counting = counting + 1;  
      str_count = String(counting);
      str_person = " people liked this post."
      str_comb = str_count.concat(str_person);
      var rep_str = "Be the first one to like this!";
      var rep =rep_str.replace("Be the first one to like this!",str_comb); 
      document.getElementById("like").innerHTML = rep;  
}
var modal = document.getElementById('myModal');
var btn = document.getElementById("btn1");
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
var btn1 = document.getElementById("btn2");
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