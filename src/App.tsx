import MenuList from "./components/menu_list/menu_list";

const menuItems = ["Home", "About", "Contact", "Services", "Blog"];

function App() {
  return <MenuList items={menuItems} />;
}

export default App;
