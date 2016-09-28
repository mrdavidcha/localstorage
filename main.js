var saveToLocalStorage = {

    init:function(){
        // Render list on load if there's anything saved in local storage.
        if(localStorage.length !== 0){
            this.render();
        }else{
            document.getElementById("list").innerHTML = "Create your first item.";
        }
    },

    save: function() {
        var myKeyInput  = document.getElementById('keyInput').value;
        var myNameInput = document.getElementById('valueInput').value;
        var inputElements = document.getElementsByClassName("textInput");

        // Empty previous list
        document.getElementById("list").innerHTML = "";

        // Save as key/value pair if local storage supported
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem(myKeyInput, myNameInput);

            // Clear inputs after saving to local storage
            for (ii=0; ii < inputElements.length; ii++) {
                inputElements[ii].value = "";
            };

            this.render();
        } else {
            document.getElementById("list").innerHTML = "Local storage not supported on your crappy browser...";
        }
    },

    render: function(){
        //  Get from local storage and render each key/value
        for( i=0; i < localStorage.length; i++ ){
            var myKey    = localStorage.key(i);
            var myValue  = localStorage[myKey];
            var newNode  = document.createElement("LI");
            var textnode = document.createTextNode(myKey + ": " + myValue);

            // Key/value must both have something to render
            if(myKey && myValue){
                newNode.appendChild(textnode);
                
                document.getElementById("list").appendChild(newNode);
            }
        }
    }

};

saveToLocalStorage.init();