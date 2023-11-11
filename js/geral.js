var oldpage = 1;
var currentPage = 1;
var maxPages = 1;
var audio_volume = (10/100);
var font_sizes_px = {desktop : 16, mobile : 14};
const url = window.location.href;

function changePage(){
    // console.log('-------------------');
    // console.log('#pg'+oldpage);
    // console.log('#pg'+currentPage);
    $('#pg'+oldpage).removeClass('d-block');
    $('#pg'+oldpage).addClass('d-none');
    $('#pg'+currentPage).removeClass('d-none');
    $('#pg'+currentPage).addClass('d-block');
    $('.page-input').val(currentPage);
}

$(document).ready(function(){
    maxPages = $('.page').length;
    console.log(maxPages);
    console.log(url);

    //+++++++++++++++ AMBIENTE +++++++++++++++
    if(!url.includes('jonatas-soares-alves.github.io')){
        console.log('AMBIENTE LOCAL');
        $('.github-enviroment').remove();
    }else{
        console.log('AMBIENTE GITHUB');
        $('.local-enviroment').remove();
    }
    //+++++++++++++++ AMBIENTE +++++++++++++++

    $('#audio').prop("volume", audio_volume);
    // $('#audio').get(0).play();

    $('#vol').change(function() {
        console.log('Volume', ($(this).val()/100));
        audio_volume = ($(this).val()/100);
        $('#audio').prop("volume", audio_volume );
        $('.volume-numero').text($(this).val());
    });

    $('.save-config').click(function() {
        if ($( window ).width() > 600) {
            font_sizes_px.desktop = parseInt($('#fonte-size').val());
            font_sizes_px.mobile = (font_sizes_px.desktop * 0.9);
            $(".conteudo").css("font-size", font_sizes_px.desktop+'px');
        }else{
            font_sizes_px.mobile = parseInt($('#fonte-size').val());
            font_sizes_px.desktop = (font_sizes_px.mobile * 1.1);
            $(".conteudo").css("font-size", font_sizes_px.mobile+'px');
        }
    });

    $('.btn-prev').click(function() {
        if (currentPage > 1) {
        oldpage = currentPage;
        currentPage--;
        }
        changePage();
    });

    $('.btn-next').click(function() {
        if (currentPage < maxPages) {
        oldpage = currentPage;
        currentPage++;
        }
        changePage();
    });

    $('.page-input').change(function() {
        var newPage = parseInt($(this).val());
        console.log('newPage: '+newPage);
        oldpage = currentPage;
        console.log('oldpage: '+oldpage);
        if (newPage >= 1 && newPage <= maxPages) {
        currentPage = newPage;
        }
        $(this).val(currentPage);
        console.log('finalpage: '+currentPage);
        changePage();
    });
});