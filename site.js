var pagelist = ['home','art','music','kill','videogames', 'friends']
$(document).ready(function(){
        linkButtons();
        makeTransitions();
        makeLinks();
})
function makeLinks()
{
        $('.discordLink').attr('href', 'https://discord.gg/ZhUU69vCXy');
        $('.ytLink').attr('href', 'https://www.youtube.com/@michaelnguyenart');
}
function makeTransitions()
{
        var list = ['dc','yt'];
        for(let i = 0; i < list.length; i++) {
                $('#'+list[i]+'logo').mouseenter(function(){
                        $(this).stop().animate({
                                'opacity': 1
                        }, 100);
                }).mouseleave(function(){
                        $(this).stop().animate({
                                'opacity': 0.5
                        }, 50);
                })
        }
        
}
function linkButtons()
{
        for(let i = 0; i < pagelist.length; i++) {
                $('#'+pagelist[i]+'button').on('click touchstart', function(event) {
                        event.preventDefault();
                        loadPage(pagelist[i]);
                });
        }
        $('#killartlink').on('click touchstart', function(event) {
                event.preventDefault();
                loadPage('art');
        });
        var dates = [2014, 2019, 2020, 2021];

         for(let i = 0; i < dates.length; i++) {
                $('#killdate'+dates[i]).on('click touchstart', function(event) {
                        event.preventDefault();
                        loadPage('art');
                        showArt(dates[i]);
                });
        }
}
function loadPage(page)
{
        for(let i = 0; i < pagelist.length; i++) {
                $('#'+pagelist[i]+'Content').css('display', 'none');
                $('#'+pagelist[i]+'button').removeClass('buttonSelected').addClass('button').css('pointer-events','auto');
        }
        $('#'+page+'Content').css('display', 'block');
        $('#'+page+'button').addClass('buttonSelected').removeClass('button').css('pointer-events','none');
}