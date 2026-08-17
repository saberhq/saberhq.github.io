import React from 'react';

/** Section opener: 1.5px ink rule + numbered mono label (number in accent) + optional right aside. */
export function SectionHeader({ number, label, aside, style, ...rest }) {
  return React.createElement('div', {
    style: {
      display: 'flex', alignItems: 'baseline', gap: 8,
      borderTop: 'var(--rule-w-strong) solid var(--rule-strong)', paddingTop: 6,
      fontFamily: 'var(--font-mono)', fontSize: 'var(--label-size)', fontWeight: 500,
      ...style,
    }, ...rest,
  },
    number ? React.createElement('span', { style: { color: 'var(--accent)' } }, number) : null,
    React.createElement('span', { style: { letterSpacing: 'var(--label-track)', textTransform: 'uppercase', color: 'var(--ink)' } }, label),
    aside ? React.createElement('span', { style: { flex: 1 } }) : null,
    aside ? React.createElement('span', { style: { fontSize: '10px', fontWeight: 400, color: 'var(--ink-3)' } }, aside) : null
  );
}
