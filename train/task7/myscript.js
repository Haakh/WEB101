var App = new todoApp();
var addNew = document.getElementById('addNewItem');
function todoItem(){
  this.caption;
  this.isCompleted;
  this.toggle = function () {
    if(this.isCompleted === true){
      this.isCompleted = false;
    }
    else {
      this.isCompleted = true;
    }
  };
  this.show = function(){
    alert(this.caption);
  }
}

function todoApp(){
  this.todoCollection = [];
  this.render = function () {
    // var x = document.getElementById('start');
    //insert html list below
    addNew.innerHTML ="";
    for (var i = 0; i < this.todoCollection.length; i++) {

      addNew.innerHTML +="<div id="+i+"><input type='checkbox' onclick='line(this)'><span>"+this.todoCollection[i].caption+"</span><button onclick='removeData("+i+",this)'> Remove </button></div>";

    }

  }
  this.addItem = function (data) {
    var cap = new todoItem();
    cap.caption = data;
    cap.isCompleted = false;
    this.todoCollection.push(cap);
    // document.write(this.todoCollection[0].caption);
  }
}
function line(e){
  //textDecoration :line-through
  // e.target.style.textDecoration="line-through";
  if(e.checked){
    document.getElementById(e.parentNode.id).style.textDecoration="line-through";
  }
  else {
    document.getElementById(e.parentNode.id).style.textDecoration="none";
  }
  // document.write(e.parentNode.id);
}
function removeData(x,e){
  //pop collection. using splice

  App.todoCollection.splice(x,1);
  App.render();
}
//EventListener
document.getElementById("butt").addEventListener("click",function(){
  var data = document.getElementById("newItem").value;
  App.addItem(data);
  App.render();
});
