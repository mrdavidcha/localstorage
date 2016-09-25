var saveToLocalStorage = {

    save: function() {
        var myKeyInput  = document.getElementById('keyInput').value;
        var myNameInput = document.getElementById('valueInput').value;

        // Empty previous list
        document.getElementById("list").innerHTML = "";

        // Save as key/value pair if local storage supported
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem(myKeyInput, myNameInput);

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
                
                // console.log(myKey+" : " + myValue);

                document.getElementById("list").appendChild(newNode);
            }
        }
    }

};
