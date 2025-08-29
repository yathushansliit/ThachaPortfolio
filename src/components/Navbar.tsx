// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar({ onSectionChange }: { onSectionChange: (section: string) => void }) {
    const levels = ['Level 3', 'Level 4']
    const [menuOpen, setMenuOpen] = useState(false)
    const [levelsOpen, setLevelsOpen] = useState(false)

    return (
        <nav className="fixed top-0 z-50 w-full bg-[#DDD0AD] shadow px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-bold flex items-center gap-2">
                <img src="/images/portfolioLogo.png" alt="Logo" className="w-8 h-8" />
                <span className="text-black">Thadshagini</span>
                <span className="text-[#C68313]">Yokeswaran</span>
            </div>
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none px-6 py-4 md:p-0 flex-col md:flex-row md:flex gap-6 font-medium ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
                <div className="relative">
                    <button
                        onClick={() => setLevelsOpen(!levelsOpen)}
                        className="flex items-center gap-1 hover:text-yellow-600"
                    >
                        Levels <ChevronDown className="w-4 h-4" />
                    </button>
                    {levelsOpen && (
                        <div className="absolute bg-white border rounded mt-2 shadow z-10">
                            {levels.map((level) => (
                                <button
                                    key={level}
                                    onClick={() => {
                                        onSectionChange(level)
                                        setLevelsOpen(false)
                                        setMenuOpen(false)
                                    }}
                                    className="block px-4 py-3 hover:bg-[#C68313] text-left w-full whitespace-nowrap"
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <Link href="https://drive.google.com/drive/folders/1-E7CVLXDy_VOSUtPQoYI4mBm4Thy-DyX" className="hover:text-[#C68313]" onClick={() => setMenuOpen(false)}>Presentations</Link>
                <Link href="#" onClick={() => onSectionChange('Videos')} className="hover:text-[#C68313]">Videos</Link>
                <Link href="https://drive.google.com/drive/folders/10rQqKBBJG2aALAwA9xAAsoFZs7xPeNfa" className="hover:text-[#C68313]" onClick={() => setMenuOpen(false)}>Model Papers</Link>
                <Link href="https://drive.google.com/drive/folders/10rixBEwcV-sNjNf6S3eXMFcuwQTQF5bS" className="hover:text-[#C68313]" onClick={() => setMenuOpen(false)}>Books</Link>
                <Link href="https://drive.google.com/drive/folders/10rld3DWMyGlKZP3DjAKPHhldvGSfC27r" className="hover:text-[#C68313]" onClick={() => setMenuOpen(false)}>Teaching Aids</Link>
            </div>
        </nav>
    )
}