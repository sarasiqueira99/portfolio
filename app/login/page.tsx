'use client'

import { useState, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/'

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push(from)
    } else {
      setError('Incorrect password.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f5f0]">
      <div className="w-full max-w-sm px-8">
        <h1 className="text-3xl text-stone-900 mb-2" style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400 }}>Sara Siqueira</h1>
        <p className="text-stone-400 text-xs uppercase tracking-widest mb-12">UX Research Portfolio</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-stone-300 rounded-none px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-600 bg-white text-sm"
              autoFocus
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-stone-800 text-white py-3 text-sm tracking-widest uppercase hover:bg-stone-700 transition-colors disabled:opacity-40"
          >
            {loading ? 'Entering...' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
