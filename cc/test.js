Game.Win('Third-party');
if(TestMod === undefined) var TestMod = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
TestMod.name="test mod";
TestMod.version="0.0.1";
TestMod.GameVersion="2.052";

TestMod.launch = function(){
	TestMod=this;
  TestMod.init= function(){
	  TestMod.iconsImage="https://greenecad.github.io/cc/img/customIcons.png"
          Game.Tiers[16]={name:'Ultimatium',unlock:650,achievUnlock:750,iconRow:21,color:'#0f0aa8',price:		50000000000000000000000000000000000000000000}
    	  var u2=Game.TieredUpgrade('More forwards from grandma','<q>RE:RE:RE:RE:thought you\'d get another kick out of this ;))</q>','Grandma',16);
	  u2.order=200.85
   	
	  Game.wrinklerLimit=15;
	  Game.wrinklers.push({id:"14",close:0,sucked:0,phase:0,x:0,y:0,r:0,hurt:0,hp:Game.wrinklerHP,selected:0,type:0,clicks:0});
	  if(!Game.customGetWrinklersMax) Game.customGetWrinklersMax = [];
		CCSE.ReplaceCodeIntoFunction('Game.getWrinklersMax', 'return', "var ret =", 0);
	  CCSE.SliceCodeIntoFunction('Game.getWrinklersMax', -1, `
				// Game.getWrinklersMax injection point 0
				for(var i in Game.customGetWrinklersMax) ret = Game.customGetWrinklersMax[i](ret);
				return ret;
			`);
	  //finish experimenting later
	  var u1=CCSE.NewUpgrade('Even More Wrinklers', "Increases max wrinklers by one.<q>A nice even 15.</q>", 666666666666666666666666666666666, [0, 0, TestMod.iconsImage]);
	  u1.order=25001;
	  
	  Game.customGetWrinklersMax.push(function(base){
	    if(Game.Has('Even More Wrinklers')) base+=1;
	    return Math.min(Game.wrinklerLimit, base);
	  })
	  Game.registerHook("check", function(){
		  if(TestMod.isLoaded){
			  if(Game.Has('Elder spice')){
				  Game.Unlock('Even More Wrinklers');
			  }
		  }
	  })
	  TestMod.isLoaded = 1;
    	  if (Game.prefs.popups) Game.Popup(TestMod.name + ' loaded!');
    	  else Game.Notify(TestMod.name + ' loaded!', '', '', 1, 1);
	  
  }
  
   
   TestMod.init();
}

if(!TestMod.isLoaded){
	if(CCSE && CCSE.isLoaded){
		TestMod.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(TestMod.launch);
	}
}
