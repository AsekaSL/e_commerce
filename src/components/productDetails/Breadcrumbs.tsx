const Breadcrumbs = () => {
  return (
    <nav className="flex flex-wrap gap-2 py-4 mb-2">
        <a className="text-[#617589] text-sm font-medium hover:text-[#1173d4]" href="#">Home</a>
        <span className="text-[#617589] text-sm font-medium">/</span>
        <a className="text-[#617589] text-sm font-medium hover:text-[#1173d4]" href="#">Audio</a>
        <span className="text-[#617589] text-sm font-medium">/</span>
        <a className="text-[#617589] text-sm font-medium hover:text-[#1173d4]" href="#">Headphones</a>
        <span className="text-[#617589] text-sm font-medium">/</span>
        <span className="text-[#1173d4] text-sm font-medium">Pro Wireless X1</span>
    </nav>
  )
}

export default Breadcrumbs