import Image from "next/image";

type BrandMarkProps = {
  variant?: "light" | "dark";
  priority?: boolean;
};

export function BrandMark({ variant = "light", priority = false }: BrandMarkProps) {
  const source = variant === "dark" ? "/images/noore-logo-dark.webp" : "/images/noore-logo-light.webp";

  return (
    <Image
      className={`brand-mark brand-mark-${variant}`}
      src={source}
      alt=""
      width={1063}
      height={590}
      priority={priority}
      sizes="(max-width: 640px) 110px, 170px"
    />
  );
}
