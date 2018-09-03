DMessage("Starting Modules/Chores/CleaningToilet.js", 0);

CMessage("Nice to see you, %SubName%");
startCleanToiletPreparation();
startCleanToilet();
rewardsCleanToilet();

unlockImages();
CMessage("Now you can rest...");
CMessage("Till next time, %SubName% !");

function startCleanToiletPreparation() {

	// set TypeSpeed to instant + lockImages in the beginning of function and return to medium after
	setTypeSpeed("INSTANT");

	CMessage("Toilet cleaning is not optimal use of my time");
	CMessage("It is a distasteful task that only slaves love to do %Grin%");
	lockImages();
	showPicture("Images/Chores/Cleaning/toilet1.jpg");


	answer = getInput("Do you agree?");
        if (answer.isLike("yes", "yea", "yep"))
        {
            //TODO: can be connected to general Domme mood system, like increaseAnger(-1);
            unlockImages();
            CMessage("I am happy that I have you for this %Grin%");

        }
        else
        {
            //TODO: can be connected to general Domme mood system, like increaseAnger(3);
            unlockImages();
            CMessage("No?");
            CMessage("You will definetly learn to love it %Grin%");

        }

    //TODO: it might make sense to run setting up time block only once.
    //TODO: Need to implement some check if this is the first time

	CMessage("First we will determine how much scrubbing will be required");
	lockImages();
	showPicture("Images/Chores/Cleaning/toilet2.jpg");
	CMessage("Access the bathroom and determine how much time it will take.");

	lockImages();
    	showPicture("Images/Chores/Cleaning/toilet2.jpg");
    CMessage("I used to do this in 15 minutes.");

	unlockImages();

    // TODO: script suggesting time for a slave, using formula: Mistress time + calculated time based on skillsCleaning
    // TODO: variable (i.e. incapable slut abilities adding +10 % of additional time from that)
	// TODO: It can also track weeklyChoresCompleted and skillsCleaning variables and calculate time based on that
	// TODO: (slave with increased cleaning skills will make it faster)
	// TODO: there also can be a bitch days randomly selected, where you get timing nearly impossible to beat
	// TODO: with the same cleaning quality level and then you will go to punishment modules.
	// TODO: Also Mistress can have some personality characteristics like "level of attitude towards cleanliness"
	// TODO: (i.e. standards high/medium/low), "level of orientation to ecology" (i.e. to clean only with natural
	// TODO: products like lemon, which is more difficult and demanding OR to allow chemicals)
		
	CMessage("But you, %SubName%, might be just not capable to do it so quickly and efficiently");
	CMessage("Your current setting is: " + getVar(VARIABLE_CLEANING_TIME_TOILET) + " minutes");
	
	// Variable: have put it manually into the Variables.js (Spicy) and at the beginning of this file (Mischevious) 
	// and Variables/ folder
	// but need to setup somewhere standard times for cleaning in setup
		
	CMessage("I will allow to change this setting for 200 gold");
    answer = sendInput("Do you want to change the standard time for cleaning the toilet ?");
	
        while (true) {
            if (answer.isLike("yes")) {
                CMessage("Okay then...");
                answer = sendInput("How much time (in minutes) you need to clean this toilet %SubName% ?");

                while (true) {
                    if (answer.isInteger()) {
                        const result = answer.getInt();
                        if (result < 15) {
                            CMessage("Not less than 15! Keep in mind my very high standards!");
                            answer.loop();
                        } else if (result >= 60) {
                            CMessage("Are you going to clean it or to sleep in it ? Try once more !");
                            answer.loop();
                        } else {
                            CMessage("Excellent");
	
	// TODO: Can be added overrulling decission based on mood, strictiness, etc, which will add or deduct time
	// TODO: from suggested by slave. It will show that his opinion matters, but final decission is always after Domme.
							
                            addGold(-200);
                            setVar(VARIABLE_CLEANING_TIME_TOILET, result);
							CMessage("Your new setting is: " + getVar(VARIABLE_CLEANING_TIME_TOILET) + " minutes");
	
                            break;
                        }
                    } else {
                        CMessage("All I asked you to do was input a simple number...");
                        CMessage("Like 15");
                        CMessage("or 30");
                        CMessage("or 60...");
                        answer.loop();
                    }
                }

                break;
            } else if (answer.isLike("no")) {
                CMessage("Very well");
                break;
            } else {
                CMessage(YES_OR_NO);
                answer.loop();
            }
        }


    setTypeSpeed("MEDIUM");
}

function startCleanToilet(){

		// if Career is slut - give him random hummiliation tasks
        if(isSlut()) {addTasks();}
        if(isHouseboy()) {
        setTypeSpeed("INSTANT");
        CMessage("Before you go, I want you to add this task to your toilet cleaning ritual: ");
        goToCornerHouseboy(60);
        }

		// set TypeSpeed to instant in the beginning of function and return before calling another function
        setTypeSpeed("INSTANT");

		CMessage("Prepare for cleaning...");

		let answer = sendInput("Do you need instructions ?");

                            while(true) {
                                if(answer.isLike("done", "yes", "ready")) {
        							unlockImages();
        							CMessage("Good!");
        							CMessage("I like when you work on your skills");
        							CMessage("That makes you a better servant");
        							CMessage("My friend Melissa prepared a short training video for you");
        							playVideo("Videos/Academy/Cleaning/instructionstoilet.mp4", true);
        							reportDone();
        							stopVideo();
        							unlockImages();
        							CMessage("Giving you +1 in SkillsCleaning for that");
        							addSkillsCleaning(+1);
        							// TODO: Instead of showing video - call Academy module
                                    break;
                                } else {
        							unlockImages();
        							CMessage("Good !");
        							CMessage("I like when you resolve questions on your own");
        							CMessage("That saves my valuable time");
        							break;
                                }
        						}


        CMessage("Now you can start cleaning...");
		CMessage("Return when you  will hear the bell");

		if(isSlut()) {
        lockImages();
	    showPicture("Images/Chores/Cleaning/toiletslut*.jpg");
	    unlockImages();
		}

        if(isHouseboy()) {
        lockImages();
	    showPicture("Images/Chores/Cleaning/toilethouseboy*.jpg");
	    unlockImages();
		}

		sleep(getVar(VARIABLE_CLEANING_TIME_TOILET)*60);
		
		returnSlave();

        setTypeSpeed("MEDIUM");
		}

function rewardsCleanToilet() {

addGold(+200);
addEnergy(-100);
addFitnessPoint(+50);
addSkillsCleaning(+1);
addWeeklyChoresCompleted(+1);

//TODO: Decide how Domme informs about rewards for each task and CMessage it.

CMessage("Your statistics: gold earned (+200), energy spent (-100), fitnesspoints increased (+50), ");
// CMessage("but no increase in fitness skill or weekly exercises completed.");
CMessage("Cleaning skill increased (+1), weekly chores completed (+1)");


}
		
function addTasks() {

	// set TypeSpeed to instant in the beginning of function and return before calling another function
    setTypeSpeed("INSTANT");

	CMessage("Before you go, I want you to add this task to your toilet cleaning ritual: ");
	
	//FOR TESTING particular case, uncomment (and put comment on line with randomInteger)
	let tasksOffered = 5;

	// let tasksOffered = randomInteger(0, 5);

    switch(tasksOffered) {
		case 0:
            goToCornerSlut(60);

            //TODO: Times based on mood or random. Timer() shall be updated to correspond
			//goToCorner(randomInteger(60, 180));
            //goToCorner(randomInteger(1, 10));
			break; 
        
		case 1:
		    goToFitnessSlut();

			break;  
			
        case 2:
            CMessage("I want you to take a humiliating picture of yourself cleaning the toilet bowl");
            reportDone();
            CMessage("I want you to place those pictures inside your self humiliation folder");
            CMessage("But you can do that anytime later");
           
            break;	

		case 3:
            CMessage("I want you to use ButtPlug in your ass while cleaning");
            CMessage("Put it now !");
		    reportDone();

            break;
			
		case 4:
            CMessage("I want you to put some gag in your mouth while cleaning");
			CMessage("Put it now !");
            reportDone();

            break;
        
		case 5:
            CMessage("I want you to lube your ass with the ToothePaste");
			CMessage("It will give you some additional motivation %Grin%");
			CMessage("Lube it now !");
            reportDone();

            break;
	}
              
    }

// Currently random additional hummiliation tasks if Career is slut
// But we can have different scenarious for both (i.e. goToCornerSlut OR goToCornerHouseboy)


function goToCornerSlut(durationSeconds) {

    CMessage("I want you to go to corner and sit there for 1 minute");
    CMessage("imagining how you clean the toilet bowl with just a toothbrush");
    CMessage("I will start counting...");

    timer(durationSeconds);
    returnSlave();

    CMessage("Now implement that fantasy !");
    CMessage("I am soooo good in responding to your fantasies... %Grin%");

}

function goToCornerHouseboy(durationSeconds) {


    CMessage("Grab a coin or something similar and return to me");
    reportDone();

    CMessage("Now... Go to the corner for 1 minute, get yourself into cleaning mood");

    let handPosition = randomInteger(0, 3);

    switch(handPosition) {
        case 0:
            CMessage("Hands behind your back");
            break;
        case 1:
            CMessage("Hands on your knees");
            break;
        case 2:
            CMessage("Hands behind your head");
            break;
    }

    CMessage("And wait for my bell %Grin%");

    timer(durationSeconds);
    returnSlave();
}

function goToFitnessSlut() {

    CMessage("Let's work on your fitness!");
    CMessage("Get completely naked and do 10 squats for me");

    //TODO: give number of squats based on skillsfitness.var
    reportDone();

}

// TODO: Now timer is only for one minute. It will be good to have flexible and adaptable timer for any seconds/minutes

function timer(timerSeconds) {

    var timeStarted = new Date().getTime();
    var timeNow = new Date().getTime();
    var timePassed = Math.round((timeNow - timeStarted) / 1000);
    var timeLeft = timerSeconds - timePassed;

    setTypeSpeed("INSTANT");

    CMessage(timeLeft + " seconds left");
    playAudio("Audio/Chores/60s.wav", true);

    while (timeLeft > 0) {
    var timeNow = new Date().getTime();
    var timePassed = Math.round((timeNow - timeStarted) / 1000);
    var timeLeft = timerSeconds - timePassed;

    if (timeLeft == 40) {

  	CMessage(timeLeft + " seconds left");
  	playAudio("Audio/Chores/40s.wav");


  } else if (timeLeft == 20) {

    CMessage(timeLeft + " seconds left");
  	playAudio("Audio/Chores/20s.wav");


  } else if (timeLeft == 10) {

  	CMessage(timeLeft + " seconds left");
  	playAudio("Audio/Chores/10s.wav");


  } else if (timeLeft == 0) {

  	// Get back


  }


    }

    setTypeSpeed("MEDIUM");

}

function reportDone() {

const answer = sendInput("Report to me when you are done...");
        while(true) {
            if(answer.isLike("done", "yes", "ready", "report")) {
                CMessage("Good !");
                break;
            } else {
                CMessage("If you aren't done yet don't bother me");
                answer.loop();
            }
        }

/*let answer = sendInput("Report to me when you are done...");

                    while(true) {
                        if(answer.isLike("done", "yes", "ready")) {
							CMessage("Good !");
							CMessage("Now you may continue...");
                            break;
                        } else {

							CMessage("Write done, yes or ready, you stupid %SubName% !");
                            answer.loop();
                        }
						}
*/

}

function returnSlave() {

	CMessage("Get back, %SubName% !");
    playAudio("Audio/Chores/getback.wav");
	playAudio("Audio/Chores/Bell.mp3");

	//let answer = sendInput("Have you liked it ?");
	//CMessage("Good. Let's continue, %SubName% !");

}