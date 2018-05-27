$(document).ready(function(){
getQuote();
  var Quote;
function getQuote(){
var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data){
     var a = data.quoteAuthor
    if (a === "") {
      a = "unkown";
    }
    $(".quote").html('"' + data.quoteText +'"');
    $(".author").html("- " + a);
    Quote = '"' + data.quoteText +'"' + " -" + data.quoteAuthor;
  }
 )};
 $("#getMessage").on("click",function(){
getQuote();
})
 $('#tweet').on("click",function(){
window.open("https://twitter.com/intent/tweet?text=" + Quote);
});
});
