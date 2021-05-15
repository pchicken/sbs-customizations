Commands.cells = new Command(
	"place space-separated items into as square of a table as possible",
	(_, parts) => {
		/* remove cmd part and add padding at end */
		parts = [...parts.slice(1), ""];
		/* the aforementioned padding is because this var could be -1
		// you can mark where to stop parsing cells with , */
		const split = parts.indexOf(",");
		const cells = parts.slice(0, split);
		const height = Math.floor(Math.sqrt(cells.length));
		const width = cells.length / height;
		console.log();
		/* output to messagebox */
		let output = "";
		let cell = 0;
		for (let y = 0; y < height; y++) {
			let row = "";
			for (let x = 0; x < width; x++) {
				row += "|" + cells[cell++];
				if (cell >= cells.length) break;
			}
			output += row + "|\n";
		}
		CommandSystem.commandinput.value =
			output + parts.slice(split).slice(1).join(" ");
	}
);
