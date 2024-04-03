Game.Win('Third-party');
if(MoreTiers === undefined) var MoreTiers = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
MoreTiers.name="More Tiers";
MoreTiers.version="0.0.1";
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
    u5.icon=[5,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u5.order=525.9;
    var u6=Game.TieredUpgrade('Diefication','<q>At this point, you are God, and deserve to be treated as such.</q>','Temple',16);
    u6.icon=[6,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u6.order=550.9;
    var u7=Game.TieredUpgrade('Rituals','<q>Ritual spells have much better cookie return rates than regular spells, but require various odd objects to perform. Always keep on hand some sugar, salt, aluminum, feathers, and at least one live vertebrate, just in case.</q>','Wizard tower',16);
    u7.icon=[7,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u7.order=575.9;
    var u8=Game.TieredUpgrade('Planet Loaders','<q>Ships large enough to transport entire planets at once. Also useful for moving the ungodly amount of cookies you have made.</q>','Shipment',16);
    u8.icon=[8,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u8.order=600.9;
    var u9=Game.TieredUpgrade('cookie-to-cookie transmutation','<q>If you\'re turning everything else into a cookie, why not turn low quality cookies into high quality cookies?</q>','Alchemy lab',16);
    u9.icon=[9,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u9.order=700.9;
    var u10=Game.TieredUpgrade('Dimension finder','<q>A high tech device that finds new alternate universes and determines their cookiability. Does not take into account any eldritch horrors contained in the dimension.</q>','Portal',16);
    u10.icon=[10,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u10.order=800.9;
    var u11=Game.TieredUpgrade('5D Cookie Clicker with Multiverse Timetravel','<q>Oh no...\nnot again...</q>','Time machine',16);
    u11.icon=[11,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u11.order=900.9;
    var u12=Game.TieredUpgrade('Truck theory','<q>A theory that particles are really just scientist\'s representation of trucks, because they never got to smash trucks together in childhood.\nDoesn\'t help you with quantum mechanics at all, but helps you understand why your scientists find joy in something so complicated.</q>','Antimatter condenser',16);
    u12.icon=[12,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u12.order=1000.9;
    var u13=Game.TieredUpgrade('Larger light spectrum','<q>So far, your prisms have only worked with the visible spectrum of light. Expanding it to contain ultraviolet, infrared, x-ray, and other forms of light should increase your production fivefold!(no its just twofold, sorry)</q>','Prism',16);
    u13.icon=[13,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u13.order=1100.9;
    var u14=Game.TieredUpgrade('Ultimate luck charm','<q>A combination of multiple rabbit\'s feet, four leaf clovers, horseshoes, and various other good-luck objects.\nAn absolute abomination to look at, but boosts your luck considerably.</q>','Chancemaker',16);
    u14.icon=[14,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u14.order=1200.9;
    var u15=Game.TieredUpgrade('','<q></q>','Fractal engine',16);
    u15.icon=[,0,"https://greenecad.github.io/cc/img/buildingIcons.png"];
    u15.order=;
    
    
    TestMod.isLoaded = 1;
    if (Game.prefs.popups) Game.Popup(TestMod.name + ' loaded!');
    else Game.Notify(TestMod.name + ' loaded!', '', '', 1, 1);
  }
  if(CCSE.ConfirmGameVersion(TestMod.name, TestMod.version, TestMod.GameVersion))TestMod.init();
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
