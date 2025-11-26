'use client'

import { API_BASE_URL } from '@/config'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function EditPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [writer, setWriter] = useState('')

  useEffect(() => {
    if (!id) return
    fetch(`${API_BASE_URL}/api/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            setTitle(data.title)
            setContent(data.content)
            setWriter(data.writer)
        })
  }, [id])

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch(`${API_BASE_URL}/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, writer }),
    })
    if (res.ok) {
      alert('수정 완료!')
      router.push('/')
    } else {
      alert('수정 실패')
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">✏️ 게시글 수정</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <input
          className="w-full p-2 border rounded"
          value={writer}
          onChange={e => setWriter(e.target.value)}
          required
        />
        <div className="flex gap-2">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded"
            type="submit"
          >
            수정하기
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            뒤로가기
          </button>
        </div>
      </form>
    </main>
  )
}
