'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Montserrat_Alternates} from "next/font/google";
import "./global.css";
import Image from "next/image";
import Sun from '../../public/sun.svg'
import Moon from '../../public/moon.svg'
import {routes} from '@/routes'
import {ThemeProvider, useTheme} from '@/app/ThemeContext'
import { useState, useEffect } from 'react';

const montserrat = Montserrat_Alternates({
    weight: ['400', '600', '700', '900'],
    subsets: ['latin', 'cyrillic'],
})

export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {

    function NavBar() {
        const {theme, toggleTheme} = useTheme();
        const pathname = usePathname();
        const isDarkMode = theme === 'dark';
        const [isMenuOpen, setIsMenuOpen] = useState(false);


        useEffect(() => {
            setIsMenuOpen(false);
        }, [pathname]);


        useEffect(() => {
            const handleClickOutside = () => {
                if (isMenuOpen) setIsMenuOpen(false);
            };
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }, [isMenuOpen]);

        const toggleDarkMode = (e: React.MouseEvent) => {
            e.stopPropagation();
            toggleTheme();
        }

        const activePageClass = 'inline-block text-nowrap underline underline-offset-5';
        const inactivePageClass = 'inline-block text-nowrap transition-all duration-500';

        return (
            <nav className="w-full p-4 md:p-8 flex flex-wrap items-center justify-between relative">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/" className="transition-all duration-500">
                        <strong className={`text-xl font-bold md:text-3xl`}>SABKAZZ</strong>
                    </Link>

                    <button
                        className="md:hidden p-2 rounded-md"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(!isMenuOpen);
                        }}
                        aria-label="Меню"
                    >
                        <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-current"></div>
                    </button>
                </div>

                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center w-full md:w-2/3 mt-4 md:mt-0`}>
                    <ul className="list-none flex flex-col md:flex-row justify-between items-center w-full space-y-4 md:space-y-0">
                        <li className="w-full text-center md:w-auto">
                            <Link href={routes.home}
                                  className={pathname === routes.home ? activePageClass : inactivePageClass}>
                                Домашняя страница
                            </Link>
                        </li>
                        <li className="w-full text-center md:w-auto">
                            <Link href={routes.projects}
                                  className={pathname === routes.projects ? activePageClass : inactivePageClass}>
                                Список проектов
                            </Link>
                        </li>
                        <li className="w-full text-center md:w-auto">
                            <Link href={routes.contact}
                                  className={pathname === routes.contact ? activePageClass : inactivePageClass}>
                                Контакты
                            </Link>
                        </li>
                        <li className="pt-4 md:pt-0">
                            <button
                                className={`flex w-10 h-10 rounded-3xl p-1 inset-ring-2`}
                                onClick={toggleDarkMode}
                                aria-label={isDarkMode ? "Светлая тема" : "Темная тема"}
                            >
                                <div className="relative w-10 h-10 overflow-hidden rounded-3xl">
                                    <Image
                                        src={Sun}
                                        width='50'
                                        height='50'
                                        alt='Sun Logo'
                                        className={`absolute transition-transform duration-500 ${isDarkMode ? 'translate-x-0' : '-translate-x-12'}`}
                                    />
                                    <Image
                                        src={Moon}
                                        width='50'
                                        height='50'
                                        alt='Moon Logo'
                                        className={`absolute transition-transform duration-500 ${isDarkMode ? 'translate-x-12' : 'translate-x-0'}`}
                                    />
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

    return (
        <html lang="ru">
        <body className={`${montserrat.className} text-lg md:text-2xl`}>
        <ThemeProvider>
            <NavBar/>
            <main className="px-4 pb-8 md:px-8">
                {children}
            </main>
        </ThemeProvider>
        </body>
        </html>
    )
}