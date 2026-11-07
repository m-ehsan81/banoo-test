import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import './style.css';

const A = '/assets/';

function Splash() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem('banooIntroSeen'));
  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('banooIntroSeen', '1');
    }, 1900);
    return () => window.clearTimeout(timer);
  }, [visible]);
  return visible ? <div className="splash"><img src={`${A}Logo.jpeg`} alt="لوگوی بانو پرفیوم" /></div> : null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  return <><div className="topline"/><header className="site-header"><div className="container header-inner">
    <Link className="brand" to="/"><img src={`${A}Logo.jpeg`} alt="لوگوی بانو پرفیوم"/><span>BANOO PERFUME</span></Link>
    <button className="menu-toggle" aria-label="باز کردن منو" onClick={() => setOpen(v => !v)}>{open ? '×' : '☰'}</button>
    <nav className={`nav ${open ? 'open' : ''}`} aria-label="منوی اصلی">
      <NavLink to="/" end>خانه</NavLink>
      <div className="nav-group"><NavLink className="nav-label" to="/products">محصولات</NavLink><div className="submenu">
        <Link to="/products#collection">کالکشن عطر بانو</Link><Link to="/products#laboratory">لابراتوار عطر بانو</Link><Link to="/products#custom">شخصی‌سازی</Link><Link to="/products#corporate">فروش سازمانی عطر بانو</Link>
      </div></div>
      <NavLink to="/about">درباره بانو</NavLink>
    </nav>
    <a className="header-cta" href="#contact" onClick={() => setOpen(false)}>ارتباط با ما</a>
  </div></header></>;
}

function InstagramIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>}
function WhatsappIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20l1-4.7A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8.5 8.2c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.9 1.2 1.5 2.1 2 .2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5 0 .4-.2 1.1-.7 1.5-.5.4-1.1.6-1.8.5-1-.1-2.3-.7-3.6-1.8-1.1-.9-2-2.1-2.3-3.1-.3-1 .1-1.9.6-2.3Z"/></svg>}

function ContactFooter(){return <><section className="contact-strip" id="contact"><div className="container">
  <div className="section-head"><p className="eyebrow">WE ARE HERE FOR YOU</p><h2>با بانو در ارتباط باشید</h2><p>برای دریافت راهنمایی و تجربه‌ای دلنشین، همراه شما هستیم.</p></div>
  <div className="contact-grid">
    <div className="contact-item"><h3>نشانی</h3><p>تهران، خیابان فرشته، خیابان فیاضی، پلاک ۲۴، واحد ۳<br/><small>آدرس نمونه و موقت</small></p></div>
    <div className="contact-item"><h3>تماس با ما</h3><p><a href="tel:02122019977">021-22019977</a><br/><a href="tel:09028888982">09028888982</a></p></div>
    <div className="contact-item"><h3>ساعات کاری</h3><p>شنبه تا پنجشنبه<br/>۱۰:۰۰ تا ۲۰:۰۰</p></div>
  </div></div></section>
  <footer className="site-footer"><div className="container"><div className="footer-grid">
    <div><div className="footer-brand"><img src={`${A}Logo.jpeg`} alt="Banoo"/><strong>BANOO PERFUME</strong></div><p>روایح دست‌ساز، اصیل و خاطره‌انگیز؛ امضایی نامرئی از هویت و ظرافت شما.</p></div>
    <div className="footer-links"><h3>دسترسی سریع</h3><Link to="/">خانه</Link><Link to="/products">محصولات</Link><Link to="/about">درباره بانو</Link></div>
    <div><h3>همراه بانو باشید</h3><div className="socials"><a href="https://instagram.com/banooperfume" target="_blank" rel="noreferrer"><InstagramIcon/>اینستاگرام</a><a href="https://wa.me/989028888982" target="_blank" rel="noreferrer"><WhatsappIcon/>پشتیبانی واتساپ</a></div><p>تلفن: 021-22019977</p><p>موبایل: 09028888982</p></div>
  </div><div className="footer-bottom"><span>© Banoo Perfume — تمامی حقوق محفوظ است.</span><span>THE ART OF TIMELESS ELEGANCE</span></div></div></footer></>}

function SectionHead({eyebrow, title, children}){return <div className="section-head"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p>{children}</p>}</div>}
function Home(){return <main>
  <section className="hero"><div className="hero-content"><p className="eyebrow">BANOO PERFUME · THE ART OF TIMELESS ELEGANCE</p><h1>رایحه‌ای از اصالت،<br/>امضایی برای همیشه</h1><p>هر عطر، روایتی از فرهنگ، طبیعت و خاطرات ناب ایرانی است؛ تجربه‌ای فراتر از یک رایحه.</p><Link className="gold-link" to="/products">کشف دنیای بانو <span>←</span></Link></div></section>
  <section className="section"><div className="container story-block"><p className="eyebrow">THE STORY OF BANOO</p><h2>زیبایی در جزئیات است؛<br/>ماندگاری در خاطره</h2><div className="rule"/><p>بانو پرفیوم، پیوندی میان هنر عطرسازی و ظرافت فرهنگ ایرانی است. ما رایحه‌ها را همچون روایت‌هایی شخصی می‌سازیم؛ برای لحظه‌هایی که قرار است در خاطر بمانند.</p><p>از الهام باغ‌های ایرانی تا هنر دست و انتخاب دقیق مواد اولیه، هر جزئیات با عشق و وسواس شکل می‌گیرد. برای ما عطر تنها همراه یک روز نیست؛ نشانی است که در ذهن می‌ماند، حتی پس از آن‌که لحظه به پایان رسیده باشد.</p><Link className="gold-link" to="/about">بیشتر درباره بانو <span>←</span></Link></div></section>
  <section className="image-section"><div className="container"><img className="editorial-image" src={`${A}3.jpeg`} alt="بانوی ایرانی در باغی با الهام از هنر و معماری ایرانی"/><div className="image-caption"><p className="eyebrow">INSPIRED BY PERSIAN HERITAGE</p><h3>الهام‌گرفته از شکوه هنر ایرانی</h3><p>رنگ‌ها، نقش‌ها و عطر گل‌های باغ ایرانی، بخشی از جهان الهام‌بخش بانو هستند؛ جهانی که اصالت را در کنار زیبایی می‌نشاند.</p></div></div></section>
  <section className="section values"><div className="container"><SectionHead eyebrow="THE BANOO SIGNATURE" title="امضای بانو">سه اصل که در قلب هر رایحه و هر تجربه از بانو جاری است.</SectionHead><div className="value-grid"><div className="value"><span className="number">01</span><h3>هنر دست و اصالت</h3><p>ساخته‌شده با دقت، عشق و الهام از ریشه‌های فرهنگی ایران.</p></div><div className="value"><span className="number">02</span><h3>کیفیت ماندگار</h3><p>انتخاب وسواس‌گونه متریال برای تجربه‌ای عمیق و ماندگار.</p></div><div className="value"><span className="number">03</span><h3>هویت منحصربه‌فرد</h3><p>رایحه‌ای که با شخصیت شما همراه می‌شود و از شما می‌گوید.</p></div></div></div></section>
  <section className="image-section soft"><div className="container"><img className="editorial-image tall" src={`${A}4.jpeg`} alt="پوشش اصیل ایرانی در فضای معماری سنتی"/><div className="image-caption"><p className="eyebrow">ELEGANCE IN EVERY DETAIL</p><h3>ظرافتی که از گذشته می‌آید</h3><p>بانو با نگاهی به میراث تصویری و فرهنگی ایران، تجربه‌ای معاصر از زیبایی و وقار می‌آفریند. هر انتخاب، از طراحی تا رایحه، بخشی از یک داستان واحد است.</p></div></div></section>
  <section className="section"><div className="container story-block"><p className="eyebrow">A FRAGRANCE WITH A STORY</p><h2>عطر، زبان بی‌کلام خاطره‌هاست</h2><p>گاهی یک رایحه می‌تواند ما را به باغی دور، آغوشی آشنا یا لحظه‌ای فراموش‌نشدنی بازگرداند. ما در بانو به همین قدرت شگفت‌انگیز باور داریم؛ به اینکه هر فرد می‌تواند امضای بویایی خودش را داشته باشد.</p><p>به همین دلیل، مسیر ما تنها ارائه عطر نیست؛ دعوتی است به کشف، انتخاب و ساختن تجربه‌ای که به شما تعلق دارد.</p><div className="rule"/><Link className="gold-link" to="/products">مسیر خود را در دنیای بانو پیدا کنید <span>←</span></Link></div></section>
  <section className="quote-band"><strong>A Fragrance That Transcends Time.</strong><p>رایحه‌ای فراتر از زمان</p></section>
</main>}

function About(){return <main><section className="page-hero"><div className="container"><p className="eyebrow">OUR STORY & HERITAGE</p><h1>درباره بانو پرفیوم</h1><p>روایح دست‌ساز، اصیل و خاطره‌انگیز</p></div></section>
  <section className="section"><div className="container"><div className="about-layout"><div className="about-text"><p className="eyebrow">THE ART OF PERFUMERY</p><h2>هر شیشه عطر، روایتی از شماست</h2><p>«بانو پرفیوم» حاصل تلفیق هنر اصیل عطرسازی و داستان‌سرایی است؛ جایی که هر شیشه عطر، روایتی از دل فرهنگ، طبیعت و خاطرات ناب ایرانی را با خود به همراه دارد. ما در بانو پرفیوم بر این باوریم که عطر فقط یک رایحه نیست، بلکه لایه‌ای نامرئی از هویت، احساس و شخصیت شماست.</p><div className="statement"><strong>THE ART OF TIMELESS ELEGANCE</strong>هنر ظرافت جاودانه</div></div><img className="logo-art" src={`${A}1.jpeg`} alt="نقش‌مایه‌های کاشی ایرانی و نشان بانو"/></div>
  <div className="section-head" style={{marginTop:100}}><p className="eyebrow">WHY HANDCRAFTED</p><h2>چرا عطر دست‌سازِ بانو پرفیوم؟</h2></div>
  <div className="about-layout"><div className="about-text"><h2>هنر دست و اصالت</h2><p>تمامی عطرها با دقت و عشق به صورت دست‌ساز و با استفاده از مرغوب‌ترین اسانس‌ها و متریال‌ها فرموله می‌شوند.</p><div className="rule"/><h2>کیفیت ماندگار</h2><p>تلاش ما ارائه عطرهایی با بالاترین کیفیت، پخش بو و ماندگاری است تا هر بار بوییدن آن‌ها، خاطره‌ای دلنشین را در ذهن شما و اطرافیانتان زنده کند.</p><p>بانو پرفیوم، دعوت‌نامه‌ای است برای تجربه‌ی اصالت در قالب ناب‌ترین روایح.</p></div><div className="about-portrait"><img src={`${A}5.jpeg`} alt="بانوی بانو پرفیوم در پوشش کرم‌رنگ"/></div></div>
  </div></section><section className="quote-band"><strong>A PRESENCE THAT SPEAKS WITHOUT WORDS.</strong><p>حضوری که بی‌نیاز از کلام، سخن می‌گوید.</p><br/><strong>A LEGACY OF ELEGANCE</strong><p>میراثی از ظرافت و اصالت</p></section></main>}

const productItems=[
  {id:'collection',n:'01 / COLLECTION',title:'کالکشن عطر بانو',desc:'مجموعه‌ای از رایحه‌های منتخب با الهام از احساس، طبیعت و خاطرات.',cta:'برای آشنایی بیشتر'},
  {id:'laboratory',n:'02 / LABORATORY',title:'لابراتوار عطر بانو',desc:'نگاهی نزدیک به هنر فرمولاسیون و خلق ترکیب‌های منحصربه‌فرد.',cta:'دریافت اطلاعات'},
  {id:'custom',n:'03 / PERSONALIZATION',title:'شخصی‌سازی',desc:'ساخت امضای بویایی متناسب با سلیقه و شخصیت شما.',cta:'درخواست مشاوره'},
  {id:'corporate',n:'04 / CORPORATE',title:'فروش سازمانی عطر بانو',desc:'راهکارهای اختصاصی عطر و هدیه برای مجموعه‌ها و سازمان‌ها.',cta:'همکاری با بانو'}
];
function Products(){return <main><section className="page-hero"><div className="container"><p className="eyebrow">DISCOVER BANOO</p><h1>دنیای محصولات بانو</h1><p>برای هر سلیقه، هر داستان و هر امضا</p></div></section><section className="section"><div className="container"><SectionHead eyebrow="OUR COLLECTIONS & SERVICES" title="راهی برای کشف رایحه‌ی شما">از کالکشن‌های اختصاصی تا ساخت رایحه‌ای شخصی، دنیای بانو برای تجربه‌ای متفاوت طراحی شده است.</SectionHead><div className="products-grid">{productItems.map(item=><article className="product-tile" id={item.id} key={item.id}><div><small>{item.n}</small><h2>{item.title}</h2><p>{item.desc}</p></div><a href="#contact">{item.cta} ←</a></article>)}</div></div></section></main>}

function ScrollToTop(){const {pathname,hash}=useLocation();useEffect(()=>{if(hash){const t=setTimeout(()=>document.querySelector(hash)?.scrollIntoView({behavior:'smooth'}),100);return()=>clearTimeout(t)}window.scrollTo(0,0)},[pathname,hash]);return null}
function App(){return <BrowserRouter><ScrollToTop/><Splash/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/products" element={<Products/>}/><Route path="*" element={<Home/>}/></Routes><ContactFooter/></BrowserRouter>}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
