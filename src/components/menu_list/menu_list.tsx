import MenuItem from "../menu_item/menu_item";
import classes from "./menu_list.module.css";

function MenuList({ items }: { items: string[] }) {
  return (
    <ul className={classes.list}>
      {items.map((item, index) => (
        <MenuItem key={index} item={item} colorVariable={`--clr${index + 1}`} />
      ))}
    </ul>
  );
}

export default MenuList;
