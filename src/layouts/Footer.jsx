import { MdCall, MdChat, MdLocationOn, MdMail, MdPublic, MdShare, MdShoppingBag } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#101922] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          {/* <!-- Main Footer Content --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* <!-- Newsletter Signup --> */}
            <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
            <div className="bg-[#1173d4] p-1.5 rounded-lg text-white">
              <MdShoppingBag className="text-xl!" />
            </div>
            <span className="text-xl font-bold tracking-tight">PremiumShop</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">The ultimate destination for premium shopping. Curating the best products for your modern lifestyle.</p>
            <div className="flex flex-col gap-3">
            <span className="font-bold text-sm">Join our newsletter</span>
            <div className="flex gap-2">
            <input className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-lg px-4 text-sm focus:ring-[#1173d4]/20" placeholder="Email address" type="email"/>
            <button className="bg-[#1173d4] text-white px-4 py-2 rounded-lg font-bold text-sm">Join</button>
            </div>
            </div>
            </div>
          {/* <!-- Links --> */}
            <div>
            <h4 className="font-bold mb-6">Customer Care</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
            <li><a className="hover:text-[#1173d4] transition-colors" href="#">Help Center</a></li>
            <li><a className="hover:text-[#1173d4] transition-colors" href="#">Track Your Order</a></li>
            <li><a className="hover:text-[#1173d4] transition-colors" href="#">Returns &amp; Exchanges</a></li>
            <li><a className="hover:text-[#1173d4] transition-colors" href="#">Shipping Information</a></li>
            </ul>
            </div>
            {/* <!-- Links --> */}
            <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
            <li><a className="hover:text-[#1173d4] transition-colors" href="#">About PremiumShop</a></li>
            <li><a className="hover:text-[#1173d4] transition-colors" href="#">Sustainability</a></li>
            <li><a className="hover:text-[#1173d4] transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-[#1173d4] transition-colors" href="#">Terms of Service</a></li>
            </ul>
            </div>
            {/* <!-- Contact Info --> */}
            <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
            <li className="flex items-center gap-3">
              <MdMail className="text-lg!" />
              support@premiumshop.com
            </li>
            <li className="flex items-center gap-3">
              <MdCall className="text-lg!" />
                +1 (555) 000-1234
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn className="text-lg!" />
              123 Commerce St, NY 10001
            </li>
            </ul>
            </div>
          </div>
            {/* <!-- Bottom Bar --> */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} PremiumShop. All rights reserved.</p>
            <div className="flex items-center gap-6">

              <a className="text-gray-400 hover:text-[#1173d4] transition-colors" href="#">
                <MdPublic className="text-xl!" />
              </a>
              <a className="text-gray-400 hover:text-[#1173d4] transition-colors" href="#">
                <MdChat className="text-xl!" />
              </a>
              <a className="text-gray-400 hover:text-[#1173d4] transition-colors" href="#">
                <MdShare className="text-xl!" />
              </a>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer