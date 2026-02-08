const Header = ({
  pageHeading = "Live Order",
  subHeading = "this is where you see your all stats of live order",
  variant = "default",
  searchPlaceholder,
}) => {
  if (variant === "simple") {
    return (
      <div className="mx-auto w-full outline-1 ">
        <div className="flex justify-between items-end gap-6 mb-8">
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold text-gray-900">{pageHeading}</h1>
            <p className="text-md text-gray-600 mt-1">{subHeading}</p>
          </div>
          {searchPlaceholder != null && (
            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 min-w-[240px]">
              <svg
                className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="bg-transparent border-none outline-none text-gray-800 placeholder-gray-500 w-full"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between outline-1">
        <div>
          <h1 className="text-4xl">{pageHeading}</h1>
          <p className="text-md"> {subHeading}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex ms-auto gap-8">
            <div className="flex bg-gray-300">
              <div className="mx-2">O</div>
              <input type="text" placeholder="search any order" />
            </div>
            <button className="bg-blue-400">
              <img src="" alt="" />
              <span>Filter</span>
            </button>
          </div>
          <div className="flex">
            <div>filter status</div>
            <div>sort-view</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
