var exit = false;
@Flag(KitchenFloorWash) 
@Variable
KitchenWash();
exit = true;
var exit = false;
@Variable
KitchenWipe();
exit = true;
var exit = false;
@Variable
KitchenVacuum();
exit = true;
function KitchenWash()
{
    setTempVar("KitchenWashFloorTemp", true);
    @SystemMessage #VANC #VANP Kitchen! 
    @ShowImage
    @SystemMessage #VANC #VANP @RT(It's time to mop the floors!,Time for you to mop the floors,Lets have you do some floor mopping!,Time to mop mop mop #GNMGrin,Work work work all day - mop all night #GNMLol) 
    @SystemMessage #VANC #VANP But 
    var random0 = Math.floor(Math.random() * (3 + 1));
    if (random0 == 0)
    {
        CMessage("first");
    }
    else if (random0 == 1)
    {
        CMessage("before that");
    }
    else if (random0 == 2)
    {
        CMessage("before we get to that");
    }
    else if (random0 == 3)
    {
        CMessage("just before");
    }
    @SystemMessage #VANC #VANP 
    var random1 = Math.floor(Math.random() * (2 + 1));
    if (random1 == 0)
    {
        CMessage("They need to be vacuumed");
    }
    else if (random1 == 1)
    {
        CMessage("You have to vacuum them first");
    }
    else if (random1 == 2)
    {
        CMessage("You gotta go ahead and vacuum them");
    }
    @SystemMessage #VANC #VANP 
    var random2 = Math.floor(Math.random() * (2 + 1));
    if (random2 == 0)
    {
        CMessage("Fetch");
    }
    else if (random2 == 1)
    {
        CMessage("Find and get");
    }
    else if (random2 == 2)
    {
        CMessage("Retrieve");
    }
    sleep(10);
    Loop();
    return;
    KitchenWipe();
    return;
}
function KitchenWipe()
{
    setTempVar("KitchenWipeTemp", true);
    @SystemMessage #VANC #VANP Kitchen! 
    @ShowImage
    @SystemMessage #VANC #VANP @RT(It's time to wipe the surfaces!,Time for you to wipe the surfaces,Lets have you do some wiping!,Time to wipe wipe wipe #GNMGrin,Work work work all day - wipe all night #GNMLol)
    @SystemMessage #VANC #VANP But 
    var random0 = Math.floor(Math.random() * (3 + 1));
    if (random0 == 0)
    {
        CMessage("first");
    }
    else if (random0 == 1)
    {
        CMessage("before that");
    }
    else if (random0 == 2)
    {
        CMessage("before we get to that");
    }
    else if (random0 == 3)
    {
        CMessage("just before");
    }
    @SystemMessage #VANC #VANP 
    var random1 = Math.floor(Math.random() * (2 + 1));
    if (random1 == 0)
    {
        CMessage("You need to be vacuum the floor and other surfaces");
    }
    else if (random1 == 1)
    {
        CMessage("You have to vacuum the floor and surfaces first");
    }
    else if (random1 == 2)
    {
        CMessage("You gotta go ahead and vacuum the floor then the surfaces");
    }
    @SystemMessage #VANC #VANP 
    var random2 = Math.floor(Math.random() * (2 + 1));
    if (random2 == 0)
    {
        CMessage("Fetch");
    }
    else if (random2 == 1)
    {
        CMessage("Find and get");
    }
    else if (random2 == 2)
    {
        CMessage("Retrieve");
    }
    sleep(10);
    Loop();
    return;
    KitchenVacuum();
    return;
}
function KitchenVacuum()
{
    setTempVar("KitchenVacuumFloorTemp", true);
    @SystemMessage #VANC #VANP Kitchen! 
    @ShowImage
    @SystemMessage #VANC #VANP @RT(It's time to vacuum!,Time for you to vacuum the floor,Lets have you do some vacuuming!,Time to clean clean clean #GNMGrin,Work work work all day - clean all night #GNMLol)
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (2 + 1));
    if (random0 == 0)
    {
        CMessage("You need to be vacuum the floor");
    }
    else if (random0 == 1)
    {
        CMessage("You have to vacuum the floor");
    }
    else if (random0 == 2)
    {
        CMessage("You gotta go ahead and vacuum the floor");
    }
    @SystemMessage #VANC #VANP 
    var random1 = Math.floor(Math.random() * (2 + 1));
    if (random1 == 0)
    {
        CMessage("Fetch");
    }
    else if (random1 == 1)
    {
        CMessage("Find and get");
    }
    else if (random1 == 2)
    {
        CMessage("Retrieve");
    }
    sleep(10);
    Loop();
    return;
    Loop();
    return;
}
function Loop()
{
    @SystemMessage #VANC #VANP #GNMReady
    @SystemMessage #VANC #VANP #GNMGood
    @SystemMessage #VANC #VANP Hurry.. 
    sleep(10);
    Loop();
    return;
}
var exit = false;
@DifferentAnswer 
@SystemMessage #VANC #VANP #GNMYesOrNo
run("CR\BackgroundMode\Chores\KinkyCleaning.txt");
exit = true;
var exit = false;
@SystemMessage #VANC #VANP Okay then 
@SystemMessage #VANC #VANP You can go ahead and start with the cleaning.. 
@SystemMessage #VANC #VANP Report when you're done cleaning 
@CustomMode(#Done, Goto, Done)
StartTimer();
exit = true;
function StartTimer()
{
    setVar("CleaningTimeTemp", 0);
    @CountVar[CleaningTimeTemp]
    if (getVar("BellGame1", false)){
        BellGame1();
        return;
    }
    if (getVar("BellGame2", false)){
        BellGame2();
        return;
    }
    Timer();
    return;
}
function BellGame1()
{
    @Wait
    Corner();
    return;
}
function Corner()
{
    @SystemMessage #VANC #VANP Go to the corner #SlaveName 
    playAudio("/GNMSounds/SpecialSounds/Bell.mp3");
    @CountVar
     @Wait
    @SystemMessage #VANC #VANP Return to work #SlaveName 
    playAudio("/GNMSounds/SpecialSounds/Bell.mp3");
    @CountVar[CleaningTimeTemp] 
    BellGame1();
    return;
}
function BellGame2()
{
    @Wait
    Sentence();
    return;
}
function Sentence()
{
    playAudio("/GNMSounds/SpecialSounds/Bell.mp3");
    @CountVar
    Type();
    return;
}
function Type()
{
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (6 + 1));
    if (random0 == 0)
    {
        CMessage("I have to clean properly");
    }
    else if (random0 == 1)
    {
        CMessage("I'm a cleaning slut");
    }
    else if (random0 == 2)
    {
        CMessage("I have to clean with a smile");
    }
    else if (random0 == 3)
    {
        CMessage("Cleaning makes me happy");
    }
    else if (random0 == 4)
    {
        CMessage("You can never clean enough");
    }
    else if (random0 == 5)
    {
        CMessage("I wish I could clean all day");
    }
    else if (random0 == 6)
    {
        CMessage("I really love cleaning");
    }
    @SystemMessage #VANC #VANP Get back to cleaning
    @SystemMessage #VANC #VANP Get back to cleaning
    @SystemMessage #VANC #VANP Get back to cleaning 
    @SystemMessage #VANC #VANP Get back to cleaning
    @SystemMessage #VANC #VANP Get back to cleaning
    @SystemMessage #VANC #VANP Get back to cleaning 
    @SystemMessage #VANC #VANP Get back to cleaning
    @AcceptAnswer 
    @SystemMessage #VANC #VANP Wrong.. Try again.. 
    Type();
    return;
    @SystemMessage #VANC #VANP Return to work 
    @CountVar[CleaningTimeTemp] 
    BellGame2();
    return;
    Timer();
    return;
}
function Timer()
{
    sleep(99999);
    Done();
    return;
}
function Done()
{
    @CustomMode(#Done,Normal) 
    @CountVar
    @SystemMessage #VANC #VANP So you're done.. 
    if (getVar("KitchenAverageSet", false)){
        KitchenAverageSet();
        return;
    }
    if (getVar("Kitchen5AverageSet", false)){
        Kitchen5AverageSet();
        return;
    }
    if (getVar("Kitchen4AverageSet", false)){
        Kitchen4AverageSet();
        return;
    }
    if (getVar("Kitchen3AverageSet", false)){
        Kitchen3AverageSet();
        return;
    }
    if (getVar("Kitchen2AverageSet", false)){
        Kitchen2AverageSet();
        return;
    }
    Kitchen1AverageSet();
    return;
}
function Kitchen1AverageSet()
{
    setVar("Kitchen1Average", 0);
    setVar("Kitchen2AverageSet", true);
    setVar("Kitchen1Average", getVar("Kitchen1Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
}
function Kitchen2AverageSet()
{
    setVar("Kitchen2Average", 0);
    setVar("Kitchen3AverageSet", true);
    setVar("Kitchen2Average", getVar("Kitchen2Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
}
function Kitchen3AverageSet()
{
    setVar("Kitchen3Average", 0);
    setVar("Kitchen4AverageSet", true);
    setVar("Kitchen3Average", getVar("Kitchen3Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
}
function Kitchen4AverageSet()
{
    setVar("Kitchen4Average", 0);
    setVar("Kitchen5AverageSet", true);
    setVar("Kitchen4Average", getVar("Kitchen4Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
}
function Kitchen5AverageSet()
{
    setVar("Kitchen5Average", 0);
    setVar("KitchenAverageSet", true);
    setVar("Kitchen5Average", getVar("Kitchen5Average", 0) + getVar("CleaningTimeTemp", 0));
    setVar("KitchenAverage", 0);
    setVar("KitchenAverage", getVar("KitchenAverage", 0) + getVar("Kitchen1Average", 0));
    setVar("KitchenAverage", getVar("KitchenAverage", 0) + getVar("Kitchen2Average", 0));
    setVar("KitchenAverage", getVar("KitchenAverage", 0) + getVar("Kitchen3Average", 0));
    setVar("KitchenAverage", getVar("KitchenAverage", 0) + getVar("Kitchen4Average", 0));
    setVar("KitchenAverage", getVar("KitchenAverage", 0) + getVar("Kitchen5Average", 0));
    setVar("KitchenAverage", getVar("KitchenAverage", 0) / 5);
    setVar("KitchenSlow", 0);
    setVar("KitchenSlow", getVar("KitchenSlow", 0) + getVar("KitchenAverage", 0));
    setVar("KitchenSlow", getVar("KitchenSlow", 0) * 2);
    setVar("KitchenFast", 0);
    setVar("KitchenFast", getVar("KitchenFast", 0) + getVar("KitchenAverage", 0));
    setVar("KitchenFast", getVar("KitchenFast", 0) / 2);
    setVar("KitchenScopeLow", 0);
    setVar("KitchenScopeLow", getVar("KitchenScopeLow", 0) + getVar("KitchenAverage", 0));
    setVar("KitchenScopeLow", getVar("KitchenScopeLow", 0) / 4);
    setVar("KitchenScopeLow", getVar("KitchenScopeLow", 0) * 3);
    setVar("KitchenScopeHigh", 0);
    setVar("KitchenScopeHigh", getVar("KitchenScopeHigh", 0) + getVar("KitchenAverage", 0));
    setVar("KitchenScopeHigh", getVar("KitchenScopeHigh", 0) / 4);
    setVar("KitchenScopeHigh", getVar("KitchenScopeHigh", 0) * 5);
    setVar("KitchenWipeTime", 0);
    setVar("KitchenWipeTime", getVar("KitchenWipeTime", 0) + getVar("KitchenAverage", 0));
    setVar("KitchenWipeTime", getVar("KitchenWipeTime", 0) / 4);
    setVar("KitchenWipeTime", getVar("KitchenWipeTime", 0) * 5);
    setVar("KitchenWipeSlow", 0);
    setVar("KitchenWipeSlow", getVar("KitchenWipeSlow", 0) + getVar("KitchenWipeTime", 0));
    setVar("KitchenWipeSlow", getVar("KitchenWipeSlow", 0) * 2);
    setVar("KitchenWipeFast", 0);
    setVar("KitchenWipeFast", getVar("KitchenWipeFast", 0) + getVar("KitchenWipeTime", 0));
    setVar("KitchenWipeFast", getVar("KitchenWipeFast", 0) / 2);
    setVar("KitchenWipeScopeLow", 0);
    setVar("KitchenWipeScopeLow", getVar("KitchenWipeScopeLow", 0) + getVar("KitchenWipeTime", 0));
    setVar("KitchenWipeScopeLow", getVar("KitchenWipeScopeLow", 0) / 4);
    setVar("KitchenWipeScopeLow", getVar("KitchenWipeScopeLow", 0) * 3);
    setVar("KitchenWipeScopeHigh", 0);
    setVar("KitchenWipeScopeHigh", getVar("KitchenWipeScopeHigh", 0) + getVar("KitchenWipeTime", 0));
    setVar("KitchenWipeScopeHigh", getVar("KitchenWipeScopeHigh", 0) / 4);
    setVar("KitchenWipeScopeHigh", getVar("KitchenWipeScopeHigh", 0) * 5);
    setVar("KitchenWashTime", 0);
    setVar("KitchenWashTime", getVar("KitchenWashTime", 0) + getVar("KitchenAverage", 0));
    setVar("KitchenWashTime", getVar("KitchenWashTime", 0) / 4);
    setVar("KitchenWipeTime", getVar("KitchenWipeTime", 0) * 5);
    setVar("KitchenWashSlow", 0);
    setVar("KitchenWashSlow", getVar("KitchenWashSlow", 0) + getVar("KitchenWashTime", 0));
    setVar("KitchenWashSlow", getVar("KitchenWashSlow", 0) * 2);
    setVar("KitchenWashFast", 0);
    setVar("KitchenWashFast", getVar("KitchenWashFast", 0) + getVar("KitchenWashTime", 0));
    setVar("KitchenWashFast", getVar("KitchenWashFast", 0) / 2);
    setVar("KitchenWashScopeLow", 0);
    setVar("KitchenWashScopeLow", getVar("KitchenWashScopeLow", 0) + getVar("KitchenWashTime", 0));
    setVar("KitchenWashScopeLow", getVar("KitchenWashScopeLow", 0) / 4);
    setVar("KitchenWashScopeLow", getVar("KitchenWashScopeLow", 0) * 3);
    setVar("KitchenWashScopeHigh", 0);
    setVar("KitchenWashScopeHigh", getVar("KitchenWashScopeHigh", 0) + getVar("KitchenWashTime", 0));
    setVar("KitchenWashScopeHigh", getVar("KitchenWashScopeHigh", 0) / 4);
    setVar("KitchenWashScopeHigh", getVar("KitchenWashScopeHigh", 0) * 5);
    KitchenAverageSet();
    return;
}
function KitchenAverageSet()
{
    @Flag(KitchenVacuumFloorTemp) 
    Vacuum();
    return;
}
var exit = false;
@Flag(KitchenWipeTemp) 
Wipe();
exit = true;
var exit = false;
@Flag(KitchenWashFloorTemp) 
Wash();
exit = true;
var exit = false;
Vacuum();
exit = true;
function Vacuum()
{
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    Wipe();
    return;
}
function Wipe()
{
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    Wash();
    return;
}
function Wash()
{
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    @If[CleaningTimeTemp]
    Satisfied();
    return;
}
function Satisfied()
{
    @SystemMessage #VANC #VANP Good job today #SlaveName 
    FlagTest();
    return;
}
function EndFast()
{
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (4 + 1));
    if (random0 == 0)
    {
        CMessage("Too fast");
    }
    else if (random0 == 1)
    {
        CMessage("That was waay too fast");
    }
    else if (random0 == 2)
    {
        CMessage("SlaveName");
    }
    else if (random0 == 3)
    {
        CMessage("Impossible");
    }
    else if (random0 == 4)
    {
        CMessage("You can't possible be this fast");
    }
    @SystemMessage #VANC #VANP 
    var random1 = Math.floor(Math.random() * (2 + 1));
    if (random1 == 0)
    {
        CMessage("That can't go unpunished");
    }
    else if (random1 == 1)
    {
        CMessage("I have to punish you for this");
    }
    else if (random1 == 2)
    {
        CMessage("I'm gonna have to punish you");
    }
    @SystemMessage #VANC #VANP I have assigned you punishment points 
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 200);
    FlagTest();
    return;
    EndSlow();
    return;
}
function EndSlow()
{
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (5 + 1));
    if (random0 == 0)
    {
        CMessage("You're late");
    }
    else if (random0 == 1)
    {
        CMessage("You're late");
    }
    else if (random0 == 2)
    {
        CMessage("SlaveName");
    }
    else if (random0 == 3)
    {
        CMessage("You're late slut");
    }
    else if (random0 == 4)
    {
        CMessage("Late are we");
    }
    else if (random0 == 5)
    {
        CMessage("You know you're late right");
    }
    @SystemMessage #VANC #VANP 
    var random1 = Math.floor(Math.random() * (2 + 1));
    if (random1 == 0)
    {
        CMessage("I don't tolerate late");
    }
    else if (random1 == 1)
    {
        CMessage("You know I don't tolerate it when you're late");
    }
    else if (random1 == 2)
    {
        CMessage("There is zero tolerance for being late and lazy");
    }
    @SystemMessage #VANC #VANP I have assigned you punishment points 
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 200);
    FlagTest();
    return;
    EndSlower();
    return;
}
function EndSlower()
{
    @SystemMessage #VANC #VANP You've been slower than usual.. 
    if (getVar("CleaningWarning", false)){
        CleaningWarning();
        return;
    }
    @SystemMessage #VANC #VANP Anything I should know?
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (1 + 1));
    if (random0 == 0)
    {
        CMessage("Inexcusable");
    }
    else if (random0 == 1)
    {
        CMessage("You know that laziness can't be tolerated");
    }
    @SystemMessage #VANC #VANP 
    var random1 = Math.floor(Math.random() * (1 + 1));
    if (random1 == 0)
    {
        CMessage("Inexcusable");
    }
    else if (random1 == 1)
    {
        CMessage("I don't care if you're tired");
    }
    @SystemMessage #VANC #VANP 
    var random2 = Math.floor(Math.random() * (2 + 1));
    if (random2 == 0)
    {
        CMessage("Excuses");
    }
    else if (random2 == 1)
    {
        CMessage("Really");
    }
    else if (random2 == 2)
    {
        CMessage("Wauv you're gonna blame me");
    }
    @SystemMessage #VANC #VANP I see but you should always be thorough!
    @SystemMessage #VANC #VANP Your #Home should always be tidy!
    @AcceptAnswer 
    @SystemMessage #VANC #VANP I'm giving you a warning #SlaveName 
    setVar("CleaningWarning", true);
    FlagTest();
    return;
    @SystemMessage #VANC #VANP 
    var random3 = Math.floor(Math.random() * (1 + 1));
    if (random3 == 0)
    {
        CMessage("I'm gonna have to punish you slave");
    }
    else if (random3 == 1)
    {
        CMessage("I'm sorry but this can't go unpunished");
    }
    @SystemMessage #VANC #VANP I have assigned you punishment points 
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 100);
    FlagTest();
    return;
    CleaningWarning();
    return;
}
function CleaningWarning()
{
    @SystemMessage #VANC #VANP I gave you a warning last time! 
    deleteVar("CleaningWarning");
    @SystemMessage #VANC #VANP So this time I'm punishing you! 
    @SystemMessage #VANC #VANP I have assigned you punishment points 
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 100);
    FlagTest();
    return;
}
function EndFaster()
{
    @SystemMessage #VANC #VANP You've been faster than usual.. 
    if (getVar("CleaningWarning", false)){
        CleaningWarning();
        return;
    }
    @SystemMessage #VANC #VANP Anything I should know?
    @SystemMessage #VANC #VANP You can't haste thoroughness!
    @SystemMessage #VANC #VANP I expect that you're always thorough when cleaning
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (1 + 1));
    if (random0 == 0)
    {
        CMessage("I'm gonna have to punish you slave");
    }
    else if (random0 == 1)
    {
        CMessage("I'm sorry but this can't go unpunished");
    }
    @SystemMessage #VANC #VANP I have assigned you punishment points 
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 100);
    FlagTest();
    return;
    EndPerfect();
    return;
}
function EndPerfect()
{
    @SystemMessage #VANC #VANP #GNMGood #SlaveName #MeritChangePMedium
    @SystemMessage #VANC #VANP Allow me to reward your 
    var random0 = Math.floor(Math.random() * (3 + 1));
    if (random0 == 0)
    {
        CMessage("splendid");
    }
    else if (random0 == 1)
    {
        CMessage("good");
    }
    else if (random0 == 2)
    {
        CMessage("excellent");
    }
    else if (random0 == 3)
    {
        CMessage("lovely");
    }
    var random1 = Math.floor(Math.random() * (1 + 1));
    if (random1 == 0)
    {
        CMessage("behaviour");
    }
    else if (random1 == 1)
    {
        CMessage("work");
    }
    setVar("GNMGold", getVar("GNMGold", 0));
    FlagTest();
    return;
    FlagTest();
    return;
}
function FlagTest()
{
    if (getVar("KitchenWashFloorTemp", false)){
        KitchenWashFloorTemp();
        return;
    }
    if (getVar("KitchenVacuumFloorTemp", false)){
        KitchenVacuumFloorTemp();
        return;
    }
    if (getVar("KitchenWipeTemp", false)){
        KitchenWipeTemp();
        return;
    }
    KitchenVacuumFloorTemp();
    return;
}
function KitchenVacuumFloorTemp()
{
    setVar("ChoreComplete", getVar("ChoreComplete", 0) + 1);
    @SetDate(KitchenVacuum, 0 days)
}
function KitchenWashFloorTemp()
{
    setVar("ChoreComplete", getVar("ChoreComplete", 0) + 1);
    @SetDate(KitchenVacuum, 0 days)
    @SetDate(KitchenWash, 0 days)
}
function KitchenWipeTemp()
{
    setVar("ChoreComplete", getVar("ChoreComplete", 0) + 1);
    @SetDate(KitchenVacuum, 0 days)
    @SetDate(KitchenWipe, 0 days)
}
