import videos from '@/lib/sanity/data/videos.json'
import VideoPlayer from '@/components/VideoPlayer'

export default function VideoPage({ params }: { params: { slug: string } }) {
  const video = videos.find((v) => v.slug === params.slug)
  if (!video) return <div className="p-4">Видео не найдено</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
      <VideoPlayer embedUrl={video.embedUrl} />
    </div>
  )
}
