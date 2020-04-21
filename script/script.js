$(document).ready(function(){

    jQuery.expr[':'].contains = function(a, i, m) {
        return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;

    };
	$("#date").append(new Date().getFullYear());
    var movies = $("#movies").html();
    $("#search").keyup(function(){
    	//alert("praveen chutiya hai");
        $("#movies").html(movies);
        var filter = $(this).val();
        $('.row').find(".card-title:not(:contains(" + filter + "))").parent().parent().parent().remove();
    });
});