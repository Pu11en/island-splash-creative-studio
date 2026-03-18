'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Plus, Image, FolderOpen, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', icon: Home, label: 'Dashboard' },
  { href: '/create', icon: Plus, label: 'Create' },
  { href: '/templates', icon: Image, label: 'Templates' },
  { href: '/assets', icon: FolderOpen, label: 'Assets' },
  { href: '/brand', icon: Palette, label: 'Brand' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="min-h-screen tropical-bg">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white/80 backdrop-blur-sm border-r border-lime-100 p-4 flex flex-col">
            <div className="mb-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-lime-500 to-turquoise-500 bg-clip-text text-transparent">
                Island Splash
              </h1>
              <p className="text-xs text-gray-500">Creative Studio</p>
            </div>
            
            <nav className="flex-1 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-lime-100 text-lime-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute left-0 w-1 h-8 bg-lime-500 rounded-r-full"
                      />
                    )}
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-4 border-t border-gray-100">
              <div className="text-xs text-gray-400">
                Tropical vibes only 🌴
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
