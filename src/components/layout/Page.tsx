import { ReactNode } from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen bg-neutral-50 dark:bg-black'>
      {/* Header */}
      <Header />

      <div className='flex'>
        {/* Left Sidebar */}
        <aside className='hidden lg:block lg:w-64'>
          <LeftSidebar />
        </aside>

        {/* Page Content */}
        <main className='flex-1 px-4 lg:px-8 py-6'>
          <div className='grid grid-cols-1 lg:grid-cols-[30%_35%_30%] gap-[40]'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
