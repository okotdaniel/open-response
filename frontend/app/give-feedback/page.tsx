"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, Bug, ArrowLeft } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function GiveFeedbackPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [notify, setNotify] = useState(false)
  const [activeTab, setActiveTab] = useState("idea")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ title, description, name, email, notify })
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="flex items-center gap-4 px-8 py-4">
          <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>
      </header>

      <div className="flex">
        <div className="flex-1 px-8 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 bg-transparent border-b border-gray-200 rounded-none p-0 h-auto gap-8 justify-start">
              <TabsTrigger
                value="idea"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-gray-900 bg-transparent px-0 py-2 font-medium text-gray-700 gap-2 data-[state=active]:text-gray-900"
              >
                <Lightbulb size={18} />
                Add new idea
              </TabsTrigger>
              <TabsTrigger
                value="bug"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-gray-900 bg-transparent px-0 py-2 font-medium text-gray-700 gap-2 data-[state=active]:text-gray-900"
              >
                <Bug size={18} />
                Report a Bug
              </TabsTrigger>
            </TabsList>

            <TabsContent value="idea" className="mt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border border-gray-300 rounded p-0">
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-300">
                    <Lightbulb size={20} className="text-gray-600" />
                    <Input
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="border-0 bg-transparent outline-none p-0 placeholder:text-gray-500 focus-visible:ring-0"
                    />
                  </div>

                  <div className="flex items-start gap-3 px-4 py-3">
                    <div className="pt-1">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </div>
                    <Textarea
                      placeholder="Description of the idea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border-0 bg-transparent outline-none p-0 placeholder:text-gray-500 focus-visible:ring-0 resize-none min-h-40"
                    />
                  </div>
                </div>

                <div className="flex gap-4 border border-gray-300 rounded p-4">
                  <div className="flex-1 flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <Input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-0 bg-transparent outline-none p-0 placeholder:text-gray-500 focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-2 border-l border-gray-300 pl-4">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-0 bg-transparent outline-none p-0 placeholder:text-gray-500 focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white gap-2 px-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Submit
                  </Button>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <Checkbox
                      checked={notify}
                      onCheckedChange={(checked) => setNotify(checked as boolean)}
                      className="rounded"
                    />
                    Notify me if people comment on my idea
                  </label>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="bug" className="mt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border border-gray-300 rounded p-0">
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-300">
                    <Bug size={20} className="text-gray-600" />
                    <Input
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="border-0 bg-transparent outline-none p-0 placeholder:text-gray-500 focus-visible:ring-0"
                    />
                  </div>

                  <div className="flex items-start gap-3 px-4 py-3">
                    <div className="pt-1">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </div>
                    <Textarea
                      placeholder="Description of the bug"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border-0 bg-transparent outline-none p-0 placeholder:text-gray-500 focus-visible:ring-0 resize-none min-h-40"
                    />
                  </div>
                </div>

                <div className="flex gap-4 border border-gray-300 rounded p-4">
                  <div className="flex-1 flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <Input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-0 bg-transparent outline-none p-0 placeholder:text-gray-500 focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-2 border-l border-gray-300 pl-4">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-0 bg-transparent outline-none p-0 placeholder:text-gray-500 focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white gap-2 px-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Submit
                  </Button>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <Checkbox
                      checked={notify}
                      onCheckedChange={(checked) => setNotify(checked as boolean)}
                      className="rounded"
                    />
                    Notify me if people comment on my report
                  </label>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-80 bg-gray-100 p-8 border-l border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {activeTab === "idea" ? "Add a new idea" : "Report a Bug"}
          </h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            {activeTab === "idea"
              ? "We would like to get your ideas on how our website should be improved. Tell us about new features we should consider or how we can improve existing features."
              : "Found a bug? Let us know what went wrong so we can fix it as soon as possible. Please provide as much detail as you can about the issue."}
          </p>
          <p className="text-sm text-gray-700 font-medium">
            {activeTab === "idea" ? "Best regards" : "Best regards"} Data Viz Project
          </p>
        </div>
      </div>
    </div>
  )
}
