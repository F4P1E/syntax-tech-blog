"use client"

import { useEffect, useRef } from "react"

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      // Simple markdown parsing for basic formatting
      let html = content
        // Headers
        .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-black uppercase mb-4 mt-8">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-black uppercase mb-4 mt-8">$1</h2>')
        .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-black uppercase mb-6 mt-8">$1</h1>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-black">$1</strong>')
        // Lists
        .replace(/^- (.*$)/gim, '<li class="ml-6 mb-2">→ $1</li>')
        // Paragraphs
        .replace(/\n\n/g, '</p><p class="mb-4 text-lg leading-relaxed">')

      // Wrap in paragraph tags
      html = '<p class="mb-4 text-lg leading-relaxed">' + html + "</p>"

      // Wrap lists
      html = html.replace(/(<li.*<\/li>)/s, '<ul class="mb-6 space-y-2">$1</ul>')

      contentRef.current.innerHTML = html
    }
  }, [content])

  return <div ref={contentRef} className="prose-brutalist" />
}
