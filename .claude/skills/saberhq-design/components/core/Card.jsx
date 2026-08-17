import React from 'react';

/** Hairline card; lifts on hover when clickable (href). meta renders as a mono topline. */
export function Card({ href, meta, title, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const lifted = hover && href;
  const El = href ? 'a' : 'div';
  return React.createElement(El, {
    href,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    style: {
      display: 'block', boxSizing: 'border-box',
      border: '1px solid var(--rule)', borderRadius: 'var(--radius)',
      background: 'var(--surface-card)', padding: '14px 16px',
      color: 'inherit', textDecoration: 'none',
      transition: 'box-shadow var(--dur) var(--ease), transform var(--dur) var(--ease)',
      boxShadow: lifted ? '0 4px 12px rgba(0,0,0,.1)' : 'none',
      transform: lifted ? 'translateY(-2px)' : 'none',
      ...style,
    }, ...rest,
  },
    meta ? React.createElement('div', { style: { fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.02em', color: 'var(--ink-3)', marginBottom: 5 } }, meta) : null,
    title ? React.createElement('div', { style: { fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, letterSpacing: '-0.012em', marginBottom: 4, color: 'var(--ink)' } }, title) : null,
    children
  );
}
