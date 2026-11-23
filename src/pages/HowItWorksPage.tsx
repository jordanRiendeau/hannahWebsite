import { ArrowRight, Search, Palette, Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/Layout'

export default function HowItWorksPage() {
  const steps = [{icon:Search,n:'01',title:'Browse',text:'Explore existing creations and find inspiration for your own piece.'},{icon:Palette,n:'02',title:'Personalize',text:'Share your ideas, colors, and details through a custom request.'},{icon:Gift,n:'03',title:'Create',text:'Your design is thoughtfully handcrafted and brought to life.'}]
  return <PageShell><section className="inner-page-heading"><p className="eyebrow">Simple & Personal</p><h1>From Idea to Handmade</h1></section><section className="process-section section-pad"><div className="process-grid">{steps.map(({icon:Icon,n,title,text}) => <article className="process-card" key={title}><span className="process-number">{n}</span><div className="process-icon"><Icon size={28} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="process-action"><Link className="button button-primary" to="/custom-orders">Begin Your Request <ArrowRight size={17} /></Link></div></section></PageShell>
}
