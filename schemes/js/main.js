jQuery(document).ready(function()
{
    $('.flexslider').flexslider(
    {
        slideshowSpeed: 4000,
        before: function(slider)
        {
            var slide = $('.slides li').eq(slider.animatingTo);
            var color = slide.attr('data-back');
            var name = slide.attr('data-name');
            $('html').css('background-color', color);
            $('.theme-name').fadeOut(200, function()
            {
                $(this).html(name).fadeIn(2200);
            });
        }
    });
});
