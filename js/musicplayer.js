var tiotealbum = [
        {
                file : 'afterThePurseSnatcher.mp3',
                name : 'After the Purse Snatcher',
        },
        {
                file : 'foggySundayBreakfast.mp3',
                name : 'Foggy Sunday Breakfast',
        },
        {
                file : 'sunshineBreeze.mp3',
                name : 'Sunshine Breeze',
        },
        {
                file : 'navigatingthestreets.mp3',
                name : 'Navigating the Streets',
        },
        {
                file : 'lateForTheBus.mp3',
                name : 'Late For the Bus',
        },
        {
                file : 'heroOfTheShield.mp3',
                name : 'Hero of the Shield',
        },
        {
                file : 'funeral.mp3',
                name : 'Funeral',
        },
        {
                file : 'slamDance.mp3',
                name : 'Slam Dance',
        },
        {
                file : 'theScholarly.mp3',
                name : 'The Scholarly',
        },
];
var dreamstrataalbum = [
        
        {
                file : 'titleTheme.mp3',
                name : 'Title Theme',
        },
        
        {
                file : 'olderBrother.mp3',
                name : 'Older Brother',
        },
        
        {
                file : 'direTretch.mp3',
                name : 'Dire Tretch',
        },
        
        {
                file : 'lairOfTheWretch.mp3',
                name : 'Lair of the Wretch',
        },
        
        {
                file : 'rosienthe.mp3',
                name : 'Rosienthe',
        },
        
        {
                file : 'velvetLumasVillage.mp3',
                name : 'Velvet Lumas Village',
        },
        
        {
                file : 'airaGarden.mp3',
                name : 'Aira Garden',
        },
        
        {
                file : 'maraBrook.mp3',
                name : 'Mara Brook',
        },
        
        {
                file : 'airaTemple.mp3',
                name : 'Aira Temple',
        },
        {
                file : 'edenHighroad.mp3',
                name : 'Eden Highroad',
        },
        {
                file : 'towerOfMist.mp3',
                name : 'Tower of Mist',
        },
        {
                file : 'lairOfLostMagi.mp3',
                name : 'Lair of the Lost Magi',
        },
        {
                file : 'serenityHouseOfMages.mp3',
                name : 'Serenity House of Mages',
        },
        {
                file : 'stoneMachina.mp3',
                name : 'Stone Machina',
        },
        {
                file : 'edenUnderpass.mp3',
                name : 'Eden Underpass',
        },
        {
                file : 'skycalea.mp3',
                name : 'Skycalea',
        },
        {
                file : 'perilousSkies.mp3',
                name : 'Perilous Skies',
        },
        {
                file : 'observatory.mp3',
                name : 'Observatory',
        },
        {
                file : 'cemetary.mp3',
                name : 'Cemetary',
        },
        {
                file : 'plagueOrc.mp3',
                name : 'Plague Orc',
        },
        {
                file : 'cathedralOfBlackenedBlood.mp3',
                name : 'Cathedral of Blackened Blood',
        },
        {
                file : 'trialOfFalcozar.mp3',
                name : 'Trial of Falcozar',
        },
        {
                file : 'protoMachina.mp3',
                name : 'Proto Machina',
        },
        {
                file : 'kindlingHouseOfMages.mp3',
                name : 'Kindling House of Mages',
        },
        {
                file : 'brideOfTheNecromancer.mp3',
                name : 'Bride of the Necromancer',
        },
        {
                file : 'sacredImpasse.mp3',
                name : 'Sacred Impasse',
        },
        {
                file : 'villageOfTheLumpadumps.mp3',
                name : 'Village of the Lumpadumps',
        },
        {
                file : 'toBeContinued.mp3',
                name : 'To Be Continued',
        },
];
var ninjastoryalbum = [
        {
                file : 'defineJustice.mp3',
                name : 'Define Justice',
        },
        {
                file : 'flamesAndChains.mp3',
                name : 'Flames and Chains',
        },
        {
                file : 'MayTheBeanSproutsBeWithYou.mp3',
                name : 'May the Bean Sprouts Be With You',
        },
        {
                file : 'bigWig.mp3',
                name : 'Big Wig (Hare Metal)',
        },
        {
                file : 'ridingWithMyMilfy.mp3',
                name : 'Riding With My Milfy',
        },
        {
                file : 'yearOfTheMonkey.mp3',
                name : 'Year of the Monkey',
        },
        {
                file : 'farmersDaughterMastered.mp3',
                name : 'Farmer\`s Daughter',
        },
        {
                file : 'thunderBus.mp3',
                name : 'Thunder Bus',
        },
        {
                file : 'welcomeToTheZoo.mp3',
                name : 'Welcome to the Zoo',
        },
        {
                file : 'wrathOfTheGoodNinjas.mp3',
                name : 'Wrath of the Good Ninjas',
        },
];
var albumlist = [
        {
                name : 'Time is of the Essence',
                folder: 'timeisoftheessence',
                data : tiotealbum,
        },
        {
                name : 'Ninja Story',
                folder: 'ninjastory',
                data : ninjastoryalbum,
        },
        {
                name : 'Dreamstrata Soundtrack',
                folder : 'dreamstrata',
                data : dreamstrataalbum,
        }
];
var currentAlbumIndex = -1;
var currentTrackIndex = -1;
$(document).ready(function(){
        populateAlbumList();
        setMusicPlayerControls();
})
function populateAlbumList()
{
        for(let i = 0; i < albumlist.length; i++) {
                var album = albumlist[i];
                var html = `<div class="musicAlbumTitle" data="`+i+`">`+album.name+`</div>`;
                $('#albumlisting').append(html);
        }
        $('.musicAlbumTitle:last').css('border-bottom', 'none');
        $('.musicAlbumTitle').on('click touchstart', function(event) {
                event.preventDefault();
                playAlbum($(this).attr('data'));
        });
}
function setMusicPlayerControls()
{
        $('#volumeSlider').change(function() {
                var value = $(this).val();  // Get the value of the slider
                setVolume(value);
        });
        $('#playbutton').on('click touchstart', function(event) {
                event.preventDefault();
                playPause()
        });
        $('#prevbutton').on('click touchstart', function(event) {
                event.preventDefault();
                seekTrack(-1);
        });
        $('#nextbutton').on('click touchstart', function(event) {
                event.preventDefault();
                seekTrack(1);
        });
}
function setVolume(value)
{
        var volume = value * 0.01;
        var audioElement = document.getElementById('musicPlayer');
        audioElement.volume = volume;  // Set volume between 0.0 and 1.0
}
function playAlbum(index)
{
        $('.musicAlbumTitle').css({
                'font-weight' : 'normal',
                'pointer-events' : 'auto',
                'color' : '#999',
        });
        $('.musicAlbumTitle[data="'+index+'"]').css({
                'font-weight' : 'bold',
                'pointer-events' : 'none',
                'color' : '#FFF',
        });
        index = parseInt(index);
        
        currentTrackIndex= 0;
        currentAlbumIndex = index;

        populateTrackList();
}
function populateTrackList()
{
        var albumdata = albumlist[currentAlbumIndex];
        var folder = albumdata.folder;
        var list = albumdata.data;
        var name = albumdata.name;
        $('#tracklisting').html('').css('margin-top','8px');
        $('.musicAlbumTitle:last').css('border-bottom', '1px solid rgba(0, 255, 255, 0.15)');
        for(let i = 0; i < list.length; i++) {
            var song = list[i];
            var html = `<div class="musicTrackTitle" data="music/`+folder+`/`+song.file+`" data-index="`+i+`">`+(i + 1)+`. `+song.name+`</div>`;
            $('#tracklisting').append(html);
        }
        $('.musicTrackTitle').on('click touchstart', function(event) {
                event.preventDefault();
                $('.musicTrackTitle').css({
                        'font-weight' : 'normal',
                        'pointer-events' : 'auto',
                        'color' : '#999',
                });
                $(this).css({
                        'font-weight' : 'bold',
                        'pointer-events' : 'none',
                        'color' : '#FFF',
                });
                setSelectedTrack($(this).attr('data-index'))
                playSong($(this).attr('data'), $(this).attr('data-index'));
        });
        var firsttrack =  $('.musicTrackTitle:eq(0)');
        playSong(firsttrack.attr('data'), firsttrack.attr('data-index'));
        setSelectedTrack(0);
}
function setSelectedTrack(index)
{
        $('.musicTrackTitle').css({
                'font-weight' : 'normal',
                'pointer-events' : 'auto',
                'color' : '#999',
        });
        $('.musicTrackTitle[data-index="'+index+'"]').css({
                'font-weight' : 'bold',
                'pointer-events' : 'none',
                'color' : '#FFF',
        });  
}

function playPause()
{
        if(currentAlbumIndex == -1)
        {
                return;
        }
        var audioPlayer = document.getElementById('musicPlayer');

    // Check if the audio is paused
        if (audioPlayer.paused) {
                audioPlayer.play();  // Play the audio
                $('#playbutton').css('background-image', 'url(images/musicplayer/pause.png)');
        } else {
                audioPlayer.pause();  // Pause the audio
                $('#playbutton').css('background-image', 'url(images/musicplayer/play.png)');
        }
}

function playSong(song, index) {
        currentTrackIndex = parseInt(index);
        
        var audioPlayer = document.getElementById('musicPlayer');
        // Set the new source directly on the <audio> element
        audioPlayer.src = song;
        // Load the audio file
        audioPlayer.load();
        // Ensure the file can be played before starting
        audioPlayer.addEventListener('canplay', function() {
            audioPlayer.play(); 
            $('#playbutton').css('background-image', 'url(images/musicplayer/pause.png)');
            audioPlayer.addEventListener('ended', function() {
                seekTrack(1);
            });
        }, { once: true }); 
}
function seekTrack(index)
{
        if(currentAlbumIndex == -1)
        {
                return;
        }
        currentTrackIndex += index;
        var tracklist = albumlist[currentAlbumIndex].data;
        if(currentTrackIndex > tracklist.length - 1)
        {
                currentTrackIndex = 0;
        }
        if(currentTrackIndex == -1)
        {
                currentTrackIndex = tracklist.length - 1;
        }
        playSong('music/'+albumlist[currentAlbumIndex].folder+'/'+tracklist[currentTrackIndex].file, currentTrackIndex);
        setSelectedTrack(currentTrackIndex);
}