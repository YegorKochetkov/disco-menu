import classes from "./menu_item.module.css";

function MenuItem({
  item,
  colorVariable,
}: {
  item: string;
  colorVariable?: string;
}) {
  const formattedItem = item.split("").map((item, index) => {
    return (
      <span
        key={index}
        style={
          {
            "--animation-duration": `${Math.random() * item.length + 2}s`,
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
      <a href='#' data-text={item} style={cssColorVariable}>
        <span className={classes.color_item}>&nbsp;{formattedItem}</span>
        <span className={classes.animation_item}>&nbsp;{formattedItem}</span>
      </a>
    </li>
  );
}

export default MenuItem;
