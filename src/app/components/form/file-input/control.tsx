'use client'

import React from 'react'

import { useFileInput } from './root'

interface ControlProps extends React.ComponentProps<'input'> {}

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  const handleFilesSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return null

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      className="sr-only"
      onChange={handleFilesSelected}
      type="file"
      id={id}
      multiple={multiple}
      {...props}
    />
  )
}
