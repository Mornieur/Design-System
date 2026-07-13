'use client';

import { useEffect, useRef, useState } from 'react';

type CopyCodeButtonProps = {
  code: string;
};

async function writeWithFallback(code: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(code);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = code;
  textarea.setAttribute('readonly', 'true');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand('copy');
  document.body.removeChild(textarea);

  if (!copied) {
    throw new Error('copy-failed');
  }
}

export default function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    try {
      await writeWithFallback(code);
      setStatus('copied');
    } catch {
      setStatus('error');
    }

    timeoutRef.current = window.setTimeout(() => {
      setStatus('idle');
    }, 1800);
  }

  const label =
    status === 'copied'
      ? 'Copied'
      : status === 'error'
        ? 'Copy failed'
        : 'Copy code';

  return (
    <div className="copy-code-control">
      <button
        type="button"
        className="component-example-action"
        onClick={handleCopy}
        aria-describedby="copy-code-status"
      >
        {label}
      </button>
      <span id="copy-code-status" className="copy-code-live" aria-live="polite">
        {status === 'copied'
          ? 'Example code copied to clipboard.'
          : status === 'error'
            ? 'Copy failed. Please copy the code manually.'
            : ''}
      </span>
    </div>
  );
}
