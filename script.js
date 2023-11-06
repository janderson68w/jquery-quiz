$("#a4").on("click", function(){
    $("#a4").css({
        "background-color": "rgba(105, 233, 93)",
        "color": "rgb(0, 0, 0)",
        "border-color": "rgb(0, 255, 0)"
    });
    $(".btn").css("cursor", "not-allowed");
    $(".btn").attr("disabled", true);
    $("#reset").show();
});
$("#a3").on("click", function(){
    $("#a3").css({
        "background-color": "rgba(233, 93, 93)",
        "color": "rgb(0, 0, 0)",
        "border-color": "rgb(255, 0, 0)"
    });
    $(".btn").css("cursor", "not-allowed");
    $(".btn").attr("disabled", true);
    $("#a4").css({
        "background-color": "rgba(105, 233, 93)",
        "color": "rgb(0, 0, 0)",
        "border-color": "rgb(0, 255, 0)"
    });
    $("#reset").show();
});
$("#a2").on("click", function(){
    $("#a2").css({
        "background-color": "rgba(233, 93, 93)",
        "color": "rgb(0, 0, 0)",
        "border-color": "rgb(255, 0, 0)"
    });
    $(".btn").css("cursor", "not-allowed");
    $(".btn").attr("disabled", true);
    $("#a4").css({
        "background-color": "rgba(105, 233, 93)",
        "color": "rgb(0, 0, 0)",
        "border-color": "rgb(0, 255, 0)"
    });
    $("#reset").show();
});
$("#a1").on("click", function(){
    $("#a1").css({
        "background-color": "rgba(233, 93, 93)",
        "color": "rgb(0, 0, 0)",
        "border-color": "rgb(255, 0, 0)"
    });
    $(".btn").css("cursor", "not-allowed");
    $(".btn").attr("disabled", true);
    $("#a4").css({
        "background-color": "rgba(105, 233, 93)",
        "color": "rgb(0, 0, 0)",
        "border-color": "rgb(0, 255, 0)"
    });
    $("#reset").show();
});
$("#reset").on("click", function(){
    $(this).hide()
    $(".btn").css({
        "cursor": "pointer",
        "background-color": "",
        "border-color": "",
        "color": ""
        
    });
    $(".btn").attr("disabled", false);
});