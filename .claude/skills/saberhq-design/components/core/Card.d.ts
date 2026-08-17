export interface CardProps {
  /** renders an <a> with hover lift when set */
  href?: string;
  /** mono topline, e.g. "2025-09-01 · BLOG" */
  meta?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
