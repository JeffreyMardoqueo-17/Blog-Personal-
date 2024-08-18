import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

// const { theme, setTheme } = useTheme();
export default function Navigation() {

    return (
        <nav className='bg-lightTheme-background/30 dark:bg-darkTheme-background/30 backdrop-blur-lg shadow-lg w-full fixed top-0 z-50'>
            <ul className='flex gap-3 justify-center p-4'>
                <li>
                    <Link href="/" className='text-black dark:text-white'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/trading" className='text-black dark:text-white'>
                        Trading
                    </Link>
                </li>
                {/* <li>
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className='bg-lightTheme-background dark:bg-darkTheme-background text-black dark:text-white px-4 py-2 rounded-lg'
                    >
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </li> */}
            </ul>
        </nav>
    );
}
