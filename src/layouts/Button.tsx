const Button = ({ styleType, title, icon, iconPlace }: { styleType: string, title: string, icon?: React.ReactNode, iconPlace?: 'left' | 'right' }) => {

    const getStyle = (styleType: string) => {
        if (styleType === 'primary') {
            return 'bg-[#1173d4] hover:bg-[#1173d4]/90 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105';
        }else if (styleType === 'secondary') {
            return 'bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-lg font-bold transition-all';
        }else if (styleType === 'add-to-cart') {
            return 'w-full bg-[#1173d4] text-white py-2.5 rounded-lg font-bold shadow-lg flex items-center justify-center gap-2';
        }
    }

  return (
    <div className={getStyle(styleType)}>
      {icon && iconPlace === 'left' && <>{icon}</>}
      {title}
      {icon && iconPlace === 'right' && <>{icon}</>}
    </div>
  )
}

export default Button