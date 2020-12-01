$(document).ready(function(){
$("td").on({click: function(){
    $(this).css("color", "#1da1f2",);}
                                     });
                                        });
function zoomin() { 
            var GFG = document.getElementById("imga"); 
            var currWidth = GFG.clientWidth; 
            GFG.style.width = (currWidth + 500) + "px"; 
        } 
          
        function zoomout() { 
            var GFG = document.getElementById("imga"); 
            var currWidth = GFG.clientWidth; 
            GFG.style.width = (currWidth - 500) + "px"; 
        } 