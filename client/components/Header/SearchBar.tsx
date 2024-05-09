const SearchBar = () => {
  return (
    <div className="header__search-form ml-auto w-25">
      <input
        type="text"
        name="q"
        placeholder="Tìm kiếm"
        className="form-control border-primary"
      />

      <button className="btn bg-transparent text-primary shadow-none">
        <i className="nh-icon icon-search float-left" />
      </button>
    </div>
  );
};

export default SearchBar;
