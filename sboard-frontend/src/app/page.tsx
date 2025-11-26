'use client'

import { useEffect, useState } from 'react'
import { API_BASE_URL } from '@/config'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  writer: string
  createdAt: string
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('불러오기 실패:', err))
  }, [])

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">📋 게시글 목록</h1>
      <ul className="space-y-3 mb-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow-sm">
            <Link href={`/view/${post.id}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-600">
              ✍ {post.writer} | 🕒 {post.createdAt}
            </p>
          </li>
        ))}
      </ul>
      <a href="/write" className="inline-block mb-4 text-black px-4 py-2 rounded">
        ➕ 글쓰기
      </a>
    </main>
  )
}
