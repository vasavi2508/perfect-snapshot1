import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Aperture, ArrowRight, ArrowDown, ArrowUp, Instagram, Facebook, Menu, Heart, UserRound, PartyPopper, Shirt, Package, Mountain, Check, Star, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages } from "@/lib/packages";
import hero from "@/assets/hero.jpg.asset.json";
import wedding from "@/assets/wedding.jpg.asset.json";
import portrait from "@/assets/portrait.jpg.asset.json";
import nature from "@/assets/nature.jpg.asset.json";
import fashion from "@/assets/fashion.jpg.asset.json";
import travel from "@/assets/travel.jpg.asset.json";
import event from "@/assets/event.jpg.asset.json";
import couple from "@/assets/couple.jpg.asset.json";
import coast from "@/assets/coast.jpg.asset.json";
import alex from "@/assets/alex.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Capture Moments — Wedding & Portrait Photography by Alex Morgan" },
    { name: "description", content: "Discover Alex Morgan’s wedding, portrait, travel and event photography. Explore the portfolio and photography packages in Vijayawada, India." },
    { property: "og:title", content: "Capture Moments — Photography by Alex Morgan" },
    { property: "og:description", content: "Capturing moments, creating memories. Explore Alex Morgan’s portfolio and book a photography session in Vijayawada." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
const nav = ["Home", "About", "Gallery", "Services", "Packages", "Contact"];
const photos = [
  { image: wedding, category: "Wedding", title: "A love like no other", alt: "Newlyweds sharing a tender moment on their wedding day" },
  { image: portrait, category: "Portrait", title: "Simply, you", alt: "Natural light portrait of a woman" },
  { image: nature, category: "Nature", title: "Where the world slows", alt: "Alpine lake reflecting mountains and a picturesque cabin" },
  { image: fashion, category: "Fashion", title: "Everyday elegance", alt: "Fashion portrait with colorful shopping bags" },
  { image: travel, category: "Travel", title: "The road less traveled", alt: "Sunlit mountain landscape with a winding valley" },
  { image: couple, category: "Wedding", title: "Together is a place", alt: "Couple embracing in a green outdoor setting" },
  { image: event, category: "Event", title: "A night to remember", alt: "Elegant celebration tables set with flowers and candles" },
  { image: coast, category: "Travel", title: "Postcards from afar", alt: "Lakeside village with mountains across the water" },
];
const services = [
  { name: "Wedding Photography", icon: Heart, description: "Capturing beautiful wedding memories.", detail: "From the quiet anticipation to the last dance, every chapter of your celebration deserves to be remembered." },
  { name: "Portrait Photography", icon: UserRound, description: "Professional individual and family portraits.", detail: "Relaxed, natural-light sessions for individuals, couples, and families, with thoughtful direction throughout." },
  { name: "Event Photography", icon: PartyPopper, description: "Capturing special events and celebrations.", detail: "Candid moments and the little details of birthdays, gatherings, and corporate celebrations." },
  { name: "Fashion Photography", icon: Shirt, description: "Creative fashion and model photography.", detail: "Editorial-inspired images for model portfolios and fashion collections, tailored to your creative vision." },
  { name: "Product Photography", icon: Package, description: "High-quality product images for businesses.", detail: "Considered lighting, clean compositions, and lifestyle imagery that bring your products into focus." },
  { name: "Nature Photography", icon: Mountain, description: "Capturing the beauty of nature.", detail: "Atmospheric landscapes and the intricate details of the natural world, photographed with patience and care." },
];
function Brand() { return <a href="#home" className="brand" aria-label="Capture Moments home"><Aperture aria-hidden="true"/><div className="brand-name">CAPTURE MOMENTS<span>PHOTOGRAPHY BY ALEX MORGAN</span></div></a>; }
function Social({ named = false }: { named?: boolean }) { return <><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/>{named && "Instagram"}</a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/>{named && "Facebook"}</a></>; }
function Index() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [formStatus, setFormStatus] = useState("");
  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Name: ${String(data.get("name"))}\nEmail: ${String(data.get("email"))}\nPhone: ${String(data.get("phone"))}\nService: ${String(data.get("service"))}\nPackage: ${selectedPackage || "Not selected"}\n\n${String(data.get("message"))}`;
    window.location.href = `mailto:alexmorgan@example.com?subject=${encodeURIComponent("Photography enquiry — Capture Moments")}&body=${encodeURIComponent(body)}`;
    setFormStatus("Your email draft is ready. Send it from your email app to complete your enquiry.");
  }
  return <>
    <section className="hero" id="home">
      <img className="hero-photo" src={hero.url} alt="Bride and groom celebrating their wedding in a sunlit garden" fetchPriority="high"/>
      <header className="site-header container">
        <Brand/>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <a className={item === "Home" ? "current" : ""} href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}<Button asChild variant="photographyOutline" className="header-book"><a href="#contact">Let’s Talk <ArrowRight/></a></Button></nav>
        <details className="mobile-nav"><summary aria-label="Open navigation"><Menu/></summary><nav aria-label="Mobile navigation">{nav.map(item => <a href={`#${item.toLowerCase()}`} key={item} onClick={e => e.currentTarget.closest("details")?.removeAttribute("open")}>{item}</a>)}</nav></details>
      </header>
      <div className="hero-content container">
        <p className="eyebrow">Authentic stories. Timeless photographs.</p>
        <h1>Capturing Moments,<br/>Creating <em>Memories</em></h1>
        <p className="hero-subtitle">Professional Photography for Every Special Moment.</p>
        <div className="hero-actions"><Button asChild variant="photography"><a href="#gallery">Explore My Work <ArrowRight/></a></Button><Button asChild variant="photographyOutline"><a href="#contact">Book a Session</a></Button></div>
      </div>
      <div className="hero-bottom container"><a href="#about" className="scroll-link"><ArrowDown/> SCROLL TO DISCOVER</a><span>BASED IN VIJAYAWADA · AVAILABLE FOR YOUR STORY</span><div className="hero-social"><Social/></div></div>
    </section>
    <main>
      <section className="section" id="about"><div className="container about-grid">
        <div className="about-photo"><img src={alex.url} alt="Alex Morgan, photographer" loading="lazy"/><div className="photo-note"><strong>Alex Morgan</strong><span>Photographer & storyteller</span></div></div>
        <div className="about-copy"><p className="eyebrow">The person behind the pictures</p><h2 className="section-heading">Behind the <em>Lens</em></h2><p>Hello! I'm Alex Morgan, a passionate professional photographer who loves capturing beautiful moments and turning them into timeless memories. With creativity and attention to detail, I specialize in capturing emotions, stories, and unforgettable experiences.</p><p>I believe the most beautiful photographs are the ones that feel like you. Honest, unhurried, and full of life.</p><div className="signature">Alex Morgan</div><div className="stats"><div><strong>5+</strong><span>Years of Experience</span></div><div><strong>200+</strong><span>Happy Clients</span></div><div><strong>500+</strong><span>Photoshoots</span></div></div></div>
      </div></section>
      <section className="section section-soft gallery-section" id="gallery"><div className="container">
        <div className="gallery-head"><div><p className="eyebrow">A collection of little infinities</p><h2 className="section-heading">Stories in <em>Frames</em></h2><p className="section-intro">Different people. Different places. The same love for a beautiful story.</p></div><span className="gallery-count">SELECTED WORK · 2021—2026</span></div>
        <div className="gallery-filters" role="group" aria-label="Filter photography">{["All", "Wedding", "Portrait", "Nature", "Fashion", "Travel", "Event"].map(category => <label key={category}><input type="radio" name="gallery-category" value={category} defaultChecked={category === "All"}/>{category === "All" ? "All Work" : category}</label>)}</div>
        <div className="gallery-grid">{photos.map(photo => <figure className="gallery-item" data-category={photo.category} key={photo.title}><a href={photo.image.url} target="_blank" rel="noreferrer" aria-label={`View ${photo.title}`}><img src={photo.image.url} alt={photo.alt} loading="lazy"/><figcaption><span>{photo.category} Photography</span><strong>{photo.title}</strong></figcaption></a></figure>)}</div>
        <div className="gallery-foot"><Button asChild variant="photographyOutline"><a href="#contact">Let’s Create Your Story <ArrowRight/></a></Button></div>
      </div></section>
      <section className="section" id="services"><div className="container"><div className="center-heading"><p className="eyebrow">Thoughtfully captured, beautifully kept</p><h2 className="section-heading">A Moment for <em>Every Story</em></h2><p className="section-intro">From life’s biggest celebrations to its quietest joys, I’m here to capture it all.</p></div><div className="service-grid">{services.map(service => <article className="service-card" key={service.name}><service.icon className="service-icon"/><h3>{service.name}</h3><p>{service.description}</p><details><summary>Learn More <ArrowRight/></summary><p>{service.detail}</p><a href="#contact" onClick={() => setSelectedService(service.name)}>Enquire about this session</a></details></article>)}</div></div></section>
      <section className="section section-soft" id="packages"><div className="container"><div className="center-heading"><p className="eyebrow">An investment in your memories</p><h2 className="section-heading">Simple Packages. <em>Lasting Memories.</em></h2><p className="section-intro">Beautiful photography, thoughtful editing, and a little piece of time to keep forever.</p></div><div className="package-grid">{packages.map((pkg, index) => <article key={pkg.name} className={`package-card${pkg.popular ? " popular" : ""}`}>{pkg.popular && <span className="popular-label">MOST POPULAR</span>}<h3>{pkg.name} Package</h3><p className="package-caption">{["For the little moments that matter", "A little more time for your story", "For moments that deserve it all"][index]}</p><div className="package-price">₹{pkg.price.toLocaleString("en-IN")} <span>/ session</span></div><ul>{pkg.features.map(feature => <li key={feature}><Check/>{feature}</li>)}</ul><Button asChild variant={pkg.popular ? "photography" : "photographyOutline"}><a href="#contact" onClick={() => { setSelectedPackage(pkg.name); setFormStatus(""); }}>Book Now <ArrowRight/></a></Button></article>)}</div><p className="package-note">Have something a little different in mind? <a href="#contact">Let’s talk about a custom session.</a></p></div></section>
      <section className="section" id="testimonials"><div className="container"><div className="center-heading"><p className="eyebrow">Kind words, beautiful connections</p><h2 className="section-heading">Memories They <em>Love</em></h2></div><div className="testimonial-grid">{[
        { name: "Priya & Rahul", kind: "Wedding Photography", photo: couple, quote: "Alex captured not just our wedding, but everything we felt that day. Looking at our photos takes us right back. We couldn’t be happier!" },
        { name: "Sneha Reddy", kind: "Portrait Photography", photo: portrait, quote: "I was nervous in front of the camera, but Alex made the whole experience so easy. The portraits are natural, beautiful, and completely me." },
        { name: "Arjun Sharma", kind: "Event Photography", photo: alex, quote: "Every little detail, every genuine smile — nothing was missed. Professional, creative, and a pleasure to work with from start to finish." },
      ].map(client => <figure className="testimonial" key={client.name}><div className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i}/>)}</div><blockquote>“{client.quote}”</blockquote><figcaption className="client"><img src={client.photo.url} alt={client.name} loading="lazy"/><div><strong>{client.name}</strong><span>{client.kind}</span></div></figcaption></figure>)}</div></div></section>
      <section className="section section-soft" id="contact"><div className="container contact-grid"><div><p className="eyebrow">Your story starts here</p><h2 className="section-heading">Let’s Capture<br/>Your <em>Moments</em></h2><p className="section-intro">A celebration, a new chapter, or simply a moment worth keeping. I’d love to hear what you have in mind.</p><div className="contact-details"><div className="contact-detail"><Mail/><div><span>EMAIL ME</span><a href="mailto:alexmorgan@example.com">alexmorgan@example.com</a></div></div><div className="contact-detail"><Phone/><div><span>GIVE ME A CALL</span><a href="tel:+919876543210">+91 98765 43210</a></div></div><div className="contact-detail"><MapPin/><div><span>BASED IN</span><p>Vijayawada, Andhra Pradesh, India.</p></div></div></div><div className="contact-social"><Social named/></div></div>
      <form className="contact-form" action="mailto:alexmorgan@example.com" method="post" encType="text/plain" onSubmit={sendMessage}>
        <label>Your Name<input name="name" placeholder="Your full name" required autoComplete="name"/></label><label>Email Address<input name="email" type="email" placeholder="you@example.com" required autoComplete="email"/></label><label>Phone Number<input name="phone" type="tel" placeholder="Your phone number" autoComplete="tel"/></label><label>Photography Service<select name="service" required value={selectedService} onChange={e => setSelectedService(e.target.value)}><option value="" disabled>Select a service</option>{services.map(service => <option key={service.name}>{service.name}</option>)}</select></label>
        {selectedPackage && <label className="full">Selected Package<input name="package" value={`${selectedPackage} Package`} readOnly/></label>}
        <label className="full">Your Message<textarea name="message" placeholder="Tell me a little about your moment…" required/></label><Button type="submit" variant="photographyDark" className="full">Send Message <ArrowRight/></Button><p className="form-status" role="status">{formStatus}</p>
      </form></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-top"><div><Brand/><p className="footer-description">Honest moments. Beautiful stories.<br/>Timeless photographs, made with heart.</p></div><nav className="footer-nav" aria-label="Footer navigation">{nav.map(item => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</nav><div className="hero-social"><Social/></div></div><div className="footer-bottom"><p>© 2026 Capture Moments. All Rights Reserved.</p><a href="#home">Back to top <ArrowUp/></a></div></div></footer>
  </>;
}
