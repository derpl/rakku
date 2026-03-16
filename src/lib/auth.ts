import { cookies } from "next/headers";

// Simple auth utility - hardcoded for now
export const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123",
};

export function checkAuth(): boolean {
  if (typeof window === "undefined") {
    const cookieStore = cookies();
    return !!cookieStore.get("rakku_session")?.value;
  }
  return document.cookie.includes("rakku_session=");
}

export function getUser(): string | null {
  if (typeof window === "undefined") {
    const cookieStore = cookies();
    const session = cookieStore.get("rakku_session")?.value;
    return session ? "admin" : null;
  }
  const match = document.cookie.match(/rakku_user=([^;]+)/);
  return match ? match[1] : null;
}

export function setAuthCookie(username: string, remember?: boolean) {
  const maxAge = remember ? 30 * 24 * 60 * 60 : 24 * 60 * 60; // 30 days or 1 day
  document.cookie = `rakku_session=true; path=/; max-age=${maxAge}; SameSite=Strict`;
  document.cookie = `rakku_user=${username}; path=/; max-age=${maxAge}; SameSite=Strict`;
}

export function logout(): void {
  if (typeof window === "undefined") return;
  document.cookie = "rakku_session=; path=/; max-age=0";
  document.cookie = "rakku_user=; path=/; max-age=0";
}
