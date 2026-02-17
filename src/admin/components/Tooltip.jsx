export const Tooltip = ({ triggerOnEdit, triggerOnDelete }) => {
  return (
    <div className="absolute bg-blue-200 p-1 right-0 top-12">
      <div>
        <p className="cursor-pointer" onClick={triggerOnEdit}>
          Edit
        </p>
        <p className="cursor-pointer" onClick={triggerOnDelete}>
          Delete
        </p>
      </div>
    </div>
  );
};
