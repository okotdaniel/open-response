"use client"

import { Button } from "@/components/ui/button"
import { Search, ChevronDown, Plus } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white pl-95 pr-90">
      <div className="flex items-center justify-between px-8 py-4">

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-black flex items-center justify-center">
            <div className="text-xs font-bold text-center leading-tight">
              <div className="image">
                Client Logo
              </div>
            </div>
          </div>
        </div>

        <div>
          <Link href="/give-feedback">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white gap-2">
              <Plus size={18} />
              Give Response
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">Newest ideas</span>
            <ChevronDown size={18} className="text-gray-600" />
          </div>

          <div className="flex items-center gap-2 bg-gray-50 rounded px-3 py-2 border border-gray-200">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
