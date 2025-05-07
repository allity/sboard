'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function WritePage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [writer, setWriter] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const post = {
      title,
      content,
      writer,
      createdAt: new Date().toISOString(),
    }

    const res = await fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })

    if (res.ok) {
      alert('작성 완료!')
      router.push('/')
    } else {
      alert('작성 실패')
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">✍ 게시글 작성</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="작성자"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          작성하기
        </button>
      </form>
    </main>
  )
}
