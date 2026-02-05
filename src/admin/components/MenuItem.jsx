export const MenuItem = ({ title, size, price, image, type, inStock, onButtonClick }) => {
  return (
    <div className="flex flex-col w-full h-[400px] bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      {/* First Section: Image (60% of card height) */}
      <div className="relative h-[240px] bg-gray-200 flex-shrink-0">
        <img
          src={image || "https://via.placeholder.com/300x200"}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Button in right top corner */}
        <button
          onClick={onButtonClick}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Menu item action"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>

      {/* Second Section: Content (40% of card height) */}
      <div className="flex-1 p-4 flex flex-col min-h-[160px]">
        {/* First part: Contains two horizontal parts */}
        <div className="flex items-start justify-between mb-3">
          {/* First horizontal part: Title with size vertically aligned */}
          <div className="flex flex-col flex-1">
            <h3 className="text-lg font-semibold text-gray-900 leading-tight">{title}</h3>
            <span className="text-sm text-gray-600 mt-1">{size}</span>
          </div>
          {/* Second horizontal part: Price aligned horizontally with title */}
          <div className="flex items-start ml-4">
            <span className="text-lg font-semibold text-gray-900 leading-tight">{price}</span>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-gray-300 my-3"></div>

        {/* Second part: Chips layout */}
        <div className="flex items-center justify-between mt-auto">
          {/* Left: Type chip */}
          <div className="px-3 py-1.5 bg-gray-100 rounded-full">
            <span className="text-sm font-medium text-gray-700">{type || "Std."}</span>
          </div>

          {/* Right: Stock status chip with icon */}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
              inStock
                ? "bg-green-50 border border-green-200"
                : "bg-gray-100 border border-gray-300"
            }`}
          >
            {/* Icon */}
            <div className="relative">
              {inStock ? (
                <>
                  {/* Green filled circle with glow effect */}
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                </>
              ) : (
                <>
                  {/* Greyed out circle with cross */}
                  <div className="w-3 h-3 bg-gray-400 rounded-full flex items-center justify-center">
                    <svg
                      className="w-2 h-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </>
              )}
            </div>
            {/* Text */}
            <span
              className={`text-sm font-medium ${
                inStock
                  ? "text-green-700 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};