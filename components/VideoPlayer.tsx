export default function VideoPlayer({ embedUrl }: { embedUrl: string }) {
    return (
      <div className="aspect-w-16 aspect-h-9 w-full">
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allowFullScreen
          frameBorder="0"
        />
      </div>
    )
  }
  