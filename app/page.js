import Cube from './Cube';
import Viewport from './Viewport';

// All text below is placeholder copy. Replace it with your own.
const TITLES = [
  'Project Title One',
  'Project Title Two',
  'Project Title Three',
  'Project Title Four',
  'Project Title Five',
  'Project Title Six',
];

export default function Home() {
  const rows = Array.from({ length: 8 }, () => TITLES).flat();
  return (
    <main className="page">
      <div className="ruler ruler-top" aria-hidden="true" />
      <div className="ruler ruler-left" aria-hidden="true" />

      <header className="topbar">
        <div className="muted"><Viewport /></div>
        <nav className="nav" aria-label="Principal">
          <a href="#works" className="active">Works,</a>{' '}
          <a href="#archive">Archive,</a>{' '}
          <a href="#about">About</a>
        </nav>
        <div className="status muted">
          <i className="dot" /> Open to new projects
        </div>
      </header>

      <Cube />

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <ul key={k}>
              {rows.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          ))}
        </div>
      </div>

      <p className="titles-mobile">
        {TITLES.slice(0, 5).join(',  ')}
      </p>

      <section className="hero" id="works">
        <div className="meta">
          <p>Lucía Clavijo<br />Filmmaker</p>
          <p>Issue N°001 / Coll. 2026<br />Ref. PLACEHOLDER-001</p>
        </div>
        <h1 className="giant" aria-label="Contempo, by Lucía Clavijo">LC</h1>
      </section>
    </main>
  );
}
