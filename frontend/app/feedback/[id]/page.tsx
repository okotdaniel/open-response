"use client"

import { ArrowLeft, ThumbsUp, Clock, User, MessageSquare, Bell } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const feedbackData = [
  {
    id: 1,
    title: "Definitions",
    description:
      "Hi! Could you please provide definitions for each family? It would be very helpful to understand how they are dif…",
    votes: 1,
    comments: 0,
    category: "New idea",
    addedDate: "5 months ago",
    suggestedBy: "fatih",
  },
  {
    id: 2,
    title: "¿Como funciona o se hacen pruebas?",
    description: "se compra, es gratis, se instala, es web????? Gracias",
    votes: 1,
    comments: 0,
    category: "New idea",
    addedDate: "4 months ago",
    suggestedBy: "john",
  },
  
]

export default function FeedbackDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const feedback = feedbackData.find((item) => item.id === Number.parseInt(params.id))

  if (!feedback) {
    return (
      <div className="min-h-screen bg-white">
        <header className="border-b border-gray-200">
          <div className="flex items-center px-8 py-4">
            <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-900 hover:text-gray-600">
              <ArrowLeft size={18} />
              <span>Back</span>
            </button>
          </div>
        </header>
        <div className="flex items-center justify-center min-h-96">
          <p className="text-gray-600">Feedback not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="flex items-center px-8 py-4">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-900 hover:text-gray-600">
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
        </div>
      </header>

      <div className="flex">
        <div className="flex-1 px-8 py-8 max-w-2xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{feedback.title}</h1>
            <p className="text-gray-600 text-base">{feedback.description}</p>
          </div>

          <hr className="border-t border-gray-200 mb-8" />

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg font-bold text-gray-900">Comments</h2>
              <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">{feedback.comments}</span>
            </div>

            <div className="border border-gray-200 rounded p-4 space-y-4">
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="n"
                  className="bg-transparent outline-none text-sm placeholder:text-gray-400"
                />
              </div>

              <hr className="border-t border-gray-200" />

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-1">
                  <User size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="ace"
                    className="bg-transparent outline-none text-sm placeholder:text-gray-400"
                  />
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <MessageSquare size={18} className="text-gray-400" />
                  <input
                    type="email"
                    placeholder="ace@yopmail.com"
                    className="bg-transparent outline-none text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white gap-2">
                <span>↑</span>
                Submit
              </Button>
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span>Notify me if people comment on my idea</span>
              </label>
            </div>
          </div>
        </div>

        <div className="w-80 bg-gray-50 px-8 py-8 border-l border-gray-200">
          <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white gap-2 mb-6">
            <ThumbsUp size={18} />
            Vote
          </Button>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bell size={18} className="text-gray-600" />
              <span className="text-sm text-gray-700">{feedback.category}</span>
            </div>

            <div className="flex items-center gap-2">
              <ThumbsUp size={18} className="text-gray-600" />
              <span className="text-sm text-gray-700">{feedback.votes} votes</span>
            </div>

            <div className="flex items-center gap-2">
              <MessageSquare size={18} className="text-gray-600" />
              <span className="text-sm text-gray-700">{feedback.comments} comments</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gray-600" />
              <span className="text-sm text-gray-700">Added {feedback.addedDate}</span>
            </div>

            <div className="flex items-center gap-2">
              <User size={18} className="text-gray-600" />
              <span className="text-sm text-gray-700">Suggested by {feedback.suggestedBy}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
