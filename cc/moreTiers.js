Game.Win('Third-party');
if(MoreTiers === undefined) var MoreTiers = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
MoreTiers.name="More Tiers";
MoreTiers.version="0.1.2";
MoreTiers.GameVersion="2.052";

MoreTiers.launch = function(){
  MoreTiers.init= function(){

    Game.Tiers[16]={name:'obsidamin',unlock:650,achievUnlock:750,iconRow:21,color:'#0f0aa8',price:		5000000000000000000000000000000000000000000000}

    var u1=Game.TieredUpgrade('Grandpas','<q>The presence of grandpas seems to have different effects on various grandmas. Some work harder, some spend more time fussing at them than baking more cookies. This upgrade allows you to perfectly optimize th euse of grandpas to maximize your grandma\'s baking capacity.</q>','Grandma',16);
    u1.icon=[1,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u1.order=200.9;
    var u2=Game.TieredUpgrade('Weather Manipulation','<q>Cookie plants are notoriously fickle. One Freeze or thunderstorm can destroy a whole farm of cookies! Thankfully, with your full control of all time and space, you can control what types of weather come to your farms, ensuring all your fields are in perfect condition.\nThe ability to control all weather also helps with negotiations with foreign countries. No rain for you!</q>','Farm',16);
    u2.icon=[2,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u2.order=300.9
    var u3=Game.TieredUpgrade('A slightly more delicate approach','<q>You know, blowing up entire planets has been fun and all, but some of the more fragile materials are being destroyed in the process. If you maybe just mine like a normal person, you could make better use of those entire planets you\'re destroying, and make the sacrifice of those who lived there a bit more worthwhile.</q>','Mine',16);
    u3.icon=[3,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u3.order=400.9;
    var u4=Game.TieredUpgrade('Outsourcing','<q>Building your factories in third world countries has so many benefits, where do you even start? \n Why in the world wern\'t you doing this earlier?</q>','Factory',16);
    u4.icon=[4,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u4.order=500.9;
    var u5=Game.TieredUpgrade('Just print more money','<q>It works, trust me.</q>','Bank',16);
    u5.icon=[15,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u5.order=525.9;
    var u6=Game.TieredUpgrade('Diefication','<q>At this point, you are God, and deserve to be treated as such.</q>','Temple',16);
    u6.icon=[16,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u6.order=550.9;
    var u7=Game.TieredUpgrade('Rituals','<q>Ritual spells have much better cookie return rates than regular spells, but require various odd objects to perform. Always keep on hand some sugar, salt, aluminum, feathers, and at least one live vertebrate, just in case.</q>','Wizard tower',16);
    u7.icon=[17,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u7.order=575.9;
    var u8=Game.TieredUpgrade('Planet Loaders','<q>Ships large enough to transport entire planets at once. Also useful for moving the ungodly amount of cookies you have made.</q>','Shipment',16);
    u8.icon=[5,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u8.order=600.9;
    var u9=Game.TieredUpgrade('cookie-to-cookie transmutation','<q>If you\'re turning everything else into a cookie, why not turn low quality cookies into high quality cookies?</q>','Alchemy lab',16);
    u9.icon=[6,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u9.order=700.9;
    var u10=Game.TieredUpgrade('Dimension finder','<q>A high tech device that finds new alternate universes and determines their cookiability. Does not take into account any eldritch horrors contained in the dimension.</q>','Portal',16);
    u10.icon=[7,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u10.order=800.9;
    var u11=Game.TieredUpgrade('5D Cookie Clicker with Multiverse Timetravel','<q>Oh no...\nnot again...</q>','Time machine',16);
    u11.icon=[8,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u11.order=900.9;
    var u12=Game.TieredUpgrade('Truck theory','<q>A theory that particles are really just scientist\'s representation of trucks, because they never got to smash trucks together in childhood.\nDoesn\'t help you with quantum mechanics at all, but helps you understand why your scientists find joy in something so complicated.</q>','Antimatter condenser',16);
    u12.icon=[13,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u12.order=1000.9;
    var u13=Game.TieredUpgrade('Larger light spectrum','<q>So far, your prisms have only worked with the visible spectrum of light. Expanding it to contain ultraviolet, infrared, x-ray, and other forms of light should increase your production fivefold!(no its just twofold, sorry)</q>','Prism',16);
    u13.icon=[14,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u13.order=1100.9;
    var u14=Game.TieredUpgrade('Ultimate luck charm','<q>A combination of multiple rabbit\'s feet, four leaf clovers, horseshoes, and various other good-luck objects.\nAn absolute abomination to look at, but boosts your luck considerably.</q>','Chancemaker',16);
    u14.icon=[19,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u14.order=1200.9;
    var u15=Game.TieredUpgrade('Fractal fractals','<q>A fractal that creates fractals that create cookies. But isn\'t this just the definition of a fractal? Fractals are hard to comprehend.</q>','Fractal engine',16);
    u15.icon=[20,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u15.order=1300.9;
    var u16=Game.TieredUpgrade('while(true) Cookies.create();','<q>For such a simple script, this puts a lot of stress on your servers.</q>','Javascript console',16);
    u16.icon=[21,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u16.order=1400.9;
    var u17=Game.TieredUpgrade('Quick acension','<q>You have found that many Idleverses obtain certain benefits when all progress is given up and you start back from the beginning. This can be quickly achieved by the complete destruction of all existing life via nuclear warheads. Might be a bit unethical, but look at all those bonuses!</q>','Idleverse',16);
    u17.icon=[22,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u17.order=1500.9;
    var u18=Game.TieredUpgrade('Electrical stimulation','<q>The electricity used to transmit signals in your cortex baker\'s brains is absolutely immense. Sometimes they have a hard time coming up with enough energy to run at full capacity. Now, with these new devices resembling giant defibrillators, your cortex bakers can always have enough electricity to be running at 100%. Ignore any claims that this causes extreme pain to the cortex bakers.</q>','Cortex baker',16);
    u18.icon=[23,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u18.order=1600.9;
    var u19=Game.TieredUpgrade('Other clones','<q>You have had the ability to clone anyone, living or dead, that you have the DNA for, and the only person you have cloned is yourself? What in the world are you doing? Bring back Albert Einstein, clone a few bodybuilders for your personal guard, create a few people to kill for fun, the possibilites are endless!</q>','You',16);
    u19.icon=[24,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u19.order=1700.9;
    
    var u20=Game.NewUnshackleUpgradeTier({tier: 16,q:'Obsidamin is a rare mineral found deep in the Earth\'s surface. When it is a solid, its hardness is greater than diamonds, but it melts into an orange substance at room temperature. Licking it gives a warm, slightly spicy flavor, though consumption is generally discouraged.'});
    u20.icon=[10,0, "https://greenecad.github.io/cc/img/buildingIcons.png"];
    u20.order=1999999

    var u21=CCSE.NewUpgrade("Kitten CEOs", "You gain <b>more CpS</b> the more milk you have.<q>Wondurrful business model going, sir</q>", 9000000000000000000000000000000000000000000000000000000000, [18, 0, "https://greenecad.github.io/cc/img/buildingIcons.png"]);Game.last.kitten=1;Game.MakeTiered(Game.last,16);
    CCSE.ReplaceCodeIntoFunction("Game.CalculateGains", "if (Game.Has('Kitten strategists')) catMult*=(1+Game.milkProgress*0.105*milkMult);", "if (Game.Has('Kitten CEOs')) catMult*=(1+Game.milkProgress*0.12*milkMult);", 1, false, false);
    u21.order=9999999999
    
    order=102; CCSE.NewUpgrade('Duodecillion fingers',loc("Multiplies the gain from %1 by <b>%2</b>.",[getUpgradeName("Thousand fingers"),20]);+'<q>How does this even work? are these all on one hand?</q>',1000000000000000000000000000000000000,[0,0,"https://greenecad.github.io/cc/img/buildingIcons.png"]);Game.MakeTiered(Game.last,16);
    CCSE.ReplaceCodeIntoFunction("Game.mouseCps", "if (Game.Has('Undecillion fingers')) add*=	20;", "if (Game.Has('Duodecillion fingers')) add*=	20;", 1, false, false);
    CCSE.ReplaceCodeIntoFunction(Game.Objects["Cursor"].buyFunction, "if (this.amount>=550) Game.Unlock('Undecillion fingers');", "if (this.amount>=600) Game.Unlock('Duodecillion fingers');", 1, false, false);
    CCSE.ReplaceCodeIntoFunction(Game.Objects["Cursor"].cps, "if (Game.Has('Undecillion fingers')) add*=	20;", "if (Game.Has('Duodecillion fingers')) add*=	20;", 1, false, false);

    order=150;CCSE.NewUpgrade('Mouse mouse',getStrClickingGains(1)+'<q>A mouse made out of a various assortment of mice. Clicks several times at once, and only occasionally makes a squeaking noise.</q>',50000000000000000000000000000,[11,0,"https://greenecad.github.io/cc/img/buildingIcons.png"]);Game.MakeTiered(Game.last,16);
    CCSE.ReplaceCodeIntoFunction("Game.mouseCps", "if (Game.Has('Omniplast mouse')) add+=Game.cookiesPs*0.01;", "if (Game.Has('Mouse mouse')) add+=Game.cookiesPs*0.01;", 1, false, false);
    CCSE.ReplaceCodeIntoFunction("Game.Logic", "if (Game.handmadeCookies>=10000000000000000000000000000000) {Game.Win('What\'s not clicking');Game.Unlock('Omniplast mouse');}", "if (Game.handmadeCookies>=100000000000000000000000000000000000) {Game.Win('Probably an autoclicker');Game.Unlock('Mouse mouse');}", 1, false, false);

    var u22;
    u22=Game.TieredAchievement('Absolutely ancient','','Grandma',16);
    u22.order=1100.7;
    u22.icon=[1,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]

    u22=Game.TieredAchievement('Really time to hit the hay','','Farm',16);
    u22.order=1200.7;
    u22.icon=[2,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('Like data mining, but the real thing','','Mine',16);
    u22.order=1300.7;
    u22.icon=[3,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('Factorio lover','','Factory',16);
    u22.order=1400.7;
    u22.icon=[4,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('I like money','Agegegegegege!','Bank',16);
    u22.order=1425.7;
    u22.icon=[15,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('The flying cookie monster','','Temple',16);
    u22.order=1450.7;
    u22.icon=[16,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('You\'re a wizard, Harry','','Wizard tower',16);
    u22.order=1475.7;
    u22.icon=[17,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('End of the universe','','Shipment',16);
    u22.order=1500.7;
    u22.icon=[5,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('Cookie is the new gold','','Alchemy lab',16);
    u22.order=1600.7;
    u22.icon=[6,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('Into the unknown','','Portal',16);
    u22.order=1700.7;
    u22.icon=[7,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('Time devourer','','Time machine',16);
    u22.order=1800.7;
    u22.icon=[8,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('Real poetry talk','When you are required to describe something in purely metaphorical terms because of the sheer insanity of what your dealing with, you know you\'re coming to the end.<br>Of what? Your sanity, of course.','Antimatter condenser',16);
    u22.order=1900.7;
    u22.icon=[13,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('Ooohh, colors','','Prism',16);
    u22.order=2000.7;
    u22.icon=[14,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('Luckiest man alive','','Chancemaker',16);
    u22.order=2100.7;
    u22.icon=[19,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('From cookie to cookie','','Fractal engine',16);
    u22.order=2200.7;
    u22.icon=[20,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('Big cookie notation','','Javascript console',16);
    u22.order=2300.7;
    u22.icon=[21,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('Through the Idleverse','Coming to theatres this summer!','Idleverse',16);
    u22.order=2400.7;
    u22.icon=[22,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('brainwaves','','Cortex baker',16);
    u22.order=2500.7;
    u22.icon=[23,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=Game.TieredAchievement('You weren\'t satisfied with your own self','Where did that bring you? back to yourself.','You',16);
    u22.order=2600.7;
    u22.icon=[24,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]
    
    u22=CCSE.NewAchievement('Hand it over, buddy',loc("Have <b>%1</b>.",loc("%1 cursor",LBeautify(1100))), [0,30])
    u22.order=1050.7;
    CCSE.ReplaceCodeIntoFunction(Game.Objects["Cursor"].buyFunction, "if (this.amount>=1000) Game.Win('A round of applause');", "if (this.amount>=1100) Game.Win('Hand it over, buddy');", 1, false, false);
    
    u22= CCSE.NewAchievement('Probably an autoclicker',loc("Make <b>%1</b> from clicking.",loc("%1 cookie",LBeautify(1e35))),[11,0, "https://greenecad.github.io/cc/img/buildingIcons.png"]);
    u22.order=1000.7;
    
    


    
    TestMod.isLoaded = 1;
    if (Game.prefs.popups) Game.Popup(MoreTiers.name + ' loaded!');
    else Game.Notify(MoreTiers.name + ' loaded!', '', '', 1, 1);
  }
  if(CCSE.ConfirmGameVersion(MoreTiers.name, MoreTiers.version, MoreTiers.GameVersion))MoreTiers.init();
}

if(!MoreTiers.isLoaded){
	if(CCSE && CCSE.isLoaded){
		MoreTiers.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(MoreTiers.launch);
	}
}
