function openTab(evt, tabName) 
{
    console.log(evt);
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
    {
      tabcontent[i].style.display = "none";
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
}


var deleteTask = (event) => {
  event.target.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(event.target.parentElement.parentElement.parentElement.parentElement);
}

const onEdit = (event) => {
  if(event.charCode == 13 && event.target.value != "") 
  {
    event.target.outerHTML = "<span class='text'>"+ event.target.value + "</span>";
    document.querySelectorAll(".deleteButton").forEach((element) => element.addEventListener("click", deleteTask)); 
    document.querySelectorAll(".editButton").forEach((element) => element.addEventListener("click", editTask)); 
  }  
}

const editTask = (event) => {
  event.target.parentNode.parentNode.previousSibling.parentNode.firstElementChild.outerHTML = "<input id='update-input' type='text' placeholder='' onkeypress='onEdit(event)'></input>";
}

var addTask = () => {
  if(document.getElementById("input-text").value != "") {
    populate.push(document.getElementById("input-text").value);
    document.getElementById("todos").innerHTML += "<li>"+
    "<div class='li'>"+
        "<span class='text'>"+
        document.getElementById("input-text").value +
        "</span> "+
        "<span class='buttons'>"+
          "<span class='editButton button'>"+
            "<img src='images/edit.png' />"+
          "</span>"+
          "<span class='deleteButton button'>"+
            "<img src='images/delete.png'/>"+
          "</span>"+  
        "</span>"+ 
    "</div>"+
  "</li>";

  document.querySelectorAll(".deleteButton").forEach((element) => element.addEventListener("click", deleteTask)); 
  document.querySelectorAll(".editButton").forEach((element) => element.addEventListener("click", editTask)); 
  document.getElementById("input-text").value = "";
  }
  
}
var onEnter = (event) => {
  if(event.charCode == 13) 
    addTask();
}

document.querySelectorAll(".deleteButton").forEach((element) => element.addEventListener("click", deleteTask)); 
document.querySelectorAll(".editButton").forEach((element) => element.addEventListener("click", editTask));