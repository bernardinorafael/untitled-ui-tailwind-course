import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/bernardinorafael.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Rafael Bernardino
        </span>

        <span className="truncate text-sm text-zinc-500">rafael@sparktech.ao</span>
      </div>

      <button
        className="ml-auto rounded-md p-2 hover:bg-zinc-50 active:scale-95"
        type="button"
      >
        <LogOut className="text-zinc-500" size={20} />
      </button>
    </div>
  )
}
