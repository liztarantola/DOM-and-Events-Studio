// Write your JavaScript code here.
// Remember to pay attention to page loading!

// Use the window load event to ensure all elements have loaded before attaching event handlers.
// When the "Take off" button is clicked, the following should happen:
// A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
// The flight status should change to "Shuttle in flight."
// The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
// The shuttle height should increase by 10,000 miles.

// When the "Land" button is clicked, the following should happen:
// A window alert should let the user know "The shuttle is landing. Landing gear engaged."
// The flight status should change to "The shuttle has landed."
// The background color of the shuttle flight screen should change from blue to green.
// The shuttle height should go down to 0.

// When the "Abort Mission" button is clicked, the following should happen:
// A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
// The flight status should change to "Mission aborted."
// The background color of the shuttle flight screen should change from blue to green.
// The shuttle height should go to 0.

// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.



window.addEventListener("load", function(){
    let imgObj = document.getElementById('rocket');
    imgObj.style.position = "absolute";
    imgObj.style.left = "0px";
    imgObj.style.bottom = "0px";
    let status = document.getElementById('flightStatus');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let bg = document.getElementById("shuttleBackground");
    let takeOff = document.getElementById("takeoff");
    let land = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    
    takeOff.addEventListener("click",function (){
        result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            status.innerText = "Shuttle in flight.";
            bg.style.backgroundColor = "blue";
            shuttleHeight.innerText = "10000";
        }
    })

    land.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerText = "The shuttle has landed.";
        bg.style.backgroundColor = "green";
        shuttleHeight.innerText = "0";
    })

    abort.addEventListener("click", function(){
        let abortMessage = window.confirm("Confirm that you want to abort the mission.");
        if (abortMessage){
            status.innerText = "Mission aborted.";
            bg.style.backgroundColor = "green";
            shuttleHeight.innerText = "0";
        }
    })

    up.addEventListener("click", function(){
        movement = parseInt(imgObj.style.bottom) + 10 + 'px';
        imgObj.style.bottom = movement;
        shuttleHeight.innerText = parseInt(shuttleHeight.innerText) + 10000
    })

    down.addEventListener("click", function(){
        movement = parseInt(imgObj.style.bottom) -10 + "px";
        imgObj.style.bottom = movement;
        shuttleHeight.innerText = parseInt(shuttleHeight.innerText) - 10000
    })

    right.addEventListener("click", function(){
        movement = parseInt(imgObj.style.left) + 10 + "px";
        imgObj.style.left = movement;
    })

    left.addEventListener("click", function(){
        movement = parseInt(imgObj.style.left) -10 + "px";
        imgObj.style.left = movement;
    })

})




