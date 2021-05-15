Commands.cute = new Command("format a url into something pretty", (_, parts) =>
{
	/* remove cmd part and add padding at end */
	parts = [...parts.slice(1), ""];
	/* the aforementioned padding is because this var could be -1
	// you can mark where to stop parsing urls with a / */
	let split = parts.indexOf("/");
	/* output in messagebox */
	CommandSystem.commandinput.value = 		
	[
		/* only process the urls */
		...parts.slice(0,split)
		.map(
			u => 
			/* finally, the prettifying part */
			u + "[" + 
			decodeURIComponent(u.replace(/^http(s|):\/\//,""))
			.replace("derpibooru.org/search?q=","derpi:")
			.replace("derpibooru.org/images/","derpi:")
			.replace("www.youtube.com/watch?v=","yt:")
			.replace("youtube.com/watch?v=","yt:")
			.replace("youtu.be/","yt:")/* if i was sitting in nim i would have made a macro for this */
			+ "]"
		),
		/* add the untouched part */
		...parts.slice(split).slice(1)
	].join(" ");
});