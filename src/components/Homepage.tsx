import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const DUST_COUNT = 16;

type DustMote = {
  id: number;
  x: number;
  y: number;
  driftX: number;
  driftY: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
};

function generateDust(): DustMote[] {
  return Array.from({ length: DUST_COUNT }, (_, i) => ({
    id: i,
    x: 18 + Math.random() * 64,
    y: 8 + Math.random() * 72,
    driftX: -20 + Math.random() * 40,
    driftY: -18 + Math.random() * 24,
    delay: Math.random() * 3.5,
    duration: 5 + Math.random() * 4,
    size: 1.2 + Math.random() * 1.8,
    opacity: 0.3 + Math.random() * 0.45,
  }));
}

const highlights = [
  {
    title: 'Full-stack builds',
    copy: 'I design and ship products end-to-end, from architecture and APIs to polished interfaces.',
  },
  {
    title: 'Web development for businesses',
    copy: 'I create websites and web applications for small businesses and individuals who need something sharp.',
  },
  {
    title: 'Solutions that matter',
    copy: 'I care about work that has purpose, whether it is a product, a business site, or a meaningful tool.',
  },
];

export function Homepage() {
  const [isOn, setIsOn] = useState(false);
  const [swinging, setSwinging] = useState(false);
  const [flickering, setFlickering] = useState(false);
  const [hintDismissed, setHintDismissed] = useState(false);
  const [dust] = useState<DustMote[]>(generateDust);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const swingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLampClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (swingTimeoutRef.current) {
      clearTimeout(swingTimeoutRef.current);
    }

    setSwinging(true);
    setHintDismissed(true);

    if (!isOn) {
      setFlickering(true);
      timeoutRef.current = setTimeout(() => {
        setFlickering(false);
        setIsOn(true);
      }, 380);
    } else {
      setIsOn(false);
    }

    swingTimeoutRef.current = setTimeout(() => setSwinging(false), 900);
  };

  useEffect(() => () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (swingTimeoutRef.current) {
      clearTimeout(swingTimeoutRef.current);
    }
  }, []);

  const shadeTopColor = isOn ? '#b8872a' : '#1c1710';
  const shadeBotColor = isOn ? '#7a5818' : '#0e0c09';
  const bulbColor = isOn || flickering ? '#ffe580' : '#1a1510';
  const textVisible = isOn && !flickering;

  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 bg-[#060606] text-[#f8f4eb]">
      <div
        style={{
          minHeight: '100vh',
          background: 'radial-gradient(ellipse 100% 100% at 50% -5%, #1a0f02 0%, #070503 55%), #080604',
          fontFamily: "'Outfit', sans-serif",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent 0%, #2a1e0a 30%, #3d2c10 50%, #2a1e0a 70%, transparent 100%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '160px',
            borderRadius: '0 0 50% 50%',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(200,130,20,0.18) 0%, transparent 70%)',
            opacity: isOn ? 1 : 0,
            transition: 'opacity 1.4s ease',
            pointerEvents: 'none',
          }}
        />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
          <header className="z-30 flex items-center justify-between rounded-none border border-white/15 bg-black/40 px-4 py-3 text-sm uppercase tracking-[0.28em] text-[#f5ebdb] backdrop-blur">
            <span>Kyle Gossage</span>
            <span>Software Engineer</span>
          </header>

          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 20,
              paddingTop: '20px',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transformOrigin: 'top center',
                animation: swinging ? 'swing 0.9s ease-in-out forwards' : 'none',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'filter 0.25s ease, transform 0.25s ease',
                filter: 'drop-shadow(0 0 0 rgba(255, 220, 120, 0))',
              }}
              onClick={handleLampClick}
              onMouseEnter={(event) => {
                event.currentTarget.style.filter = 'drop-shadow(0 0 14px rgba(255, 220, 120, 0.25))';
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.filter = 'drop-shadow(0 0 0 rgba(255, 220, 120, 0))';
              }}
              role="button"
              aria-label="Toggle lamp"
              tabIndex={0}
              onKeyDown={(event) => event.key === 'Enter' && handleLampClick()}
            >
              <div
                style={{
                  width: '28px',
                  height: '7px',
                  background: 'linear-gradient(to bottom, #3a2c12, #251d0b)',
                  borderRadius: '2px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.6)',
                }}
              />

            <div
              style={{
                width: '2px',
                height: '100px',
                background: isOn
                  ? 'linear-gradient(to bottom, #3d2c10, #7a5a1a)'
                  : 'linear-gradient(to bottom, #1a1408, #221a0a)',
                transition: 'background 1s ease',
                boxShadow: isOn ? '0 0 4px rgba(200,140,30,0.3)' : 'none',
              }}
            />

            <svg
              width="130"
              height="90"
              viewBox="0 0 130 90"
              style={{
                display: 'block',
                filter: isOn ? 'drop-shadow(0 6px 40px rgba(220,160,40,0.5))' : 'none',
                transition: 'filter 1s ease',
              }}
            >
              <path d="M42,4 L88,4 L120,88 L10,88 Z" fill="url(#shadeGrad)" />
              <path
                d="M45,10 L85,10 L112,82 L18,82 Z"
                fill={isOn ? 'rgba(255,195,70,0.12)' : 'rgba(255,255,255,0.02)'}
              />
              <ellipse
                cx="65"
                cy="88"
                rx="55"
                ry="7"
                fill={shadeBotColor}
                style={{ transition: 'fill 0.8s ease' }}
              />
              <ellipse
                cx="65"
                cy="4"
                rx="23"
                ry="4"
                fill={shadeTopColor}
                style={{ transition: 'fill 0.8s ease' }}
              />
              <ellipse
                cx="65"
                cy="54"
                rx="10"
                ry="13"
                fill={bulbColor}
                style={{ transition: 'fill 0.15s ease', filter: isOn || flickering ? 'blur(3px)' : 'none' }}
              />
              {(isOn || flickering) && (
                <path
                  d="M61,48 Q65,44 69,48 Q65,52 61,56 Q65,60 69,56"
                  fill="none"
                  stroke="rgba(255,240,160,0.9)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              )}
              <defs>
                <linearGradient id="shadeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={shadeTopColor} />
                  <stop offset="100%" stopColor={isOn ? '#a06e20' : '#131009'} />
                </linearGradient>
              </defs>
            </svg>

              <div
                style={{
                  width: '1px',
                  height: '28px',
                  background: isOn ? '#c8921a' : '#2a2012',
                  transition: 'background 0.8s ease',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: isOn ? '#c8921a' : '#2a2012',
                    transition: 'background 0.8s ease',
                  }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              top: '215px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '680px',
              maxWidth: '95vw',
              height: '520px',
              clipPath: 'polygon(28% 0%, 72% 0%, 100% 100%, 0% 100%)',
              background: isOn
                ? 'linear-gradient(to bottom, rgba(245,200,80,0.22) 0%, rgba(220,160,50,0.10) 40%, rgba(200,130,30,0.04) 75%, transparent 100%)'
                : 'transparent',
              opacity: isOn && !flickering ? 1 : flickering ? 0.6 : 0,
              transition: 'opacity 0.8s ease',
              animation: isOn ? 'flicker 0.4s ease forwards' : 'none',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '147px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '20px',
              borderRadius: '50%',
              background: 'rgba(255,210,80,0.35)',
              filter: 'blur(12px)',
              opacity: isOn ? 1 : 0,
              transition: 'opacity 1s ease',
              pointerEvents: 'none',
              zIndex: 3,
            }}
          />

          {isOn && (
            <div
              style={{
                position: 'absolute',
                top: '215px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '680px',
                maxWidth: '95vw',
                height: '520px',
                clipPath: 'polygon(28% 0%, 72% 0%, 100% 100%, 0% 100%)',
                pointerEvents: 'none',
                zIndex: 5,
                overflow: 'visible',
              }}
            >
              {dust.map((mote) => (
                <div
                  key={mote.id}
                  style={{
                    position: 'absolute',
                    top: `${mote.y}%`,
                    left: `${mote.x}%`,
                    width: `${mote.size}px`,
                    height: `${mote.size}px`,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,220,130,0.7)',
                    opacity: mote.opacity,
                    animation: `dust-drift ${mote.duration}s ${mote.delay}s infinite ease-in-out`,
                    transform: 'translate3d(0, 0, 0)',
                    ['--drift-x' as string]: `${mote.driftX}px`,
                    ['--drift-y' as string]: `${mote.driftY}px`,
                    pointerEvents: 'none',
                  }}
                />
              ))}
            </div>
          )}

          <div
            style={{
              position: 'absolute',
              top: 'calc(30%)',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              zIndex: 10,
              width: '100%',
              pointerEvents: 'none',
            }}
          >
            <h1
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: '4rem',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.025em',
                color: '#ffffff',
                textShadow: isOn
                  ? '0 0 80px rgba(255,200,80,0.25), 0 2px 4px rgba(0,0,0,0.8)'
                  : 'none',
                opacity: textVisible ? 1 : 0,
                animation: textVisible ? 'reveal-name 1.2s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
                transition: textVisible ? 'opacity 0.8s ease 0.15s' : 'opacity 0.12s ease 0s',
                margin: 0,
              }}
            >
              Kyle
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: '#ffffff' }}>Gossage</span>
            </h1>

            <div
              style={{
                width: '48px',
                height: '1px',
                background: 'rgba(255,255,255,0.5)',
                margin: '2rem auto 1.8rem',
                opacity: textVisible ? 1 : 0,
                transition: textVisible ? 'opacity 0.8s ease 0.25s' : 'opacity 0.12s ease 0s',
              }}
            />

            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#ffffff',
                opacity: textVisible ? 1 : 0,
                transition: textVisible ? 'opacity 0.8s ease 0.35s' : 'opacity 0.12s ease 0s',
                margin: 0,
              }}
            >
              Software Engineer
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 border border-white bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                View work
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Let's talk
              </a>
            </div>

            <div className="mt-8 mx-auto w-full max-w-5xl">
              <div className="grid w-full gap-4 md:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="border border-white/20 bg-[#f8f4eb] p-5 text-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)]">
                    <h2 className="text-lg font-black uppercase tracking-[0.18em]">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {!hintDismissed && (
            <div
              style={{
                position: 'absolute',
                top: '272px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                animation: 'hint-pulse 2.5s ease-in-out infinite',
                pointerEvents: 'none',
                zIndex: 15,
              }}
            >
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path
                  d="M8 1 L8 14 M4 10 L8 14 L12 10"
                  stroke="rgba(160,120,60,0.6)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.65rem',
                  fontWeight: 300,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(140,105,50,0.6)',
                }}
              >
                pull the cord
              </span>
            </div>
          )}

        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.5)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  );
}
