// A 3D cube made of 6 faces x 9 placeholder tiles (pure CSS, no libraries).
// Replace each tile with a real image later: <img src="..." alt="..." />
const FACES = ['front', 'back', 'right', 'left', 'top', 'bottom'];
const ACCENT_TILES = new Set([0, 4, 7, 11, 13, 20, 26, 31, 38, 44, 49]);

export default function Cube() {
  return (
    <div className="cube-stage" aria-hidden="true">
      <div className="cube">
        {FACES.map((face, f) => (
          <div key={face} className={`face face-${face}`}>
            {Array.from({ length: 9 }, (_, i) => {
              const n = f * 9 + i;
              return (
                <div
                  key={i}
                  className={`tile ${ACCENT_TILES.has(n) ? 'tile-accent' : ''}`}
                  style={{ '--tone': 18 + ((n * 37) % 26) }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
