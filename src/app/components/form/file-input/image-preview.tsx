'use client'

import React from 'react'
import Image from 'next/image'
import { User } from 'lucide-react'

import { useFileInput } from './root'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = React.useMemo(() => {
    if (files.length === 0) {
      return null
    } else {
      return URL.createObjectURL(files[0])
    }
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="text-violet-500" size={32} />
      </div>
    )
  } else {
    return (
      <Image
        className="aspect-square rounded-full border border-violet-500 object-cover shadow-md"
        priority
        quality={100}
        height={64}
        width={64}
        src={previewURL}
        alt=""
      />
    )
  }
}
