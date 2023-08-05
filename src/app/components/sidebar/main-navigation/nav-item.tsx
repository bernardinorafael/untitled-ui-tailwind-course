import React from 'react'
import Link from 'next/link'
import { cn } from '@/util/cn'
import { ChevronDown } from 'lucide-react'

interface NavItemProps {
  label: string
  href?: string
  icon: React.ElementType
}

export function NavItem(props: NavItemProps) {
  const { href = '#', icon: Icon, label } = props

  return (
    <Link
      href={href}
      className={cn(
        'group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2',
        'hover:border-violet-100 hover:bg-violet-50',
      )}
    >
      <Icon
        className="text-zinc-500 group-hover:text-violet-500"
        strokeWidth={1.7}
        size={20}
      />

      <span className="pt-0.5 font-medium text-zinc-700 group-hover:text-violet-500">
        {label}
      </span>

      <ChevronDown className="ml-auto text-zinc-400" size={20} />
    </Link>
  )
}
