/** Bullet items for a translated string or list. Used by the overview cards and the testing findings. */
export const ListItems = ({ items }: { items: string[] | string }) => {
  if (!items) return null;
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <>
      {itemsArray.map((item, index) => (
        <li key={`list-item-${index}`} className="text-muted-foreground font-body">
          {item}
        </li>
      ))}
    </>
  );
};
