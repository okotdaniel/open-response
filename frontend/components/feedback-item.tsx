"use client"

import { ThumbsUp, MessageSquare, Bell } from "lucide-react"
import Link from "next/link"

interface FeedbackItemProps {
  id: number
  title: string
  description: string
  votes: number
  comments: number
  alternateBackground: boolean
}

export function FeedbackItem({ id, title, description, votes, comments, alternateBackground }: FeedbackItemProps) {
  return (
    <Link href={`/feedback/${id}`}>
      <div
        className={`flex items-center gap-4 p-4 rounded transition-colors cursor-pointer hover:bg-gray-100 ${
          alternateBackground ? "bg-gray-50" : "bg-white"
        }`}
      >
        <div className="flex-shrink-0">
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-gray-900 text-white px-3 py-2 rounded flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <ThumbsUp size={18} />
            <span className="font-semibold">{votes}</span>
          </button>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
          <p className="text-gray-600 text-sm truncate">{description}</p>
        </div>

        <div className="flex-shrink-0 flex items-center gap-2 border border-gray-200 rounded px-3 py-2">
          <div className="flex items-center gap-2">
            <MessageSquare size={18} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-900">{comments}</span>
          </div>
          <button onClick={(e) => e.preventDefault()} className="hover:bg-gray-100 p-1 rounded transition-colors">
            <Bell size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
    </Link>
  )
}
