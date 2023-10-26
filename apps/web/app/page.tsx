"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Page(): JSX.Element {
  useEffect(() => {
    redirect(`${process.env.NEXT_PUBLIC_LANDINGG_BASE_URL}`);
  }, []);

  return <></>;
}
