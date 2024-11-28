for (let i = 1; i <= 6; i++){
    $( `.project-${i} .pic-indicator `).on( "click", function() {
        $(`.project-${i} .big-picture`).attr("src", $(this).attr("src"));
    });
    
}

$( ".indicator" ).on( "click", function() {
    $(".indicator").removeClass("aktif");
    $(this).addClass("aktif");
    for (let i = 1; i <= 6; i++){
        if ($(this).hasClass( "indic-"+i )){
            $(".the-proj").removeClass("aktif");
            $(".project-"+i).addClass("aktif");
        } 
    }
});
