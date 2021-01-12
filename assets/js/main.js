

/*=====================================================================
=+=+=+=+=+=+=+=+=+=+=+=+     Sticky Header    +=+=+=+=+=+=+=+=+=+=+=+=
======================================================================*/

       $(document).ready(function () {
           $(window).scroll(function () {
               $('header').toggleClass("sticky-head", ($(window).scrollTop() > 100));
            });
       });



/*=====================================================================
=+=+=+=+=+=+=+=+=+=+=+=+     Sticky Header    +=+=+=+=+=+=+=+=+=+=+=+=
======================================================================*/
(function(_preventEvent){
    webix.html.preventEvent = function (e) {
        if ("touch"==e.type.substr(0, 5)) {
            return;
        }
        return _preventEvent.apply(this, arguments);
    }
}(webix.html.preventEvent));



/*=====================================================================
=+=+=+=+=+=+=+=+=+=+=+=+     Sticky Header    +=+=+=+=+=+=+=+=+=+=+=+=
======================================================================*/

function openNav() {
  document.getElementById("myNav").classList.add("opened-menu");
}

function closeNav() {
  document.getElementById("myNav").classList.remove("opened-menu");
}