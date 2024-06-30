$( ".project-1 .pic-indicator" ).on( "click", function() {
    $(".project-1 .big-picture").attr("src", $(this).attr("src"));
});
$( ".project-2 .pic-indicator" ).on( "click", function() {
    $(".project-2 .big-picture").attr("src", $(this).attr("src"));
});
$( ".project-3 .pic-indicator" ).on( "click", function() {
    $(".project-3 .big-picture").attr("src", $(this).attr("src"));
});
$( ".project-4 .pic-indicator" ).on( "click", function() {
    $(".project-4 .big-picture").attr("src", $(this).attr("src"));
});
$( ".project-5 .pic-indicator" ).on( "click", function() {
    $(".project-5 .big-picture").attr("src", $(this).attr("src"));
});
$( ".project-6 .pic-indicator" ).on( "click", function() {
    $(".project-5 .big-picture").attr("src", $(this).attr("src"));
});



$( ".indicator" ).on( "click", function() {
    $(".indicator").removeClass("aktif");
    $(this).addClass("aktif");
    if ($(this).hasClass( "indic-1" )){
        $(".the-proj").removeClass("aktif");
        $(".project-1").addClass("aktif");
    } else if ($(this).hasClass( "indic-2" )){
        $(".the-proj").removeClass("aktif");
        $(".project-2").addClass("aktif");
    } else if ($(this).hasClass( "indic-3" )){
        $(".the-proj").removeClass("aktif");
        $(".project-3").addClass("aktif");
    } else if ($(this).hasClass( "indic-4" )){
        $(".the-proj").removeClass("aktif");
        $(".project-4").addClass("aktif");
    } else if ($(this).hasClass( "indic-5" )){
        $(".the-proj").removeClass("aktif");
        $(".project-5").addClass("aktif");
    } else if ($(this).hasClass( "indic-6" )){
        $(".the-proj").removeClass("aktif");
        $(".project-6").addClass("aktif");
    } 
});
