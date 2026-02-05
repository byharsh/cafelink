export const OrderCard = () => {
  return (
    <div className="w-full rounded-lg bg-gray-200 text-gray-900 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-300 px-4 py-2">
        <div>
          <p className="text-sm font-semibold">Table 3</p>
          <p className="text-xs text-gray-600">order #4005</p>
        </div>
        <p className="text-sm font-semibold">$460</p>
      </div>

      {/* Items */}
      <div className="px-4 py-3 space-y-1 text-sm">
        <div className="flex justify-between">
          <span>1x Strawberry Milkshake</span>
          <span>$120</span>
        </div>
        <div className="flex justify-between">
          <span>2x Pineapple Milkshake</span>
          <span>$240</span>
        </div>
        <div className="flex justify-between">
          <span>1x Croissant</span>
          <span>$80</span>
        </div>
        <div className="flex justify-between">
          <span>1x painkiller</span>
          <span>$100</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-300 px-4 py-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-500 text-xs">
          6 Min
        </span>

        <button className="rounded-md bg-gray-400 px-4 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-500">
          Complete ✓
        </button>
      </div>
    </div>
  );
};
