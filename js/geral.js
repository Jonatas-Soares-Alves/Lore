var oldpage = 1;
var currentPage = 1;
var maxPages = 1;
const url = window.location.href;

function changePage(){
    console.log('-------------------');
    console.log('#pg'+oldpage);
    console.log('#pg'+currentPage);
    $('#pg'+oldpage).removeClass('d-block');
    $('#pg'+oldpage).addClass('d-none');
    $('#pg'+currentPage).removeClass('d-none');
    $('#pg'+currentPage).addClass('d-block');
    $('.page-input').val(currentPage);
}

$(document).ready(function(){
    maxPages = $('.page').length;
    console.log(maxPages);

    if(!url.includes('jonatas-soares-alves.github.io') && url.includes('http://127.0.0.1/')){
        $('.github-enviroment').remove();
        // $('link.github-enviroment').remove();
        // $('img.github-enviroment').remove();
        // $('script.github-enviroment').attr("disabled","disabled");
    }else{
        $('.local-enviroment').remove();
    }

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