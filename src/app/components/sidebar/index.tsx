import { Cog, LifeBuoy, Search } from 'lucide-react'

import * as Input from '@/app/components/input'

import { Logo } from './logo'
import { MainNavigation } from './main-navigation'
import { NavItem } from './main-navigation/nav-item'
import { Profile } from './profile'
import { UsedSpaceWidget } from './used-space-widget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 to-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem label="Support" icon={LifeBuoy} />
          <NavItem label="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
