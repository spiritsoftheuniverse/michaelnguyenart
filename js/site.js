var pagelist = ['home','art','music','kill','videogames', 'friends']
var friendslinks = [
        {
                link : 'https://www.thehiddengemprivatetattoostudio.com/',
                image : 'images/links/hiddengem.png',
                description : 'Antonio Grajales, an artist friend for decades and counting. Working as a tattoo artist while living the most artistic life one can muster.',
        },
        {
                link : 'https://zamfofex.neocities.org/',
                image : 'images/links/zamfofex.png',
                description : 'The home of Zamfofex at Neocities. A buddy I met from the Ninja Girls Academy era, who is an artistic programmer.',
        },
        {
                link : 'https://mollyjanegain.com/',
                image : 'images/links/mjg.jpg',
                description : 'Molly Jane Gain. A pal from days of old, who is an acoustic live musician, also working magic in studio.',
        },
        {
                link : 'https://www.youtube.com/@tonka36',
                image : 'images/links/tonka.jpg',
                description : 'Tonka. Fellow Castlevania enthusiast, enjoyer of life, and Marvel Super Heroes champion.',
        },
        {
                link : 'https://www.youtube.com/@Doobie843',
                image : 'images/links/doobie.jpg',
                description : 'Doobie Scholar. Always with a profile pic to sex up all the ladies, Doobie is an all around strong fighter in every fighting game.',
        },
        {
                link : 'https://www.youtube.com/@liquidmetal-x',
                image : 'images/links/lmx.jpg',
                description : 'Liquid Metal X, one of the best in the world in the realm of Capcom Marvel games in between the first and last titles of the classics.',
        },
];
$(document).ready(function(){
        linkButtons();
        makeTransitions();
        makeLinks();
        drawFriends();
        var date = new Date();
        $('#currentdate').html(date.getFullYear());
})
function drawFriends()
{
        for(let i = 0; i < friendslinks.length; i++) {
            $('#friendsContent').append(makeFriendLink(friendslinks[i].link, friendslinks[i].image, friendslinks[i].description));
        }
}
function makeFriendLink(link, image, description)
{
        var html  = `
        <div class="linkbox">
                <a class="linktag" href="`+link+`"><img src="`+image+`" class="linkimage"></a>
                <div class="linkTextContainer">`+description+`</div>
        </div>`;
        return html;
}
function makeLinks()
{
        $('.discordLink').attr('href', 'https://discord.gg/ZhUU69vCXy');
        $('.ytLink').attr('href', 'https://www.youtube.com/@michaelnguyenart');
        $('.patreonLink').attr('href', 'https://patreon.com/michaelsArtwork');
}
function makeTransitions()
{
        var list = ['dc','yt', 'pt'];
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