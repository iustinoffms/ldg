import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex justify-between px-10 py-2 bg-neutral-300">
        <h1>Where in the world ?</h1>
        <button>
          <i>icon</i>
          Dark Mode
        </button>
      </div>

      {children}
    </>
  );
};

export default Layout;
