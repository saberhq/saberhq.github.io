export interface SectionHeaderProps {
  /** zero-padded index, e.g. "01" */
  number?: string;
  label: React.ReactNode;
  /** optional mono aside pushed right, e.g. a "full list →" link */
  aside?: React.ReactNode;
  style?: React.CSSProperties;
}
