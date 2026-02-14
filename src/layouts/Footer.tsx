import { memo, useMemo } from 'react';
import Button from './Button';
import { companyLinks, contactUsLinks, customerCareLinks } from '../config/data';
import { IconGet } from '../utils/actions';

const Footer = memo(() => {
  // Memoize the current year to avoid recalculation on every render
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Memoize social icons array to prevent recreation
  const socialIcons = useMemo(() => ["MdPublic", "MdChat", "MdShare"], []);

  return (
    <footer className="bg-white dark:bg-[#101922] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Newsletter Signup */}
            <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
            <div className="bg-[#1173d4] p-1.5 rounded-lg text-white">
              {IconGet("MdShoppingBag", "text-xl!")}
            </div>
            <span className="text-xl font-bold tracking-tight">PremiumShop</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">The ultimate destination for premium shopping. Curating the best products for your modern lifestyle.</p>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Join our newsletter</span>
              <div className="flex gap-2">
                <input className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-lg px-4 text-sm focus:ring-[#1173d4]/20" placeholder="Email address" type="email"/>
                <Button styleType="primary" title="Join" />
              </div>
            </div>
            </div>
          {/* Links */}
            <div>
              <h4 className="font-bold mb-6">Customer Care</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-500">
                {
                  customerCareLinks.map((link, index) => (
                    <li key={index}><a className="hover:text-[#1173d4] transition-colors" href={link.href}>{link.title}</a></li>
                  ))
                }
              </ul>
            </div>
            {/* Links */}
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-500">
                {
                  companyLinks.map((link, index) => (
                    <li key={index} ><a className="hover:text-[#1173d4] transition-colors" href= {link.href} >{link.title}</a></li>
                  ))
                }
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-500">
                {
                  contactUsLinks.map((link, index) => (
                    <li className="flex items-center gap-3" key={index}>
                      {IconGet(link.icon, "text-lg!")}
                      {link.title}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
            {/* Bottom Bar */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">© {currentYear} PremiumShop. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {
                socialIcons.map((iconName, index) => (
                  <a key={index} className="text-gray-400 hover:text-[#1173d4] transition-colors" href="#">
                    {IconGet(iconName, "text-xl!")}
                  </a>
                ))
              }
              
            </div>
          </div>
        </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;