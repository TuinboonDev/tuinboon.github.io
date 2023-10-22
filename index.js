/*
window.onload = function() {
    var text = document.getElementById("title");
    var titletext = "Im Tuinboon"
    setInterval(() => {text.innerHTML = titletext; setTimeout(() => {text.innerHTML = titletext + "|";}, 500);}, 1000);
  };
*/

function discord() {
    window.open("https://discord.com/users/584748051814547487")
}

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the current visit count from local storage
    let count = localStorage.getItem('visitCount');

    // Check if a visit count exists in local storage
    if (count) {
      count = parseInt(count) + 1; // Increment the visit count
    } else {
      count = 1; // Set the initial visit count to 1
    }

    // Update the visit count in local storage
    localStorage.setItem('visitCount', count);

    // Display the visit count on the webpage
    document.getElementById('counter').textContent = count;
  });

window.onload = function () {

    
    var index = 0;
    var delay = 150;
    var text;
    var texts = [" - a developer", " - an idiot", " - a gamer"];
    var keepgoing = true;
    var textindex = 0

    function type2() {
        if (!text) {
            document.getElementById("title").innerHTML = "Hello, I'm Tuinboon"
        }
        if (index < text.length) {
            document.getElementById("title").innerHTML += text.charAt(index);
            index++;
            setTimeout(type2, delay);
        } else {
            keepgoing =true;
            setInterval(undotype2, 500);
        }
    }
    text = texts.at(textindex)
    type2();

    function undotype2() {
        if (!keepgoing) {
            return 
        }
        if (index !=4) {
            document.getElementById("title").innerHTML = document.getElementById("title").innerHTML.slice(0,-1);
            setTimeout(undotype2, delay);
            index--;
        } else if (index == 4) {
            keepgoing = false;
            textindex++;
            text = texts.at(textindex);
            type2();
        }
    }
};

