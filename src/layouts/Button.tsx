import { memo, useMemo } from 'react';

interface ButtonProps {
  styleType: string;
  title: string;
  icon?: React.ReactNode;
  iconPlace?: 'left' | 'right';
}

// Memoized style map to avoid recreating on every render
const styleMap: Record<string, string> = {
  primary: 'bg-[#1173d4] hover:bg-[#1173d4]/90 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105',
  secondary: 'bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-lg font-bold transition-all',
  'add-to-cart': 'w-full bg-[#1173d4] text-white py-2.5 rounded-lg font-bold shadow-lg flex items-center justify-center gap-2'
};

const Button = memo<ButtonProps>(({ styleType, title, icon, iconPlace }) => {
  // Memoize the style lookup to avoid function call on every render
  const buttonStyle = useMemo(() => styleMap[styleType] || styleMap.primary, [styleType]);

  return (
    <div className={buttonStyle}>
      {icon && iconPlace === 'left' && <>{icon}</>}
      {title}
      {icon && iconPlace === 'right' && <>{icon}</>}
    </div>
  );
});

Button.displayName = 'Button';

export default Button;