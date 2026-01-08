"use client";
interface LogoProps {
  /** use logo image in svg format */
  image: string;
}
/**
 * @descriptions Displays a logo from a svg
 */
export const Logo: React.FC<LogoProps> = ({ image }) => (
  <a
    style={{
      width: "100px",
      height: "30px",
      backgroundColor: "var(--brand-solid-strong)",
      WebkitMask: `url(${image}) no-repeat center / contain`,
    }}
    href="/"
  />
);
