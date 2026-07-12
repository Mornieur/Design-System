'use client';

import { useEffect, useState } from 'react';

const scrambleAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

type HeroSignalProps = {
  label: string;
};

export default function HeroSignal({ label }: HeroSignalProps) {
  const [text, setText] = useState(label);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (motionQuery.matches) {
      return undefined;
    }

    let frame = 0;
    const intervalId = window.setInterval(() => {
      frame += 1;
      const revealIndex = Math.floor(frame / 2);

      const nextText = label
        .split('')
        .map((character, index) => {
          if (character === ' ') {
            return ' ';
          }

          if (index <= revealIndex) {
            return label[index];
          }

          return scrambleAlphabet[Math.floor(Math.random() * scrambleAlphabet.length)];
        })
        .join('');

      setText(nextText);

      if (frame >= label.length * 2) {
        window.clearInterval(intervalId);
        setText(label);
      }
    }, 38);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [label]);

  return (
    <span className="signal-pill" aria-label={label}>
      <span className="status-dot status-dot-live" aria-hidden="true" />
      <span className="signal-pill-label">{text}</span>
    </span>
  );
}
