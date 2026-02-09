const CheckoutPage = () => {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] font-display text-[#111418] dark:text-white transition-colors duration-200">
    <div className="relative flex min-h-screen flex-col">
        <main className="flex-1 px-4 md:px-20 lg:px-40 py-8">
        <div className="mx-auto max-w-300">
        {/* <!-- Breadcrumbs --> */}
        <nav className="flex flex-wrap gap-2 mb-8">
        <a className="text-[#617589] dark:text-gray-400 text-sm font-medium hover:text-[#1173d4]" href="#">Cart</a>
        <span className="text-[#617589] dark:text-gray-600 text-sm">/</span>
        <span className="text-[#1173d4] text-sm font-semibold">Shipping &amp; Payment</span>
        <span className="text-[#617589] dark:text-gray-600 text-sm">/</span>
        <span className="text-[#617589] dark:text-gray-400 text-sm">Confirmation</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* <!-- Left Column: Checkout Form --> */}
        <div className="lg:col-span-7 flex flex-col gap-8">
        {/* <!-- Step 1: Shipping Details --> */}
        <section className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-[#dbe0e6] dark:border-gray-800">
        <div className="flex items-center gap-3 mb-6">
        <span className="bg-[#1173d4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
        <h2 className="text-xl font-bold">Shipping Details</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">First Name</span>
        <input className="form-input rounded-lg border-[#dbe0e6] dark:border-gray-700 dark:bg-gray-800 h-12 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="John" type="text"/>
        </label>
        <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Last Name</span>
        <input className="form-input rounded-lg border-[#dbe0e6] dark:border-gray-700 dark:bg-gray-800 h-12 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="Doe" type="text"/>
        </label>
        </div>
        <div className="mt-4">
        <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Street Address</span>
        <input className="form-input rounded-lg border-[#dbe0e6] dark:border-gray-700 dark:bg-gray-800 h-12 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="123 Premium Way" type="text"/>
        </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">City</span>
        <input className="form-input rounded-lg border-[#dbe0e6] dark:border-gray-700 dark:bg-gray-800 h-12 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="San Francisco" type="text"/>
        </label>
        <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">State/Province</span>
        <input className="form-input rounded-lg border-[#dbe0e6] dark:border-gray-700 dark:bg-gray-800 h-12 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="CA" type="text"/>
        </label>
        <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Zip Code</span>
        <input className="form-input rounded-lg border-[#dbe0e6] dark:border-gray-700 dark:bg-gray-800 h-12 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="94103" type="text"/>
        </label>
        </div>
        </section>
        {/* <!-- Step 2: Payment Method --> */}
        <section className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-[#dbe0e6] dark:border-gray-800">
        <div className="flex items-center gap-3 mb-6">
        <span className="bg-[#1173d4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
        <h2 className="text-xl font-bold">Payment Method</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="relative group cursor-pointer">
        <input checked className="peer hidden" id="credit" name="payment" type="radio"/>
        <label className="flex items-center justify-between p-4 border-2 rounded-xl border-[#dbe0e6] dark:border-gray-700 peer-checked:border-[#1173d4] peer-checked:bg-[#1173d4]/5 transition-all">
        <div className="flex items-center gap-3">
            
        <span className="material-symbols-outlined text-[#1173d4]">credit_card</span>
        <span className="font-medium">Credit Card</span>
        </div>
        <div className="w-4 h-4 rounded-full border-2 border-[#dbe0e6] flex items-center justify-center peer-checked:border-[#1173d4]">
        <div className="w-2 h-2 rounded-full bg-[#1173d4] opacity-0 peer-checked:opacity-100"></div>
        </div>
        </label>
        </div>
        <div className="relative group cursor-pointer">
        <input className="peer hidden" id="paypal" name="payment" type="radio"/>
        <label className="flex items-center justify-between p-4 border-2 rounded-xl border-[#dbe0e6] dark:border-gray-700 peer-checked:border-[#1173d4] peer-checked:bg-[#1173d4]/5 transition-all">
        <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-blue-600">account_balance_wallet</span>
        <span className="font-medium">PayPal</span>
        </div>
        <div className="w-4 h-4 rounded-full border-2 border-[#dbe0e6] flex items-center justify-center peer-checked:border-[#1173d4]">
        <div className="w-2 h-2 rounded-full bg-[#1173d4] opacity-0 peer-checked:opacity-100"></div>
        </div>
        </label>
        </div>
        </div>
        <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Cardholder Name</span>
        <input className="form-input rounded-lg border-[#dbe0e6] dark:border-gray-700 dark:bg-gray-800 h-12 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="John Doe" type="text"/>
        </label>
        <div className="relative">
        <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Card Number</span>
        <div className="relative">
        <input className="form-input w-full rounded-lg border-[#dbe0e6] dark:border-gray-700 dark:bg-gray-800 h-12 pl-12 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="0000 0000 0000 0000" type="text"/>
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">lock</span>
        </div>
        </label>
        </div>
        <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Expiry Date</span>
        <input className="form-input rounded-lg border-[#dbe0e6] dark:border-gray-700 dark:bg-gray-800 h-12 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="MM/YY" type="text"/>
        </label>
        <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">CVV</span>
        <input className="form-input rounded-lg border-[#dbe0e6] dark:border-gray-700 dark:bg-gray-800 h-12 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="123" type="text"/>
        </label>
        </div>
        </div>
        </section>
        </div>
        {/* <!-- Right Column: Order Summary (Sticky) --> */}
        <div className="lg:col-span-5 relative">
        <div className="sticky top-24">
        <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-[#dbe0e6] dark:border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-[#f0f2f4] dark:border-gray-800">
        <h3 className="text-lg font-bold">Order Summary</h3>
        </div>
        <div className="p-6 max-h-75 overflow-y-auto space-y-4">
        {/* <!-- Order Item 1 --> */}
        <div className="flex gap-4">
        <div className="size-16 rounded-lg bg-gray-100 dark:bg-gray-800 bg-cover bg-center" data-alt="High-end leather headphones" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBil-3qY5oYXaEalhsg-IzhGUu-FTq6P3dwKZe-QQAgXefTIV8W0O6FD-AoNCLRu5HISBl7Nr3rsFXC7v4iUSaLJCiNQHJKh7p-rTPLJDhdn48Umrj79QxQ8i9JM2E58UL5Dnw34YZfODzIu6BFjg0RWiYgndfE3oB49cxk1N6kdLrC7sohMSpEQbk1TCjFpSQbkWjfjHdsfqhFT5pnVJdOg2rKNCltqPWEG5eRqVzNYeV8BAQi7SWXxxOom-8xtUzXM1YXtpKCPV8p")' }}></div>
        <div className="flex-1">
        <p className="text-sm font-semibold">Acoustic Pro Headphones</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">Space Grey, 1x</p>
        </div>
        <p className="text-sm font-bold">$249.00</p>
        </div>
        {/* <!-- Order Item 2 --> */}
        <div className="flex gap-4">
        <div className="size-16 rounded-lg bg-gray-100 dark:bg-gray-800 bg-cover bg-center" data-alt="Minimalist design watch" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDToCYcX6t3-8UMdiWdXgWksIQWOeAYSD7hRm9ZtVzScGRLBAwQtYsryXOfSJpoKBnXeYoTiJUgkazI_iMic7O1jonBzulN6eNQ1xDhTmKuOE3BqSEttC-IW9Z_JW8nb8vAZbMbVgcutycBf_iArX2ILZSLmaw4musxzAsUCH08gZyOuOnzl7YP4NqphUZJ8v8-Pxg1T9jWEoo2A5_Rx3J1WNXKOA6nuIpza4Gsg_Awp5wpysyv8MTeuHAFvlFCEUoTpA5IO8GJXx4G")' }}></div>
        <div className="flex-1">
        <p className="text-sm font-semibold">Minimalist Quartz Watch</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">Ocean Blue, 1x</p>
        </div>
        <p className="text-sm font-bold">$189.00</p>
        </div>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 space-y-4">
        <div className="flex items-center gap-2">
        <input className="form-input flex-1 rounded-lg border-[#dbe0e6] dark:border-gray-700 dark:bg-gray-800 h-10 text-sm" placeholder="Promo code" type="text"/>
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm font-bold rounded-lg hover:bg-gray-300 transition-colors">Apply</button>
        </div>
        <div className="space-y-2 pt-2">
        <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
        <span>$438.00</span>
        </div>
        <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">Shipping</span>
        <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">Taxes</span>
        <span>$35.04</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t border-[#dbe0e6] dark:border-gray-700 pt-4 mt-2">
        <span>Total</span>
        <span className="text-[#1173d4]">$473.04</span>
        </div>
        </div>
        <button className="w-full bg-[#1173d4] hover:bg-[#1173d4]/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 mt-4 shadow-md transition-transform active:scale-[0.98]">
        <span className="material-symbols-outlined">lock</span>
                                                Complete Purchase
                                            </button>
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500 dark:text-gray-400">
        <span className="material-symbols-outlined text-[14px]">verified_user</span>
                                                Secure 256-bit SSL encrypted checkout
                                            </div>
        </div>
        </section>
        {/* <!-- Trust Badges --> */}
        <div className="mt-6 flex justify-around opacity-60 dark:opacity-40">
        <div className="flex flex-col items-center gap-1">
        <span className="material-symbols-outlined text-2xl">local_shipping</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Fast Delivery</span>
        </div>
        <div className="flex flex-col items-center gap-1">
        <span className="material-symbols-outlined text-2xl">published_with_changes</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Free Returns</span>
        </div>
        <div className="flex flex-col items-center gap-1">
        <span className="material-symbols-outlined text-2xl">support_agent</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">24/7 Support</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </main>
    </div>
</div>
  )
}

export default CheckoutPage