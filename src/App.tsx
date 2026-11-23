import { useEffect, useState, type FormEvent } from 'react'
import { ArrowRight, Camera, Users, Mail, Menu, X, Search, Palette, Gift, Sparkles, ChevronLeft, ChevronRight, Upload, CheckCircle2 } from 'lucide-react'
import { categories, galleryItems, type GalleryItem } from './data'

const navLinks = [
  ['Creations', 'creations'], ['About', 'about'], ['Custom Orders', 'custom'], ['How It Works', 'process'],
]

function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className="brand" aria-label="Hannah DeSantis Creations home">
      <span className={`brand-mark ${footer ? 'brand-mark-footer' : ''}`}>H</span>
      <span className="brand-copy"><strong>HANNAH DESANTIS</strong><small>CREATIONS</small></span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter)

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const submitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      setFormStatus('error')
      return
    }
    setFormStatus('success')
  }

  const moveLightbox = (direction: number) => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + direction + filtered.length) % filtered.length)
  }

  const openCategory = (title: string) => {
    const match = ['Apparel', 'Drinkware', 'Gifts', 'Home Decor', 'Events'].find((name) => title.includes(name))
    setFilter(match || 'All')
    document.querySelector('#creations')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="top">
      <header className="site-header">
        <div className="nav-shell">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <a className="nav-cta" href="#custom">Inquire Now <ArrowRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>

      <main>
        <section className="hero">
          <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Handmade & Personal</p>
              <h1>Made Personal.<br /><em>Made with Love.</em></h1>
              <p className="hero-lead">Thoughtfully crafted, beautifully personalized. Discover custom creations made just for you.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#creations">Explore Creations</a>
                <a className="button button-outline" href="#custom">Request a Custom Order <ArrowRight size={17} /></a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo-wrap">
                <img src="/assets/hero-image.jpg" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=90' }} alt="Handcrafted personalized gifts arranged on a coastal-inspired table" fetchPriority="high" />
              </div>
              <div className="hero-note"><Sparkles size={18} /><span>Custom made<br /><strong>for your moment</strong></span></div>
              <div className="hero-seal">WITH<br /><strong>LOVE</strong></div>
            </div>
          </div>
        </section>

        <section className="category-section section-pad" aria-labelledby="category-title">
          <div className="section-heading centered"><p className="eyebrow">Find Your Inspiration</p><h2 id="category-title">Creations for Every Occasion</h2></div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <button className="category-card" key={category.title} onClick={() => openCategory(category.title)}>
                <img src={category.image} alt="" loading="lazy" />
                <span className="category-number">0{index + 1}</span>
                <span className="category-overlay"><span><strong>{category.title}</strong><small>{category.description}</small></span><ArrowRight size={18} /></span>
              </button>
            ))}
          </div>
        </section>

        <section className="gallery-section section-pad" id="creations" aria-labelledby="gallery-title">
          <div className="gallery-shell">
            <div className="section-heading gallery-heading"><div><p className="eyebrow">The Collection</p><h2 id="gallery-title">A Look at Our Creations</h2></div><a href="#custom" className="text-link">Create something for you <ArrowRight size={16} /></a></div>
            <div className="filters" role="group" aria-label="Filter creations">
              {['All', 'Apparel', 'Drinkware', 'Gifts', 'Home Decor', 'Events'].map((name) => <button key={name} className={filter === name ? 'active' : ''} onClick={() => setFilter(name)}>{name}</button>)}
            </div>
            {filtered.length ? <div className="gallery-grid">
              {filtered.map((item, index) => <button className="gallery-item" key={item.id} onClick={() => setLightboxIndex(index)} aria-label={`View ${item.title}`}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="gallery-hover"><span className="search-icon"><Search size={20} /></span><strong>{item.title}</strong><small>{item.description}</small></span>
              </button>)}
            </div> : <div className="empty-state">No creations match this category yet.</div>}
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="about-grid">
            <div className="about-image"><img src="/assets/hannah-headshot.jpg" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85' }} alt="Hannah DeSantis" loading="lazy" /><span>Hannah<br /><em>DeSantis</em></span></div>
            <div className="about-copy"><p className="eyebrow">Meet the Maker</p><h2>A Little About Me</h2><p className="about-lead">Creating something meaningful starts with listening to your story.</p><p>I’m passionate about transforming simple ideas into thoughtful, personalized pieces that feel special to give and joyful to receive. Every detail is considered, every name and message is handled with care, and every creation is made to celebrate the people and moments that matter.</p><p><em>Beautifully made, with intention and heart.</em></p><a className="button button-primary" href="#custom">Start a Custom Project</a></div>
          </div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="section-heading centered"><p className="eyebrow">Simple & Personal</p><h2>From Idea to Handmade</h2></div>
          <div className="process-grid">
            {[{ icon: Search, n: '01', title: 'Browse', text: 'Explore existing creations and find inspiration for your own piece.' }, { icon: Palette, n: '02', title: 'Personalize', text: 'Share your ideas, colors, and details through a custom request.' }, { icon: Gift, n: '03', title: 'Create', text: 'Your design is thoughtfully handcrafted and brought to life.' }].map(({ icon: Icon, n, title, text }) => <article className="process-card" key={title}><span className="process-number">{n}</span><div className="process-icon"><Icon size={28} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="custom-section section-pad" id="custom">
          <div className="custom-shell">
            <div className="custom-intro"><p className="eyebrow">Let’s Make It Yours</p><h2>Have Something<br /><em>Special in Mind?</em></h2><p>Tell us about your idea. The more details you share, the better we can create something uniquely yours.</p><a href="mailto:hdesantis18@gmail.com" className="email-link"><Mail size={18} /> hdesantis18@gmail.com</a></div>
            <form className="order-form" onSubmit={submitOrder} noValidate>
              <div className="form-grid">
                <label>Customer name *<input name="name" type="text" placeholder="Your name" required /></label>
                <label>Email address *<input name="email" type="email" placeholder="you@example.com" required /></label>
                <label>Phone number<input name="phone" type="tel" placeholder="(555) 555-5555" /></label>
                <label>Product category *<select name="category" required defaultValue=""><option value="" disabled>Select a category</option><option>Apparel</option><option>Drinkware</option><option>Personalized Gift</option><option>Home Decor</option><option>Event or Wedding</option><option>Custom Creation</option></select></label>
                <label className="full">Describe what you have in mind *<textarea name="description" rows={4} placeholder="Share names, text, themes, style preferences, or anything else you'd like to include..." required /></label>
                <label>Preferred colors<input name="colors" type="text" placeholder="e.g. navy, sage, rose" /></label>
                <label>Quantity<input name="quantity" type="number" min="1" placeholder="1" /></label>
                <label>Desired completion date<input name="date" type="date" /></label>
                <label>Budget range<select name="budget" defaultValue=""><option value="">Select range (optional)</option><option>Under $50</option><option>$50–$100</option><option>$100–$250</option><option>$250+</option></select></label>
                <label className="upload full"><span>Upload inspiration images</span><span className="upload-box"><Upload size={20} /><b>Choose reference photos</b><small>PNG or JPG, up to 10MB each</small><input name="images" type="file" accept="image/png,image/jpeg" multiple /></span></label>
              </div>
              {formStatus === 'error' && <p className="form-message error">Please complete the required fields before submitting.</p>}
              {formStatus === 'success' && <p className="form-message success"><CheckCircle2 size={18} /> Your request is ready. Please email the details to Hannah to complete your inquiry.</p>}
              <button className="button button-primary submit-button" type="submit">Submit Custom Request <ArrowRight size={17} /></button>
              <p className="form-disclaimer">This form currently prepares your inquiry locally. You can also email hdesantis18@gmail.com directly.</p>
            </form>
          </div>
        </section>

        <section className="testimonials-section section-pad" aria-labelledby="testimonial-title">
          <div className="section-heading centered"><p className="eyebrow">Kind Words</p><h2 id="testimonial-title">Loved by Customers</h2></div>
          <div className="testimonial-grid">
            {[['“Hannah turned an idea into something even more beautiful than I imagined.”', '— Example Review 1'], ['“The attention to detail and personal touch made the gift unforgettable.”', '— Example Review 2'], ['“Beautiful quality, thoughtful communication, and a lovely experience.”', '— Example Review 3']].map(([quote, author]) => <blockquote key={author}><div className="stars">★★★★★</div><p>{quote}</p><footer>{author} <small>Placeholder testimonial</small></footer></blockquote>)}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid"><div><BrandMark footer /><p className="footer-desc">Thoughtfully made custom creations for gifts, celebrations, and everyday moments.</p></div><div><h3>Explore</h3>{navLinks.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div><h3>Contact</h3><a href="mailto:hdesantis18@gmail.com">hdesantis18@gmail.com</a><div className="socials"><a href="#" aria-label="Instagram"><Camera /></a><a href="#" aria-label="Facebook"><Users /></a></div></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Hannah DeSantis Creations</span><span>Made personal. Made with love.</span></div>
      </footer>

      {lightboxIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Product image preview" onClick={() => setLightboxIndex(null)}><button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close"><X /></button><button className="lightbox-arrow left" onClick={(e) => { e.stopPropagation(); moveLightbox(-1) }} aria-label="Previous image"><ChevronLeft /></button><figure onClick={(e) => e.stopPropagation()}><img src={filtered[lightboxIndex].image} alt={filtered[lightboxIndex].title} /><figcaption><strong>{filtered[lightboxIndex].title}</strong><span>{filtered[lightboxIndex].description}</span></figcaption></figure><button className="lightbox-arrow right" onClick={(e) => { e.stopPropagation(); moveLightbox(1) }} aria-label="Next image"><ChevronRight /></button></div>}
    </div>
  )
}

export default App
