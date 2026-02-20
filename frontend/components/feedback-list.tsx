"use client"

import { FeedbackItem } from "@/components/feedback-item"

const feedbackData = [
  {
    id: 1,
    title: "Definitions",
    description:
      "Hi! Could you please provide definitions for each family? It would be very helpful to understand how they are dif…",
    votes: 1,
    comments: 0,
  },
  {
    id: 2,
    title: "¿Como funciona o se hacen pruebas?",
    description: "se compra, es gratis, se instala, es web????? Gracias",
    votes: 1,
    comments: 0,
  },
  
]

export function FeedbackList() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-6">
      <div className="space-y-2">
        {feedbackData.map((item, index) => (
          <FeedbackItem key={item.id} {...item} alternateBackground={index % 2 === 1} />
        ))}
      </div>
    </div>
  )
}
