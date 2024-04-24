if(SanityMeter === undefined) var SanityMeter = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
SanityMeter.name="Sanity meter";
SanityMeter.version="0.0.1";
SanityMeter.GameVersion="2.052";
SanityMeter.pic="https://klattmose.github.io/CookieClicker/img/timer.png" //placeholder image

SanityMeter.launch = function(){
  SanityMeter.init= function(){

    SanityMeter.sanity=1;
    CCSE.CreateSpecialObject('sanity', 
			function(){//grandmapocalypse started(I cant find where the stage is stored)}, 
			function(picframe){
				picframe.pic = SanityMeter.pic;
				picframe.frame = 0;
			}, 
			SanityMeter.ToggleSpecialMenu
		);
   	
	  Game.customDrawSpecial.push(SanityMeter.Update);

    CCSE.customSave.push(function(){
      //todo: save sanity level
    })
		
		CCSE.customLoad.push(function(){
			l('specialPopup').className='framed prompt offScreen';
		});
	  
	  
	  
	  SanityMeter.isLoaded = 1;
    	  if (Game.prefs.popups) Game.Popup(SanityMeter.name + ' loaded!');
    	  else Game.Notify(SanityMeter.name + ' loaded!', '', '', 6, 1);
	  
  }

  SanityMeter.ToggleSpecialMenu = function(str){
		str = CCSE.SetSpecialMenuImage(str, SanityMeter.pic, 0);
		
		str += '<h3>Timer</h3>' + 
			   '<div class="line"></div>' + 
			   '<div id="SanityBar" style="text-align:left;margin-bottom:4px;"></div>';
		
		return str;
	}
  
  TimerWidget.Update = function(){
		if(Game.specialTab == 'timer'){
			var maxWidth = l('SanityBar').getBoundingClientRect().width - 185;
			
			l('SanityBar').innerHTML = '';
			
			
			
			
		}
	

  
   if(CCSE.ConfirmGameVersion(SanityMeter.name, SanityMeter.version, SanityMeter.GameVersion))SanityMeter.init();
}


if(!SanityMeter.isLoaded){
	if(CCSE && CCSE.isLoaded){
		SanityMeter.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(SanityMeter.launch);
	}
}
