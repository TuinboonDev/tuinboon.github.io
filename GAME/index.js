window.onload = function () {
    const object = document.getElementById("lol");

    object.onmousedown = function(event) {
        console.log("a")
        let shiftX = event.clientX - object.getBoundingClientRect().left;
        let shiftY = event.clientY - object.getBoundingClientRect().top;
      
        object.style.position = 'absolute';
        object.style.zIndex = 1000;
        //document.body.append(object);
      
        moveAt(event.pageX, event.pageY);
      
        // moves the object at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
          console.log("b")
          object.style.left = pageX - shiftX + 'px';
          object.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // move the object on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // drop the object, remove unneeded handlers
        object.onmouseup = function() {
            console.log("bbb")
          document.removeEventListener('mousemove', onMouseMove);
          object.setAttribute("top", "50%")
          object.setAttribute("left", "50%")
          object.onmouseup = null;
        };
      
      };
      
      object.ondragstart = function() {
        return false;
      };
};