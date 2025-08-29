'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import LevelContent from '@/components/LevelContent'

const bannerImages = [
  '/images/banner1.jpg',
  '/images/banner2.jpg'
]

const videos = [
  {
    title: 'What is Biomechanics?',
    youtubeId: 'LnM74brIZPE',
  },
  {
    title: 'Biomechanics - Levers',
    youtubeId: 'V1NC5wOg0TM',
  },
  {
    title: 'Nutrition, Body Composition and Sports Performance',
    youtubeId: 'MbKF6eDawCE', 
  },
  {
    title: 'The Skeletal System',
    youtubeId: 'f-FF7Qigd3U', 
  },
  {
    title: 'Muscles and Movement',
    youtubeId: '-_LBtX9kw4E', 
  },
  {
    title: 'Hydration For Sports Performance',
    youtubeId: 'Udt49bkTfL8', 
  },
  {
    title: 'Nutrition, Body Composition and Sports Performance',
    youtubeId: 'MbKF6eDawCE', 
  },
  {
    title: 'COMPLETE Human Anatomy',
    youtubeId: 'JNTOahIeCfA', 
  },
  {
    title: 'Brainstorming Techniques',
    youtubeId: 'YXZamW4-Ysk', 
  },
  {
    title: 'Warm - up Activities',
    youtubeId: 'zSfHIowe9oc', 
  },

]

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('Level 3')
  const [bannerIndex, setBannerIndex] = useState(0)

    useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
    }, 1000) // change every 10 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#FAF3E3] min-h-screen overflow-x-hidden">
      <Navbar onSectionChange={setSelectedSection} />
             <div className="pl-6 pt-16 w-full">
           <img
            src={bannerImages[bannerIndex]}
            alt="Banner"
            className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[450px] object-contain transition-all duration-700"
          />

        {selectedSection === 'Videos' ? (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Video Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {videos.map((video, idx) => (
                <a
                  key={idx}
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-4 bg-white group-hover:bg-[#F7F5EF]">
                    <h2 className="text-sm font-semibold text-[#C68313] group-hover:underline">{video.title}</h2>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <LevelContent level={selectedSection} />
        )}
      </div>
    </div>
  )
}
