'use client'
import Link from 'next/link'

export default function VideoCard({ video }) {
  return (
    <Link key={video.id} href={`/videos/${video.slug}`} className="block">
      <div className="rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
        <div className="p-2 text-lg font-semibold">{video.title}</div>
      </div>
    </Link>
  )
}
