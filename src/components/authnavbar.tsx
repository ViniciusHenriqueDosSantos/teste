"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export default function AuthNavbar() {
  const router = useRouter();
  const handlePrevious = () => {
    router.back();
  };

  return (
    <div className="w-auto   h-auto absolute left-0 top-16 justify-center align-top p-4 ">
      <ChevronLeft onClick={handlePrevious} />
    </div>
  );
}
