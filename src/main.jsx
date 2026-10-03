import React, {useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const socials = {
  instagram: 'https://www.instagram.com/vitolocalbusiness/',
  youtube: 'https://www.youtube.com/@vitolocalbusiness',
};

const stories = [
  {image:'/images/story1.png', tag:'LOCAL BUSINESS', title:'Two great Italian experiences', meta:'Food • People • Community'},
  {image:'/images/story2.png', tag:'REAL INTERVIEW', title:'Meet the people behind the business', meta:'Founder stories • Vaughan'},
  {image:'/images/story3.png', tag:'BUSINESS SPOTLIGHT', title:'Real people. Real conversations.', meta:'Local brands • GTA'},
];

function App(){
  const root = useRef(null);

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from('.nav',{y:-35,opacity:0,duration:1,ease:'power3.out'});
      gsap.from('.hero-kicker,.hero-title,.hero-copy,.hero-actions,.hero-stats',{y:65,opacity:0,stagger:.1,duration:1.05,ease:'power4.out',delay:.1});
      gsap.from('.hero-portrait',{scale:.8,opacity:0,rotation:4,duration:1.4,ease:'expo.out',delay:.25});
      gsap.to('.hero-ring',{rotation:360,duration:24,repeat:-1,ease:'none'});
      gsap.to('.orbit-dot',{rotation:360,duration:9,repeat:-1,ease:'none'});
      gsap.utils.toArray('.reveal').forEach((el)=>{
        gsap.from(el,{y:70,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%'}});
      });
      gsap.utils.toArray('.story-card').forEach((card,i)=>{
        gsap.from(card,{y:70,rotate:i%2?2:-2,opacity:0,duration:1,delay:i*.08,scrollTrigger:{trigger:card,start:'top 88%'}});
      });
    },root);
    return ()=>ctx.revert();
  },[]);

  const go=(url)=>window.open(url,'_blank','noopener,noreferrer');
  const scrollTo=(id)=>document.querySelector(id)?.scrollIntoView({behavior:'smooth'});

  return <div ref={root} className="site">
    <div className="noise"/><div className="ambient ambient-one"/><div className="ambient ambient-two"/>

    <header className="nav">
      <a className="brand" href="#top"><span className="brand-mark">VLB</span><span>VITO LOCAL<br/><b>BUSINESS</b></span></a>
      <nav><a href="#about">About</a><a href="#work">What I Do</a><a href="#stories">Stories</a><a href="#contact">Contact</a></nav>
      <button className="nav-cta" onClick={()=>go(socials.instagram)}>Instagram <span>↗</span></button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy-wrap">
          <div className="hero-kicker"><span className="pulse"/> ENTREPRENEUR • LOCAL BUSINESS PROMOTER</div>
          <h1 className="hero-title">I help local<br/><em>businesses</em><br/>get seen.</h1>
          <p className="hero-copy">Real interviews. Real people. Real business owners. I turn local stories into content that gets attention across the GTA.</p>
          <div className="hero-actions">
            <button className="primary" onClick={()=>scrollTo('#contact')}>Tell your story <span>↗</span></button>
            <button className="ghost" onClick={()=>go(socials.youtube)}>Watch interviews <span>▶</span></button>
          </div>
          <div className="hero-stats">
            <div><strong>31.6K</strong><span>Instagram followers</span></div>
            <i/>
            <div><strong>107+</strong><span>YouTube videos</span></div>
            <i/>
            <div><strong>5</strong><span>GTA communities</span></div>
          </div>
        </div>

        <div className="hero-stage">
          <div className="stage-label top-left">01 / THE ENTREPRENEUR</div>
          <div className="portrait-shell">
            <div className="hero-ring"/>
            <div className="orbit-dot"/>
            <div className="portrait-frame">
              <img className="hero-portrait" src="/images/vito-portrait.png" alt="Vito Local Business profile portrait"/>
              <div className="portrait-overlay"/>
              <div className="portrait-caption"><span>VITO ALFANO</span><b>LOCAL BUSINESS PROMOTER</b></div>
            </div>
          </div>
          <div className="floating-note note-one"><span>REAL</span><b>PEOPLE</b></div>
          <div className="floating-note note-two"><span>REAL</span><b>STORIES</b></div>
          <div className="location-pill">📍 Vaughan • Woodbridge • Mississauga • Toronto • Brampton</div>
        </div>
      </section>

      <section id="about" className="about reveal">
        <div className="section-label">01 / WHO IS VITO?</div>
        <div className="about-grid">
          <div className="about-image"><img src="/images/vito-portrait.png" alt="Vito Alfano"/><span>ENTREPRENEUR / STORYTELLER</span></div>
          <div className="about-copy">
            <p className="big-copy">Not an agency.<br/><em>A local connection.</em></p>
            <p>Vito Local Business is a community-driven platform built around one simple mission: help small and medium-sized businesses get real visibility.</p>
            <p>Vito visits local businesses, talks with owners and creates promotional content around the people behind the brand — making the story feel human, not like a traditional advertisement.</p>
            <div className="quote">“Real people. Real businesses. A stronger community.”</div>
          </div>
        </div>
      </section>

      <section id="work" className="work">
        <div className="section-head reveal"><div className="section-label">02 / WHAT I DO</div><span>FROM BUSINESS OWNER → COMMUNITY</span></div>
        <div className="service-grid">
          <article className="service reveal"><span>01</span><div className="service-icon">◉</div><h3>Business<br/><em>Spotlights</em></h3><p>Your business, your people and your story presented through authentic local content.</p></article>
          <article className="service reveal"><span>02</span><div className="service-icon">◌</div><h3>Real<br/><em>Interviews</em></h3><p>Conversation-first videos that introduce the owner behind the business to the community.</p></article>
          <article className="service reveal"><span>03</span><div className="service-icon">↗</div><h3>Local<br/><em>Visibility</em></h3><p>Content designed for social platforms so local businesses can get discovered and remembered.</p></article>
        </div>
      </section>

      <section id="stories" className="stories">
        <div className="section-head reveal"><div><div className="section-label">03 / REAL STORIES</div><h2>People are<br/><em>the content.</em></h2></div><button className="text-btn" onClick={()=>go(socials.instagram)}>See all on Instagram ↗</button></div>
        <div className="story-grid">
          {stories.map((story,i)=><article className="story-card" key={story.title}>
            <div className="story-image"><img src={story.image} alt={story.title}/><div className="story-number">0{i+1}</div><div className="play">▶</div></div>
            <div className="story-meta"><span>{story.tag}</span><small>{story.meta}</small></div>
            <h3>{story.title}</h3>
          </article>)}
        </div>
      </section>

      <section className="marquee-section">
        <div className="marquee"><span>REAL PEOPLE • REAL BUSINESSES • REAL COMMUNITY • GET SEEN • GET REMEMBERED • </span><span>REAL PEOPLE • REAL BUSINESSES • REAL COMMUNITY • GET SEEN • GET REMEMBERED • </span></div>
        <div className="marquee-main"><span>LOCAL</span><em>IS</em><strong>PERSONAL.</strong></div>
      </section>

      <section id="contact" className="contact reveal">
        <div className="contact-copy"><div className="section-label">04 / GET FEATURED</div><h2>Your business<br/>has a <em>story.</em></h2><p>If you're a local business owner in the GTA and want real people to discover what you do, let's start a conversation.</p><button className="primary" onClick={()=>go(socials.instagram)}>Message Vito <span>↗</span></button></div>
        <div className="contact-panel">
          <div className="panel-top"><span>VLB</span><small>VITO LOCAL BUSINESS</small></div>
          <div className="panel-line"><span>AREA</span><b>GREATER TORONTO AREA</b></div>
          <div className="panel-line"><span>FOCUS</span><b>LOCAL BUSINESSES</b></div>
          <div className="panel-line"><span>CONTENT</span><b>INTERVIEWS / SPOTLIGHTS</b></div>
          <div className="panel-line"><span>DM</span><button onClick={()=>go(socials.instagram)}>@vitolocalbusiness ↗</button></div>
        </div>
      </section>
    </main>

    <footer><span>© 2026 VITO LOCAL BUSINESS</span><span>REAL PEOPLE • REAL BUSINESSES • REAL COMMUNITY</span><a href="#top">BACK TO TOP ↑</a></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
