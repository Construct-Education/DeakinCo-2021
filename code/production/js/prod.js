(function () {  //method from: https://community.canvaslms.com/thread/22500-mobile-javascript-development
    // The following function will retrieve and load a JavaScript file - https://www.nczonline.net/blog/2009/07/28/the-best-way-to-load-external-javascript/
    function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    loadScript("https://combinatronics.com/Construct-Education/DeakinCo-2021/main/code/js/main.js", function () { 
    });
})();