
console.log("Your index.js file is loaded correctly!");


$(document).ready(function(){
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
  var quote1 = '<ul class="quoteBox2"> "Content precedes design. Design in the absence of content is not design, it&#39s decoration." <br><br> - Jeffrey Zeldman <a class="quoteBtn">  >> </a>'
  var quote2 = '<ul class="quoteBox"> "The more I deal with the work as something that is my own, as something that is personal, the more successful it is." <br><br> - Marian Bantjes <a class="quoteBtn">  >> </a>'
        // $("ul .quoteBox").html("Content precedes design. Design in the absence of content is not design, it’s decoration.” - Jeffrey Zeldman"
    $(".quoteBtn").click(function(){
        console.log("hover is working")
        $(".quoteBox").replaceWith(quote1)
        
    })

    // $(".quoteBtn").click(function(){
    //     console.log("hover is working")
    //     $(".quoteBox2").replaceWith(quote2)
        
    // })
});
