import { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import AuthNavbar from "@/components/authnavbar";

export default function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen pt-16   flex  max-w-screen-2xl m-auto">
      <AuthNavbar />
      {children}
    </div>
  );
}
