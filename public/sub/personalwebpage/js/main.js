function setaphorism() {
    var aphorism = ["You can enjoy anything, if you just happen to enjoy it.", "Bloody diarrhea on a plate of sausage soup.", "My mood is good, given that it isn't bad."];
    var aphamount = aphorism.length - 1;
    var aphorismoftheminute = Math.floor(Math.random() * (aphamount - 0 + 1));
    document.getElementById("aphorisms").innerHTML = aphorism[aphorismoftheminute];
}
setaphorism();


var changeimg = [];
changeimg[0] = new Image();
changeimg[0].src = "img/pocketbook.svg";
changeimg[1] = new Image();
changeimg[1].src = "img/pocketbookhover.svg";

function imgoff() {
    document.pb.src = changeimg[1].src;
    return true;
}

function imgon() {
    document.pb.src = changeimg[0].src;
    return true;
}

// secret code my dudes
var kon1 = 0;
var secretcode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var presses = [];

function aftermath() {
    console.log("Konamicode initialized");

    if (kon1 == 4) {
        location.reload();

    }
    if (kon1 == 3) {
        $('html').css('animation', 'huerotation 1s linear infinite');
        $('html').css('WebkitAnimation', 'huerotation 1s linear infinite');
        $('#volumeslider').css('opacity', '1');
        var musiccreation = $('<audio id="bgmusic" autoplay volume="0.5"><source src="music/flute.ogg" type="audio/ogg"><source src="music/flute.mp3" type="audio/mpeg"></audio>');
        var iframe = document.getElementById("scframe");
        iframe.src =
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/409578645&amp;color=ff5500&amp;inverse=false&amp;auto_play=false&amp;show_user=true";
        $("body").append(musiccreation);
        bgmusic = document.getElementById("bgmusic");
        bgmusic.volume = 0.5;
        kon1++;
    }
    if (kon1 == 2) {
        $('body').css('background-color', 'yellow');
        kon1++;
    }
    if (kon1 == 1) {
        thonk();
        $("#aphorisms").html("pa ching wulululuWULULULULULULU, arent you a clever boy?");
        kon1++;
    }
}

$(document).keydown(function (e) {
    presses.push(e.keyCode);
    console.log(presses);
    if (presses.toString().indexOf(secretcode) >= 0) {
        if (kon1 == 0) {
            kon1 = 1;
        };
        aftermath();
        presses = [];
    }
});

function volume(val) {
    var player = document.getElementById('bgmusic');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}


if (window.location.hash) {
    var taghash = window.location.hash;
    if (taghash == "#minimalistic") {
        $("#cssholder").attr("href", "style/minimalistic.min.css");
        var particleholder = document.getElementById('particles-js');
        particleholder.remove();
    }
}