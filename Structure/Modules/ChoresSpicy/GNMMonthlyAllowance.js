var exit = false;
@SystemMessage #VANC #VANP Checking if the month has changed..
@Month(1) 
if (getVar("CurrentMonth", null) == 1){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
var exit = false;
@Month(2) 
if (getVar("CurrentMonth", null) == 2){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
var exit = false;
@Month(3) 
if (getVar("CurrentMonth", null) == 3){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
var exit = false;
@Month(4) 
if (getVar("CurrentMonth", null) == 4){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
var exit = false;
@Month(5) 
if (getVar("CurrentMonth", null) == 5){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
var exit = false;
@Month(6) 
if (getVar("CurrentMonth", null) == 6){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
var exit = false;
@Month(7) 
if (getVar("CurrentMonth", null) == 7){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
var exit = false;
@Month(8) 
if (getVar("CurrentMonth", null) == 8){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
var exit = false;
@Month(9) 
if (getVar("CurrentMonth", null) == 9){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
var exit = false;
@Month(10) 
if (getVar("CurrentMonth", null) == 10){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
var exit = false;
@Month(11) 
if (getVar("CurrentMonth", null) == 11){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
var exit = false;
@Month(12) 
if (getVar("CurrentMonth", null) == 12){
    NoChange();
    exit = true;
}
if (!exit) {
    MonthChange();
    exit = true;
}
function NoChange()
{
    @Month(1) 
    @SystemMessage #VANC #VANP We're still in January.. 
    @Month(2) 
    @SystemMessage #VANC #VANP We're still in February.. 
    @Month(3) 
    @SystemMessage #VANC #VANP We're still in March.. 
    @Month(4) 
    @SystemMessage #VANC #VANP We're still in April.. 
    @Month(5) 
    @SystemMessage #VANC #VANP We're still in May.. 
    @Month(6) 
    @SystemMessage #VANC #VANP We're still in June.. 
    @Month(7) 
    @SystemMessage #VANC #VANP We're still in July.. 
    @Month(8) 
    @SystemMessage #VANC #VANP We're still in August.. 
    @Month(9) 
    @SystemMessage #VANC #VANP We're still in September.. 
    @Month(10) 
    @SystemMessage #VANC #VANP We're still in October.. 
    @Month(11) 
    @SystemMessage #VANC #VANP We're still in November.. 
    @Month(12) 
    @SystemMessage #VANC #VANP We're still in December.. 
    @SystemMessage #VANC #VANP Wait until the month changes...
}
function MonthChange()
{
    @Month(1) 
    @SystemMessage #VANC #VANP Well it seems we're in January 
    setVar("CurrentMonth", 1);
    @Month(2) 
    @SystemMessage #VANC #VANP Well it seems we're in February.. 
    setVar("CurrentMonth", 2);
    @Month(3) 
    @SystemMessage #VANC #VANP Well it seems we're in March.. 
    setVar("CurrentMonth", 3);
    @Month(4) 
    @SystemMessage #VANC #VANP Well it seems we're in April.. 
    setVar("CurrentMonth", 4);
    @Month(5) 
    @SystemMessage #VANC #VANP Well it seems we're in May.. 
    setVar("CurrentMonth", 5);
    @Month(6) 
    @SystemMessage #VANC #VANP Well it seems we're in June.. 
    setVar("CurrentMonth", 6);
    @Month(7) 
    @SystemMessage #VANC #VANP Well it seems we're in July.. 
    setVar("CurrentMonth", 7);
    @Month(8) 
    @SystemMessage #VANC #VANP Well it seems we're in August.. 
    setVar("CurrentMonth", 8);
    @Month(9) 
    @SystemMessage #VANC #VANP Well it seems we're in September.. 
    setVar("CurrentMonth", 9);
    @Month(10) 
    @SystemMessage #VANC #VANP Well it seems we're in October.. 
    setVar("CurrentMonth", 10);
    @Month(11) 
    @SystemMessage #VANC #VANP Well it seems we're in November.. 
    setVar("CurrentMonth", 11);
    @Month(12) 
    @SystemMessage #VANC #VANP Well it seems we're in December.. 
    setVar("CurrentMonth", 12);
    @SystemMessage #VANC #VANP Lets see what your allowance should be this month.. 
    setVar("TotalAllowance", 0);
    setVar("AddAllowanceGood", 0);
    setVar("AddAllowanceGood", getVar("AddAllowanceGood", 0) + getVar("AllowanceGood", 0));
    setVar("AddAllowanceGood", getVar("AddAllowanceGood", 0) * getVar("GoodDays", 0));
    setVar("AddAllowanceBad", 0);
    setVar("AddAllowanceBad", getVar("AddAllowanceBad", 0) + getVar("AllowanceBad", 0));
    setVar("AddAllowanceBad", getVar("AddAllowanceBad", 0) * getVar("BadDays", 0));
    setVar("TotalAllowance", getVar("TotalAllowance", 0) + getVar("AddAllowanceBad", 0));
    setVar("TotalAllowance", getVar("TotalAllowance", 0) + getVar("AddAllowanceGood", 0));
    @Month(1) 
    @SystemMessage #VANC #VANP So for January your allowance will be 
    @ShowVar[TotalAllowance]
    @Month(2) 
    @SystemMessage #VANC #VANP So for February your allowance will be 
    @ShowVar[TotalAllowance]
    @Month(3) 
    @SystemMessage #VANC #VANP So for March your allowance will be 
    @ShowVar[TotalAllowance]
    @Month(4) 
    @SystemMessage #VANC #VANP So for April your allowance will be 
    @ShowVar[TotalAllowance]
    @Month(5) 
    @SystemMessage #VANC #VANP So for May your allowance will be 
    @ShowVar[TotalAllowance]
    @Month(6) 
    @SystemMessage #VANC #VANP So for June your allowance will be 
    @ShowVar[TotalAllowance]
    @Month(7) 
    @SystemMessage #VANC #VANP So for July your allowance will be 
    @ShowVar[TotalAllowance]
    @Month(8) 
    @SystemMessage #VANC #VANP So for August your allowance will be 
    @ShowVar[TotalAllowance]
    @Month(9) 
    @SystemMessage #VANC #VANP So for September your allowance will be 
    @ShowVar[TotalAllowance]
    @Month(10) 
    @SystemMessage #VANC #VANP So for October your allowance will be 
    @ShowVar[TotalAllowance]
    @Month(11) 
    @SystemMessage #VANC #VANP So for November your allowance will be 
    @ShowVar[TotalAllowance]
    @Month(12) 
    @SystemMessage #VANC #VANP So for December your allowance will be 
    @ShowVar[TotalAllowance]
    @SystemMessage #VANC #VANP Write it down in your budget..
}
