var exit = false;
@Flag(BathroomFloorWash) 
@Variable
BathroomWash();
exit = true;
var exit = false;
@Variable
BathroomWipe();
exit = true;
var exit = false;
@Variable
BathroomVacuum();
exit = true;
function BathroomWash()
{
    setTempVar("BathroomWashFloorTemp", true);
    @SystemMessage #VANC #VANP Bathroom! 
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
    BathroomWipe();
    return;
}
function BathroomWipe()
{
    setTempVar("BathroomWipeTemp", true);
    @SystemMessage #VANC #VANP Bathroom! 
    @ShowImage
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (2 + 1));
    if (random0 == 0)
    {
        CMessage("It's time to clean the toilet and whatelse");
    }
    else if (random0 == 1)
    {
        CMessage("Time for you to clean the toilet and whatelse");
    }
    else if (random0 == 2)
    {
        CMessage("Lets have you do some toiletscrubbing and whatelse");
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
    BathroomVacuum();
    return;
}
function BathroomVacuum()
{
    setTempVar("BathroomVacuumFloorTemp", true);
    @SystemMessage #VANC #VANP Bathroom! 
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
    if (getVar("BathroomAverageSet", false)){
        BathroomAverageSet();
        return;
    }
    if (getVar("Bathroom5AverageSet", false)){
        Bathroom5AverageSet();
        return;
    }
    if (getVar("Bathroom4AverageSet", false)){
        Bathroom4AverageSet();
        return;
    }
    if (getVar("Bathroom3AverageSet", false)){
        Bathroom3AverageSet();
        return;
    }
    if (getVar("Bathroom2AverageSet", false)){
        Bathroom2AverageSet();
        return;
    }
    Bathroom1AverageSet();
    return;
}
function Bathroom1AverageSet()
{
    setVar("Bathroom1Average", 0);
    setVar("Bathroom2AverageSet", true);
    setVar("Bathroom1Average", getVar("Bathroom1Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
}
function Bathroom2AverageSet()
{
    setVar("Bathroom2Average", 0);
    setVar("Bathroom3AverageSet", true);
    setVar("Bathroom2Average", getVar("Bathroom2Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
}
function Bathroom3AverageSet()
{
    setVar("Bathroom3Average", 0);
    setVar("Bathroom4AverageSet", true);
    setVar("Bathroom3Average", getVar("Bathroom3Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
}
function Bathroom4AverageSet()
{
    setVar("Bathroom4Average", 0);
    setVar("Bathroom5AverageSet", true);
    setVar("Bathroom4Average", getVar("Bathroom4Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
}
function Bathroom5AverageSet()
{
    setVar("Bathroom5Average", 0);
    setVar("BathroomAverageSet", true);
    setVar("Bathroom5Average", getVar("Bathroom5Average", 0) + getVar("CleaningTimeTemp", 0));
    setVar("BathroomAverage", 0);
    setVar("BathroomAverage", getVar("BathroomAverage", 0) + getVar("Bathroom1Average", 0));
    setVar("BathroomAverage", getVar("BathroomAverage", 0) + getVar("Bathroom2Average", 0));
    setVar("BathroomAverage", getVar("BathroomAverage", 0) + getVar("Bathroom3Average", 0));
    setVar("BathroomAverage", getVar("BathroomAverage", 0) + getVar("Bathroom4Average", 0));
    setVar("BathroomAverage", getVar("BathroomAverage", 0) + getVar("Bathroom5Average", 0));
    setVar("BathroomAverage", getVar("BathroomAverage", 0) / 5);
    setVar("BathroomSlow", 0);
    setVar("BathroomSlow", getVar("BathroomSlow", 0) + getVar("BathroomAverage", 0));
    setVar("BathroomSlow", getVar("BathroomSlow", 0) * 2);
    setVar("BathroomFast", 0);
    setVar("BathroomFast", getVar("BathroomFast", 0) + getVar("BathroomAverage", 0));
    setVar("BathroomFast", getVar("BathroomFast", 0) / 2);
    setVar("BathroomScopeLow", 0);
    setVar("BathroomScopeLow", getVar("BathroomScopeLow", 0) + getVar("BathroomAverage", 0));
    setVar("BathroomScopeLow", getVar("BathroomScopeLow", 0) / 4);
    setVar("BathroomScopeLow", getVar("BathroomScopeLow", 0) * 3);
    setVar("BathroomScopeHigh", 0);
    setVar("BathroomScopeHigh", getVar("BathroomScopeHigh", 0) + getVar("BathroomAverage", 0));
    setVar("BathroomScopeHigh", getVar("BathroomScopeHigh", 0) / 4);
    setVar("BathroomScopeHigh", getVar("BathroomScopeHigh", 0) * 5);
    setVar("BathroomWipeTime", 0);
    setVar("BathroomWipeTime", getVar("BathroomWipeTime", 0) + getVar("BathroomAverage", 0));
    setVar("BathroomWipeTime", getVar("BathroomWipeTime", 0) / 4);
    setVar("BathroomWipeTime", getVar("BathroomWipeTime", 0) * 5);
    setVar("BathroomWipeSlow", 0);
    setVar("BathroomWipeSlow", getVar("BathroomWipeSlow", 0) + getVar("BathroomWipeTime", 0));
    setVar("BathroomWipeSlow", getVar("BathroomWipeSlow", 0) * 2);
    setVar("BathroomWipeFast", 0);
    setVar("BathroomWipeFast", getVar("BathroomWipeFast", 0) + getVar("BathroomWipeTime", 0));
    setVar("BathroomWipeFast", getVar("BathroomWipeFast", 0) / 2);
    setVar("BathroomWipeScopeLow", 0);
    setVar("BathroomWipeScopeLow", getVar("BathroomWipeScopeLow", 0) + getVar("BathroomWipeTime", 0));
    setVar("BathroomWipeScopeLow", getVar("BathroomWipeScopeLow", 0) / 4);
    setVar("BathroomWipeScopeLow", getVar("BathroomWipeScopeLow", 0) * 3);
    setVar("BathroomWipeScopeHigh", 0);
    setVar("BathroomWipeScopeHigh", getVar("BathroomWipeScopeHigh", 0) + getVar("BathroomWipeTime", 0));
    setVar("BathroomWipeScopeHigh", getVar("BathroomWipeScopeHigh", 0) / 4);
    setVar("BathroomWipeScopeHigh", getVar("BathroomWipeScopeHigh", 0) * 5);
    setVar("BathroomWashTime", 0);
    setVar("BathroomWashTime", getVar("BathroomWashTime", 0) + getVar("BathroomAverage", 0));
    setVar("BathroomWashTime", getVar("BathroomWashTime", 0) / 4);
    setVar("BathroomWipeTime", getVar("BathroomWipeTime", 0) * 5);
    setVar("BathroomWashSlow", 0);
    setVar("BathroomWashSlow", getVar("BathroomWashSlow", 0) + getVar("BathroomWashTime", 0));
    setVar("BathroomWashSlow", getVar("BathroomWashSlow", 0) * 2);
    setVar("BathroomWashFast", 0);
    setVar("BathroomWashFast", getVar("BathroomWashFast", 0) + getVar("BathroomWashTime", 0));
    setVar("BathroomWashFast", getVar("BathroomWashFast", 0) / 2);
    setVar("BathroomWashScopeLow", 0);
    setVar("BathroomWashScopeLow", getVar("BathroomWashScopeLow", 0) + getVar("BathroomWashTime", 0));
    setVar("BathroomWashScopeLow", getVar("BathroomWashScopeLow", 0) / 4);
    setVar("BathroomWashScopeLow", getVar("BathroomWashScopeLow", 0) * 3);
    setVar("BathroomWashScopeHigh", 0);
    setVar("BathroomWashScopeHigh", getVar("BathroomWashScopeHigh", 0) + getVar("BathroomWashTime", 0));
    setVar("BathroomWashScopeHigh", getVar("BathroomWashScopeHigh", 0) / 4);
    setVar("BathroomWashScopeHigh", getVar("BathroomWashScopeHigh", 0) * 5);
    BathroomAverageSet();
    return;
}
function BathroomAverageSet()
{
    @Flag(BathroomVacuumFloorTemp) 
    Vacuum();
    return;
}
var exit = false;
@Flag(BathroomWipeTemp) 
Wipe();
exit = true;
var exit = false;
@Flag(BathroomWashFloorTemp) 
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
        CMessage("really");
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
    if (getVar("BathroomWashFloorTemp", false)){
        BathroomWashFloorTemp();
        return;
    }
    if (getVar("BathroomVacuumFloorTemp", false)){
        BathroomVacuumFloorTemp();
        return;
    }
    if (getVar("BathroomWipeTemp", false)){
        BathroomWipeTemp();
        return;
    }
    BathroomVacuumFloorTemp();
    return;
}
function BathroomVacuumFloorTemp()
{
    setVar("ChoreComplete", getVar("ChoreComplete", 0) + 1);
    @SetDate(BathroomVacuum, 0 days)
}
function BathroomWashFloorTemp()
{
    setVar("ChoreComplete", getVar("ChoreComplete", 0) + 1);
    @SetDate(BathroomVacuum, 0 days)
    @SetDate(BathroomWash, 0 days)
}
function BathroomWipeTemp()
{
    setVar("ChoreComplete", getVar("ChoreComplete", 0) + 1);
    @SetDate(BathroomVacuum, 0 days)
    @SetDate(BathroomWipe, 0 days)
}
