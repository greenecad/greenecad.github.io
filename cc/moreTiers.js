Game.Win('Third-party');
if(MoreTiers === undefined) var MoreTiers = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
MoreTiers.name="More Tiers";
MoreTiers.version="0.2.2";
MoreTiers.GameVersion="2.052";
MoreTiers.url="https://greenecad.github.io/cc/img/buildings.png";
MoreTiers.launch = function(){
  MoreTiers.init= function(){

    Game.Tiers[16]={name:'Obsidamin',unlock:650,achievUnlock:750,iconRow:21,tier:16, color:'#0f0aa8',price:		5000000000000000000000000000000000000000000000}

    var u1=Game.TieredUpgrade('Grandpas','<q>The presence of grandpas seems to have different effects on various grandmas. Some work harder, some spend more time fussing at their partners than baking more cookies. This upgrade allows you to perfectly optimize the use of grandpas to maximize your grandma\'s baking capacity.</q>','Grandma',16);
    u1.icon=[1,0,MoreTiers.url];
    u1.order=200.9;
    var u2=Game.TieredUpgrade('Weather Manipulation','<q>Cookie plants are notoriously fickle. One Freeze or thunderstorm can destroy a whole farm of cookies! Thankfully, with your full control of all time and space, you can control what types of weather come to your farms, ensuring all your fields are in perfect condition.\nThe ability to control all weather also helps with negotiations with foreign countries. No rain for you!</q>','Farm',16);
    u2.icon=[2,0,MoreTiers.url];
    u2.order=300.9
    var u3=Game.TieredUpgrade('A slightly more delicate approach','<q>You know, blowing up entire planets has been fun and all, but some of the more fragile materials are being destroyed in the process. If you maybe just mine like a normal person, you could make better use of those entire planets you\'re destroying, and make the sacrifice of those who lived there a bit more worthwhile.</q>','Mine',16);
    u3.icon=[3,0,MoreTiers.url];
    u3.order=400.9;
    var u4=Game.TieredUpgrade('Outsourcing','<q>Building your factories in third world countries has so many benefits, where do you even start? \n Why in the world wern\'t you doing this earlier?</q>','Factory',16);
    u4.icon=[4,0,MoreTiers.url];
    u4.order=500.9;
    var u5=Game.TieredUpgrade('Just print more money','<q>It works, trust me.</q>','Bank',16);
    u5.icon=[15,0,MoreTiers.url];
    u5.order=525.9;
    var u6=Game.TieredUpgrade('Diefication','<q>At this point, you are God, and deserve to be treated as such.</q>','Temple',16);
    u6.icon=[16,0,MoreTiers.url];
    u6.order=550.9;
    var u7=Game.TieredUpgrade('Rituals','<q>Ritual spells have much better cookie return rates than regular spells, but require various odd objects to perform. Always keep on hand some sugar, salt, aluminum, feathers, and at least one live vertebrate, just in case.</q>','Wizard tower',16);
    u7.icon=[17,0,MoreTiers.url];
    u7.order=575.9;
    var u8=Game.TieredUpgrade('Planet Loaders','<q>Ships large enough to transport entire planets at once. Also useful for moving the ungodly amount of cookies you have made.</q>','Shipment',16);
    u8.icon=[5,0,MoreTiers.url];
    u8.order=600.9;
    var u9=Game.TieredUpgrade('cookie-to-cookie transmutation','<q>If you\'re turning everything else into a cookie, why not turn low quality cookies into high quality cookies?</q>','Alchemy lab',16);
    u9.icon=[6,0,MoreTiers.url];
    u9.order=700.9;
    var u10=Game.TieredUpgrade('Dimension finder','<q>A high tech device that finds new alternate universes and determines their cookiability. Does not take into account any eldritch horrors contained in the dimension.</q>','Portal',16);
    u10.icon=[7,0,MoreTiers.url];
    u10.order=800.9;
    var u11=Game.TieredUpgrade('5D Cookie Clicker with Multiverse Timetravel','<q>Oh no...\nnot again...</q>','Time machine',16);
    u11.icon=[8,0,MoreTiers.url];
    u11.order=900.9;
    var u12=Game.TieredUpgrade('Truck theory','<q>A theory that particles are really just scientist\'s representation of trucks, because they never got to smash trucks together in childhood.\nDoesn\'t help you with quantum mechanics at all, but helps you understand why your scientists find joy in something so complicated.</q>','Antimatter condenser',16);
    u12.icon=[13,0,MoreTiers.url];
    u12.order=1000.9;
    var u13=Game.TieredUpgrade('Larger light spectrum','<q>So far, your prisms have only worked with the visible spectrum of light. Expanding it to contain ultraviolet, infrared, x-ray, and other forms of light should increase your production fivefold!(no its just twofold, sorry)</q>','Prism',16);
    u13.icon=[14,0,MoreTiers.url];
    u13.order=1100.9;
    var u14=Game.TieredUpgrade('Ultimate luck charm','<q>A combination of multiple rabbit\'s feet, four leaf clovers, horseshoes, and various other good-luck objects.\nAn absolute abomination to look at, but boosts your luck considerably.</q>','Chancemaker',16);
    u14.icon=[19,0,MoreTiers.url];
    u14.order=1200.9;
    var u15=Game.TieredUpgrade('Fractal fractals','<q>A fractal that creates fractals that create cookies. But isn\'t this just the definition of a fractal? Fractals are hard to comprehend.</q>','Fractal engine',16);
    u15.icon=[20,0,MoreTiers.url];
    u15.order=1300.9;
    var u16=Game.TieredUpgrade('while(true) Cookies.create();','<q>For such a simple script, this puts a lot of stress on your servers.</q>','Javascript console',16);
    u16.icon=[21,0,MoreTiers.url];
    u16.order=1400.9;
    var u17=Game.TieredUpgrade('Quick acension','<q>You have found that many Idleverses obtain certain benefits when all progress is given up and you start back from the beginning. This can be quickly achieved by the complete destruction of all existing life via nuclear warheads. Might be a bit unethical, but look at all those bonuses!</q>','Idleverse',16);
    u17.icon=[22,0,MoreTiers.url];
    u17.order=1500.9;
    var u18=Game.TieredUpgrade('Electrical stimulation','<q>The electricity used to transmit signals in your cortex baker\'s brains is absolutely immense. Sometimes they have a hard time coming up with enough energy to run at full capacity. Now, with these new devices resembling giant defibrillators, your cortex bakers can always have enough electricity to be running at 100%. Ignore any claims that this causes extreme pain to the cortex bakers.</q>','Cortex baker',16);
    u18.icon=[23,0,MoreTiers.url];
    u18.order=1600.9;
    var u19=Game.TieredUpgrade('Other clones','<q>You have had the ability to clone anyone, living or dead, that you have the DNA for, and the only person you have cloned is yourself? What in the world are you doing? Bring back Albert Einstein, clone a few bodybuilders for your personal guard, create a few people to kill for fun, the possibilites are endless!</q>','You',16);
    u19.icon=[24,0,MoreTiers.url];
    u19.order=1700.9;
    
    var u20=Game.NewUnshackleUpgradeTier({tier: 16,q:'Obsidamin is a rare mineral found deep in the Earth\'s surface. When it is a solid, its hardness is greater than diamonds, but it melts into an orange substance at room temperature. Licking it gives a warm, slightly spicy flavor, though consumption is generally discouraged.'});
    u20.icon=[10,0, MoreTiers.url];
    u20.order=505.016;
    u20.parents=[Game.PrestigeUpgrades[127]]
    Game.PrestigeUpgrades.push(u20);
    u20.placedByCode=true;
    u20.canBePurchased=true;

    var u21=CCSE.NewUpgrade("Kitten CEOs", "You gain <b>more CpS</b> the more milk you have.<q>Wondurrful business model going, sir</q>", 9000000000000000000000000000000000000000000000000000000000, [18, 0, MoreTiers.url]);Game.last.kitten=1;Game.MakeTiered(Game.last,16);
    
    u21.order=20000.9
    
    CCSE.NewUpgrade('Duodecillion fingers',loc("Multiplies the gain from %1 by <b>%2</b>.",[getUpgradeName("Thousand fingers"),20])+'<q>How does this even work? are these all on one hand?</q>',1000000000000000000000000000000000000,[0,0,MoreTiers.url]);Game.MakeTiered(Game.last,16); Game.last.order=100.9;
    

    u21=CCSE.NewUpgrade('Mouse mouse',loc("Clicking gains <b>+%1% of your CpS</b>.",1)+'<q>A mouse made out of a various assortment of mice. Clicks several times at once, and only occasionally makes a squeaking noise.</q>',50000000000000000000000000000,[11,0,MoreTiers.url]);Game.MakeTiered(Game.last,16);
    u21.order=150.9
    

    var u22;
    u22=Game.TieredAchievement('Absolutely ancient','','Grandma',16);
    u22.order=1100.7;
    u22.icon=[1,0, MoreTiers.url]

    u22=Game.TieredAchievement('Really time to hit the hay','','Farm',16);
    u22.order=1200.7;
    u22.icon=[2,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('Like data mining, but the real thing','','Mine',16);
    u22.order=1300.7;
    u22.icon=[3,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('Factorio lover','','Factory',16);
    u22.order=1400.7;
    u22.icon=[4,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('I like money','<q>Agegegegegege!</q>','Bank',16);
    u22.order=1425.7;
    u22.icon=[15,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('The flying cookie monster','','Temple',16);
    u22.order=1450.7;
    u22.icon=[16,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('You\'re a wizard, Harry','','Wizard tower',16);
    u22.order=1475.7;
    u22.icon=[17,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('End of the universe','','Shipment',16);
    u22.order=1500.7;
    u22.icon=[5,0,MoreTiers.url]
    
    u22=Game.TieredAchievement('Cookie is the new gold','','Alchemy lab',16);
    u22.order=1600.7;
    u22.icon=[6,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('Into the unknown','','Portal',16);
    u22.order=1700.7;
    u22.icon=[7,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('Time devourer','','Time machine',16);
    u22.order=1800.7;
    u22.icon=[8,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('Real poetry talk','<q>When you are required to describe something in purely metaphorical terms because of the sheer insanity of what your dealing with, you know you\'re coming to the end.<br>Of what? Your sanity, of course.</q>','Antimatter condenser',16);
    u22.order=1900.7;
    u22.icon=[13,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('Ooohh, colors','','Prism',16);
    u22.order=2000.7;
    u22.icon=[14,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('Luckiest man alive','','Chancemaker',16);
    u22.order=2100.7;
    u22.icon=[19,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('From cookie to cookie','','Fractal engine',16);
    u22.order=2200.7;
    u22.icon=[20,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('Big cookie notation','','Javascript console',16);
    u22.order=2300.7;
    u22.icon=[21,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('Through the Idleverse','<q>Coming to theatres this summer!</q>','Idleverse',16);
    u22.order=2400.7;
    u22.icon=[22,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('brainwaves','','Cortex baker',16);
    u22.order=2500.7;
    u22.icon=[23,0, MoreTiers.url]
    
    u22=Game.TieredAchievement('You weren\'t satisfied with your own self','<q>Where did that bring you? back to yourself.</q>','You',16);
    u22.order=2600.7;
    u22.icon=[24,0, MoreTiers.url]
    
    u22=CCSE.NewAchievement('Hand it over, buddy',loc("Have <b>%1</b>.",loc("%1 cursor",LBeautify(1100))), [0,30])
    u22.order=1050.7;
    
    u22= CCSE.NewAchievement('Probably an autoclicker',loc("Make <b>%1</b> from clicking.",loc("%1 cookie",LBeautify(1e35))),[11,0, MoreTiers.url]);
    u22.order=1000.7;

    
Game.Tiers[17]={name:'Unberrylium',unlock:700,achievUnlock:800,iconRow:21,tier:16, color:'#0fbba8',price:		999000000000000000000000000000000000000000000000}

    var uu1=Game.TieredUpgrade('forward it back to grandma','<q>At this point, she\'s already forgotten that she sent it to you.</q>','Grandma',17);
    uu1.icon=[1,1,MoreTiers.url];
    uu1.order=200.91;
    var uu2=Game.TieredUpgrade('Cheap(er) mega-automotized-AI-powered-Nuclear-fueled farming tractors with hoeing capability','<q>Raking in way more dough!</q>','Farm',17);
    uu2.icon=[2,1,MoreTiers.url];
    uu2.order=300.91;
    var uu3=Game.TieredUpgrade('Sugar gas processing','<q>That sugar gas you\'ve been using can be chemically treated and compressed to become much more explosive than usual.</q>','Mine',17);
    uu3.icon=[3,1,MoreTiers.url];
    uu3.order=400.91;
    var uu4=Game.TieredUpgrade('Even sturdier conveyer belts','<q>Helps cut down on maintenance costs quite considerably, especially with your assembly tesseracts.</q>','Factory',17);
    uu4.icon=[4,1,MoreTiers.url];
    uu4.order=500.91;
    var uu5=Game.TieredUpgrade('Much taller tellers','<q>Non freaks of nature need not apply.</q>','Bank',17);
    uu5.icon=[15,1,MoreTiers.url];
    uu5.order=525.91;
    var uu6=Game.TieredUpgrade('Diamond Idols','<q>Only for the most Wario-like of adventurers.</q>','Temple',17);
    uu6.icon=[16,1,MoreTiers.url];
    uu6.order=550.91;
    var uu7=Game.TieredUpgrade('Really pointy hats','<q>Don\'t touch it!</q>','Wizard tower',17);
    uu7.icon=[17,1,MoreTiers.url];
    uu7.order=575.91;
    var uu8=Game.TieredUpgrade('Chocolate nebulas','<q>How do these help you again?</q>','Shipment',17);
    uu8.icon=[5,1,MoreTiers.url];
    uu8.order=600.91;
    var uu9=Game.TieredUpgrade('promony','<q>Actually not worth much money.</q>','Alchemy lab',17);
    uu9.icon=[6,1,MoreTiers.url];
    uu9.order=700.91;
    var uu10=Game.TieredUpgrade('Secrets of the ancient tablet','<q>As soon as you are able to read the tablet, it will be a lot more useful.</q>','Portal',17);
    uu10.icon=[7,1,MoreTiers.url];
    uu10.order=800.91;
    var uu11=Game.TieredUpgrade('Flux overdrive','<q>This is generally not considered a good thing. Who cares, though?</q>','Time machine',17);
    uu11.icon=[8,1,MoreTiers.url];
    uu11.order=900.91;
    var uu12=Game.TieredUpgrade('Sugar fermions','<q>Really puts an odd spin on things, doesn\'t it?</q>','Antimatter condenser',17);
    uu12.icon=[13,1,MoreTiers.url];
    uu12.order=1000.91;
    var uu13=Game.TieredUpgrade('Gem polishing crews','<q>An elite squad trained in removing dust and dirt from prisms without anyone dying.</q>','Prism',17);
    uu13.icon=[14,1,MoreTiers.url];
    uu13.order=1100.91;
    var uu14=Game.TieredUpgrade('Your unlucky cookie','<q>That\'s it! You\'ve finally found whats holding you back!</q>','Chancemaker',17);
    uu14.icon=[19,1,MoreTiers.url];
    uu14.order=1200.91;
    var uu15=Game.TieredUpgrade('Meta-meta-bakeries','<q>I feel like we\'re repeating ourselves, but what did you expect with fractals?</q>','Fractal engine',17);
    uu15.icon=[20,1,MoreTiers.url];
    uu15.order=1300.91;
    var uu16=Game.TieredUpgrade('Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript','<q>Mostly contains random facts you will never use.</q>','Javascript console',17);
    uu16.icon=[21,1,MoreTiers.url];
    uu16.order=1400.91;
    var uu17=Game.TieredUpgrade('Imperialism','<q>You realize that your destiny is to educate and enlighten the backwards savages that live in other idleverses, bringing peace and prosperity everywhere! This newfound sense of purpose rejuvenates your efforts for conquest.</q>','Idleverse',17);
    uu17.icon=[22,1,MoreTiers.url];
    uu17.order=1500.91;
    var uu18=Game.TieredUpgrade('Complete neural filter','<q>Allows complete control of every thought that goes through your cortex baker\'s brains. Only allows thoughts about the production of cookies.</q>','Cortex baker',17);
    uu18.icon=[23,1,MoreTiers.url];
    uu18.order=1600.91;
    var uu19=Game.TieredUpgrade('Better cloning vats','<q>This makes cloning much more efficient, takes up much less room, and has much less ethical violations.</q>','You',17);
    uu19.icon=[24,1,MoreTiers.url];
    uu19.order=1700.91;
    
    var uu20=Game.NewUnshackleUpgradeTier({tier: 17,q:'A mirror-image stereoisomer of Berrylium. Envokes a much more concentrated fruit flavor, though is highly toxic when ingested, even in the smallest doses. Often used as a dilute in perfumes, leading to a popular internet challenge where teenagers try to drink as much of the substance as possible. Current death toll is 157.'});
    uu20.icon=[10,1, MoreTiers.url];
    uu20.order=505.017;
    uu20.parents=[Game.PrestigeUpgrades[129]]
    Game.PrestigeUpgrades.push(uu20);
    uu20.placedByCode=true;
    uu20.canBePurchased=true;

    var uu21=CCSE.NewUpgrade("Kitten Overlords", "You gain <b>more CpS</b> the more milk you have.<q>All loyalty to your honurr and highness, sir</q>", 9000000000000000000000000000000000000000000000000000000000000, [18, 1, MoreTiers.url]);Game.last.kitten=1;Game.MakeTiered(Game.last,17);
    
    uu21.order=20000.91;
    
    CCSE.NewUpgrade('Tredecillion fingers',loc("Multiplies the gain from %1 by <b>%2</b>.",[getUpgradeName("Thousand fingers"),20])+'<q>clickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickityclickity</q>',1000000000000000000000000000000000000000,[0,1,MoreTiers.url]);Game.MakeTiered(Game.last,17); Game.last.order=100.91;
    

    uu21=CCSE.NewUpgrade('A funky gaming mouse',loc("Clicking gains <b>+%1% of your CpS</b>.",1)+'<q>Your not quite sure how to work this thing, but all the extra buttons and lights must help you somehow.</q>',50000000000000000000000000000000,[11,1,MoreTiers.url]);Game.MakeTiered(Game.last,17);
    uu21.order=150.91;
    

    
    u22=Game.TieredAchievement('Oldheads','','Grandma',17);
    u22.order=1100.71;
    u22.icon=[1,1, MoreTiers.url]

    u22=Game.TieredAchievement('\'till the cows come home','','Farm',17);
    u22.order=1200.71;
    u22.icon=[2,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('Minor miner','','Mine',17);
    u22.order=1300.71;
    u22.icon=[3,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('The greatest revolution','','Factory',17);
    u22.order=1400.71;
    u22.icon=[4,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('Stonks','','Bank',17);
    u22.order=1425.71;
    u22.icon=[15,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('Holy chant','','Temple',17);
    u22.order=1450.71;
    u22.icon=[16,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('Ultima','','Wizard tower',17);
    u22.order=1475.71;
    u22.icon=[17,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('Edge of the universe','','Shipment',17);
    u22.order=1500.7;
    u22.icon=[5,1,MoreTiers.url]
    
    u22=Game.TieredAchievement('International precious metals crisis','','Alchemy lab',17);
    u22.order=1600.71;
    u22.icon=[6,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('Eldritch nightmare material','','Portal',17);
    u22.order=1700.71;
    u22.icon=[7,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('Time twister','','Time machine',17);
    u22.order=1800.71;
    u22.icon=[8,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('','','Antimatter condenser',17);
    u22.order=1900.71;
    u22.icon=[13,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('Unending radience','','Prism',17);
    u22.order=2000.71;
    u22.icon=[14,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('Many are the strange chances of the world','','Chancemaker',17);
    u22.order=2100.71;
    u22.icon=[19,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('Creating achievement names is hard','<q>The fun thing about fractal engines, though, is that I can reference that in an achievement description and get one more knocked out.</q>','Fractal engine',17);
    u22.order=2200.71;
    u22.icon=[20,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('','','Javascript console',17);
    u22.order=2300.71;
    u22.icon=[21,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('','','Idleverse',17);
    u22.order=2400.71;
    u22.icon=[22,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('Neuron activation','','Cortex baker',17);
    u22.order=2500.71;
    u22.icon=[23,1, MoreTiers.url]
    
    u22=Game.TieredAchievement('The one to rule them all','','You',17);
    u22.order=2600.71;
    u22.icon=[24,1, MoreTiers.url]
    
    u22=CCSE.NewAchievement('All hand made',loc("Have <b>%1</b>.",loc("%1 cursor",LBeautify(1200))), [0,31])
    u22.order=1050.71;
    
    u22= CCSE.NewAchievement('clicker hero',loc("Make <b>%1</b> from clicking.<q>Wow, a reference to another clicker game? What is this, an advertising site?</q>",loc("%1 cookie",LBeautify(1e37))),[11,1, MoreTiers.url]);
    u22.order=1000.71;

    
    CCSE.customSave.push(function(){
      MoreTiers.config.hasObsidamin=false;
      if(Game.Has('Unshackled obsidamin'))
        MoreTiers.config.hasObsidamin=true;
      if(Game.Has('Unshackled unberrylium'))
        MoreTiers.config.hasUnberrylium=true;
  	  CCSE.config.OtherMods.MoreTiers = MoreTiers.config;
    });
    CCSE.customLoad.push(function(){
    	if(CCSE.config.OtherMods.MoreTiers) MoreTiers.config = CCSE.config.OtherMods.MyMod; else MoreTiers.config = {};
    	
      if(MoreTiers.config.hasObsidamin) u20.bought=1;
      if(MoreTiers.config.hasUnberrylium) uu20.bought=1;
    });

	  MoreTiers.InjectCode();


    
    MoreTiers.isLoaded = 1;
    if (Game.prefs.popups) Game.Popup(MoreTiers.name + ' loaded!');
    else Game.Notify(MoreTiers.name + ' loaded!', '', '', 1, 1);
  }



  
  MoreTiers.InjectCode= function(){
		CCSE.ReplaceCodeIntoFunction('Game.Objects["Cursor"].buyFunction', "if (this.amount>=1000) Game.Win('A round of applause');", "if (this.amount>=1100) Game.Win('Hand it over, buddy');\nif (this.amount>=1200) Game.Win('All hand made');", 1);
    CCSE.ReplaceCodeIntoFunction("Game.mouseCps", "if (Game.Has('Omniplast mouse')) add+=Game.cookiesPs*0.01;", "if (Game.Has('Mouse mouse')) add+=Game.cookiesPs*0.01; if (Game.Has('A funky gaming mouse')) add+=Game.cookiesPs*0.01;", 1);
    CCSE.ReplaceCodeIntoFunction("Game.Logic", "Unlock('Omniplast mouse');}", "if (Game.handmadeCookies>=100000000000000000000000000000000000) {Game.Win('Probably an autoclicker');Game.Unlock('Mouse mouse');}\n if (Game.handmadeCookies>=10000000000000000000000000000000000000) {Game.Win('');Game.Unlock('A funky gaming mouse');}", 1);
    CCSE.ReplaceCodeIntoFunction("Game.mouseCps", "if (Game.Has('Undecillion fingers')) add*=	20;", "if (Game.Has('Duodecillion fingers')) add*=	20;\n if (Game.Has('Tredecillion fingers')) add*=	20;", 1,);
    CCSE.ReplaceCodeIntoFunction("Game.Objects['Cursor'].buyFunction", "if (this.amount>=550) Game.Unlock('Undecillion fingers');", "if (this.amount>=600) Game.Unlock('Duodecillion fingers');\n if (this.amount>=650) Game.Unlock('Tredecillion fingers');", 1);
    CCSE.ReplaceCodeIntoFunction("Game.Objects['Cursor'].cps", "if (Game.Has('Undecillion fingers')) add*=	20;", "if (Game.Has('Duodecillion fingers')) add*=	20;\n if (Game.Has('Tredecillion fingers')) add*=	20;", 1, false, false);
    CCSE.ReplaceCodeIntoFunction("Game.CalculateGains", "if (Game.Has('Kitten strategists')) catMult*=(1+Game.milkProgress*0.105*milkMult);", "if (Game.Has('Kitten CEOs')) catMult*=(1+Game.milkProgress*0.12*milkMult);\n if (Game.Has('Kitten Overlords')) catMult*=(1+Game.milkProgress*0.12*milkMult);", 1);
    CCSE.ReplaceCodeIntoFunction("Game.Logic", "if (Game.milkProgress>=14) Game.Unlock('Kitten strategists');", "if (Game.milkProgress>=15) Game.Unlock('Kitten CEOs'); if (Game.milkProgress>=16) Game.Unlock('Kitten Overlords');", 1);
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
