'use client'

import React, { useId } from 'react'

interface RootProps extends React.ComponentProps<'div'> {}

interface FileInputContextType {
  id: string
  files: File[]
  onFilesSelected(files: File[], multiple: boolean): void
}

const FileInputContext = React.createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = React.useState<File[]>([])

  const onFilesSelected = React.useCallback((files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }, [])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div className="select-none" {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => React.useContext(FileInputContext)
