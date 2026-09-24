import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-pink text-white hover:bg-brand-pink-dark hover:-translate-y-px active:translate-y-0 active:shadow-none shadow-card",
  secondary:
    "bg-white text-ink border border-border hover:bg-surface-alt",
  ghost: "bg-transparent text-ink hover:bg-surface-alt",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

export default function Button(props: ButtonProps | AnchorProps) {
  const { variant = "primary", size = "lg", children, className = "" } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
