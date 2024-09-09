"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const localActive = useLocale();
  const router = useRouter();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label className="border-2 rounded">
      <p>change language</p>
      <select
        disabled={isPending}
        defaultValue={localActive}
        onChange={onSelectChange}
      >
        <option value="en">En</option>
        <option value="az">Az</option>
      </select>
    </label>
  );
};

export default LocalSwitcher;
