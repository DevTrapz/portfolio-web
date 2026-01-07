import { brand } from "@/resources";

export const Logo = () => (
  <div
    style={{
      width: "100px",
      height: "30px",
      backgroundColor: "var(--brand-solid-strong)",
      mask: `url(${brand.image}) no-repeat center / contain`,
      WebkitMask:
        "url(/images/dev-atomics-logo.svg) no-repeat center / contain",
    }}
  />
);
