import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/Layout'
import { categories } from '../data'

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="hero-inner">
          <div className="hero-copy">
            <img className="hero-logo" src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="Hannah DeSantis Creations" />
            <p className="eyebrow"><span /> Handmade & Personal</p>
            <h1>Made Personal.<br /><em>Made with Love.</em></h1>
            <p className="hero-lead">Thoughtfully crafted, beautifully personalized. Discover custom creations made just for you.</p>
            <div className="hero-actions"><Link className="button button-primary" to="/creations">Explore Creations</Link><Link className="button button-outline" to="/custom-orders">Request a Custom Order <ArrowRight size={17} /></Link></div>
          </div>
        </div>
      </section>
      <section className="category-section section-pad"><div className="section-heading centered"><p className="eyebrow">Find Your Inspiration</p><h2>Creations for Every Occasion</h2></div><div className="category-grid">{categories.map((category, index) => <Link className="category-card" key={category.title} to={`/creations?category=${encodeURIComponent(category.title.includes('Apparel') ? 'Apparel' : category.title.includes('Drinkware') ? 'Drinkware' : category.title.includes('Gifts') ? 'Gifts' : category.title.includes('Home') ? 'Home Decor' : category.title.includes('Events') ? 'Events' : 'All')}`}><img src={category.image} alt="" loading="lazy" /><span className="category-number">0{index + 1}</span><span className="category-overlay"><span><strong>{category.title}</strong><small>{category.description}</small></span><ArrowRight size={18} /></span></Link>)}</div></section>
    </PageShell>
  )
}
