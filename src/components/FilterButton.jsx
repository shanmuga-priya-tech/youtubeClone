function FilterButton({ title }) {
  return (
    <div>
      <button className="px-5 py-2 m-2 mt-3 bg-gray-200 rounded-lg hover:bg-gray-300">
        {title}
      </button>
    </div>
  );
}

export default FilterButton;
