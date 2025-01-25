'use client';

interface GradientCardProps {
  children: React.ReactNode;
}

export function GradientCard({ children }: GradientCardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
      <div className="relative bg-black/90 rounded-xl p-6">
        {children}
      </div>
    </div>
  );
}
