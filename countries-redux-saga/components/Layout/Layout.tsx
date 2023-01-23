import * as React from "react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main
        className={`${roboto} bg-bg h-full flex flex-col  overflow-y-auto py-16 items-center`}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
