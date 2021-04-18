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
      title:"Castle On The Hill",
      artist:"Ed Sheeran",
      mp3:"music/Ed Sheeran - Castle On The Hill.mp3",
      oga:"music/Ed Sheeran - Castle On The Hill.mp3",
      poster: "https://upload.wikimedia.org/wikipedia/zh/1/1f/Castle_On_The_Hill.png"
    },{
      title:"Jimmy gets high",
      artist:"Daniel Powter",
      mp3:"music/Daniel Powter - Jimmy gets high.mp3",
      oga:"music/Daniel Powter - Jimmy gets high.mp3",
      poster: "https://lineimg.omusic.com.tw/img/album/1120964.jpg?v=20200325220816"
	},{
      title:"It Aint Me",
      artist:"Kygo & Selena Gomez",
      mp3:"music/Kygo & Selena Gomez - It Aint Me.mp3",
      oga:"music/Kygo & Selena Gomez - It Aint Me.mp3",
      poster: "https://i1.sndcdn.com/artworks-000210790368-23bo48-t500x500.jpg"
	},{
	  title:"Faint",
      artist:"Linkin Park",
      mp3:"music/Linkin Park - Faint.mp3",
      oga:"music/Linkin Park - Faint.mp3",
      poster: "https://lineimg.omusic.com.tw/img/album/1197842.jpg?v=20201008155826"
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