window.onload = function () {
    $('#search').mouseover(function () {
        $("#searchbar").show();
    });

    $('#search').mouseout(function () {
        $("#searchbar").hide();
    });


    var mybodyid = $('body').attr('id');
    var mynavid = '#nav_' + mybodyid;
    // Set iamhere id
    $(mynavid).attr('id', 'iamhere');
    // hide all nested lists
    $('#navigation ul ul ul').hide();
    // show parents of "iamhere"
    $('#iamhere').parents().show();
    // show children of "iamhere"
    $('#iamhere').children().show();
    
       $('#nav_projects_aca').mouseover(function () {
        $('#nav_projects_aca ul').show();
    });
    $('#nav_projects_aca').mouseout(function () {
        $('#nav_projects_aca ul').hide();
    });



    $('#nav_projects_work').mouseover(function () {
        $('#nav_projects_work ul').show();
    });
    $('#nav_projects_work').mouseout(function () {
        $('#nav_projects_work ul').hide();
    });

    $('#nav_projects_other').mouseover(function () {
        $('#nav_projects_other ul').show();
    });
    $('#nav_projects_other').mouseout(function () {
        $('#nav_projects_other ul').hide();
    });



};
