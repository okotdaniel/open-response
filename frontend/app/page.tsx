import { Header } from "@/components/header"
import { FeedbackList } from "@/components/feedback-list"

export default function Home() {
  return (
    <main className="min-h-screen  bg-white">
      <Header />
      <FeedbackList />
    </main>
  )
}
