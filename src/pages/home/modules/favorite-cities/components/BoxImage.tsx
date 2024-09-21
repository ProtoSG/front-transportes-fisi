type BoxImageProps = {
  src: string,
  alt: string
}

export function BoxImage({ src, alt }: BoxImageProps) {
  return (
    <div className='h-80 w-[260px] m-4 flex-shrink-0 cursor-pointer'>
      <div className='rounded-3xl overflow-hidden mb-4 relative h-full w-full'>
        <img src={src} alt={alt} className="object-cover h-full w-full" />
      </div>
    </div>
  )
}
