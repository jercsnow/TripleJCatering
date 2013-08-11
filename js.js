
function timing_func() {
    document.getElementById('text1Box').className =
        document.getElementById('text1Box').className.replace( /(?:^|\s)NiceLightBlue(?!\S)/g , '' )
    document.getElementById('text2Box').className =
        document.getElementById('text2Box').className.replace( /(?:^|\s)NiceGreen(?!\S)/g , '' )
    document.getElementById('text3Box').className =
        document.getElementById('text3Box').className.replace( /(?:^|\s)NiceRed(?!\S)/g , '' )
    document.getElementById('img1').style.backgroundImage="url('photos/wedding/"+(index1+1)+".jpg')";
    document.getElementById('img2').style.backgroundImage="url('photos/specialEvents/"+(index2+1)+".jpg')";
    document.getElementById('img3').style.backgroundImage="url('photos/corporateEvents/"+(index3+1)+".jpg')";
    if(index == 0) {
        index1 = (index1 + 1) % 4;
        fadeOut('img1');
        fading = setTimeout(function(){document.getElementById('img1').style.backgroundImage="url('photos/wedding/"+(index1+1)+".jpg')"; fadeIn('img1');}, 500);

    } else if (index == 1) {
        index2 = (index2 + 1) % 4;
        fadeOut('img2');
        fading = setTimeout(function(){document.getElementById('img2').style.backgroundImage="url('photos/specialEvents/"+(index2+1)+".jpg')"; fadeIn('img2');}, 500);
    } else {
        index3 = (index3 + 1) % 4;
        fadeOut('img3');
        fading = setTimeout(function(){document.getElementById('img3').style.backgroundImage="url('photos/corporateEvents/"+(index3+1)+".jpg')"; fadeIn('img3');}, 500);
    }
    index = (index + 1) % 3;
}

function entered(divID) {
    document.getElementById('text1Box').className =
        document.getElementById('text1Box').className.replace( /(?:^|\s)NiceLightBlue(?!\S)/g , '' )
    document.getElementById('text2Box').className =
        document.getElementById('text2Box').className.replace( /(?:^|\s)NiceGreen(?!\S)/g , '' )
    document.getElementById('text3Box').className =
        document.getElementById('text3Box').className.replace( /(?:^|\s)NiceRed(?!\S)/g , '' )
    for (var i=0; i<timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    for (var i=0; i<timers.length; i++) {
        clearTimeout(timers[i]);
    }
    clearTimeout(fading);
    setOpacity('img1', 100);
    setOpacity('img2', 100);
    setOpacity('img3', 100);
    if(divID == 'photo1') {
        document.getElementById('text1Box').className += 'NiceLightBlue';
        document.getElementById('img1').style.backgroundImage="url('photos/wedding/l.gif')";
        document.getElementById('img2').style.backgroundImage="url('photos/wedding/m.gif')";
        document.getElementById('img3').style.backgroundImage="url('photos/wedding/r.gif')";
    } else if(divID == 'photo2') {
        document.getElementById('text2Box').className += 'NiceGreen';
        document.getElementById('img1').style.backgroundImage="url('photos/specialEvents/l.gif')";
        document.getElementById('img2').style.backgroundImage="url('photos/specialEvents/m.gif')";
        document.getElementById('img3').style.backgroundImage="url('photos/specialEvents/r.gif')";
    } else {
        document.getElementById('text3Box').className += 'NiceRed';
        document.getElementById('img1').style.backgroundImage="url('photos/corporateEvents/l.gif')";
        document.getElementById('img2').style.backgroundImage="url('photos/corporateEvents/m.gif')";
        document.getElementById('img3').style.backgroundImage="url('photos/corporateEvents/r.gif')";
    }
    fadeIn('img1');
    fadeIn('img2');
    fadeIn('img3');
}

function reset(divID) {
    for (var i=0; i<timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    for (var i=0; i<timers.length; i++) {
        clearTimeout(timers[i]);
    }
    fadeIn('img1');
    fadeIn('img2');
    fadeIn('img3');
    timers.push(setInterval(function(){timing_func()}, 4000));
    document.getElementById('text1Box').className =
        document.getElementById('text1Box').className.replace( /(?:^|\s)NiceLightBlue(?!\S)/g , '' )
    document.getElementById('text2Box').className =
        document.getElementById('text2Box').className.replace( /(?:^|\s)NiceGreen(?!\S)/g , '' )
    document.getElementById('text3Box').className =
        document.getElementById('text3Box').className.replace( /(?:^|\s)NiceRed(?!\S)/g , '' )
    document.getElementById('img1').style.backgroundImage="url('photos/wedding/"+(index1+1)+".jpg')";
    document.getElementById('img2').style.backgroundImage="url('photos/specialEvents/"+(index2+1)+".jpg')";
    document.getElementById('img3').style.backgroundImage="url('photos/corporateEvents/"+(index3+1)+".jpg')";
}

function getElm(eID) {
    return document.getElementById(eID);
}

function show(eID) {
    getElm(eID).style.display='block';
}

function hide(eID) {
    getElm(eID).style.display='none';
}

function setOpacity(eID, opacityLevel) {
    var eStyle = getElm(eID).style;
    eStyle.opacity = opacityLevel / 100;
    eStyle.filter = 'alpha(opacity='+opacityLevel+')';
}

function fade(eID, startOpacity, stopOpacity, duration) {
    var speed = Math.round(duration / 100);
    var timer = 0;
    if (startOpacity < stopOpacity){
        for (var i=startOpacity; i<=stopOpacity; i++) {
            setTimeout("setOpacity('"+eID+"',"+i+")", timer * speed);
            timer++;
        }
        return;
    }
    for (var i=startOpacity; i>=stopOpacity; i--) {
        setTimeout("setOpacity('"+eID+"',"+i+")", timer * speed);
        timer++;
    }
}

function fadeIn(eID) {
    setOpacity(eID, 0); var timer = 0;
    for (var i=1; i<=100; i++) {
        timeouts.push(setTimeout("setOpacity('"+eID+"',"+i+")", timer * 5));
        timer++;
    }
}

function fadeOut(eID) {
    var timer = 0;
    for (var i=100; i>=1; i--) {
        timeouts.push(setTimeout("setOpacity('"+eID+"',"+i+")", timer * 5));
        timer++;
    }
}
