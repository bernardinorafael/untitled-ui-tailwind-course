import React from 'react'

type InputPrefixProps = React.ComponentProps<'div'>
export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = React.ComponentProps<'input'>
export function Control(props: InputControlProps) {
  return (
    <input
      className="h-full flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 focus:outline-none"
      {...props}
    />
  )
}

type InputRootProps = React.ComponentProps<'div'>
export function Root(props: InputRootProps) {
  return (
    <div
      className="flex h-10 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 shadow ring-purple-500 focus-within:ring-2"
      {...props}
    />
  )
}
