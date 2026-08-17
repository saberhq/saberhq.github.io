import React from 'react';

/** Saber HQ button. Primary = solid ink (inverts in dark). Accent is never a button fill. */
export function Button({ variant = 'primary', size = 'md', href, onClick, disabled, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: 'var(--font-sans)', fontWeight: 500, lineHeight: 1.2, boxSizing: 'border-box',
    fontSize: size === 'sm' ? '12.5px' : '14px',
    padding: size === 'sm' ? '6px 12px' : '9px 16px',
    borderRadius: 'var(--radius)', cursor: disabled ? 'default' : 'pointer',
    textDecoration: 'none', userSelect: 'none',
    transition: 'opacity var(--dur) var(--ease), background var(--dur) var(--ease), border-color var(--dur) var(--ease)',
    opacity: disabled ? 0.45 : press ? 0.7 : 1,
  };
  const variants = {
    primary: { background: 'var(--btn-solid-bg)', color: 'var(--btn-solid-text)', border: '1px solid var(--btn-solid-bg)', opacity: disabled ? 0.45 : press ? 0.75 : hover ? 0.88 : 1 },
    secondary: { background: 'transparent', color: 'var(--ink)', border: '1px solid ' + (hover && !disabled ? 'var(--ink-4)' : 'var(--rule)') },
    ghost: { background: hover && !disabled ? 'var(--surface-sunken)' : 'transparent', color: 'var(--ink)', border: '1px solid transparent' },
  };
  const El = href ? 'a' : 'button';
  return React.createElement(El, {
    href, onClick, disabled: href ? undefined : disabled,
    onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true), onMouseUp: () => setPress(false),
    style: { ...base, ...variants[variant], ...style }, ...rest,
  }, children);
}
