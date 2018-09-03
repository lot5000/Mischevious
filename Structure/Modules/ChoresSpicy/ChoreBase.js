var exit = false;
if (getVar("FirstChoreRun", false)){
    FirstChoreRun();
    exit = true;
}
if (!exit) {
    run("CR\BackgroundMode\Chores\FirstChoreRun.txt");
    exit = true;
    if (!exit) {
        deleteVar("Chore");
        FirstChoreRun();
        exit = true;
    }
}
function FirstChoreRun()
{
    if (getVar("ChoreActive", false)){
        ChoreActive();
        return;
    }
    Base();
    return;
}
function Base()
{
    if (getVar("Chore", false)){
        Chore();
        return;
    }
    @SystemMessage #VANC #VANP Do you wish to do a new chore or return?
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (4 + 1));
    if (random0 == 0)
    {
        CMessage("So");
    }
    else if (random0 == 1)
    {
        CMessage("Okay");
    }
    else if (random0 == 2)
    {
        CMessage("Well then");
    }
    else if (random0 == 3)
    {
        CMessage("Hmm");
    }
    else if (random0 == 4)
    {
        CMessage("Let's see");
    }
    End();
    return;
    @DifferentAnswer 
    @SystemMessage #VANC #VANP Chore or return?
    Chore();
    return;
}
function Chore()
{
    deleteVar("Chore");
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (2 + 1));
    if (random0 == 0)
    {
        CMessage("What chore to give you next");
    }
    else if (random0 == 1)
    {
        CMessage("What chore should you do");
    }
    else if (random0 == 2)
    {
        CMessage("Let's see if we can find a chore for you");
    }
    Cleaning();
    return;
}
function Cleaning()
{
    @Flag(KitchenActive) 
    @Variable
    CleanKitchen();
    return;
}
var exit = false;
@Flag(BathroomActive) 
@Variable
CleanBathroom();
exit = true;
var exit = false;
if (getVar("1Room", false)){
    1Room();
    exit = true;
}
if (!exit) {
    if (getVar("2Room", false)){
        2Room();
        exit = true;
    }
    if (!exit) {
        if (getVar("3Room", false)){
            3Room();
            exit = true;
        }
        if (!exit) {
            if (getVar("4Room", false)){
                4Room();
                exit = true;
            }
            if (!exit) {
                if (getVar("5Room", false)){
                    5Room();
                    exit = true;
                }
                if (!exit) {
                    1Room();
                    exit = true;
                }
            }
        }
    }
}
function 1Room()
{
    @Variable
    CleanRoom1();
    return;
}
var exit = false;
OtherChores();
exit = true;
function 2Room()
{
    @Variable
    CleanRoom1();
    return;
}
var exit = false;
@Variable
CleanRoom2();
exit = true;
var exit = false;
OtherChores();
exit = true;
function 3Room()
{
    @Variable
    CleanRoom1();
    return;
}
var exit = false;
@Variable
CleanRoom2();
exit = true;
var exit = false;
@Variable
CleanRoom3();
exit = true;
var exit = false;
OtherChores();
exit = true;
function 4Room()
{
    @Variable
    CleanRoom1();
    return;
}
var exit = false;
@Variable
CleanRoom2();
exit = true;
var exit = false;
@Variable
CleanRoom3();
exit = true;
var exit = false;
@Variable
CleanRoom4();
exit = true;
var exit = false;
OtherChores();
exit = true;
function 5Room()
{
    @Variable
    CleanRoom1();
    return;
}
var exit = false;
@Variable
CleanRoom2();
exit = true;
var exit = false;
@Variable
CleanRoom3();
exit = true;
var exit = false;
@Variable
CleanRoom4();
exit = true;
var exit = false;
@Variable
CleanRoom5();
exit = true;
var exit = false;
OtherChores();
exit = true;
function CleanKitchen()
{
    run("CR\BackgroundMode\Chores\CleaningKitchen.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function CleanBathroom()
{
    run("CR\BackgroundMode\Chores\CleaningBathroom.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function CleanRoom1()
{
    run("CR\BackgroundMode\Chores\CleaningRoom1.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function CleanRoom2()
{
    run("CR\BackgroundMode\Chores\CleaningRoom2.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function CleanRoom3()
{
    run("CR\BackgroundMode\Chores\CleaningRoom3.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function CleanRoom4()
{
    run("CR\BackgroundMode\Chores\CleaningRoom4.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function CleanRoom5()
{
    run("CR\BackgroundMode\Chores\CleaningRoom5.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function OtherChores()
{
    @Flag(ChoreFinances) 
    @Variable
    FinanceCheck();
    return;
}
function Choose()
{
    @Variable[ChoresBought]
    var random0 = Math.floor(Math.random() * (4 + 1));
    if (random0 == 0)
    {
        1();
        return;
    }
    else if (random0 == 1)
    {
        2();
        return;
    }
    else if (random0 == 2)
    {
        3();
        return;
    }
    else if (random0 == 3)
    {
        4();
        return;
    }
    else if (random0 == 4)
    {
        5();
        return;
    }
    @Variable[ChoresBought]
    var random1 = Math.floor(Math.random() * (3 + 1));
    if (random1 == 0)
    {
        1();
        return;
    }
    else if (random1 == 1)
    {
        2();
        return;
    }
    else if (random1 == 2)
    {
        3();
        return;
    }
    else if (random1 == 3)
    {
        4();
        return;
    }
    @Variable[ChoresBought]
    var random2 = Math.floor(Math.random() * (2 + 1));
    if (random2 == 0)
    {
        1();
        return;
    }
    else if (random2 == 1)
    {
        2();
        return;
    }
    else if (random2 == 2)
    {
        3();
        return;
    }
    @Variable[ChoresBought]
    var random3 = Math.floor(Math.random() * (1 + 1));
    if (random3 == 0)
    {
        1();
        return;
    }
    else if (random3 == 1)
    {
        2();
        return;
    }
    @Variable[ChoresBought]
    1();
    return;
}
function FinanceCheck()
{
    run("CR\BackgroundMode\Chores\ChoreFinances.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function ChoreActive()
{
    @SystemMessage #VANC #VANP I already gave you a chore..
    @SystemMessage #VANC #VANP You haven't completed it yet.. 
    run("CR\BackgroundMode\Chores\ChoreNotComplete.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function 1()
{
    run("CR\BackgroundMode\Chores\SecondaryChores\ChoreWritingTasks.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function 2()
{
    run("CR\BackgroundMode\Chores\SecondaryChores\ChoreAlt1.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function 3()
{
    run("CR\BackgroundMode\Chores\SecondaryChores\ChoreFun.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function 4()
{
    run("CR\BackgroundMode\Chores\SecondaryChores\ChoreAlt2.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function 5()
{
    run("CR\BackgroundMode\Chores\SecondaryChores\ChorePrivateHum.txt");
    return;
}
var exit = false;
FirstChoreRun();
exit = true;
function End()
{
}
    
var exit = false;
CMessage("########################## - Comment - ##########################");
CMessage("%TempFlag%");
