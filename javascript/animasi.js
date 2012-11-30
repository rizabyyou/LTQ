$(function() {

    $('#vertikal').hover(function() {
        $('img.top', $(this)).stop().animate({top: '188px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({top: '0'}, 500);
    });
    
    $('#kiri').hover(function() {
        $('img.top', $(this)).stop().animate({left: '-293px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0'}, 500);
    });
    
    $('#kiri-bawah').hover(function() {
        $('img.top', $(this)).stop().animate({left: '-293px', top: '188px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0', top: '0'}, 500);
    });
    
    $('#bawah').hover(function() {
        $('img.top', $(this)).stop().animate({top: '-188px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({top: '0'}, 500);
    });
    
    $('#kanan').hover(function() {
        $('img.top', $(this)).stop().animate({left: '293px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0'}, 500);
    });
    
    $('#kanan-bawah').hover(function() {
        $('img.top', $(this)).stop().animate({left: '293px', top: '188px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0', top: '0'}, 500);
    });
    
});