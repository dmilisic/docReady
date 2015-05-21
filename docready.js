(function() {
    "use strict";
    var readyFired = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function docReady() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            // TODO: Enter your code here
        }
    }
    
    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            docReady();
        }
    }
    
    // if document already ready to go, schedule the docReady function to run
    // IE only safe when readyState is "complete", others safe when readyState is "interactive"
    if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
        setTimeout(docReady, 1);
    } else {
        // otherwise install event handlers
        if (document.addEventListener) {
            // first choice is DOMContentLoaded event
            document.addEventListener("DOMContentLoaded", docReady, false);
            // backup is window load event
            window.addEventListener("load", docReady, false);
        } else {
            // must be IE
            document.attachEvent("onreadystatechange", readyStateChange);
            window.attachEvent("onload", docReady);
        }
    }
})();
