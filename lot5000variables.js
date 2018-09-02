
// VARIABLE_SLAVE_CAREER - Two careers in this pilot: 1 - houseboy (focus on cleaning, errands and not violent stuff);
// 0 - slut (focus humiliation). Other categories can be added later, like personalservant (focus on bodycare, clothing,
// positions); houseboy (focus on cleaning, cooking, errands); officeboy (focus on writing, errands); sissyslut;
// cuckold; dog; etc ?

const VARIABLE_SLAVE_CAREER = "slaveCareer";
setVar(VARIABLE_SLAVE_CAREER, 0);

// WEEKLY_CHORES - Number of Chores slave needs to perform weekly to please Domme and to avoid punishments. 

const VARIABLE_MIN_WEEKLY_CHORES = "minWeeklyChores";
const VARIABLE_MIN_WEEKLY_EXERCISES = "minWeeklyExercises";
const VARIABLE_WEEKLY_CHORES_COMPLETED = "weeklyChoresCompleted";
const VARIABLE_WEEKLY_EXERCISES_COMPLETED = "weeklyExercisesCompleted";

// Variables on cleaning time 

const VARIABLE_CLEANING_TIME_BATHROOM = "cleaningtimebathroom";
const VARIABLE_CLEANING_TIME_TOILET = "cleaningtimetoilet";
const VARIABLE_CLEANING_TIME_OVEN = "cleaningtimeoven";
const VARIABLE_CLEANING_TIME_REFRIGERATOR = "cleaningtimerefrigerator";
const VARIABLE_CLEANING_TIME_CAR = "cleaningtimecar";
const VARIABLE_CLEANING_TIME_MIRROR = "cleaningtimemirror";
const VARIABLE_CLEANING_TIME_WINDOW = "cleaningtimewindow";
const VARIABLE_CLEANING_TIME_SHOES = "cleaningtimeshoes";
const VARIABLE_CLEANING_TIME_VAACUM = "cleaningtimevaacum";
const VARIABLE_CLEANING_TIME_MOP = "cleaningtimemop";

// Energy/Gold/FitnessPoints/SKILLS

const VARIABLE_GOLD = "gold";
const VARIABLE_ENERGY = "energy";
const VARIABLE_FITNESS_POINTS = "fitnessPoints";

const VARIABLE_SKILLS_CLEANING = "skillscleaning";
const VARIABLE_SKILLS_FITNESS = "skillsfitness";


// First times with instructions. True = completed
const VARIABLE_FIRST_TIME_TOILET = "firstTimeToilet";
const VARIABLE_FIRST_TIME_OVEN = "firstTimeOven";


// Gold, Energy, FitnessPoints functions


function addGold(amount) {
    const gold = getVar(VARIABLE_GOLD);

    if(gold + amount > 0) {
        setVar(VARIABLE_GOLD, gold + amount);
    } else {
        setVar(VARIABLE_GOLD, 0);
    }
}

function addEnergy(amount) {
    const energy = getVar(VARIABLE_ENERGY);

    if(energy + amount > 0) {
        setVar(VARIABLE_ENERGY, energy + amount);
    } else {
        setVar(VARIABLE_ENERGY, 0);
    }
}

function addFitnessPoint(amount) {
    const energy = getVar(VARIABLE_FITNESS_POINTS);

    if(energy + amount > 0) {
        setVar(VARIABLE_FITNESS_POINTS, energy + amount);
    } else {
        setVar(VARIABLE_FITNESS_POINTS, 0);
    }
}
	
function addSkillsCleaning(amount) {
    const skillscleaning = getVar(VARIABLE_SKILLS_CLEANING);

    if(skillscleaning + amount > 0) {
        setVar(VARIABLE_SKILLS_CLEANING, skillscleaning + amount);
    } else {
        setVar(VARIABLE_SKILLS_CLEANING, 0);
    }
}

function addSkillsFitness(amount) {
    const skillsfitness = getVar(VARIABLE_SKILLS_FITNESS);

    if(skillsfitness + amount > 0) {
        setVar(VARIABLE_SKILLS_FITNESS, skillsfitness + amount);
    } else {
        setVar(VARIABLE_SKILLS_FITNESS, 0);
    }
}

function addWeeklyChoresCompleted(amount) {
    const weeklyChoresCompleted = getVar(VARIABLE_WEEKLY_CHORES_COMPLETED);

    if(weeklyChoresCompleted + amount > 0) {
        setVar(VARIABLE_WEEKLY_CHORES_COMPLETED, weeklyChoresCompleted + amount);
    } else {
        setVar(VARIABLE_WEEKLY_CHORES_COMPLETED, 0);
    }
}

function addWeeklyExercisesCompleted(amount) {
    const weeklyExercisesCompleted = getVar(VARIABLE_WEEKLY_EXERCISES_COMPLETED);

    if(weeklyExercisesCompleted + amount > 0) {
        setVar(VARIABLE_WEEKLY_EXERCISES_COMPLETED, weeklyExercisesCompleted + amount);
    } else {
        setVar(VARIABLE_WEEKLY_EXERCISES_COMPLETED, 0);
    }
}

// Career functions

function isHouseboy() {
    return getVar(VARIABLE_SLAVE_CAREER) == 1;
}

function isSlut() {
    return getVar(VARIABLE_SLAVE_CAREER) == 0;
}


// Chat functions from Spicey /Chat/ChatUtil.js

const YES_OR_NO = "Yes or no?";

function sendVirtualAssistantMessage(message, wait, skipImage) {
    textName = new javafx.scene.text.Text("[Assistant]: ");
    textName.setFill(javafx.scene.paint.Color.ROYALBLUE);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.ROYALBLUE);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);

    //Show image
    if(skipImage === undefined || !skipImage) {
        showImage("Images/Assistant/" + ASSISTANT_CURRENT_SET_ID + "/*.{jpg,JPG}" );
    }

    if(wait === undefined || wait) {
        sleep(1000 + message.length * 50, "MILLISECONDS");
    }
}

function sendSystemMessage(message) {
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 13));

    sendCustomMessage(text);
}