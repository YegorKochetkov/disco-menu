import MenuItem from "./menu_item";

function MenuList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default MenuList;
