let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
    let btn = document.createElement("button");
    let txt = document.createTextNode("Delete");

    btn.className = "close";

    btn.appendChild(txt);
    myNodelist[i].appendChild(btn);
}

myNodelist = document.getElementsByTagName("LI");
let close = document.getElementsByClassName("close");

// for (let i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//         let div = this.parentElement;
//         div.style.display = "none";
//     }
// }

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let task = this.parentElement;
      task.classList.add("fadeOut");
      
      setTimeout(function() {
        task.style.display = "none";
      }, 500);
    };
}
  

let list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newTask() {

    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;

    if (inputValue === '') {
        alert("You must write a task to be done!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }

    let t = document.createTextNode(inputValue);
    li.appendChild(t);

    // clears the input after adding the task
    document.getElementById("myInput").value = "";
    
    //Create a "delete" button and append it to the created list item
    let btn = document.createElement("button");
    let txt = document.createTextNode("Delete");
    btn.className = "close";
    btn.appendChild(txt);
    li.appendChild(btn);
    
    //same as above
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
};