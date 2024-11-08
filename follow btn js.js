// CURSOR - Only shows inside the body
var main = document.querySelector("body");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.pageX + "px";
    crsr.style.top = dets.pageY + "px";
});


// LIKE
var con = document.querySelector("#like1");
var love = document.querySelector("#heart");

con.addEventListener("dblclick", function() {
    love.style.transform = 'translate(-50%, -50%) scale(0.4)';
    love.style.opacity = 0.2;

    setTimeout(function() {
        love.style.transform = "translate(-50%, -50%) scale(0.6)";
        love.style.opacity = 0.5;
    }, 500);

    setTimeout(function() {
        love.style.transform = "translate(-50%, -50%) scale(0.8)";
        love.style.opacity = 0.8;
    }, 1000);

    setTimeout(function() {
        love.style.transform = "translate(-50%, -50%) scale(1.2)";
        love.style.opacity = 1;
    }, 1500);

    setTimeout(function() {
        love.style.transform = "translate(-50%, -50%) scale(0.2)";
        love.style.opacity = 0;
    }, 2000);
});




// FOLLOW
// var istatus = document.getElementById("follow-status");
var istatus = document.querySelector("#first #follow-status");
var btn = document.querySelector("#first #btn");
var check = true;

btn.addEventListener("click", function() {
    if (check) {
        istatus.innerHTML = "YOU ARE A SUPERFAN!";
        istatus.style.color = "#6A1E55";
        btn.innerHTML = "UNFOLLOW";
        btn.style.color = "white";
        btn.style.border = "1px solid rgb(176, 18, 18)";
        btn.style.backgroundColor = "rgb(228, 131, 131)";
        btn.style.boxShadow = "4px 4px 2px red, -4px -4px 2px red";
    }
     else {
        istatus.innerHTML = "WANNA BE A SUPERFAN?";
        istatus.style.color = "white";
        btn.innerHTML = "FOLLOW";
        btn.style.color = "white";
        btn.style.border = "1px solid #fff";
        btn.style.backgroundColor = "#0bed1e";
        btn.style.boxShadow = "4px 4px 2px rgb(18, 240, 18), -4px -4px 2px rgb(18, 240, 18)";
    }
    check = !check;
});
