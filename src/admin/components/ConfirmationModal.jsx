export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  message = "Confirming the action",
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-modal-title"
    >
      {/* Overlay: dark opacity + blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden
        onClick={(e) => {
          // Only close if clicking directly on the overlay, not children
          if (e.target === e.currentTarget) {
            onClose?.();
          }
        }}
      />

      {/* Inner modal */}
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        {/* X button - top left corner */}
        <button
          type="button"
          onClick={onClose}
          className="absolute left-3 top-3 rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <p id="confirmation-modal-title" className="mb-6 mt-2 pr-8 text-gray-800">
          {message}
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-md bg-red-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-red-400"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm?.();
              onClose?.();
            }}
            className="flex-1 rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
