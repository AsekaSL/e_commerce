const Button = ({ styleType, title }: { styleType: string, title: string }) => {

    const getStyle = (styleType: string) => {
        if (styleType === 'primary') {
            return 'bg-[#1173d4] hover:bg-[#1173d4]/90 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105';
        }else if (styleType === 'secondary') {
            return 'bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-lg font-bold transition-all';
        }
    }

  return (
    <div className={getStyle(styleType)}>{title}</div>
  )
}

export default Button