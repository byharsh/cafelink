import { useState } from "react";
import Header from "../layouts/Header";

const ROLES = ["Owner", "Manager", "Staff"];

const STAFF_ROWS = [
  { id: 1, name: "Alex Rivera", contact: "+1 555 012 3456", role: "Owner" },
  { id: 2, name: "Jordan Lee", contact: "+1 555 012 3457", role: "Manager" },
  { id: 3, name: "Sam Chen", contact: "+1 555 012 3458", role: "Staff" },
];

export const Settings = () => {
  const [roles, setRoles] = useState(STAFF_ROWS.map((r) => r.role));
  const [cafeName, setCafeName] = useState("");
  const [cafeOwner, setCafeOwner] = useState("");
  const [qrFile, setQrFile] = useState("cafe-payment-qr.png");
  const [qrImageUrl, setQrImageUrl] = useState("https://via.placeholder.com/300x300?text=QR+Code");

  const handleRoleChange = (index, newRole) => {
    setRoles((prev) => {
      const next = [...prev];
      next[index] = newRole;
      return next;
    });
  };

  const handleQrUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setQrFile(file.name);
      const imageUrl = URL.createObjectURL(file);
      setQrImageUrl(imageUrl);
    }
  };

  const handleViewQr = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (qrImageUrl) {
      window.open(qrImageUrl, "_blank");
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl">
      <Header
        variant="simple"
        pageHeading="Settings"
        subHeading="Manage your cafe profile, team roles and ownership."
        searchPlaceholder="Search settings…"
      />

      {/* Verify Ownership */}
      <section className="mb-10">
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <button
            type="button"
            className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Verify Ownership
            <span className="ml-1 h-4 w-4" aria-hidden />
          </button>
          <p className="mt-3 text-sm text-gray-500">
            This page is only changed if you verify your ownership.
          </p>
        </div>
      </section>

      {/* Roles Allocation */}
      <section className="mb-10 flex flex-col">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Roles Allocation
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full min-w-[320px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                  Contact
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {STAFF_ROWS.map((row, index) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50"
                >
                  <td className="px-4 py-3 text-sm text-gray-900">{row.name}</td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-700">{row.contact}</span>
                    <button
                      type="button"
                      className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 hover:bg-green-200"
                    >
                      Call
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="relative inline-block">
                      <select
                        value={roles[index]}
                        onChange={(e) =>
                          handleRoleChange(index, e.target.value)
                        }
                        className="appearance-none rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-8 text-sm text-gray-700 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                      >
                        {ROLES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                      <span
                        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                        aria-hidden
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Profile Settings */}
      <section className="flex flex-col">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Profile Settings
        </h2>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <label
              htmlFor="cafe-name"
              className="text-sm font-medium text-gray-700 whitespace-nowrap"
            >
              Cafe name
            </label>
            <input
              id="cafe-name"
              type="text"
              placeholder="currently: The Daily Brew"
              value={cafeName}
              onChange={(e) => setCafeName(e.target.value)}
              className="w-1/2 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <label
              htmlFor="cafe-owner"
              className="text-sm font-medium text-gray-700 whitespace-nowrap"
            >
              Cafe owner
            </label>
            <input
              id="cafe-owner"
              type="text"
              placeholder="currently: Alex Rivera"
              value={cafeOwner}
              onChange={(e) => setCafeOwner(e.target.value)}
              className="w-1/2 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Change Receiving QR
            </label>
            <div className="w-1/2">
              <label className="flex cursor-pointer flex-col rounded-lg border-2 border-dashed border-gray-300 bg-gray-50/50 p-4 transition-colors hover:border-gray-400 hover:bg-gray-50">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={handleQrUpload}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-600">
                    currently:{" "}
                    <span
                      className="underline cursor-pointer text-gray-900 hover:text-gray-700"
                      onClick={handleViewQr}
                    >
                      View QR
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">{qrFile}</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
