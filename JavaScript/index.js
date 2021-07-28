
console.log("Your index.js file is loaded correctly!");


$(document).ready(function(){

    var quotes = ['Content precedes design. Design in the absence of content is not design, it’s decoration.”  - Jeffrey Zeldman',
    'The more I deal with the work as something that is my own, as something that is personal, the more successful it is."- Marian Bantjes',
    '"You cannot use up creativity. The more you use, the more you have." -- Maya Angelou',
    '"Design adds value faster than it adds costs." -- Joel Spolsky',
    '"It is through mistakes that you actually can grow. You have to get bad in order to get good." -- Paula Scher',];

    function getRandomQuote() {
        var random_quote = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(random_quote);
        document.getElementById("some-random-quote").innerHTML = random_quote;
      }
    //     // $("ul .quoteBox").html("Content precedes design. Design in the absence of content is not design, it’s decoration.” - Jeffrey Zeldman"
    // $(".quoteBtn").click(function(){
    //     console.log("hover is working")
    //     $(".quoteBox").replaceWith('<ul class="quoteBox2"> "Content precedes design. Design in the absence of content is not design, it’s decoration.” <br><br> - Jeffrey Zeldman <a class="quoteBtn">  >> </a>')
    //     // $("ul .quoteBox").html("Content precedes design. Design in the absence of content is not design, it’s decoration.” - Jeffrey Zeldman");
    //     .stopPropagation();
    // })

    // $(".quoteBtn").click(function(){
    //     console.log("hover is working")
    //     $(".quoteBox2").replaceWith('<ul class="quoteBox"> "The more I deal with the work as something that is my own, as something that is personal, the more successful it is." <br><br> - Marian Bantjes <a class="quoteBtn">  >> </a>')
    //     // $("ul .quoteBox").html("Content precedes design. Design in the absence of content is not design, it’s decoration.” - Jeffrey Zeldman");
    // })
});
