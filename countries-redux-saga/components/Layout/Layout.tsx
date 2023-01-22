import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className=" bg-bg h-full flex flex-col  overflow-y-auto py-16 items-center">
      {children}
    </main>
  );
};

export default Layout;
