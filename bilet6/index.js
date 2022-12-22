function getOrientation() {
    if( window.orientation) {
        if( Math.abs( window.orientation ) == 90 ) {
              return 'landscape';
        } else {
              return 'portrait';
        }
    } else {
        return false; 
    }
}



function getOrientation2() {
if (window.matchMedia("(orientation: portrait)").matches) {
    return 'portrait';
 }

 if (window.matchMedia("(orientation: landscape)").matches) {
    return 'landscape';
 } else {
    return false; 
}
}
