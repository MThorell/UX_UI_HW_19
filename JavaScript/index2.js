
console.log("Your index.js file is loaded correctly!");

var quote = $('#text1 span'); 
var quote2 = $('#text2 span');


$(document).ready(function(){
    $(".Btn1").click(function(){
        // console.log ("Btn1 working")
        $(".quote1").addClass("hidden");
        $(".quote2").removeClass("hidden");
    });

    $(".Btn2").click(function(){
       // console.log ("Btn1 working")
        $(".quote2").addClass("hidden");
        $(".quote3").removeClass("hidden");
    });
    $(".Btn3").click(function(){
        // console.log ("Btn1 working")
         $(".quote3").addClass("hidden");
         $(".quote1").removeClass("hidden");
     });
});



// $(document).ready(function(){
    

//     $('.quoteBtn').on("click", function(){
      
//         console.log ("click working");

//         $(".quoteBox .quote1 span").addClass("hidden")
//             console.log ("quotebox working")
            
//         });
//     });