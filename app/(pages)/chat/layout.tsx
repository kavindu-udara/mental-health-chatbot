import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-5 w-screen overflow-y-hidden">
        <SidebarTrigger className="fixed z-10" />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
