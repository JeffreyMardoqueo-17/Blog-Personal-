import React from 'react'
import Link from 'next/link';

export default function Navigation() {
    return (
        <ul className='bg-slate-800 w-full flex gap-3 justify-center'>
            <li>
                <Link href="/" className='text-white'>Home</Link>
            </li>
            <li>
                <Link href="/trading" className='text-white'>Trading</Link>
            </li>
        </ul>
    )
}
