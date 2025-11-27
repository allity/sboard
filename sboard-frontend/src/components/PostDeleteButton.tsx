'use client'

import { API_BASE_URL } from "@/config"
import { useRouter } from "next/navigation"

interface PostDeleteButtonProps {
    id: number
}

export default function PostDeleteButton({ id }: PostDeleteButtonProps) {
    const router = useRouter()

    const handleDelete = async () => {
        const ok = window.confirm('정말 삭제할까요?')
        if (!ok) return

        const res = await fetch(`${API_BASE_URL}/api/posts/${id}`, {
            method: 'DELETE',
        })

        if (res.ok) {
            alert('삭제 완료!')
            router.push('/')
        } else {
            alert('삭제 실패')
        }
    }

    return (
      <button
        type="button"
        onClick={handleDelete}
        className="text-sm text-red-500 hover:underline"
      >
        삭제
      </button>
    )
}