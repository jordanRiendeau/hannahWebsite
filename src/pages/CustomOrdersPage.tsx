import { useState, type FormEvent } from 'react'
import { ArrowRight, Mail, Upload, CheckCircle2, Loader2 } from 'lucide-react'
import { PageShell } from '../components/Layout'

const WEB3FORMS_KEY = 'ba36bb8a-41d1-4eca-b0d3-beba8ba9dddc'

export default function CustomOrdersPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle')

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      setStatus('error')
      return
    }
    setStatus('loading')
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)
    data.append('subject', "New Custom Order Request - Hannah's Cricut Creations")
    data.delete('images')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      setStatus(json.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageShell>
      <section className="inner-page-heading">
        <p className="eyebrow">Let's Make It Yours</p>
        <h1>Custom Orders</h1>
      </section>
      <section className="custom-section custom-page section-pad">
        <div className="custom-shell">
          <div className="custom-intro">
            <p className="eyebrow">A Personal Creation</p>
            <h2>Have Something<br /><em>Special in Mind?</em></h2>
            <p>Tell us about your idea. The more details you share, the better we can create something uniquely yours.</p>
            <a href="mailto:hdesantis18@gmail.com" className="email-link"><Mail size={18} /> hdesantis18@gmail.com</a>
          </div>
          <form className="order-form" onSubmit={submit} noValidate>
            <div className="form-grid">
              <label>Customer name *<input name="name" type="text" placeholder="Your name" required /></label>
              <label>Email address *<input name="email" type="email" placeholder="you@example.com" required /></label>
              <label>Phone number<input name="phone" type="tel" placeholder="(555) 555-5555" /></label>
              <label>Product category *
                <select name="category" required defaultValue="">
                  <option value="" disabled>Select a category</option>
                  <option>Apparel</option>
                  <option>Drinkware</option>
                  <option>Personalized Gift</option>
                  <option>Home Decor</option>
                  <option>Event or Wedding</option>
                  <option>Custom Creation</option>
                </select>
              </label>
              <label className="full">Describe what you have in mind *
                <textarea name="description" rows={4} placeholder="Share names, text, themes, style preferences, or anything else you'd like to include..." required />
              </label>
              <label>Preferred colors<input name="colors" type="text" placeholder="e.g. navy, sage, rose" /></label>
              <label>Quantity<input name="quantity" type="number" min="1" placeholder="1" /></label>
              <label>Desired completion date<input name="date" type="date" /></label>
              <label>Budget range
                <select name="budget" defaultValue="">
                  <option value="">Select range (optional)</option>
                  <option>Under $50</option>
                  <option>$50-$100</option>
                  <option>$100-$250</option>
                  <option>$250+</option>
                </select>
              </label>
              <label className="upload full">
                <span>Upload inspiration images</span>
                <span className="upload-box">
                  <Upload size={20} />
                  <b>Choose reference photos</b>
                  <small>PNG or JPG — email to hdesantis18@gmail.com after submitting</small>
                  <input name="images" type="file" accept="image/png,image/jpeg" multiple />
                </span>
              </label>
            </div>
            {status === 'error' && (
              <p className="form-message error">Something went wrong. Please check the required fields or email hdesantis18@gmail.com directly.</p>
            )}
            {status === 'success' && (
              <p className="form-message success">
                <CheckCircle2 size={18} /> Order request sent! Hannah will be in touch soon. If you have inspiration photos, email them to hdesantis18@gmail.com.
              </p>
            )}
            <button className="button button-primary submit-button" type="submit" disabled={status === 'loading' || status === 'success'}>
              {status === 'loading' ? <><Loader2 size={17} className="spin" /> Sending...</> : <>Submit Custom Request <ArrowRight size={17} /></>}
            </button>
            <p className="form-disclaimer">You can also email hdesantis18@gmail.com directly.</p>
          </form>
        </div>
      </section>
    </PageShell>
  )
}
