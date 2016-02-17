
require.config({
    paths: {
        jquery: '../lib/jquery',
        bootstrap: '../lib/bootstrap/js/bootstrap',
        bootSideMenu: '../lib/bootSideMenu/js/BootSideMenu'
    }
});

require(["jquery", "bootstrap", "bootSideMenu"], function ($, bs, bSM) {
    $(document).ready(function () {
        $('#demo').BootSideMenu({
            side: "right",
            autoClose: true
        });
        $("#myH1").text(sum(2,3));
        show();
        $("#myH2").text($("#name").val());
    });
});

function sum(x,y){
    return x+y;
}
function show(){
    var name=$("#name").val("222");
}
