function MenuItem({ item }: { item: string }) {
  const formattedItem = item.split("").map((item, index) => {
    return <span key={index}>{item}</span>;
  });

  return <li>{formattedItem}</li>;
}

export default MenuItem;
