import videos from '@/lib/sanity/data/videos.json'
import VideoCard from '@/components/VideoCard'

export default function Home() {
  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </main>
  )
}
