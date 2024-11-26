
//for scroll nav-bar 
let aboutScrollTop=$("#about").offset().top
console.log(aboutScrollTop)
$(window).scroll(function(){
    let windowFromTop=$(window).scrollTop()
    if(windowFromTop < aboutScrollTop){
        $(".navbar").removeClass("bg-black")
        $(".navbar").addClass("bg-light")
    }
    else {
        $(".navbar").removeClass("bg-light")
        $(".navbar").addClass("bg-black")
    }
    console.log(windowFromTop)
})

// for smooth scrolling
$("a[href^='#']").click(function(e){
    let anchorHref =$(e.target).attr("href")
    let moveToSection = $(anchorHref).offset().top
   $("html").animate({scrollTop:moveToSection},1000)  

})
//move class actice when i click in it
let navbarAnchors=$(".nav-link");
navbarAnchors.click(function(e){
    navbarAnchors.removeClass("active")
    $(e.target).addClass("active")
}) 
//move class actice  when i secoll actice 
$(window).on("scroll", function() {
    let scrollPos = $(window).scrollTop();
    navbarAnchors.each(function() {
        let sectionId = $(this).attr("href");
        let sectionOffset = $(sectionId).offset().top;
        let sectionHeight = $(sectionId).outerHeight();
        if (scrollPos >= sectionOffset - 10 && scrollPos < sectionOffset + sectionHeight) {
            navbarAnchors.removeClass("active");
            $(this).addClass("active");
        }
    });
});

//for loading scren 
$(window).ready(function(){
    $(".loading").fadeOut(1000,function(){$("body").css("overflow" ,"visible")})   
})

//for change them
let sideberSpan =$(".sideber-inner span")
sideberSpan.eq(0).css("background-color" , "lightseagreen")
sideberSpan.eq(1).css("background-color" , "lightsalmon")
sideberSpan.eq(2).css("background-color" , "lightgreen")
sideberSpan.eq(3).css("background-color" , "lightcoral")
sideberSpan.eq(4).css("background-color" , "darkmagenta ")

$(".fa-gear").click(function(){
    let siebaIneer=$(".sideber-inner ").innerWidth()
   let leFet =$(".sideber").css("left")
   console.log(leFet)
   console.log(siebaIneer)
   if(leFet == "0px") {
       $(".sideber").animate({left:-siebaIneer},1000)
   }
   else {
    $(".sideber").animate({left:0},1000) }})

//for change Them 
sideberSpan.click(function(e){
    let color =$(e.target).css("background-color")
    $(":root").css("--maincolor",color)
})