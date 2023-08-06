import React from "react";
import { useRouter } from "next/router";

const SettingsTab = () => {
  const router = useRouter();
  const { pathname } = router;

  console.log(pathname);
  return (
    <div className="w-full  sm:w-fit overflow-x-auto horizontal-overflow flex gap-1 min-h-[50px] sm:h-[50px] mt-4 bg-Brand/Surface/surface-50 border-Surface/surface-600 rounded-[8px] border p-1 ">
      <button
        className={`flex min-w-fit h-full px-4 py-2   text-Brand/Primary/Primary-800 text-[18px] font-semibold leading-normal font-DarkerGrotesque ${
          pathname === "/dashboard/settings"
            ? "bg-Brand/Primary/Primary-100 rounded-[4px]"
            : ""
        }`}
        onClick={() => router.push("/dashboard/settings")}
      >
        Account
      </button>
      <button
        className={`Accountflex min-w-fit text-Brand/Primary/Primary-800 text-[18px] font-semibold leading-normal font-DarkerGrotesque h-full text-[] bg-[] px-4 py-2 ${
          pathname === "/dashboard/settings/security"
            ? "bg-Brand/Primary/Primary-100 rounded-[4px]"
            : ""
        }`}
        onClick={() => router.push("/dashboard/settings/security")}
      >
        Security
      </button>
      <button
        className={`flex min-w-fit h-full text-Brand/Primary/Primary-800 text-[18px] font-semibold leading-normal font-DarkerGrotesque Accountt-[] bg-[] px-4 py-2 ${
          pathname === "/dashboard/settings/notifications"
            ? "bg-Brand/Primary/Primary-100 rounded-[4px]"
            : ""
        }`}
        onClick={() => router.push("/dashboard/settings/notifications")}
      >
        Notifications
      </button>
      <button
        className={`flex min-w-fit h-full text-Brand/Primary/Primary-800 text-[18px] font-semibold leading-normal font-DarkerGrotesque px-4 py-2 ${
          pathname === "/dashboard/settings/billing"
            ? "bg-Brand/Primary/Primary-100 rounded-[4px]"
            : ""
        }`}
        onClick={() => router.push("/dashboard/settings/billing")}
      >
        Billing & Payment
      </button>
    </div>
  );
};

export default SettingsTab;
