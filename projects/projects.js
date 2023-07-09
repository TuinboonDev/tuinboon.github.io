function gotorepo(url) {
    window.open(url)
}

fetch(`https://api.github.com/users/tuinboondev/repos`)
  .then((response) => response.json())
  .then((data) => {
    // Process the response data here
    console.log(data); // Example: Log the repositories to the console
    
    // You can loop through the data array to access individual repositories
    data.forEach((repo) => {
        
        var div = document.createElement("div");
        div.style.borderRadius = "12px"
        div.style.width = "50%"
        div.style.height = "30%"
        div.style.backgroundColor = "#AFAFAF"
        div.style.margin = "15px"
        div.style.flexBasis = "calc(50% - 30px)"
        div.style.position = "relative"
        div.className = "project"
        div.style.display = "inline-block"
        div.onclick = function() {gotorepo(repo.html_url);};
        var label = document.createElement("div");
        label.style.width = "calc(100% - 20px)"
        label.style.borderBottomLeftRadius = "8px"
        label.style.borderBottomRightRadius = "8px"
        label.style.fontFamily = "Montserrat"
        label.innerHTML = repo.name + " (github)"
        label.className = "label"
        div.appendChild(label)
        if (repo.name == "AntiMinefortCosmetics") {
            var img = document.createElement("img")
            img.src = "AMC.png"
            img.style.padding = "10px"
            img.style.width = "calc(100% - 65%)";
            img.style.height = "calc(100% - 20%)";
            div.appendChild(img)
        }
        document.getElementById("mainframe").appendChild(div)
      console.log(repo.name); // Example: Log the repository name
      console.log(repo.html_url); // Example: Log the repository URL
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });