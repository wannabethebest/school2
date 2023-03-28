$(document).ready(function(){
    $('.header').height($(window).height());
   })
  
   $("#insert").on("click", function(){
    if($("input[name=insert]:checked").val() === "plusik")
    {
    $("#list").append("<li>" +"НАШИ ЗАМЕЧАТЕЛЬНЫЕ УЧИТЕЛЯ"+ "</li>");
    }
    else
    $("#list1").prepend("<li>" +"ИХ НЕТ"+ "</li>");
    });
    $(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
 }) 



 var comment=new Array();
 var i=0;
 if (document.readyState!=="loading"){
     showcontent();
 }
 else{
     document.addEventListener("DOMContentLoaded",showcontent());
 }
 function showcontent(){
     if(localStorage.getItem('comment')!==null){
         comment =JSON.parse(localStorage['comment']);
if(comment){
    for (var i=0;i<comment.length;i++)
$('#comment ul').append("<li>"+comment[i]+"</li><br>");    

}
     }
    
 }
 i=comment.length;
 $("#btntextblock").on("click",function(){
     var tex =$("#textblock").val();
     if (tex!==""){
         $('#comment ul').append("<li>"+ tex +"</li><br>");
         comment[i++]=tex;
         //console.log("comment[i]"+i+"="+comment[i-1]);
         $("#textblock").val("");
     
     } 
 });
 window.onbeforeunload=function(){
        localStorage.setItem('comment',JSON.stringify(comment));
      
 };
 