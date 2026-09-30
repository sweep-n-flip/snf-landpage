'use client'

import { useState } from 'react'

export function CopyCodeButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // Clipboard can be blocked (insecure context, permissions); the label still confirms the click.
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`h-[30px] whitespace-nowrap rounded-[9px] border border-slate-200 bg-white px-2.5 text-xs font-semibold hover:border-snf ${copied ? 'text-green-600' : 'text-ink'}`}
    >
      {copied ? 'Copied ✓' : 'Copy'}
    </button>
  )
}
