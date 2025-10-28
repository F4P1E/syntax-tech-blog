"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/lib/auth"

export function LoginForm() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    const result = await login(password)

    if (result.success) {
      router.push("/admin")
      router.refresh()
    } else {
      setError(result.error || "Login failed")
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border-4 border-foreground bg-background p-8">
      <div className="mb-6">
        <label htmlFor="password" className="mb-2 block font-bold uppercase">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-4 border-foreground bg-background px-4 py-3 font-bold focus:outline-none focus:ring-4 focus:ring-foreground"
          required
          disabled={loading}
        />
      </div>

      {error && (
        <div className="mb-6 border-4 border-foreground bg-destructive p-4 font-bold text-destructive-foreground">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full border-4 border-foreground bg-foreground px-6 py-4 font-black uppercase text-background transition-all hover:translate-x-1 hover:translate-y-1 disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  )
}
