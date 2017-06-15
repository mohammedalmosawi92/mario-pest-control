$("#goombasNumber").on("input",function() {
    var goombasNum = $("#goombasNumber").val();
    $("#goombasTotal").val(Number(goombasNum) * 5);
});

$("#bobombsNumber").on("input",function() {
    var bobombsNum = $("#bobombsNumber").val();
    $("#bobombsTotal").val(Number(bobombsNum) * 7);
});

$("#cheepcheepsNumber").on("input",function() {
    var cheepcheepsNum = $("#cheepcheepsNumber").val();
    $("#cheepcheepsTotal").val(Number(cheepcheepsNum) * 11);
});

$(window).on("input", function() {
    var goombasSum = $("#goombasTotal").val();
    var bobombsSum = $("#bobombsTotal").val();
    var cheepcheepsSum = $("#cheepcheepsTotal").val();
    $("#totalSum").val(Number(goombasSum) + Number(bobombsSum) + Number(cheepcheepsSum));
})
//Mohammed Aziz Almosawi copyright @ all rights reserved
