import { API_BASE_URL } from '@/config'
import { notFound } from 'next/navigation'
import PostDeleteButton from '@/components/PostDeleteButton'
import Link from 'next/link'

type Post = {
    id: number
    title: string
    content: string
    writer: string
    createdAt: string
}

interface ViewPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function ViewPage({ params }: ViewPageProps) {
    const { id } = await params
    const res = await fetch(`${API_BASE_URL}/api/posts/${id}`, {
        cache: 'no-store',
    })
    
    if (!res.ok) {
        throw new Error('게시글을 불러오지 못했습니다.')
    }

    const post: Post | null = await res.json()

    if (!post) {
        notFound()
    }

    const createdAt = new Date(post.createdAt).toLocaleDateString('ko-KR')

    return (
      <main className="p-6 max-w-2xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Link href="/" className="hover:underline">목록</Link>
          <span>|</span>
          <Link href={`/edit/${post.id}`} className="hover:underline">수정</Link>
          <span>|</span>
          <PostDeleteButton id={post.id} />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-600 mb-4">
          ✍ {post.writer} | 🕒 {createdAt}
        </p>
    
        <hr className="mb-4" />
    
        <article className="whitespace-pre-wrap leading-relaxed">
          {post.content}
        </article>
      </main>
    )
}