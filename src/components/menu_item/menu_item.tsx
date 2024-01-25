import classes from "./menu_item.module.css";

function MenuItem({
	item,
	colorVariable,
}: {
	item: string;
	colorVariable?: string;
}) {
	const formattedItem = item.split("").map((item) => {
		return (
			<span
				key={item}
				style={
					{
						"--animation-duration": `${Math.random() * item.length + 0.5}s`,
					} as React.CSSProperties
				}
			>
				{item}
			</span>
		);
	});

	const cssColorVariable = {
		"--clr": `var(${colorVariable}, var(--clr-fallback))`,
	} as React.CSSProperties;

	return (
		<li className={classes.item}>
			<a href="/" style={cssColorVariable}>
				<span className={classes.colored_text}>&nbsp;{formattedItem}</span>
				<span className={classes.animated_text}>&nbsp;{formattedItem}</span>
			</a>
		</li>
	);
}

export default MenuItem;
