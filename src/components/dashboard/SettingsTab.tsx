import React from "react";
import { useRouter } from "next/router";

const SettingsTab = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="w-fit flex gap-1 h-[50px] mt-4 bg-Brand/Surface/surface-50 border-Surface/surface-600 rounded-[8px] border p-1 ">
      <button
        className="flex min-w-fit h-full px-4 py-2 bg-Brand/Primary/Primary-100 rounded-[4px] text-Brand/Primary/Primary-800 text-[18px] font-semibold leading-normal font-DarkerGrotesque"
        onClick={() => router.push("/dashboard/settings")}
      >
        Account
      </button>
      <button
        className="  Accountflex min-w-fit text-Brand/Primary/Primary-800 text-[18px] font-semibold leading-normal font-DarkerGrotesque h-full text-[] bg-[] px-4 py-2"
        onClick={() => router.push("/dashboard/settings/security")}
      >
        Security
      </button>
      <button
        className="flex min-w-fit h-full text-Brand/Primary/Primary-800 text-[18px] font-semibold leading-normal font-DarkerGrotesque Accountt-[] bg-[] px-4 py-2"
        onClick={() => router.push("/dashboard/settings/notifications")}
      >
        Notifications
      </button>
      <button
        className="flex min-w-fit h-full text-Brand/Primary/Primary-800 text-[18px] font-semibold leading-normal font-DarkerGrotesque px-4 py-2"
        onClick={() => router.push("/dashboard/settings/billing")}
      >
        Billing & Payment
      </button>
    </div>
  );
};

export default SettingsTab;
