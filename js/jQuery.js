jQuery(document).ready(function(){
    $(window).scroll(function(){
        if(window.pageYOffset > 50){
            console.log("over 400");
            $("a").removeClass("text-white");
            $("#navBtn").removeClass("btn-outline-white");
            $("#navBtn").addClass("btn-danger");
            $("#navBtn").addClass("text-white");
            $("#navAppvilla").addClass("index");
            $("#navLogo").prop("src", "./images/logo.svg");
            $("#upArrow").removeClass("d-none");
        }else{
            console.log("under 400");
            $("a").addClass("text-white");
            $("#navBtn").addClass("btn-outline-white");
            $("#navBtn").removeClass("btn-danger");
            $("#navBtn").removeClass("text-white");
            $("#navAppvilla").removeClass("index");
            $("#navLogo").prop("src", "./images/white-logo.svg");
            $("#upArrow").addClass("d-none");
        }

    });
});
