/* Static mirror of components/core/*.jsx so cards & UI-kit screens render standalone.
   Source of truth for consumers stays in the .jsx files (compiled into the DS bundle). */
(function () {
  const h = React.createElement;
  function Button({ variant = 'primary', size = 'md', href, onClick, disabled, children, style, ...rest }) {
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
    };
    const variants = {
      primary: { background: 'var(--btn-solid-bg)', color: 'var(--btn-solid-text)', border: '1px solid var(--btn-solid-bg)', opacity: disabled ? 0.45 : press ? 0.75 : hover ? 0.88 : 1 },
      secondary: { background: 'transparent', color: 'var(--ink)', border: '1px solid ' + (hover && !disabled ? 'var(--ink-4)' : 'var(--rule)'), opacity: disabled ? 0.45 : 1 },
      ghost: { background: hover && !disabled ? 'var(--surface-sunken)' : 'transparent', color: 'var(--ink)', border: '1px solid transparent', opacity: disabled ? 0.45 : 1 },
    };
    return h(href ? 'a' : 'button', {
      href, onClick, disabled: href ? undefined : disabled,
      onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setPress(false); },
      onMouseDown: () => setPress(true), onMouseUp: () => setPress(false),
      style: { ...base, ...variants[variant], ...style }, ...rest,
    }, children);
  }
  function Tag({ accent = false, children, style, ...rest }) {
    return h('span', {
      style: {
        display: 'inline-flex', alignItems: 'center',
        fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.02em',
        padding: '2px 7px', borderRadius: 'var(--radius-sm)', lineHeight: 1.6,
        color: accent ? 'var(--accent)' : 'var(--ink-3)',
        border: '1px solid ' + (accent ? 'var(--accent)' : 'var(--rule)'),
        background: accent ? 'var(--accent-wash)' : 'transparent',
        whiteSpace: 'nowrap', ...style,
      }, ...rest,
    }, children);
  }
  function Card({ href, meta, title, children, style, ...rest }) {
    const [hover, setHover] = React.useState(false);
    const lifted = hover && href;
    return h(href ? 'a' : 'div', {
      href,
      onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
      style: {
        display: 'block', boxSizing: 'border-box',
        border: '1px solid var(--rule)', borderRadius: 'var(--radius)',
        background: 'var(--surface-card)', padding: '14px 16px',
        color: 'inherit', textDecoration: 'none',
        transition: 'box-shadow var(--dur) var(--ease), transform var(--dur) var(--ease)',
        boxShadow: lifted ? '0 4px 12px rgba(0,0,0,.1)' : 'none',
        transform: lifted ? 'translateY(-2px)' : 'none', ...style,
      }, ...rest,
    },
      meta ? h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.02em', color: 'var(--ink-3)', marginBottom: 5 } }, meta) : null,
      title ? h('div', { style: { fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, letterSpacing: '-0.012em', marginBottom: 4, color: 'var(--ink)' } }, title) : null,
      children
    );
  }
  function SectionHeader({ number, label, aside, style, ...rest }) {
    return h('div', {
      style: {
        display: 'flex', alignItems: 'baseline', gap: 8,
        borderTop: 'var(--rule-w-strong) solid var(--rule-strong)', paddingTop: 6,
        fontFamily: 'var(--font-mono)', fontSize: 'var(--label-size)', fontWeight: 500, ...style,
      }, ...rest,
    },
      number ? h('span', { style: { color: 'var(--accent)' } }, number) : null,
      h('span', { style: { letterSpacing: 'var(--label-track)', textTransform: 'uppercase', color: 'var(--ink)' } }, label),
      aside ? h('span', { style: { flex: 1 } }) : null,
      aside ? h('span', { style: { fontSize: '10px', fontWeight: 400, color: 'var(--ink-3)' } }, aside) : null
    );
  }
  window.SaberHQCore = { Button, Tag, Card, SectionHeader };
})();
