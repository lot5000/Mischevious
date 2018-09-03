var exit = false;
@SetDate(Room1Vacuum, 0 Days)
@SetDate(Room2Vacuum, 0 Days)
@SetDate(Room3Vacuum, 0 Days)
@SetDate(Room4Vacuum, 0 Days)
@SetDate(Room5Vacuum, 0 Days)
@SetDate(Room1Wash, 0 Days)
@SetDate(Room2Wash, 0 Days)
@SetDate(Room3Wash, 0 Days)
@SetDate(Room4Wash, 0 Days)
@SetDate(Room5Wash, 0 Days)
@SetDate(Room1Wipe, 0 Days)
@SetDate(Room2Wipe, 0 Days)
@SetDate(Room3Wipe, 0 Days)
@SetDate(Room4Wipe, 0 Days)
@SetDate(Room5Wipe, 0 Days)
@SetDate(KitchenVacuum, 0 Days)
@SetDate(KitchenWash, 0 Days)
@SetDate(KitchenSpecial, 0 Days)
@SetDate(BathroomVacuum, 0 Days)
@SetDate(BathroomSpecial, 0 Days)
@SetDate(BathroomWash, 0 Days)
@SystemMessage #VANC #VANP Hello #SubName
@SystemMessage #VANC #VANP This is the first time you're reporting for chores
@Flag(FullTime) 
@SystemMessage #VANC #VANP Since you serve full time you are required to complete at least 
@ShowVar[ChoresAgreed] 
@Flag(PartTime) 
@SystemMessage #VANC #VANP Since you serve as part time it isn't mandatory for you to complete chores
@Flag(PartTime) 
@SystemMessage #VANC #VANP However your domme is very pleased if you do so
@SystemMessage #VANC #VANP There is a large variety of chores
@SystemMessage #VANC #VANP Would you like chores involving budgets and your allowances?
@SystemMessage #VANC #VANP This involves you keeping track of your money..
@SystemMessage #VANC #VANP We'll dicuss things like average income, budgets to buy food etc.
@SystemMessage #VANC #VANP Once in a while but on a regular schedule your chores will involve updating these budgets
@SystemMessage #VANC #VANP If you were a real slave you wouldn't even be allowed access to money..
@SystemMessage #VANC #VANP You would simply be the one keeping check on all the books..
@SystemMessage #VANC #VANP Well do want chores involving finances?
@SystemMessage #VANC #VANP Okay.. 
setVar("ChoreFinances", true);
@SystemMessage #VANC #VANP Okay..
@DifferentAnswer 
@SystemMessage #VANC #VANP Yes or no?
@SystemMessage #VANC #VANP Next..
@SystemMessage #VANC #VANP Do you live in an apartment or house?
@SystemMessage #VANC #VANP I see.. 
setVar("ApartmentActive", true);
@SystemMessage #VANC #VANP #GNMGood 
setVar("HouseActive", true);
@DifferentAnswer 
@SystemMessage #VANC #VANP Apartment or house?
@SystemMessage #VANC #VANP Do you have a kitchen in your #Home ..
@SystemMessage #VANC #VANP That you are responsible for cleaning?
@SystemMessage #VANC #VANP Okay then.. 
setVar("KitchenActive", true);
@SystemMessage #VANC #VANP Okay then..
@DifferentAnswer 
@SystemMessage #VANC #VANP #GNMYesOrNo
@SystemMessage #VANC #VANP Do you have a bathroom in your #Home
@SystemMessage #VANC #VANP That you are responsible for cleaning?
@SystemMessage #VANC #VANP Okay then.. 
setVar("BathroomActive", true);
@SystemMessage #VANC #VANP Okay then..
@DifferentAnswer 
@SystemMessage #VANC #VANP #GNMYesOrNo
@SystemMessage #VANC #VANP I'm gonna ask you how many rooms are in your #Home
@SystemMessage #VANC #VANP You can choose between 1-5 not including kitchen and bathroom
@SystemMessage #VANC #VANP If you have more than 5 rooms or some of them are very small consider adding two of them together
@SystemMessage #VANC #VANP I also suggest that you draw a schematic of your #Home and add it to the folder named Home
@SystemMessage #VANC #VANP The folder should be located inside GNMImages
@SystemMessage #VANC #VANP You can name the image whatever you want
@SystemMessage #VANC #VANP Just make sure that there is only 1 image inside the folder
@SystemMessage #VANC It can look something like this 
@ShowImage
@SystemMessage #VANC Notice how each room are assigned a number, except for the kitchen and bathroom. 
@ShowImage
@SystemMessage #VANC Also notice how 3 rooms have the same number because they were added together.. 
@ShowImage
Rooms();
exit = true;
function Rooms()
{
    @SystemMessage #VANC #VANP How many rooms in your #Home are you responsible for cleaning?
    @SystemMessage #VANC #VANP You will find yourself often cleaing that one room 
    setVar("1Room", true);
    @SystemMessage #VANC #VANP As a proper slave you should take care of more than two rooms 
    setVar("2Room", true);
    @SystemMessage #VANC #VANP Three rooms sounds decent 
    setVar("3Room", true);
    @SystemMessage #VANC #VANP You will keep them clean from now one 
    setVar("4Room", true);
    @SystemMessage #VANC #VANP I love making you clean and I hope you love it too because there is gonna be a lot of it 
    setVar("5Room", true);
    @DifferentAnswer 
    @SystemMessage #VANC #VANP 1, 2, 3, 4 or 5? It cannot be more than 5 rooms
    @SystemMessage #VANC #VANP Next..
    @SystemMessage #VANC #VANP Do like getting kinky while cleaning?
    @SystemMessage #VANC #VANP This might include having you clean on all fours, using some sort of toys while cleaning
    @SystemMessage #VANC #VANP You'll never really know the limit of my imagination #GNMLol
    Again();
    return;
}
function Again()
{
    @SystemMessage #VANC #VANP On a scale from 1-10 where 1 is never and 10 is very often would you like to "play" while cleaning rooms? @InputVar[CleaningKinky]
    @If[CleaningKinky]
    @SystemMessage #VANC #VANP You didn't properly choose a value between 1 and 10.. Try again... 
    Again();
    return;
}
function MoveAlong1()
{
    @SystemMessage #VANC #VANP Great!
    @SystemMessage #VANC #VANP I think I have all I need for now #GNMGrin
    setVar("FirstChoreRun", true);
    End();
    return;
}
function End()
{
}
