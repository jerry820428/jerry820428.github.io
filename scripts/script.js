var playlist = [];
var cssSelector;
var options;
var myPlaylist;
var PlayerData;
var list = ["Adele - Skyfall","Adele - Someone Like You","Adele - When We Were Young","Aerosmith - I Dont Wanna Miss a Thing","Aimer - Akane Sasu","Alan Walker - All Falls Down (feat. Noah Cyrus with Digital Farm Animals)","Alan Walker - Sing Me To Sleep","amy adams - happy working song","ANNA TSUCHIYA - LUCY","Aqua - Barbie Girl","Aqua - MY OH MY","AquaTimez - 穿越千夜","Avicii - Broken Arrows","Avicii - Friend Of Mine ft. Vargas Lagola","Avicii - The Days","Avicii - The Nights","Avicii - X You","Avicii and Nicky Romero - I Could Be The One","Avril Lavigne - Complicated","Avril Lavigne - Don`t Tell Me","Avril Lavigne - Freak Out","Avril Lavigne - He Wasn`t","Avril Lavigne - Hot","Avril Lavigne - Im With You","Avril Lavigne - Innocent","Avril Lavigne - Runaway","Avril Lavigne - Sk8er Boi","Avril Lavigne - Together","Avril Lavigne - What The Hell","Avril Lavigne feat. Chad Kroeger - Let Me Go","Backstreet Boys -  Never gone","Backstreet Boys - Helpless When She Smiles","Backstreet Boys - Poster girl","Backstreet Boys - Safest place to hide","Bad Meets Evil - Lighters ft. Bruno Mars","Beatles - Let_It_Be","Black Eyed Peas - I Just Cant Get Enough","Blue - All Rise","Blue - Guilty","Blue - U Make Me Wanna","Bon Jovi - What do you got","Bruno Mars - Count On Me","Bruno Mars - Gorilla","Bruno Mars - Just the Way You Are","Bruno Mars - Talking To The Moon","Bruno Mars - The Lazy Song","Bruno Mars - The Other Side (ft. Cee Lo Green & B.o.B)","Bump of chicken - Sailing day","Burlesque - You Haven't Seen the Last of Me","Caesars - Jerk it out","Cee Lo Green - Fuck You","Charming Lounge Music - Breathe","Colbie Caillat - Bubbly","Coldplay - Charlie Brown","Coldplay - Christmas Lights Lyrics","Coldplay - Clocks","Coldplay - Fix You","Coldplay - Hymn for the Weekend","Coldplay - Ink","Coldplay - Life In Technicolor ii","Coldplay - O","Coldplay - Shiver","Coldplay - Speed Of Sound","Coldplay - The Scientist","Coldplay - Viva La Vida","Coldplay - Yellow","Craig David - Insomnia","dan fogelberg - longer","Daniel Powter - Bad Day","Daniel Powter - best of me","Daniel Powter - Free Loop","Daniel Powter - Jimmy gets high","Daniel Powter - Lie to me","Daniel Powter - Love you lately","David Guetta - Hey Mama ft Nicki Minaj, Bebe Rexha Afrojack","David Guetta - Play Hard ft. Ne-Yo, Akon","David Guetta Showtek - Bad ft.Vassy","Deep Spirit - No Cover Song (Manox Club Mix)","Diddy Dirty Money - Coming Home","DJ Lubel - Wrong Hole","DJ Snake - Let Me Love You ft. Justin Bieber","Ed Sheeran - Castle On The Hill","Ed Sheeran - Perfect","Ed Sheeran - Photograph","Ed Sheeran - Thinking Out Loud","Enrique Iglesias - Bailando","Epic Rap Battles of History - Alexander the Great vs Ivan the Terrible","Epic Rap Battles of History - Gandhi vs Martin Luther King Jr","Epic Rap Battles of History - Moses vs Santa Claus","Epic Rap Battles of History - Mozart vs Skrillex","Epic Rap Battles of History - Theodore Roosevelt vs Winston Churchill","Find You - Zedd [Alex Goot Against The Current COVER]","Fitz and the Tantrums - HandClap","Flo Rida - Club Can't Handle Me","Flo Rida - Low feat. T-Pain","Flo Rida - Wild Ones ft. Sia","Fort Minor - Where'd You Go","Foster The People - Pumped Up Kicks","Frente - Bizarre Love Triangle","Fun - Carry on","Gabrielle Aplin - Please Don&39t Say You Love Me","Gavin DeGraw - Not Over You","George Ezra - Budapest","GReeeeN - 奇蹟","Green Day - 21st Century Breakdown","Green Day - Boulevard of Broken Dreams","Green Day - Holiday","Greenday - Good Riddance","Guns N' Roses - Sweet Child O' Mine","Gym Class Heroes -  Stereo Hearts (ft. Adam Levine)","James Blunt - 1973","James Blunt - Same Mistake","James Blunt - Stay The Night","James Blunt - Wisemen","James Blunt - You're beautiful","Jason Derulo - Ridin Solo","Jason Derulo - Trumpets","Jay-Z - Young Forever","Jay-z ft Rihanna and Kanye West - Run This Town","Jonas Blue - Fast Car ft. Dakota","Joyce Jonathan - Je Ne Sais Pas","Joyce Jonathan - Ça Ira","Joyce Jonathon - Si Seulement Tout Etait Ecrit","Justin Bieber - Love Yourself ","Justin Bieber - What Do You Mean","Jónsi - Boy Lilikoi ","Jónsi - Go Do","Kaskade - Atmosphere","Kaskade - Last Chance","Kings Of Leon - Use Somebody","Knaan - Waving Flag","Kygo & Selena Gomez - It Aint Me","Kygo - Firestone ft. Conrad Sewell","Lady Gaga - Paparazzi","Lady GaGa - Poker Face","Lana Del Rey - Young and Beautiful","Lara梁心頤 - 靠近一點點","Late in the Day","lene marlin - Disguise","lene marlin - Sitting Down Here","Lenka - Dangerous and Sweet","Lenka - Knock Knock","Lenka - Skipalong","Linkin Park - Faint","Linkin Park - From The Inside","Linkin Park - Somewhere I Belong","LMFAO - Sexy and I know it","Lorde - Team","Luis Fonsi - Despacito ft. Daddy Yankee","MACKLEMORE RYAN LEWIS - DOWNTOWN","MAGIC! - Rude","Mark Ronson - Uptown Funk ft. Bruno Mars","Maroon 5 - Girls Like You ft. Cardi B","Maroon 5 - Infatuation","Maroon 5 - Memories","Maroon 5 - Never Gonna Leave This Bed","Maroon 5 - This love","Maroon 5 - Wont Go Home Without You","Michel Teló - Ai Se Eu Te Pego","Moby - Porcelain","Muse - Madness","My Chemical Romance - Welcome To The Black Parade","Ne Yo - Mad","Nelly - Dilemma","Olivia - A Little Pain","OneRepublic - All The Right Moves","Owl City - Fireflies","Paramore - Still Into You","Passenger - Let Her Go","perhapslove","Pitbull - Back in Time","R. City ft. Adam Levine - Locked Away","RagnBone Man - Human","Ricky Martin - Livin' La Vida Loca","Rihanna -Take A Bow","RITA ORA - I Will Never Let You Down ","Roll Deep - Good Times","Shakira - Waka Waka","Sia - Cheap Thrills","Sia - Elastic Heart","Sia - The Greatest ft. Kendrick Lamar","Skrillex and Diplo - Where Are Ü Now with Justin Bieber","Song Voyage - Chicken Attack feat. Takeo Ischi","TAEYEON - I feat. Verbal Jint","The Asteroids Galaxy Tour - The golden age","The Black Eyed Peas - Don't Lie","The Black Eyed Peas - Where is the love","The Fray - How to Save a Life","The Fray - Never Say Never","The Fray - You Found Me","The ROOTLESS - One day","TheFatRat - Xenogenesis","Tokio Hotel - World Behind My Wall","Train - Hey, Soul Sister","Twenty one pilots - Ride","Twenty one pilots - Stressed Out","Walk The Moon - Shut Up and Dance With Me","will.i.am - This Is Love ft. Eva Simons","Zedd - Beautiful Now ft. Jon Bellion","Zedd - Clarity ft. Foxes","Zedd- Clarity feat. Foxes Zedd Union Mix","一青窈 - 瓢蟲","中島美嘉 - 曾經我也想過一了百了","久石讓 - Summer","于文文 - 體面","南拳媽媽 - What Can I Do","南拳媽媽 - 下雨天","周杰倫 - 她的睫毛","周杰倫 - 梯田","安室奈美惠 - Last Piece","安室奈美惠-Wo Wa","宋冬野 - 董小姐","小戀","岑寧兒 - 追光者","怪醫黑傑克-Destiny","怪醫黑傑克-月光花","持修 - Imma Get A New One","持修 - 正想著你呢","朴惠京 - yesterday","林俊傑 - 修煉愛情","林宥嘉 - 傻子","林宥嘉 - 想自由","梁静茹 - 屬於","梁靜茹 - 崇拜","棒球大聯盟 - 心繪","森山直太朗 - 愛情的黃昏","楊丞琳 - 青春住了誰","氣志團 - 午夜嘉年華","氣志團 - 結婚鬥魂進行曲","洪佩瑜 - 踮起腳尖愛","滅火器 - 海上的人","猴子把戲 - 光朝","王力宏 - Dream Again","王菲 - 匆匆那年","王菲 - 旋木","王菲 - 百年孤寂","王菲 - 開到荼蘼","王藍茵 - 惡作劇","田馥甄Hebe Tien - 魔鬼中的天使","白安 - 是什麼讓我遇見這樣的你","米津玄師 - Lemon","米津玄師 - サンタマリア","羅密歐與茱麗葉 - 維洛那","茄子蛋 - 浪流連","蔡依林 Jolin Tsai - 說愛你","蕭賀碩 - 我愛你","蘇打綠 sodagreen - 無眠","郁可唯 - 路過人間","陳奕迅 - 多少","陳奕迅 - 心的距離","陳奕迅 - 浮誇","青山黛瑪 - 留在我身邊"]

$(document).ready(function(){
	for(i = 0; i < list.length; i++){
		playlist.push({title:list[i].split(" - ")[1],artist:list[i].split(" - ")[0],mp3:"music/" + list[i] + ".mp3", oga:"music/" + list[i] + ".mp3", poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuya8vHw0LRsdg1VYXQBeZTgJS5JON0ES4uA&usqp=CAU"})
	}

  
  
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

  myPlaylist.shuffled = true;
  myPlaylist.loop = true;
  myPlaylist.shuffle();
  //myPlaylist.shuffle();
});
//myPlaylist.shuffle();
//myPlaylist.shuffle();