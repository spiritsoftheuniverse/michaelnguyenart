var pagelist = ['home','art','music','kill','videogames']
$(document).ready(function(){
        linkButtons();
        makeTransitions();
})
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
                $('#'+pagelist[i]+'button').click(function(){
                        loadPage(pagelist[i]);
                })
        }
}
function loadPage(page)
{
        for(let i = 0; i < pagelist.length; i++) {
                $('#'+pagelist[i]+'Content').css('display', 'none');
                $('#'+pagelist[i]+'button').removeClass('buttonSelected').addClass('button').css('pointer-events','auto');
        }
        console.log(page);
        $('#'+page+'Content').css('display', 'block');
        $('#'+page+'button').addClass('buttonSelected').removeClass('button').css('pointer-events','none');
}