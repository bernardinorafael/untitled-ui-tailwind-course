'use client'

import { formatBytes } from '@/util/format-bytes'
import { Trash2, UploadCloud } from 'lucide-react'

import { useFileInput } from './root'

export function FileList() {
  const { files } = useFileInput()

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
            key={`${file.name}-${file.type}`}
          >
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
              <UploadCloud size={20} />
            </div>

            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500">
                  {formatBytes(file.size)}
                </span>
              </div>

              <div className="flex w-full items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-zinc-100">
                  <div className="h-2 w-4/5 rounded-full bg-violet-600" />
                </div>
                <span className="text-sm font-medium text-zinc-700">80%</span>
              </div>
            </div>

            <button
              type="button"
              className="ml-auto rounded-md bg-zinc-50 p-1.5 hover:bg-zinc-100 active:scale-95"
            >
              <Trash2 className="text-zinc-500" size={18} />
            </button>
          </div>
        )
      })}
    </div>
  )
}
