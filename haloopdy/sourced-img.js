Commands.img = new Command(
	"format image url into embed (with source, if possible)",
	(_, parts) => {
		/* remove cmd part and add padding at end */
		parts = [...parts.slice(1), ""];
		/* the aforementioned padding is because this var could be -1
		// you can mark where to stop parsing urls with , */
		const split = parts.indexOf(",");
		/* output to messagebox */
		CommandSystem.commandinput.value = [
			/* only process the urls */
			...parts.slice(0, split).map((u) => {
				if (u.startsWith("https://derpicdn.net/img/")) {
					const split = u.split("/");
					const id = split[split.length - 2];
					return `!${u}{https://derpibooru.org/images/${id}[derpi:${id}]}`;
				} else {
					return "!" + u;
				}
			}),
			/* add the untouched part */
			...parts.slice(split).slice(1),
		].join(" ");
	}
);
