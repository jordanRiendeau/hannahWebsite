import { useEffect, useState } from 'react'
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { PageShell } from '../components/Layout'
import { galleryItems } from '../data'

export default function CreationsPage() {
  const initial = new URLSearchParams(window.location.search).get('category') || 'All'
  const [filter, setFilter] = useState(initial)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter)
  useEffect(() => { document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [lightboxIndex])
  const move = (direction: number) => { if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + direction + filtered.length) % filtered.length) }
  return <PageShell><section className="inner-page-heading"><p className="eyebrow">The Collection</p><h1>Our Creations</h1><p>A glimpse at thoughtfully made, one-of-a-kind pieces.</p></section><section className="gallery-section section-pad"><div className="gallery-shell"><div className="filters">{['All','Apparel','Drinkware','Gifts','Home Decor','Events'].map((name) => <button key={name} className={filter === name ? 'active' : ''} onClick={() => setFilter(name)}>{name}</button>)}</div>{filtered.length ? <div className="gallery-grid">{filtered.map((item,index) => <button className="gallery-item" key={item.id} onClick={() => setLightboxIndex(index)} aria-label={`View ${item.title}`}><img src={item.image} alt={item.title} loading="lazy" /><span className="gallery-hover"><span className="search-icon"><Search size={20} /></span><strong>{item.title}</strong><small>{item.description}</small></span></button>)}</div> : <div className="empty-state">No creations match this category yet.</div>}</div></section>{lightboxIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightboxIndex(null)}><button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close"><X /></button><button className="lightbox-arrow left" onClick={(e) => {e.stopPropagation();move(-1)}} aria-label="Previous"><ChevronLeft /></button><figure onClick={(e)=>e.stopPropagation()}><img src={filtered[lightboxIndex].image} alt={filtered[lightboxIndex].title}/><figcaption><strong>{filtered[lightboxIndex].title}</strong><span>{filtered[lightboxIndex].description}</span></figcaption></figure><button className="lightbox-arrow right" onClick={(e)=>{e.stopPropagation();move(1)}} aria-label="Next"><ChevronRight /></button></div>}</PageShell>
}
