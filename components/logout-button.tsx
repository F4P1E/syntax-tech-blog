"use client"

import { useRouter } from "next/navigation"
import { logout } from "@/lib/auth"

export function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await logout()
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="border-4 border-foreground bg-background px-6 py-3 font-black uppercase transition-all hover:translate-x-1 hover:translate-y-1"
    >
      Logout
    </button>
  )
}
