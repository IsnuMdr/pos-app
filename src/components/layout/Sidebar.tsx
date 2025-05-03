import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-background hidden w-64 border-r md:block">
      <div className="flex h-full flex-col p-4">
        <nav className="flex-1 space-y-2">
          <Link
            href="/dashboard"
            className="hover:bg-secondary flex items-center rounded-md px-3 py-2"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/analytics"
            className="hover:bg-secondary flex items-center rounded-md px-3 py-2"
          >
            Analytics
          </Link>
          <Link
            href="/dashboard/settings"
            className="hover:bg-secondary flex items-center rounded-md px-3 py-2"
          >
            Settings
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
