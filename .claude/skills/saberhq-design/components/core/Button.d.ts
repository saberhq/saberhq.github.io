export interface ButtonProps {
  /** 'primary' solid ink · 'secondary' hairline outline · 'ghost' bare */
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'sm';
  /** renders an <a> when set */
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
