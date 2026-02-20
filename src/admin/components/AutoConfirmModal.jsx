import { useState, useEffect, useRef } from "react";

const DURATION_MS = 3000;

export const AutoConfirmModal = ({ isOpen, onClose, onSave }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("counting"); // 'counting' | 'saved'
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    setProgress(0);
    setStatus("counting");

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const p = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(p);

      if (p >= 100) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        onSave?.();
        setStatus("saved");
        setTimeout(() => onClose?.(), 400);
        return;
      }
    };

    startTimeRef.current = Date.now();
    intervalRef.current = setInterval(tick, 16); // ~60fps

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isOpen]);

  const handleCancel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    onClose?.();
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleCancel();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay: black, low opacity, blur - click to close */}
      <div
        className="absolute inset-0 cursor-pointer bg-black/40 backdrop-blur-[2px]"
        aria-hidden
        onClick={handleCancel}
      />

      {/* Inner modal */}
      <div
        className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-6 text-gray-800">
          wait for 5 seconds if you want to save this settings
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <div className="relative flex-1 overflow-hidden rounded-md">
            {status === "counting" ? (
              <button
                type="button"
                disabled
                className="relative w-full rounded-md bg-green-600 py-2 text-sm font-medium text-white"
              >
                <span className="relative z-10">Saving...</span>
                {/* Timer bar - lighter than button */}
                <span
                  className="absolute inset-y-0 left-0 bg-green-400/80 transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </button>
            ) : (
              <div className="rounded-md py-2 text-center text-sm font-medium text-gray-700">
                Saved
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
