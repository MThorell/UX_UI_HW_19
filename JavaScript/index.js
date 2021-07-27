
console.log("Your index.js file is loaded correctly!");


$(document).ready(function(){
    $(".quoteBtn").click(function(){
        console.log("hover is working")
        $(".quoteBox").replaceWith('<ul class="quoteBox2"> "Content precedes design. Design in the absence of content is not design, it’s decoration.” <br><br> - Jeffrey Zeldman <a class="quoteBtn">  >> </a>')
        // $("ul .quoteBox").html("Content precedes design. Design in the absence of content is not design, it’s decoration.” - Jeffrey Zeldman");
        .stopPropagation();
    })

    $(".quoteBtn").click(function(){
        console.log("hover is working")
        $(".quoteBox2").replaceWith('<ul class="quoteBox"> "The more I deal with the work as something that is my own, as something that is personal, the more successful it is." <br><br> - Marian Bantjes <a class="quoteBtn">  >> </a>')
        // $("ul .quoteBox").html("Content precedes design. Design in the absence of content is not design, it’s decoration.” - Jeffrey Zeldman");
    })
});
