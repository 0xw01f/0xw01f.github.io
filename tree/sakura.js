function paintTree() {
    let treeElts = document.getElementById("tree1").children;

    for (let part of treeElts) {
        part.setAttribute("style", "color: transparent");
    }
    
    
    let colorArray = ['e3889a', 'ffb7c5', 'db8898'];
    let trash = [];

            
    function addColor() {
        
        let rnd = Math.floor(Math.random() * treeElts.length);

        if (!trash.includes(rnd)) {

            let item = colorArray[Math.floor(Math.random() * colorArray.length)];
            if (treeElts[rnd].innerHTML === "$" || treeElts[rnd].innerHTML === "%") {
                treeElts[rnd].setAttribute("style", "color: #" + item);
            } else {
                treeElts[rnd].setAttribute("style", "color: #5C4033");
            }
            trash.push(rnd);
        } else {
            addColor();
        }

        
    }

    // Timed Loop | https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
    var i = 0;
    function myLoop() {  
        setTimeout(function() {
            addColor();
            i++;
            if (i < treeElts.length) {
            myLoop();
            }

        }, 90)
    }
    myLoop();
}


paintTree();

