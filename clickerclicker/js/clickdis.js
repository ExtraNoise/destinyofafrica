//<![CDATA[ 
$(window).load(function(){

/* STOP IT! STOP THE MADNESS! THIS IS NOT THE WAY TO WIN! */

/* Variables */
var totalClicks = 0,
    clickIncrement = 1, /* CHANGE TO 1 */
    tick = 100;

var automatons = [
    autoClicker = {
        name: 'Outsourced Clicker',
        divPrefix: 'autoClickers',
        amount: 0,
        cost: 10,
        increment: 0.01
    },
    autoDevver = {
        name: 'Email Developer',
        divPrefix: 'autoDevvers',
        amount: 0,
        cost: 85,
        increment: 0.05
    },
    autoHasher = {
        name: 'Hashtag Creator',
        divPrefix: 'autoHashers',
        amount: 0,
        cost: 420,
        increment: 0.4
    },
    autoManager = {
        name: 'Middle Manager',
        divPrefix: 'autoManagers',
        amount: 0,
        cost: 2600,
        increment: 1
    },
    autoEvanger = {
        name: 'Media Evangelist',
        divPrefix: 'autoEvangers',
        amount: 0,
        cost: 8600,
        increment: 4
    },
    autoResearcher = {
        name: 'Research Developer',
        divPrefix: 'autoResearchers',
        amount: 0,
        cost: 38000,
        increment: 10
    },
    autoGeniuser = {
        name: 'Evil Genius',
        divPrefix: 'autoGeniusers',
        amount: 0,
        cost: 175000,
        increment: 40
    },
    autoSenator = {
        name: 'Pocketed Senator',
        divPrefix: 'autoSenators',
        amount: 0,
        cost: 1200000,
        increment: 600
    },
    autoLeader = {
        name: 'World Leader',
        divPrefix: 'autoLeaders',
        amount: 0,
        cost: 60000000,
        increment: 9800
    },
    autoPuppeter = {
        name: 'Illuminati Puppetmaster',
        divPrefix: 'autoPuppeters',
        amount: 0,
        cost: 6666666666,
        increment: 66666
    },
    autoGoder = {
        name: 'Mythological Demigod',
        divPrefix: 'autoGoders',
        amount: 0,
        cost: 50000000000,
        increment: 1000000
    }
];


/* Establish all the upgrades to be false, yo */
var upgradeALittleOomphPurchased = false;
var upgradeDiversifyingPlatformsPurchased = false;
var upgradeOffsiteIncentivesPurchased = false;
var upgradeIncorporationPurchased = false;
var upgradeGoingPublicPurchased = false;
var upgradeSplittingTwoForOnePurchased = false;
var upgradeGlobalReOrgPurchased = false;
var upgradeAggressivePersuasionPurchased = false;
var upgradeSubliminalMotivationPurchased = false;
var upgradeControlledInteractionsPurchased = false;
var upgradeTransactionalThoughtsPurchased = false;
var upgradeTheDigitalEmpirePurchased = false;

var upgradeDeveloperDigsPurchased = false;
var upgradeNewerMachinesPurchased = false;
var upgradeBrogrammersPurchased = false;
var upgradeDevHousePurchased = false;
var upgradePowerRigsPurchased = false;
var upgradeEfficiencyCenterPurchased = false;
var upgradeBasementDwellersPurchased = false;
var upgradeVirtualParadisePurchased = false;
var upgradeJustAutomateThemPurchased = false;

var upgradeColorfulSpacePurchased = false;
var upgradeStayingTrendyPurchased = false;
var upgradeYouthfulAmbitionPurchased = false;
var upgradeShowcaseOfficePurchased = false;
var upgradeFancyPantsTabletsPurchased = false;
var upgradeLOLneurologyPurchased = false;
var upgradeSustenanceVatsPurchased = false;

var upgradeChartsGraphsPurchased = false;
var upgradeDressforSuccessPurchased = false;
var upgradeBoardroomBoomPurchased = false;
var upgradeLinesGoingUpPurchased = false;
var upgradeMyBossisaRobotPurchased = false;
var upgradeSealItUpPurchased = false;

var upgradePersonaSegmentationPurchased = false;
var upgradeWhatWeHavetoSayPurchased = false;
var upgradeGoalDiggerIdealismPurchased = false;
var upgradeCultofPersonalityPurchased = false;
var upgradeRecordRatingsPurchased = false;
var upgradeMessengersofTruthPurchased = false;

var upgradeARealResearchLabPurchased = false;
var upgradeSeriousSciencePurchased = false;
var upgradeForevvrupPurchased = false;
var upgradeCloningforSciencePurchased = false;
var upgradeSmartLabPurchased = false;
var upgradeTheClickingPlaguePurchased = false;

var upgradeWordsofSupportPurchased = false;
var upgradeOffsiteLaboratoryPurchased = false;
var upgradeWordsofWorryPurchased = false;
var upgradeIslandofEvilPurchased = false;
var upgradePlottingSchemesPurchased = false;
var upgradeWorldTakeoverPurchased = false;

var upgradeCongressionalFloorPurchased = false;
var upgradePageDeliveriesPurchased = false;
var upgradeClotureControlPurchased = false;
var upgradeRedecorationPurchased = false;
var upgradeCongressionalRecessPurchased = false;
var upgradeCatsPurchased = false;

var upgradePressBoothPurchased = false;
var upgradeMoreThanCraziesPurchased = false;
var upgradePleasureJunketsPurchased = false;
var upgradeYouHavetheFloorPurchased = false;
var upgradeFirstWorldProblemsPurchased = false;
var upgradeTheyLookSoRealPurchased = false;


/* Perform any first time setup */
registerAutomatonPurchasers();
setupTick();


/* Initialize the main game loop */
function setupTick() {
    setInterval(function () {
        addAutomatons();
        updateValues();
    }, tick);
}

/* Add automatons to the total */
function addAutomatons() {
    $.each(automatons, function () {
        var automaton = this;
        totalClicks += (automaton.increment * automaton.amount);
    });
}

/* Calculate the raw automaton cost */
function calcAutomatonCost(automaton) {
    if (automaton.amount === 0) {
        return automaton.cost;
    }
    return automaton.cost * 1.16;
}

/* Get a rounded automaton cost */
function getAutomatonCost(automaton) {
    return Math.floor(calcAutomatonCost(automaton));
}

/* Purchase an automaton, if you can afford it */
function purchaseAutomaton(automaton) {
    if (totalClicks >= getAutomatonCost(automaton)) {
        totalClicks -= getAutomatonCost(automaton);
        automaton.cost = calcAutomatonCost(automaton);
        automaton.amount++;
        updateValues();
        var sprite = $("<div></div>");
        sprite.addClass(automaton.divPrefix + 'Sprite' + Math.floor((Math.random() * 10) + 1)).css(
            "left", ((30 * automaton.amount) + "px")
        );
        $('#' + automaton.divPrefix + 'Area').append(sprite);
    }
}

/* Let's add some commas */
function totalClicksCommas(totalClicks) {
    var commaClicks = totalClicks.toString().split(".");
    commaClicks[0] = commaClicks[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); /* Some redundancies with decimals, just in case */
    return commaClicks.join(".");
}

/* Update the view with the new model changes */
function updateValues() {
    
    /* LETS COME BACK TO THIS LATER 
    if (totalClicks >= 1000000) {
        $('#total_clicks').html(Math.floor((totalClicks / 10000000) * 10).toFixed(2) + 'M');
    }
    else {
        $('#total_clicks').html(Math.round(totalClicks));
    } */

    var automatonIncrement = 0;
    $.each(automatons, function () {
        var automaton = this;
        $('#' + automaton.divPrefix + 'Cost').html(getAutomatonCost(automaton).toLocaleString());
        $('#' + automaton.divPrefix + 'InfoCost').html(getAutomatonCost(automaton).toLocaleString());
        $('#' + automaton.divPrefix + 'Amount').html(automaton.amount).toLocaleString();
        $('#' + automaton.divPrefix + 'InfoAmount').html(automaton.amount).toLocaleString();
        $('#' + automaton.divPrefix + 'InfoAmountStat').html(automaton.amount).toLocaleString();
        automatonIncrement += automaton.amount * automaton.increment / tick * 1000;
        $('#' + automaton.divPrefix + 'InfoAmountPS').html((automaton.increment * 10).toLocaleString());
        $('#' + automaton.divPrefix + 'InfoAmountTPS').html(((automaton.amount * automaton.increment) * 10).toLocaleString());
    });
    $('#totalClickers').html(automatonIncrement.toLocaleString(1));

    /* Making stuff show up */
    if (totalClicks >= 10) {
        $('#autoClickersBuy').removeClass('hidden').addClass('btn');
    }
    if (totalClicks >= 30) {
        if (!upgradeALittleOomphPurchased) {
            $('#upgradeALittleOomph').removeClass('hidden').addClass('upgrade');
        }
    }
    /* I love long groups of if statements */
    if (autoClicker.amount >= 1) {
        $('#autoDevversBuy').removeClass('hidden').addClass('btn');
        if (!upgradeDiversifyingPlatformsPurchased && upgradeALittleOomphPurchased != false) {
            $('#upgradeDiversifyingPlatforms').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoClicker.amount >= 10) {
        if (!upgradeOffsiteIncentivesPurchased && upgradeDiversifyingPlatformsPurchased != false) {
            $('#upgradeOffsiteIncentives').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoDevver.amount >= 1) {
        $('#autoDevversArea').removeClass('workAreaHidden').addClass('workArea');
        $('#autoHashersBuy').removeClass('hidden').addClass('btn');
        if (!upgradeDeveloperDigsPurchased) {
            $('#upgradeDeveloperDigs').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoDevver.amount >= 5) {
        if (!upgradeNewerMachinesPurchased && upgradeDeveloperDigsPurchased != false) {
            $('#upgradeNewerMachines').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoDevver.amount >= 10) {
        if (!upgradeBrogrammersPurchased && upgradeNewerMachinesPurchased != false) {
            $('#upgradeBrogrammers').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoDevver.amount >= 20) {
        if (!upgradeDevHousePurchased && upgradeBrogrammersPurchased != false) {
            $('#upgradeDevHouse').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoDevver.amount >= 50) {
        if (!upgradePowerRigsPurchased && upgradeDevHousePurchased != false) {
            $('#upgradePowerRigs').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoDevver.amount >= 100) {
        if (!upgradeEfficiencyCenterPurchased && upgradePowerRigsPurchased != false) {
            $('#upgradeEfficiencyCenter').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoDevver.amount >= 150) {
        if (!upgradeBasementDwellersPurchased && upgradeEfficiencyCenterPurchased != false) {
            $('#upgradeBasementDwellers').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoDevver.amount >= 175) {
        if (!upgradeVirtualParadisePurchased && upgradeBasementDwellersPurchased != false) {
            $('#upgradeVirtualParadise').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoDevver.amount >= 200) {
        if (!upgradeJustAutomateThemPurchased && upgradeVirtualParadisePurchased != false) {
            $('#upgradeJustAutomateThem').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoHasher.amount >= 1) {
        $('#autoHashersArea').removeClass('workAreaHidden').addClass('workArea');
        $('#autoManagersBuy').removeClass('hidden').addClass('btn');
        if (!upgradeColorfulSpacePurchased) {
            $('#upgradeColorfulSpace').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoHasher.amount >= 5) {
        if (!upgradeStayingTrendyPurchased && upgradeColorfulSpacePurchased != false) {
            $('#upgradeStayingTrendy').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoHasher.amount >= 10) {
        if (!upgradeYouthfulAmbitionPurchased && upgradeStayingTrendyPurchased != false) {
            $('#upgradeYouthfulAmbition').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoHasher.amount >= 50) {
        if (!upgradeShowcaseOfficePurchased && upgradeYouthfulAmbitionPurchased != false) {
            $('#upgradeShowcaseOffice').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoHasher.amount >= 100) {
        if (!upgradeFancyPantsTabletsPurchased && upgradeShowcaseOfficePurchased != false) {
            $('#upgradeFancyPantsTablets').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoHasher.amount >= 150) {
        if (!upgradeLOLneurologyPurchased && upgradeFancyPantsTabletsPurchased != false) {
            $('#upgradeLOLneurology').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoHasher.amount >= 200) {
        if (!upgradeSustenanceVatsPurchased && upgradeLOLneurologyPurchased != false) {
            $('#upgradeSustenanceVats').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoManager.amount >= 1) {
        $('#autoManagersArea').removeClass('workAreaHidden').addClass('workArea');
        $('#autoEvangersBuy').removeClass('hidden').addClass('btn');
        if (!upgradeChartsGraphsPurchased) {
            $('#upgradeChartsGraphs').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoManager.amount >= 5) {
        if (!upgradeDressforSuccessPurchased && upgradeChartsGraphsPurchased != false) {
            $('#upgradeDressforSuccess').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoManager.amount >= 10) {
        if (!upgradeBoardroomBoomPurchased && upgradeDressforSuccessPurchased != false) {
            $('#upgradeBoardroomBoom').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoManager.amount >= 50) {
        if (!upgradeLinesGoingUpPurchased && upgradeBoardroomBoomPurchased != false) {
            $('#upgradeLinesGoingUp').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoManager.amount >= 100) {
        if (!upgradeMyBossisaRobotPurchased && upgradeLinesGoingUpPurchased != false) {
            $('#upgradeMyBossisaRobot').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoManager.amount >= 150) {
        if (!upgradeSealItUpPurchased && upgradeMyBossisaRobotPurchased != false) {
            $('#upgradeSealItUp').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoEvanger.amount >= 1) {
        $('#autoEvangersArea').removeClass('workAreaHidden').addClass('workArea');
        $('#autoResearchersBuy').removeClass('hidden').addClass('btn');
        if (!upgradePersonaSegmentationPurchased) {
            $('#upgradePersonaSegmentation').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoEvanger.amount >= 5) {
        if (!upgradeWhatWeHavetoSayPurchased && upgradePersonaSegmentationPurchased != false) {
            $('#upgradeWhatWeHavetoSay').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoEvanger.amount >= 10) {
        if (!upgradeGoalDiggerIdealismPurchased && upgradeWhatWeHavetoSayPurchased != false) {
            $('#upgradeGoalDiggerIdealism').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoEvanger.amount >= 50) {
        if (!upgradeCultofPersonalityPurchased && upgradeGoalDiggerIdealismPurchased != false) {
            $('#upgradeCultofPersonality').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoEvanger.amount >= 100) {
        if (!upgradeRecordRatingsPurchased && upgradeCultofPersonalityPurchased != false) {
            $('#upgradeRecordRatings').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoEvanger.amount >= 150) {
        if (!upgradeMessengersofTruthPurchased && upgradeRecordRatingsPurchased != false) {
            $('#upgradeMessengersofTruth').removeClass('hidden').addClass('upgrade');
        }
    }
    if (autoResearcher.amount >= 1) {
        $('#autoResearchersArea').removeClass('workAreaHidden').addClass('workArea');
        $('#autoGeniusersBuy').removeClass('hidden').addClass('btn');
    }
    if (autoGeniuser.amount >= 1) {
        $('#autoGeniusersArea').removeClass('workAreaHidden').addClass('workArea');
        $('#autoSenatorsBuy').removeClass('hidden').addClass('btn');
    }
    if (autoSenator.amount >= 1) {
        $('#autoSenatorsArea').removeClass('workAreaHidden').addClass('workArea');
        $('#autoLeadersBuy').removeClass('hidden').addClass('btn');
    }
    if (autoLeader.amount >= 1) {
        $('#autoLeadersArea').removeClass('workAreaHidden').addClass('workArea');
        $('#autoPuppetersBuy').removeClass('hidden').addClass('btn');
    }
    if (autoPuppeter.amount >= 1) {
        $('#autoPuppetersArea').removeClass('workAreaHidden').addClass('workArea');
        $('#autoGodersBuy').removeClass('hidden').addClass('btn');
    }

    $('#total_clicks').html(totalClicksCommas(Math.round(totalClicks)));
}

/* Registers any automaton purchasing buttons */
function registerAutomatonPurchasers() {
    $.each(automatons, function () {
        var automaton = this;
        $('#' + automaton.divPrefix + 'Buy').click(function () {
            purchaseAutomaton(automaton);
            console.log('Purchased ' + automaton.name);
        });
    });
}

/* Click to Increment */
$('#terminal').click(function (e) {
    totalClicks += clickIncrement;
    updateValues();
    var numberJam = $("<div>" + clickIncrement + "</div>");
    numberJam.addClass('numberJam');
    $('#terminal').append(numberJam);
    $('.numberJam').offset({left:e.pageX - 20,top:e.pageY -15});
    $('.numberJam').delay(2000).fadeOut('slow',function(){
        $('.numberJam').remove(); 
    }); ;
});





/* UPGRADES */

/* A Little Oomph */
$('#upgradeALittleOomph').click(function(){
    if (totalClicks >= 100) {
        totalClicks -= 100;
        clickIncrement = 2;
        autoClicker.increment = 0.02;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#terminalLight').removeClass('hidden').addClass('active');
        $('#terminalLightRev').removeClass('hidden').addClass('active');
        upgradeALittleOomphPurchased = true;
        updateValues();
    }
});
/* Diversifying Platforms */
$('#upgradeDiversifyingPlatforms').click(function(){
    if (autoClicker.amount >= 1 && totalClicks >= 500) {
        totalClicks -= 500;
        clickIncrement = 4;
        autoClicker.increment = 0.04;
        $(this).removeClass('upgrade').addClass('hidden');
        upgradeDiversifyingPlatformsPurchased = true;
        updateValues();
    }
});
/* Offsite Incentives */
$('#upgradeOffsiteIncentives').click(function(){
    if (autoClicker.amount >= 10 && totalClicks >= 10000) {
        totalClicks -= 10000;
        clickIncrement = clickIncrement * 2;
        autoClicker.increment = 0.08;
        $(this).removeClass('upgrade').addClass('hidden');
        upgradeOffsiteIncentivesPurchased = true;
        updateValues();
    }
});
/* Incorporation */
/* Going Public */
/* Splitting Two-For-One */
/* Global Re-Org */
/* Aggressive Persuasion */
/* Subliminal Motivation */
/* Controlled Interactions */
/* Transactional Thoughts */
/* The Digital Empire */

/* Developer Digs */
$('#upgradeDeveloperDigs').click(function(){
    if (autoDevver.amount >= 1 && totalClicks >= 1000) {
        totalClicks -= 1000;
        autoDevver.increment = autoDevver.increment + 0.03;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoDevversArea').addClass('workAreaTwo').removeClass('workArea');
        upgradeDeveloperDigsPurchased = true;
        updateValues();
    }
});
/* Newer Machines */
$('#upgradeNewerMachines').click(function(){
    if (autoDevver.amount >= 5 && totalClicks >= 10000) {
        totalClicks -= 10000;
        autoDevver.increment = autoDevver.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeNewerMachines.css">');
        upgradeNewerMachinesPurchased = true;
        updateValues();
    }
});
/* Brogrammers */
$('#upgradeBrogrammers').click(function(){
    if (autoDevver.amount >= 10 && totalClicks >= 100000) {
        totalClicks -= 100000;
        autoDevver.increment = autoDevver.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeBrogrammers.css">');
        upgradeBrogrammersPurchased = true;
        updateValues();
    }
});
/* Dev House */
$('#upgradeDevHouse').click(function(){
    if (autoDevver.amount >= 20 && totalClicks >= 1000000) {
        totalClicks -= 1000000;
        autoDevver.increment = autoDevver.increment + 0.5;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoDevversArea').addClass('workAreaThree').removeClass('workAreaTwo');
        upgradeDevHousePurchased = true;
        updateValues();
    }
});
/* Power Rigs */
$('#upgradePowerRigs').click(function(){
    if (autoDevver.amount >= 50 && totalClicks >= 50000000) {
        totalClicks -= 50000000;
        autoDevver.increment = autoDevver.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradePowerRigs.css">');
        upgradePowerRigsPurchased = true;
        updateValues();
    }
});
/* Efficiency Center */
$('#upgradeEfficiencyCenter').click(function(){
    if (autoDevver.amount >= 100 && totalClicks >= 500000000) {
        totalClicks -= 500000000;
        autoDevver.increment = autoDevver.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoDevversArea').addClass('workAreaFour').removeClass('workAreaThree');
        upgradeEfficiencyCenterPurchased = true;
        updateValues();
    }
});
/* Basement Dwellers */
$('#upgradeBasementDwellers').click(function(){
    if (autoDevver.amount >= 150 && totalClicks >= 500000000000) {
        totalClicks -= 500000000000;
        autoDevver.increment = autoDevver.increment + 4;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoDevversArea').addClass('workAreaFive').removeClass('workAreaFour');
        upgradeBasementDwellersPurchased = true;
        updateValues();
    }
});
/* Virtual Paradise */
$('#upgradeVirtualParadise').click(function(){
    if (autoDevver.amount >= 175 && totalClicks >= 50000000000000) {
        totalClicks -= 50000000000000;
        autoDevver.increment = autoDevver.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeVirtualParadise.css">');
        upgradeVirtualParadisePurchased = true;
        updateValues();
    }
});
/* Just Automate Them */
$('#upgradeJustAutomateThem').click(function(){
    if (autoDevver.amount >= 200 && totalClicks >= 1000000000000000) {
        totalClicks -= 1000000000000000;
        autoDevver.increment = autoDevver.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeJustAutomateThem.css">');
        upgradeJustAutomateThemPurchased = true;
        updateValues();
    }
});

/* Colorful Space */
$('#upgradeColorfulSpace').click(function(){
    if (autoHasher.amount >= 1 && totalClicks >= 5000) {
        totalClicks -= 5000;
        autoHasher.increment = autoHasher.increment + 0.1;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoHashersArea').addClass('workAreaTwo').removeClass('workArea');
        upgradeColorfulSpacePurchased = true;
        updateValues();
    }
});
/* Staying Trendy */
$('#upgradeStayingTrendy').click(function(){
    if (autoHasher.amount >= 5 && totalClicks >= 50000) {
        totalClicks -= 50000;
        autoHasher.increment = autoHasher.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeStayingTrendy.css">');
        upgradeStayingTrendyPurchased = true;
        updateValues();
    }
});
/* Youthful Ambition */
$('#upgradeYouthfulAmbition').click(function(){
    if (autoHasher.amount >= 10 && totalClicks >= 500000) {
        totalClicks -= 500000;
        autoHasher.increment = autoHasher.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeYouthfulAmbition.css">');
        upgradeYouthfulAmbitionPurchased = true;
        updateValues();
    }
});
/* Showcase Office */
$('#upgradeShowcaseOffice').click(function(){
    if (autoHasher.amount >= 50 && totalClicks >= 25000000) {
        totalClicks -= 25000000;
        autoHasher.increment = autoHasher.increment + 3;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoHashersArea').addClass('workAreaThree').removeClass('workAreaTwo');
        upgradeShowcaseOfficePurchased = true;
        updateValues();
    }
});
/* Fancy-Pants Tablets */
$('#upgradeFancyPantsTablets').click(function(){
    if (autoHasher.amount >= 100 && totalClicks >= 5000000000) {
        totalClicks -= 5000000000;
        autoHasher.increment = autoHasher.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeFancyPantsTablets.css">');
        upgradeFancyPantsTabletsPurchased = true;
        updateValues();
    }
});
/* #LOLneurology */
$('#upgradeLOLneurology').click(function(){
    if (autoHasher.amount >= 150 && totalClicks >= 5000000000000) {
        totalClicks -= 5000000000000;
        autoHasher.increment = autoHasher.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeLOLneurology.css">');
        upgradeLOLneurologyPurchased = true;
        updateValues();
    }
});
/* Sustenance Vats */
$('#upgradeSustenanceVats').click(function(){
    if (autoHasher.amount >= 200 && totalClicks >= 15000000000000000) {
        totalClicks -= 15000000000000000;
        autoHasher.increment = autoHasher.increment + 30;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeSustenanceVats.css">');
        $('#autoHashersArea').addClass('workAreaFour').removeClass('workAreaThree');
        upgradeSustenanceVatsPurchased = true;
        updateValues();
    }
});

/* Charts & Graphs */
$('#upgradeChartsGraphs').click(function(){
    if (autoManager.amount >= 1 && totalClicks >= 25000) {
        totalClicks -= 25000;
        autoManager.increment = autoManager.increment + 0.4;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoManagersArea').addClass('workAreaTwo').removeClass('workArea');
        upgradeChartsGraphsPurchased = true;
        updateValues();
    }
});
/* Dress for Success */
$('#upgradeDressforSuccess').click(function(){
    if (autoManager.amount >= 5 && totalClicks >= 250000) {
        totalClicks -= 250000;
        autoManager.increment = autoManager.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeDressforSuccess.css">');
        upgradeDressforSuccessPurchased = true;
        updateValues();
    }
});
/* Boardroom Boom */
$('#upgradeBoardroomBoom').click(function(){
    if (autoManager.amount >= 10 && totalClicks >= 2500000) {
        totalClicks -= 2500000;
        autoManager.increment = autoManager.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoManagersArea').addClass('workAreaThree').removeClass('workAreaTwo');
        upgradeBoardroomBoomPurchased = true;
        updateValues();
    }
});
/* Lines Going Up */
$('#upgradeLinesGoingUp').click(function(){
    if (autoManager.amount >= 50 && totalClicks >= 125000000) {
        totalClicks -= 125000000;
        autoManager.increment = autoManager.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoManagersArea').addClass('workAreaFour').removeClass('workAreaThree');
        upgradeLinesGoingUpPurchased = true;
        updateValues();
    }
});
/* My Boss is a Robot */
$('#upgradeMyBossisaRobot').click(function(){
    if (autoManager.amount >= 100 && totalClicks >= 2500000000) {
        totalClicks -= 2500000000;
        autoManager.increment = autoManager.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeMyBossisaRobot.css">');
        upgradeMyBossisaRobotPurchased = true;
        updateValues();
    }
});
/* Seal It Up */
$('#upgradeSealItUp').click(function(){
    if (autoManager.amount >= 150 && totalClicks >= 25000000000000) {
        totalClicks -= 25000000000000;
        autoManager.increment = autoManager.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoManagersArea').addClass('workAreaFive').removeClass('workAreaFour');
        upgradeSealItUpPurchased = true;
        updateValues();
    }
});

/* Persona Segmentation */
$('#upgradePersonaSegmentation').click(function(){
    if (autoEvanger.amount >= 1 && totalClicks >= 100000) {
        totalClicks -= 100000;
        autoEvanger.increment = autoEvanger.increment + 1;
        $(this).removeClass('upgrade').addClass('hidden');
        upgradePersonaSegmentationPurchased = true;
        updateValues();
    }
});
/* What We Have to Say */
$('#upgradeWhatWeHavetoSay').click(function(){
    if (autoEvanger.amount >= 5 && totalClicks >= 1000000) {
        totalClicks -= 1000000;
        autoEvanger.increment = autoEvanger.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoEvangersArea').addClass('workAreaTwo').removeClass('workArea');
        upgradeWhatWeHavetoSayPurchased = true;
        updateValues();
    }
});
/* Goal Digger Idealism */
$('#upgradeGoalDiggerIdealism').click(function(){
    if (autoEvanger.amount >= 10 && totalClicks >= 10000000) {
        totalClicks -= 10000000;
        autoEvanger.increment = autoEvanger.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeGoalDiggerIdealism.css">');
        upgradeGoalDiggerIdealismPurchased = true;
        updateValues();
    }
});
/* Cult of Personality */
$('#upgradeCultofPersonality').click(function(){
    if (autoEvanger.amount >= 50 && totalClicks >= 500000000) {
        totalClicks -= 500000000;
        autoEvanger.increment = autoEvanger.increment + 30;
        $(this).removeClass('upgrade').addClass('hidden');
        upgradeCultofPersonalityPurchased = true;
        updateValues();
    }
});
/* Record Ratings */
$('#upgradeRecordRatings').click(function(){
    if (autoEvanger.amount >= 100 && totalClicks >= 100000000000) {
        totalClicks -= 100000000000;
        autoEvanger.increment = autoEvanger.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('#autoEvangersArea').addClass('workAreaThree').removeClass('workAreaTwo');
        upgradeRecordRatingsPurchased = true;
        updateValues();
    }
});
/* Messengers of Truth */
$('#upgradeMessengersofTruth').click(function(){
    if (autoEvanger.amount >= 150 && totalClicks >= 100000000000000) {
        totalClicks -= 100000000000000;
        autoEvanger.increment = autoEvanger.increment * 2;
        $(this).removeClass('upgrade').addClass('hidden');
        $('head').append('<link rel="stylesheet" href="css/upgradeMessengersofTruth.css">');
        upgradeMessengersofTruthPurchased = true;
        updateValues();
    }
});

});//]]>  
