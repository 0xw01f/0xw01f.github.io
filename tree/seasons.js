let treeElts = document.getElementById("tree2").children;
let colorArray = ['389e2c', '248c18', '4aba3d'];

let seasonSpeed = 20000;


let trash = [];
function addColor() {

    let rnd = Math.floor(Math.random() * treeElts.length);

    if (!trash.includes(rnd)) {
        let rndColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        if (treeElts[rnd].innerHTML === "$" || treeElts[rnd].innerHTML === "%") {
            treeElts[rnd].setAttribute("style", "color: " + rndColor);
        } else {
            treeElts[rnd].setAttribute("style", "color: #66430e");
        }
        trash.push(rnd);
    } else {
        addColor();
    }

}


function removeLeaves() {

}

var i = 0;
function leavesLoop() {  
    setTimeout(function() {
        addColor();
        i++;
        if (i < treeElts.length) {
            leavesLoop();
        }
    }, 145)
}




function spring() {
    colorArray = ['#ffb7c5', '#e3889a', '#db8898'];
    i = 0;
    trash = [];
    leavesLoop();
}

function summer() {
    colorArray = ['#389e2c', '#248c18', '#4aba3d'];
    // addFruits();
    i = 0;
    trash = [];
    leavesLoop();
}

function fall() {
    colorArray = ['#edb928', '#eda528', '#ed8e28', '#ed7d28'];
    i = 0;
    trash = [];
    leavesLoop();
}

function winter() {
    colorArray = ['transparent'];
    i = 0;
    trash = [];
    leavesLoop();
}


function errorTree() {
    colorArray = ['#c23434', '#d92929', '#990b0b'];
    i = 0;
    trash = [];
    leavesLoop();
}




function seasonLoop() {
    
    // https://stackoverflow.com/a/58413771/14304544
    function startSpring(){
        var dfd = new $.Deferred();
            setTimeout(function(){
            spring();
            console.log("Season: Spring");
            startSummer(dfd);	
          }, seasonSpeed);
        return dfd.promise();
      }
      
    function startSummer(dfd){
    setTimeout(function(){
        summer();
        console.log("Season: Summer"); 
        startFall(dfd);	
    }, seasonSpeed);
    }
    
    function startFall(dfd){
    setTimeout(function(){
        fall();
        console.log("Season: Fall"); 
        dfd.resolve();
    }, seasonSpeed);
    }
    
    function startWinter(){
    setTimeout(function(){
        winter();
        console.log("Season: Winter"); 
        seasonLoop();
    }, seasonSpeed);
    }
    
    var call = startSpring();
    $.when(call).then(function(cb){
        startWinter();
      });
}

summer();
seasonLoop();