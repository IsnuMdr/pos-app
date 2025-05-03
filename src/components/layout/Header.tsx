import Link from 'next/link';
import { ThemeToggle } from '../theme/ThemeToggle';

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-10 border-b shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-primary-600">
          MDRDev
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="hover:text-primary-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-primary-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary-600">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {/* User menu would go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
