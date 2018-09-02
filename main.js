run("chatutils.js");
DMessage("Setting up chat");
setUpChat();
run("mediautils.js");
DMessage("Setting up media");
setUpMedia();
run("personalityutils.js");
DMessage("Setting up personality");
setUpVars();

//Setup additional variables by lot5000
run("lot5000variables.js");

//Run Assistant instead of MischeviousStructure.js
run("Assistant/Assistant.js");
updatePictureSet();
run("Assistant/AssistantLobby.js");

//Run MischeviousStructure.js instead of Assistant
//run("Structure" + java.io.File.separator + "MischeviousStructure.js");
