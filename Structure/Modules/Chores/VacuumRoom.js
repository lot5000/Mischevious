DMessage("Starting Modules/Chores/VacuumRoom.js", 0);

CMessage("Nice to see you, %SubName%");
startVacuumRoomPreparation();
startVacuumRoom();
rewardsVacuumRoom();

unlockImages();
CMessage("Now you can rest...");
CMessage("Till next time, %SubName% !");

function startVacuumRoomPreparation() {

	// set TypeSpeed to instant + lockImages in the beginning of function and return to medium after

	oldTypeSpeed = getTypeSpeed();
	setTypeSpeed("INSTANT");

	CMessage("Vacuuming is a real man's job");
	CMessage("While woman's job is to rest and relax %Grin%");
	lockImages();
	showPicture("Images/Chores/Cleaning/vacuum*.jpg");


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
            CMessage("You will learn it over time %Grin%");

        }




    unlockImages();

	CMessage("Do you associate vacuuming with... cumming ? ");
	CMessage("You should *grin*");
	CMessage("Let's see how long I want you to vacuum this time ...");

	// Takes a random number in between 10 to 30 minutes, and rounds it to the nearest 10
    num = randomInteger(10, 30);
    vacuumTime = Math.round(num/10.0) * 10;
    setVar(VARIABLE_CLEANING_TIME_VACUUM, vacuumTime);

    CMessage("Let it be: " + getVar(VARIABLE_CLEANING_TIME_VACUUM) + " minutes");



}

function startVacuumRoom(){


		// set TypeSpeed to instant in the beginning of function and return before calling another function
        setTypeSpeed("INSTANT");

		CMessage("Prepare for cleaning...");
        reportReady();
        CMessage("Now you can start cleaning...");
		CMessage("Return when you  will hear the bell");


		//TODO: now shows the same set of pictures for both, which is suitable for houseboy.
		//TODO: To find some pictures for slut

		if(isSlut()) {
        lockImages();
	    showPicture("Images/Chores/Cleaning/vaacum*.jpg");
	    unlockImages();
		}

        if(isHouseboy()) {
        lockImages();
	    showPicture("Images/Chores/Cleaning/vaacum*.jpg");
	    unlockImages();
		}

		sleep(getVar(VARIABLE_CLEANING_TIME_VACUUM)*60);
		
		returnSlave();

        setTypeSpeed(oldTypeSpeed);
}

function rewardsVacuumRoom(){

addGold(+100);
addEnergy(-50);
addFitnessPoint(+10);
addSkillsCleaning(+1);
addWeeklyChoresCompleted(+1);

//TODO: Decide how Domme informs about rewards for each task and CMessage it.

CMessage("Your statistics: gold earned (+100), energy spent (-50), fitnesspoints increased (+10), ");
// CMessage("but no increase in fitness skill or weekly exercises completed.");
CMessage("Cleaning skill increased (+1), weekly chores completed (+1)");


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

function reportReady() {

const answer = sendInput("Report to me when you are ready...");
        while(true) {
            if(answer.isLike("done", "yes", "ready", "report")) {
                CMessage("Good !");
                break;
            } else {
                CMessage("If you aren't ready yet don't bother me");
                answer.loop();
            }
        }

}

function returnSlave() {

	CMessage("Get back, %SubName% !");
    playAudio("Audio/Chores/getback.wav");
	playAudio("Audio/Chores/Bell.mp3");

	//let answer = sendInput("Have you liked it ?");
	//CMessage("Good. Let's continue, %SubName% !");

}