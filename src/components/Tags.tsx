// src/components/Tags.tsx
//! 해당 컴포넌트 만들었으나 사용 용도가 불분명하여 일단 보류

export interface TagProps {
  label: string;
  variant?: 'new' | 'used' | 'sale' | 'best';
  className?: string;
}

export default function Tags({ label, variant = 'new', className = '' }: TagProps) {
  const baseClasses = 'inline-flex items-center px-2 py-1 text-xs font-medium rounded';

  const variantClasses = {
    new: 'bg-poten-newblue text-white',
    used: 'bg-poten-usedorange text-white',
    sale: 'bg-poten-red text-white',
    best: 'bg-poten-safegreen text-white',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {label}
    </span>
  );
}
