import React, { useState, useEffect } from 'react';
import { Menu, X, Star, MapPin, Clock, Phone, ChevronRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const baseUrl = import.meta.env.BASE_URL;

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState('Breakfast Buffet');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuCategories = ['Breakfast Buffet', 'Lunch / Dinner Buffet', 'À La Carte', 'Desserts'];

  const menuItems = {
    'Breakfast Buffet': [
      { name: 'South Indian Classics', desc: 'Fresh Idly, Vada, and crispy Masala Dosa with assorted chutneys', tag: 'Popular' },
      { name: 'Continental Breakfast', desc: 'Sausages, grilled tomatoes, hash browns, and baked beans', tag: '' },
      { name: 'Live Egg Station', desc: 'Omelettes, sunny side up, and scrambled eggs made to order', tag: 'Chef’s Special' },
      { name: 'Fresh Bakery Basket', desc: 'Croissants, muffins, and freshly baked artisan breads', tag: '' },
    ],
    'Lunch / Dinner Buffet': [
      { name: 'North Indian Spices', desc: 'Rich curries, buttery naan, and aromatic biryanis', tag: 'Chef’s Special' },
      { name: 'Asian Wok Station', desc: 'Stir-fried noodles, dim sums, and fiery wok-tossed appetizers', tag: '' },
      { name: 'Continental Mains', desc: 'Grilled chicken, pasta live counters, and baked casseroles', tag: 'Popular' },
      { name: 'Fresh Salads & Soup', desc: 'Assorted greens, Mediterranean salads, and soup of the day', tag: '' },
    ],
    'À La Carte': [
      { name: 'Mosaic Signature Paneer', desc: 'Cottage cheese simmered in a rich tomato and cashew gravy', tag: 'Chef’s Special' },
      { name: 'Grilled Norwegian Salmon', desc: 'Served with garlic mash and lemon butter sauce', tag: '' },
      { name: 'Murg Makhani', desc: 'Classic butter chicken with a velvety, rich texture', tag: 'Popular' },
      { name: 'Pasta Alfredo', desc: 'Penne tossed in creamy cheese sauce with mushrooms', tag: '' },
    ],
    'Desserts': [
      { name: 'Tiramisu', desc: 'Classic Italian dessert with mascarpone and espresso', tag: '' },
      { name: 'Warm Gajar Halwa', desc: 'Traditional Indian carrot pudding with nuts', tag: 'Popular' },
      { name: 'Assorted Pastries', desc: 'Chef’s selection of chocolate truffles and fruit tarts', tag: '' },
      { name: 'Ice Cream Sundae', desc: 'Choice of ice creams with sauces and toppings', tag: '' },
    ],
  };

  const images = [
    `${baseUrl}images/buffet_spread_1775080310805.png`,
    `${baseUrl}images/breakfast_spread_1775080326940.png`,
    `${baseUrl}images/restaurant_interior_1775080342849.png`,
    `${baseUrl}images/hero_dining_1775080294808.png`
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#111111] font-body relative">
      {/* HEADER */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="text-2xl font-heading font-bold tracking-wider text-[#C8A96A]">
            MOSAIC
            <span className="block text-[10px] tracking-widest text-[#111111] uppercase mt-1">
              Global Cuisine Restaurant
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className={`hover:text-[#C8A96A] transition-colors ${isScrolled ? 'text-[#111111]' : 'text-white'}`}>About</a>
            <a href="#menu" className={`hover:text-[#C8A96A] transition-colors ${isScrolled ? 'text-[#111111]' : 'text-white'}`}>Menu</a>
            <a href="#experience" className={`hover:text-[#C8A96A] transition-colors ${isScrolled ? 'text-[#111111]' : 'text-white'}`}>Experience</a>
            <a href="#reviews" className={`hover:text-[#C8A96A] transition-colors ${isScrolled ? 'text-[#111111]' : 'text-white'}`}>Reviews</a>
            <a href="#reservations" className="bg-[#C8A96A] text-white px-6 py-2.5 rounded-sm hover:bg-[#b5985a] transition-colors uppercase tracking-widest text-xs font-semibold shadow-lg">
              Reserve Table
            </a>
          </div>

          <button className="md:hidden text-[#C8A96A]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111111] text-white flex flex-col items-center justify-center space-y-8 pt-16">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-xl uppercase tracking-widest hover:text-[#C8A96A]">About</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-xl uppercase tracking-widest hover:text-[#C8A96A]">Menu</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-xl uppercase tracking-widest hover:text-[#C8A96A]">Experience</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-xl uppercase tracking-widest hover:text-[#C8A96A]">Reviews</a>
          <a href="#reservations" onClick={() => setMobileMenuOpen(false)} className="bg-[#C8A96A] px-8 py-3 rounded-sm uppercase tracking-widest font-semibold mt-4">
            Reserve Table
          </a>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img src={`${baseUrl}images/hero_dining_1775080294808.png`} alt="Mosaic Restaurant Dining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight mb-6 text-shadow-lg">
              Experience Global Flavours, <br className="hidden md:block" />
              <span className="text-[#C8A96A] italic font-light">Perfectly Curated</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              A premium dining experience at Mosaic, where global cuisine meets warm hospitality in the heart of Hebbal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#reservations" className="w-full sm:w-auto bg-[#C8A96A] hover:bg-[#b5985a] text-white px-8 py-4 rounded-sm transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-semibold shadow-xl">
                Reserve a Table <ChevronRight size={18} />
              </a>
              <a href="#menu" className="w-full sm:w-auto border border-white/50 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-sm transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-semibold backdrop-blur-sm">
                View Menu
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm tracking-widest uppercase">
              <div className="flex items-center gap-2">
                <Star className="text-[#faa405] fill-current" size={20} /> 4.0 Rating (125+ Reviews)
              </div>
              <div className="hidden sm:block opacity-50">•</div>
              <div>Inside Country Inn Hotel, Hebbal</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMAGE SCROLL SECTION */}
      <section className="py-20 bg-[#111111]">
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-6 lg:px-12 pb-8">
          {images.map((img, idx) => (
            <div key={idx} className="flex-none w-[85vw] md:w-[60vw] lg:w-[40vw] h-[400px] snap-center overflow-hidden rounded-sm relative group cursor-pointer">
              <img src={img} alt={`Gallery image ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-heading mb-8">Where Taste Meets Comfort</h2>
            <div className="w-16 h-0.5 bg-[#C8A96A] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Mosaic – Global Cuisine Restaurant offers a thoughtfully curated selection of dishes from across the world, served in a refined and comfortable setting inside Hotel Country Inn. Known for its diverse buffet spreads and freshly prepared à la carte options, Mosaic is a preferred choice for breakfast meetings, family dining, and relaxed evenings.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              "With a focus on improving guest experience and service quality, we strive to deliver a memorable dining experience every time."
            </p>
          </motion.div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">Culinary Selection</h2>
            <div className="w-16 h-0.5 bg-[#C8A96A] mx-auto mb-10"></div>

            <div className="flex flex-wrap justify-center gap-4">
              {menuCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveMenuCategory(cat)}
                  className={`px-6 py-2 border rounded-sm transition-all duration-300 uppercase tracking-wider text-sm ${activeMenuCategory === cat ? 'bg-[#111111] text-white border-[#111111]' : 'border-gray-200 text-gray-500 hover:border-[#C8A96A] hover:text-[#111111]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {menuItems[activeMenuCategory].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative border-b border-gray-100 pb-6 hover:bg-gray-50 p-6 -mx-6 rounded-sm transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-heading font-semibold">{item.name}</h3>
                  {item.tag && (
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#C8A96A] border border-[#C8A96A] px-2 py-1 rounded-sm">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[85%]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="#" className="inline-flex items-center gap-2 text-[#C8A96A] font-semibold tracking-widest uppercase text-sm group hover:text-[#111111] transition-colors">
              Explore Full Menu <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / FEATURES SECTION */}
      <section id="experience" className="py-24 px-6 lg:px-12 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">The Mosaic Experience</h2>
            <div className="w-16 h-0.5 bg-[#C8A96A] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🌍', title: 'Global Cuisine Variety', desc: 'A diverse selection of dishes spanning multiple continents.' },
              { icon: '🍳', title: 'Extensive Breakfast Buffet', desc: 'Start your day with our celebrated widespread breakfast offerings.' },
              { icon: '🏨', title: 'Hotel-Standard Ambience', desc: 'Refined and elegant setting inside Hotel Country Inn.' },
              { icon: '👨‍🍳', title: 'Freshly Prepared Dishes', desc: 'Quality ingredients and live counters for a fresh experience.' },
              { icon: '👨‍👩‍👧', title: 'Ideal for Family & Groups', desc: 'Spacious seating perfectly suited for gatherings and celebrations.' },
              { icon: '🪑', title: 'Comfortable Dining Spaces', desc: 'Plush seating and attentive service for your comfort.' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow border border-gray-50"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-heading mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-24 px-6 lg:px-12 bg-[#111111] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-6">Guest Experiences</h2>
          <div className="w-16 h-0.5 bg-[#C8A96A] mx-auto mb-10"></div>

          <div className="flex flex-col items-center mb-14">
            <div className="text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Calibri, sans-serif' }}>4.0</div>
            <div className="flex text-[#FFD700] drop-shadow-[0_0_12px_rgba(255,215,0,0.6)] gap-1 mb-3">
              {[...Array(4)].map((_, i) => <Star key={`filled-${i}`} size={32} fill="currentColor" />)}
              <Star size={32} className="text-white/20 drop-shadow-none" />
            </div>
            <p className="text-white/50 tracking-widest uppercase text-sm font-semibold">125+ Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { text: "The breakfast buffet is simply outstanding! Excellent variety and the South Indian dishes were authentic. Great start to the day.", name: "Rahul S.", highlight: "Breakfast Quality" },
              { text: "Lovely ambience for family dinners. The staff was courteous and the global cuisine options meant there was something for everyone.", name: "Priya M.", highlight: "Friendly Staff & Ambience" },
              { text: "A hidden gem inside Country Inn. The Sunday buffet spread is extensive and offers tremendous value. Will definitely visit again.", name: "Amit K.", highlight: "Good Variety" }
            ].map((review, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-sm border border-white/10 text-left">
                <div className="flex text-[#C8A96A] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">"{review.text}"</p>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs">
                  <span className="font-bold tracking-wider">{review.name}</span>
                  <span className="text-[#C8A96A]">{review.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/50 text-sm italic">
            "We continuously enhance our food quality and service based on guest feedback."
          </p>
        </div>
      </section>

      {/* LOCATION & RESERVATION SECTION */}
      <section className="bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          {/* MAP */}
          <div id="location" className="w-full lg:w-1/2 h-[500px] lg:h-auto min-h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8623696773204!2d77.61864197475176!3d13.044431987277637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1713e2bb4a81%3A0x8e83b4b0a4fd6301!2sMosaic%20-%20Global%20Cuisine%20Restaurant!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-[#C8A96A]/10 pointer-events-none"></div>

            <div className="absolute bottom-10 left-10 right-10 bg-white p-6 shadow-2xl rounded-sm">
              <h3 className="font-heading text-xl mb-4 font-bold">Visit Us</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <MapPin className="text-[#C8A96A] shrink-0 mt-1" size={18} />
                  <span>Plot 514, Hotel Country Inn, Outer Ring Road, <br />Opposite Lumbini Garden, Nagawara, <br />Hebbal, Karnataka 560045</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-[#C8A96A] shrink-0" size={18} />
                  <span>Open Daily: 7:30 AM onwards</span>
                </li>
              </ul>
              <a href="https://maps.app.goo.gl/gD98PZQc3qZ3A8Gv7" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex border border-[#111111] px-6 py-2.5 uppercase tracking-widest text-xs font-semibold hover:bg-[#111111] hover:text-white transition-colors w-full justify-center">
                Get Directions
              </a>
            </div>
          </div>

          {/* RESERVATION FORM */}
          <div id="reservations" className="w-full lg:w-1/2 bg-[#F8F8F8] p-10 lg:p-20 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A96A]/10 rounded-full blur-3xl"></div>
            <h2 className="text-4xl font-heading mb-4">Reserve Your Table Now</h2>
            <p className="text-gray-500 mb-8 max-w-md">Experience culinary excellence. Book your table ahead to ensure the perfect dining experience.</p>

            <form className="space-y-6 max-w-md relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-[#C8A96A] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-[#C8A96A] transition-colors" placeholder="+91 90350 71389" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Date & Time</label>
                  <input type="datetime-local" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-[#C8A96A] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Guests</label>
                  <select className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-[#C8A96A] transition-colors">
                    {[1, 2, 3, 4, 5, 6, 7, 8, "8+"].map(num => <option key={num}>{num} {num === 1 ? 'Person' : 'People'}</option>)}
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#111111] text-white py-4 uppercase tracking-widest text-sm font-semibold rounded-sm hover:bg-[#222] transition-colors shadow-xl mt-4">
                Confirm Reservation
              </button>
            </form>

            <div className="mt-10 pt-10 border-t border-gray-200 max-w-md">
              <p className="text-sm text-gray-500 mb-4 tracking-wider uppercase">Or connect with us directly:</p>
              <a href="tel:+919035071389" className="inline-flex items-center gap-3 text-xl font-heading font-semibold text-[#C8A96A] hover:text-[#b5985a] transition-colors">
                <Phone size={24} /> +91 90350 71389
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white/70 py-16 px-6 lg:px-12 border-t border-white/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading font-bold tracking-wider text-[#C8A96A] mb-2">MOSAIC</h3>
            <p className="mb-6 uppercase tracking-widest text-[10px] text-white/50">Global Cuisine Restaurant</p>
            <p className="leading-relaxed">A premium dining destination offering an exquisite blend of flavors from around the world.</p>
          </div>

          <div>
            <h4 className="font-heading text-white text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-[#C8A96A] transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-[#C8A96A] transition-colors">Our Menu</a></li>
              <li><a href="#experience" className="hover:text-[#C8A96A] transition-colors">Experience</a></li>
              <li><a href="#reviews" className="hover:text-[#C8A96A] transition-colors">Guest Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#C8A96A] shrink-0 w-4 h-4 mt-0.5" />
                <span className="leading-relaxed">Hotel Country Inn, <br />Opposite Lumbini Garden, <br />Hebbal, Bangalore</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#C8A96A] shrink-0 w-4 h-4" />
                <a href="tel:+919035071389" className="hover:text-white transition-colors">+91 90350 71389</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white text-lg mb-6">Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Breakfast</span>
                <span className="text-white">7:30 AM - 10:30 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Lunch</span>
                <span className="text-white">12:30 PM - 3:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Dinner</span>
                <span className="text-white">7:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="container mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Mosaic Restaurant, Hotel Country Inn. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
