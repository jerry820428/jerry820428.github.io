var playist;
var cssSelector;
var options;
var myPlaylist;
var PlayerData;

$(document).ready(function(){


  playlist = [{
      title:"Fix You",
      artist:"Coldplay",
      mp3:"music/Coldplay - Fix You.mp3",
      oga:"music/Coldplay - Fix You.mp3",
      poster: "https://i.kfs.io/album/global/81355,3v1/fit/500x500.jpg"
    },{
      title:"正想著你呢",
      artist:"持修",
      mp3:"music/持修 - 正想著你呢.mp3",
      oga:"music/持修 - 正想著你呢.mp3",
      poster: "https://akstatic.streetvoice.com/music_albums/Ch/ih/ChihSiou_/Us46GxzrJutiTopLZFcVkY.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg"
    },{
      title:"Ça Ira",
	  artist:"Joyce Jonathan",
      mp3: "music/Joyce Jonathan - Ça Ira.mp3",
      oga: "music/Joyce Jonathan - Ça Ira.mp3",
      poster: "https://img.mymusic.net.tw/mms/album/L/301/181301.jpg"
  }];
  
  cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  options = {
    swfPath: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3",
    volumechange: function(event) {
      $( ".volume-level" ).slider("value", event.jPlayer.options.volume);
    },
    timeupdate: function(event) {
      $( ".progress" ).slider("value", event.jPlayer.status.currentPercentAbsolute);
    }
  };
  
  myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  PlayerData = $(cssSelector.jPlayer).data("jPlayer");
  
  
  // Create the volume slider control
  $( ".volume-level" ).slider({
     animate: "fast",
		max: 1,
		range: "min",
		step: 0.01,
		value : $.jPlayer.prototype.options.volume,
		slide: function(event, ui) {
			$(cssSelector.jPlayer).jPlayer("option", "muted", false);
			$(cssSelector.jPlayer).jPlayer("option", "volume", ui.value);
		}
  });
  
  // Create the progress slider control
  $( ".progress" ).slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = PlayerData.status.seekPercent;
			if(sp > 0) {
				// Move the play-head to the value and factor in the seek percent.
				$(cssSelector.jPlayer).jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					 $( ".progress" ).slider("value", 0);
				}, 0);
			}
		}
	});

  
});