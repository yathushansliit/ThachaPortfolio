'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import LevelContent from '@/components/LevelContent'

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState('Level 3')

  return (
    <div className="bg-[#FAF3E3]">
      <Navbar onLevelChange={setSelectedLevel} />
      <div className="pt-10">
        <img
          src="/images/banner.png"
          alt="Banner"
          className="w-full h-[500px] md:h-[200px] md:w-[200px] object-cover"
        />
        <LevelContent level={selectedLevel} />
      </div>
    </div>
  )
}