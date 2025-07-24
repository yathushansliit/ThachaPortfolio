import { Heart } from 'lucide-react'
import Link from 'next/link'

export default function Card({ title, url }: { title: string; url: string }) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="bg-[#C68313] text-white rounded-xl p-4 shadow flex items-center gap-2 hover:opacity-90 max-w-sm">
        <Heart className="w-5 h-5" />
        <span>{title}</span>
      </div>
    </Link>
  )
}
