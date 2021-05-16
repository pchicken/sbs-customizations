Commands.spoiler = new Command(
	"spoiler shortcut with spaces in title",
	(cmd) => {
		CommandSystem.commandinput.value =
			"{#spoiler=" + cmd.replace("spoiler ", "").replace(/ /g, " ") + " ";
	}
);
