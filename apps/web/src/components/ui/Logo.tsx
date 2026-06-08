import Image from "next/image";

export default function Logo({ className = "", size = 32, showText = true, dark = false }: {
  className?: string;
  size?: number;
  showText?: boolean;
  dark?: boolean;
}) {
  const textColor = dark ? "#F8F9FA" : "#0D233A";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <Image
        src="/images/logo-icon.png"
        alt="SabiGuide"
        width={size}
        height={size}
        className="rounded-lg object-contain"
        priority
      />

      {showText && (
        <span
          className="font-extrabold text-xl tracking-tight"
          style={{ color: textColor, fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
        >
          Sabi<span style={{ color: "#00B074" }}>Guide</span>
        </span>
      )}
    </div>
  );
}
