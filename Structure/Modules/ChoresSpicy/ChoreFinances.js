var exit = false;
if (getVar("FirstFinance", false)){
    FirstFinance();
    exit = true;
}
setVar("FirstFinance", true);
if (!exit) {
    @SystemMessage #VANC #VANP Well #SlaveName
    @SystemMessage #VANC #VANP This is the first time we're doing your finances
    @SystemMessage #VANC #VANP Since its the first time I need to open Microsoft Excel spreadsheet
    @SystemMessage #VANC #VANP If you don't have that you can always use Google sheets which is free..
    @SystemMessage #VANC #VANP Follow these instructions carefully if this is your first time setting up a spreadsheet
    @SystemMessage #VANC #VANP If you've tried it before then there might be some things you're already familiar with
    @SystemMessage #VANC #VANP Look at this picture 
    @ShowImage
    @SystemMessage #VANC #VANP This is how I want your budget to look like 
    @ShowImage
    @SystemMessage #VANC #VANP So the top row is Year: Months: Space: Total: 
    @ShowImage
    @SystemMessage #VANC #VANP The first Column is Year: Average Income: Fixed Expenses: Etc. 
    @ShowImage
    @SystemMessage #VANC #VANP Giving you a few minutes.. 
    @ShowImage
    sleep(120);
    @SystemMessage #VANC #VANP Are you done? - only answer yes if you're done.. @ShowImage[\GNMImages\Finance\Budget.*]
    @SystemMessage #VANC #VANP Good
    @DifferentAnswer @SystemMessage #VANC #VANP "yes" if you're ready..
    @SystemMessage #VANC #VANP Now pay attention..
    @SystemMessage #VANC #VANP In the field B18 I want you to write this: 
    @ShowImage
    @SystemMessage #VANC #VANP Copy this for C18, D18, E18 all the way to O18. 
    @ShowImage
    sleep(30);
    @SystemMessage #VANC #VANP Are you done? - only answer yes if you're done..
    @SystemMessage #VANC #VANP Good
    @DifferentAnswer @SystemMessage #VANC #VANP "yes" if you're ready..
    @SystemMessage #VANC #VANP In the field O2 I want you to write this: 
    @ShowImage
    @SystemMessage #VANC #VANP Copy this for O3, O4, O5 all the way to O17. 
    @ShowImage
    sleep(30);
    @SystemMessage #VANC #VANP Are you done? - only answer yes if you're done..
    @SystemMessage #VANC #VANP Good
    @DifferentAnswer @SystemMessage #VANC #VANP "yes" if you're ready..
    @SystemMessage #VANC #VANP In the field B7 I want you to write this: 
    @ShowImage
    @SystemMessage #VANC #VANP Copy this for C7, D7 all the way to O7 
    @ShowImage
    sleep(30);
    @SystemMessage #VANC #VANP Are you done? - only answer yes if you're done..
    @SystemMessage #VANC #VANP Good
    @DifferentAnswer @SystemMessage #VANC #VANP "yes" if you're ready..
    @SystemMessage #VANC #VANP In the field B11 I want you to write this: 
    @ShowImage
    @SystemMessage #VANC #VANP Copy this for C11, D11 all the way to O11 
    @ShowImage
    sleep(30);
    @SystemMessage #VANC #VANP Are you done? - only answer yes if you're done..
    @SystemMessage #VANC #VANP Good
    @DifferentAnswer @SystemMessage #VANC #VANP "yes" if you're ready..
    @SystemMessage #VANC #VANP In the field B15 I want you to write this: 
    @ShowImage
    @SystemMessage #VANC #VANP Copy this for C15, D15 all the way to O15 
    @ShowImage
    sleep(30);
    @SystemMessage #VANC #VANP Are you done? - only answer yes if you're done..
    @SystemMessage #VANC #VANP Good
    @DifferentAnswer @SystemMessage #VANC #VANP "yes" if you're ready..
    @SystemMessage #VANC #VANP Notice the field in the bottom left! 
    @ShowImage
    @SystemMessage #VANC #VANP Every time you update your budget I want you to update the date as well..
    @SystemMessage #VANC #VANP You can do that right now.. 
    sleep(15);
    @SystemMessage #VANC #VANP Now let me explain how this works..
    @SystemMessage #VANC #VANP So average income:
    @SystemMessage #VANC #VANP Average income is ALL the money you earn each month, wether it comes from your job / jobs 
    setVar("FinanceOffence", 0);
    @SystemMessage #VANC #VANP The source doesn't matter. Made some money you enter it into this field..
    @SystemMessage #VANC #VANP Fixed expenses are ALL your fixed expenses: Phone bill, electric bill, rent any fixed expenses
    @SystemMessage #VANC #VANP I know some values might be over several months like the electric bill is in some countries paid every third month
    @SystemMessage #VANC #VANP If this is the case then divide it by the months over which it's paid  
    @SystemMessage #VANC #VANP So if your electric bill is paid over 3 months, divide it by 3 and place it in the correct months..
    @SystemMessage #VANC #VANP Food Budget!
    @SystemMessage #VANC #VANP Now this is an interesting one
    @SystemMessage #VANC #VANP I want you to think about how much you averagely spent on food each month..
    @SystemMessage #VANC #VANP This includes food, drink, sweets. Every coin you spend on something going in your mouth
    @SystemMessage #VANC #VANP But we're not quite done with your food budget
    @SystemMessage #VANC #VANP One thing is what you're currently spending on food each month
    @SystemMessage #VANC #VANP Another thing is what you SHOULD be spending
    @SystemMessage #VANC #VANP So I want you to think about how much you NEED to spend..
    @SystemMessage #VANC #VANP Next up is household budget
    @SystemMessage #VANC #VANP This going towards items used for cleaning, repairs and generally maintaining your #Home
    @SystemMessage #VANC #VANP Allowance we'll talk about later on.
    @SystemMessage #VANC #VANP And finally we have extra expenses. 
    @SystemMessage #VANC #VANP Unforseen expenses that fits into neither mentioned categories
    @SystemMessage #VANC #VANP Now..
    @SystemMessage #VANC #VANP Right now I need you to figure out your:
    @SystemMessage #VANC #VANP Average income, fixed expenses, food budget and household Budget
    @SystemMessage #VANC #VANP Write 'done' when you're done.. 
    @CustomMode(done, Goto, Done) 
    sleep(99999);
    Done();
    exit = true;
}
function Done()
{
    @SystemMessage #VANC #VANP Excellent 
    @CustomMode(Modetext, Normal)
    @SystemMessage #VANC #VANP I'm gonna ask you for a few numbers
    @SystemMessage #VANC #VANP They might take a moment to find
    @SystemMessage #VANC #VANP Take your time
    @SystemMessage #VANC #VANP DO NOT INPUT ANY TEXT OR SPACES
    @SystemMessage #VANC #VANP What is your average income? 
    @InputVar[AverageIncome]
    @SystemMessage #VANC #VANP What is your fixed expenses? 
    @InputVar[FixedExpenses]
    @SystemMessage #VANC #VANP What should your food budget be? 
    @InputVar[FoodBudget]
    @SystemMessage #VANC #VANP How much do you need for your household budget? 
    @InputVar[HouseholdBudget]
    @SystemMessage #VANC #VANP Next we need to figure out a reasonable allowance
    @SystemMessage #VANC #VANP Money you can spend however you like 
    sleep(5);
    @SystemMessage #VANC #VANP Just imagine being a slave
    @SystemMessage #VANC #VANP No such thing as allowance or spending money without asking permission
    @SystemMessage #VANC #VANP Total
    @SystemMessage #VANC #VANP Financial control
    @SystemMessage #VANC #VANP Some might call that freedom
    @SystemMessage #VANC #VANP But you probably know better #GNMLol
    @SystemMessage #VANC #VANP Oh well..
    @SystemMessage #VANC #VANP Your allowance
    @SystemMessage #VANC #VANP I'm gonna leave this up to you 
    @SystemMessage #VANC #VANP Well not 100% though
    @SystemMessage #VANC #VANP Now tell me again with a number.. 
    setVar("AllowanceTotal", 0);
    @SystemMessage #VANC #VANP What would you say a reasonable monthly allowance is if your behaviour within the last month has been good? 
    @InputVar[AllowanceGood]
    @SystemMessage #VANC #VANP What would you say a reasonable monthly allowance is if your behaviour within the last month has been bad? 
    @InputVar[AllowanceBad]
    @SystemMessage #VANC #VANP ow imagine that your behaviour neither was good or bad but more neutral, what would the number be then? 
    @InputVar[AllowanceNeutral]
    setVar("AllowanceTotal", AllowanceNeutral);
    @SystemMessage #VANC #VANP Give me just a moment to write all of this down... 
    setVar("AllowanceGood", getVar("AllowanceGood", 0) / 31);
    setVar("AllowanceBad", getVar("AllowanceBad", 0) / 30);
    setVar("AllowanceNeutral", getVar("AllowanceNeutral", 0) / 30);
    @SystemMessage #VANC #VANP Hmm
    @SystemMessage #VANC #VANP Now based on the values you just gave me
    @SystemMessage #VANC #VANP It will be me telling you your monthly allowance
    @Month(1) 
    @SystemMessage #VANC #VANP This January your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 1);
    @Month(2) 
    @SystemMessage #VANC #VANP This February your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 2);
    @Month(3) 
    @SystemMessage #VANC #VANP This March your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 3);
    @Month(4) 
    @SystemMessage #VANC #VANP This April your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 4);
    @Month(5) 
    @SystemMessage #VANC #VANP This May your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 5);
    @Month(6) 
    @SystemMessage #VANC #VANP This June your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 6);
    @Month(7) 
    @SystemMessage #VANC #VANP This July your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 7);
    @Month(8) 
    @SystemMessage #VANC #VANP This August your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 8);
    @Month(9) 
    @SystemMessage #VANC #VANP This September your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 9);
    @Month(10) 
    @SystemMessage #VANC #VANP This October your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 10);
    @Month(11) 
    @SystemMessage #VANC #VANP This November your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 11);
    @Month(12) 
    @SystemMessage #VANC #VANP This December your allowance is 
    @ShowVar[AllowanceTotal] 
    setVar("CurrentMonth", 12);
    @SystemMessage #VANC #VANP Whenever the month changes you can check your monthly allowance simply by asking
    @SystemMessage #VANC #VANP Now once in a while I'll have you make entries into your budget
    @SystemMessage #VANC #VANP But you should strive towards always keeping it up to date #GNMEmoteHappy 
    @SetDate(Finances, 0 Days)
}
function FirstFinance()
{
    @SystemMessage #VANC #VANP Its time to do your finances #SubName
    @SystemMessage #VANC #VANP Open up the spreadsheet and your backaccount
    @SystemMessage #VANC #VANP Do your checks and then return here
    @SystemMessage #VANC #VANP Tell me 'done' when you're done. 
    @CustomMode(done, Goto, Done2)
    sleep(9999999);
    Done2();
    return;
}
function Done2()
{
    @SystemMessage #VANC #VANP #GNMGood
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (2 + 1));
    if (random0 == 0)
    {
        CMessage("Are there any new red numbers I should know about");
    }
    else if (random0 == 1)
    {
        CMessage("Were there any new negativt numbers");
    }
    else if (random0 == 2)
    {
        CMessage("So was there some new red numbers");
    }
    @SystemMessage #VANC #VANP Oh.. 
    RedNumbers();
    return;
    @SystemMessage #VANC #VANP #GNMGood, 
    var random1 = Math.floor(Math.random() * (3 + 1));
    if (random1 == 0)
    {
        CMessage("glad to hear you're not overspending");
    }
    else if (random1 == 1)
    {
        CMessage("wonderfull you're not wasting my money");
    }
    else if (random1 == 2)
    {
        CMessage("Perfect");
    }
    else if (random1 == 3)
    {
        CMessage("You're not wasting my money");
    }
    GreenNumbers();
    return;
    @DifferentAnswer 
    @SystemMessage #VANC #VANP Yes or no?
    GreenNumbers();
    return;
}
function GreenNumbers()
{
    @SystemMessage #VANC #VANP I'm sure this will please #DomHonorific #DomName #MeritChangePMedium
    @SystemMessage #VANC #VANP It sure pleases me #GNMEmoteHappy
}
function RedNumbers()
{
    @SystemMessage #VANC #VANP Where did the red number appear?
    @SystemMessage #VANC #VANP Food spendings, household spendings, allowance spendings or extra expenses?
    @SystemMessage #VANC #VANP 
    Food();
    return;
}
var exit = false;
@SystemMessage #VANC #VANP 
Household();
exit = true;
var exit = false;
@SystemMessage #VANC #VANP 
Allowance();
exit = true;
var exit = false;
@SystemMessage #VANC #VANP 
Extra();
exit = true;
var exit = false;
@DifferentAnswer 
@SystemMessage #VANC #VANP food, household, allowance or extra?
Food();
exit = true;
function Food()
{
    @SystemMessage #VANC #VANP I need you to be honest with me..
    @SystemMessage #VANC #VANP Was it absolutely necessary that you spent more than you had to?
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (1 + 1));
    if (random0 == 0)
    {
        CMessage("Hmm");
    }
    else if (random0 == 1)
    {
        CMessage("Well");
    }
    Forgive();
    return;
    @SystemMessage #VANC #VANP You know how this makes me feel.. 
    Bad();
    return;
    @DifferentAnswer 
    @SystemMessage #VANC #VANP Yes or no?
    Household();
    return;
}
function Household()
{
    @SystemMessage #VANC #VANP I need you to be honest with me..
    @SystemMessage #VANC #VANP Was it absolutely necessary that you spent more than you had to?
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (1 + 1));
    if (random0 == 0)
    {
        CMessage("Hmm");
    }
    else if (random0 == 1)
    {
        CMessage("Well");
    }
    Forgive();
    return;
    @SystemMessage #VANC #VANP You know how this makes me feel.. 
    Bad();
    return;
    @DifferentAnswer 
    @SystemMessage #VANC #VANP Yes or no?
    Allowance();
    return;
}
function Allowance()
{
    @SystemMessage #VANC #VANP I need you to be honest with me..
    @SystemMessage #VANC #VANP Was it absolutely necessary that you spent more than you had to?
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (1 + 1));
    if (random0 == 0)
    {
        CMessage("Hmm");
    }
    else if (random0 == 1)
    {
        CMessage("Well");
    }
    Forgive();
    return;
    @SystemMessage #VANC #VANP You know how this makes me feel.. 
    Bad();
    return;
    @DifferentAnswer 
    @SystemMessage #VANC #VANP Yes or no?
    Extra();
    return;
}
function Extra()
{
    @SystemMessage #VANC #VANP I need you to be honest with me..
    @SystemMessage #VANC #VANP Was it absolutely necessary that you spent money on those extra expenses?
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (1 + 1));
    if (random0 == 0)
    {
        CMessage("Hmm");
    }
    else if (random0 == 1)
    {
        CMessage("Well");
    }
    @SystemMessage #VANC #VANP You know how this makes me feel.. 
    Bad();
    return;
    @DifferentAnswer 
    @SystemMessage #VANC #VANP Yes or no?
    @SystemMessage #VANC #VANP Okay then..
}
function Forgive()
{
    @SystemMessage #VANC #VANP 
    var random0 = Math.floor(Math.random() * (2 + 1));
    if (random0 == 0)
    {
        CMessage("I forgive you then");
    }
    else if (random0 == 1)
    {
        CMessage("Well I guess I'm gonna forgive you");
    }
    else if (random0 == 2)
    {
        CMessage("I suppose I should forgive you");
    }
    @SystemMessage #VANC #VANP 
    var random1 = Math.floor(Math.random() * (1 + 1));
    if (random1 == 0)
    {
        CMessage("don't do this too often");
    }
    else if (random1 == 1)
    {
        CMessage("Try to stay within the budgets");
    }
}
function Bad()
{
    @SystemMessage #VANC #VANP #DomHonorific #DomName won't be happy when I tell her... #MeritChangeNLow 
    setVar("FinanceBad", true);
    setVar("FinanceOffence", getVar("FinanceOffence", 0));
    @If[FinanceOffence]
    @If[FinanceOffence]
    @If[FinanceOffence]
    @If[FinanceOffence]
    if (getVar("FinanceOffence", null) == 1){
        Bad1();
        return;
    }
    Bad1();
    return;
}
function Bad1()
{
    @SystemMessage #VANC #VANP But since this is your first offence I'm letting you off easy..
}
function Bad2()
{
    @SystemMessage #VANC #VANP #SubName..
    @SystemMessage #VANC #VANP This has to be punished 
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 30);
    @SystemMessage #VANC #VANP I assigned you punishment points
}
function Bad5()
{
    @SystemMessage #VANC #VANP #SlaveName..
    @SystemMessage #VANC #VANP I expected more from you.. #MeritChangeNLow
    @SystemMessage #VANC #VANP I'll have to punish you.. 
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 60);
    @SystemMessage #VANC #VANP I assigned you punishment points
}
function Bad10()
{
    @SystemMessage #VANC #VANP #SlaveName..
    @SystemMessage #VANC #VANP You need to take better care of #DomName's money.. #MeritChangeNMedium
    @SystemMessage #VANC #VANP I'll have to punish you.. 
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 100);
    @SystemMessage #VANC #VANP I assigned you punishment points
}
function Bad15()
{
    @SystemMessage #VANC #VANP #SlaveName..
    @SystemMessage #VANC #VANP You need to take better care of #DomName's money.. #MeritChangeNHigh
    @SystemMessage #VANC #VANP I'll have to punish you.. 
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 150);
    @SystemMessage #VANC #VANP I assigned you punishment points
}
