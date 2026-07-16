'use client';

import {useLocale} from 'next-intl';
import {useEffect, useRef, useState} from 'react';

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

export default function CopyCodeButton({code}: CopyCodeButtonProps) {
  const locale = useLocale();
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

  const copy =
    locale === 'pt-BR'
      ? {
          copied: 'Copiado',
          error: 'Falha ao copiar',
          idle: 'Copiar codigo',
          copiedStatus: 'Codigo do exemplo copiado para a area de transferencia.',
          errorStatus: 'Falha ao copiar. Copie o codigo manualmente.'
        }
      : {
          copied: 'Copied',
          error: 'Copy failed',
          idle: 'Copy code',
          copiedStatus: 'Example code copied to clipboard.',
          errorStatus: 'Copy failed. Please copy the code manually.'
        };

  const label =
    status === 'copied'
      ? copy.copied
      : status === 'error'
        ? copy.error
        : copy.idle;

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
          ? copy.copiedStatus
          : status === 'error'
            ? copy.errorStatus
            : ''}
      </span>
    </div>
  );
}
