
console.log("Your index.js file is loaded correctly!");

var quote = $('#text1 span'); 
var quote2 = $('#text2 span');

$(document).ready(function(){

    $('.quoteBtn').on("click", function(){
      
        // console.log ("click working");
        if ($(".quoteFrame").is("#text1")){
            // $(".quoteBox quote1").addClass("hidden");
            // $(".quoteBox quote1").removeClass("active");
            $(".quoteFrame").removeAttr("text1");
            // $(".quoteBox quote2").addClass("active");
            // $(".quoteBox quote2").removeClass("hidden");
            $(".quoteBox quote1").css("display", "none");
            $(".quoteBox quote2").css("display", "block");

            $(quote).text();
             console.log ("if working");
            // $(".quoteBox").removeClass("hidden");
            // $("#quote1").addClass("hidden");
            // $("#quote1").removeClass("active")
            // $(".quote1").addClass(".hidden");
            // $(".quote2").removeClass(".active");
            // $(".quote1").removeClass(".hidden");
            // $(".quote2").addClass(".active");
            // $(".quote1").css("display", "none");
            // $(".quote2").css("display", "block"); 
        }

        else if ($("quoteBox").hasClass("active")) {
            console.log ("else if working");
                $("#quote1").removeClass("hidden");
                $("#quote2").addClass("hidden")
                $("#quote1").addClass("active")
            // $(".quote2").addClass(".hidden");
            // $(".quote1").removeClass(".hidden");
            // $(".quote2").removeClass(".hidden");
            // $(".quote1").addClass(".active");
            // $(".quote2").css("display", "none");
            // $(".quote1").css("display", "block");
        }

    });
//   var friends_arr = ['<ul class="quoteBox2"> "Content precedes design. Design in the absence of content is not design, it&#39s decoration." <br><br> - Jeffrey Zeldman <a class="quoteBtn">  >> </a>',
//                    '<ul class="quoteBox"> "The more I deal with the work as something that is my own, as something that is personal, the more successful it is." <br><br> - Marian Bantjes <a class="quoteBtn">  >> </a>',
//                    "Sunil","Vijay"];

// $(document).ready(function(){
//  $.each(friends_arr, function(index,value){
//   console.log( index + " : " + value );
//  });
// });

// $(".quoteBtn").click(function(){
//   if ($(friends_arr).hasIndex("0")) {
    
//       console.log("hover is working")
//       $(".quoteBox").replaceWith(friends_arr)
//     }
  
//   else if ($(friends_arr).hasIndex("1")) {
    
//       console.log("hover is working")
//       $(".quoteBox2").replaceWith(quote2)
      
//     };


//   var quote1 = '<ul class="quoteBox2"> "Content precedes design. Design in the absence of content is not design, it&#39s decoration." <br><br> - Jeffrey Zeldman <a class="quoteBtn">  >> </a>'
//   var quote2 = '<ul class="quoteBox"> "The more I deal with the work as something that is my own, as something that is personal, the more successful it is." <br><br> - Marian Bantjes <a class="quoteBtn">  >> </a>'
//         // $("ul .quoteBox").html("Content precedes design. Design in the absence of content is not design, it’s decoration.” - Jeffrey Zeldman"
//     $(".quoteBtn").click(function(){
//         console.log("hover is working")
//         $(".quoteBox").replaceWith(quote1)
        
//     })

    // $(".quoteBtn").click(function(){
    //     console.log("hover is working")
    //     $(".quoteBox2").replaceWith(quote2)
        
    // })
});
