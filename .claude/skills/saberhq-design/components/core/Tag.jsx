import React from 'react';

/** Mono instrument-panel chip for topics, stacks, statuses. */
export function Tag({ accent = false, children, style, ...rest }) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex', alignItems: 'center',
      fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.02em',
      padding: '2px 7px', borderRadius: 'var(--radius-sm)', lineHeight: 1.6,
      color: accent ? 'var(--accent)' : 'var(--ink-3)',
      border: '1px solid ' + (accent ? 'var(--accent)' : 'var(--rule)'),
      background: accent ? 'var(--accent-wash)' : 'transparent',
      whiteSpace: 'nowrap',
      ...style,
    }, ...rest,
  }, children);
}
