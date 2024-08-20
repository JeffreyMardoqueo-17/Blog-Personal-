// components/Navigation.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define LOS PARAMETROS QUE NECESITA EL NAVITEM e
interface NavItem {
    label: string;
    href: string;
}
//LAS PROPIEDADES QUE NECESITA EL NAVIGATION QUE ES LOS DATOS DEL NAVITEM
interface NavigationProps {
    navItems: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
    const pathname = usePathname();

    return (
        <nav className="container bg-white bg-opacity-50 backdrop-blur-sm shadow-md fixed top-0 w-full z-10">
            <div className=" mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-3xl font-semibold"> JJ` </div>
                <div className="hidden md:flex space-x-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden flex items-center">
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
