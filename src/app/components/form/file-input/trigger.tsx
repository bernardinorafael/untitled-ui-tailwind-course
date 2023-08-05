'use client'

import { UploadCloud } from 'lucide-react'

import { useFileInput } from './root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      className="group flex h-full flex-1 cursor-pointer select-none flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow hover:border-violet-200 hover:bg-violet-100/30"
      htmlFor={id}
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud
          className="text-zinc-600 group-hover:text-violet-900"
          size={20}
        />
      </div>

      <div className="flex flex-col items-center gap-2 group-hover:text-violet-500">
        <span>
          <span className="text-lg font-semibold text-violet-700">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>

        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400)</span>
      </div>
    </label>
  )
}
