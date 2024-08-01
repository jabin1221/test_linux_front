'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: '등록', href: '/add' },
    { name: '검색', href: '/search' },
];

export default function Layout({children}: {children: React.ReactNode}) {
    const pathName = usePathname();
   
    return (
        <section>
        <div className="bg-blue-900 text-white">
            <div className="bg-blue-700 py-4">
            
                <div className="container mx-auto flex">
                <Link className= {`mx-9 text-xl rounded-md px-30 py-2 font-medium hover:bg-gray-700 hover:text-white text-indigo-950 `}
                                href={'/'}
                                key={'home'}
                                >
                                <h1 className="text-3xl font-bold">{'Cheat'}</h1>
                                </Link>
                                <div className="space-x-4 flex justify-center items-center">
                    {navLinks.map(link => {
                        const isActive = pathName.startsWith(link.href);
                    return <Link className= {`mx-9 text-xl rounded-md px-30 py-2 font-medium hover:bg-gray-700 hover:text-white text-blue-500 ${isActive ? 'text-red-500/100' : ''}`}
                                href={link.href}
                                key={link.name}
                                >
                                {link.name} 
                                </Link>
                    })}
                    </div>
                </div>
            </div>
        </div>
            {children}
        </section>
    );
}