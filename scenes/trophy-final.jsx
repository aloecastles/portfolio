// FINAL PORTFOLIO — Trophy Case + terminal flourishes.
// Console-UI dark theme, neon violet/green accents. Original visuals only.

const ACC  = "#b29cff";
const ACC2 = "#5cf2a8";
const BG   = "#0c0a14";
const PNL  = "#100d1c";
const BRD  = "#1d1830";
const BRD2 = "#2d2748";
const FG   = "#e6e2f5";
const MUT  = "#8c84a8";
const MUT2 = "#6b6489";
const MONO = "'JetBrains Mono', ui-monospace, monospace";
const SANS = "'Inter Tight', 'Space Grotesk', sans-serif";

function TrophyFinal({ density = "comfortable" }) {
  const P = window.PORTFOLIO;
  const compact = density === "compact";
  const pad = compact ? 28 : 48;
  const gap = compact ? 32 : 48;

  return (
    <div style={{
      fontFamily: SANS, background: BG, color: FG,
      minHeight: "100%", width: "100%", padding: pad, boxSizing: "border-box",
    }}>
      <NavBar P={P} />
      <Hero P={P} compact={compact} />
      <div style={{ height: gap }} />
      <Legend P={P} />
      <TrophyList P={P} compact={compact} />
      <div style={{ height: gap }} />
      <NDABlock P={P} compact={compact} />
      <div style={{ height: gap }} />
      <ExperienceTimeline P={P} compact={compact} />
      <div style={{ height: gap }} />
      <KeyAchievements P={P} compact={compact} />
      <div style={{ height: gap }} />
      <PlatformsReport P={P} />
      <div style={{ height: gap }} />
      <SkillsDump P={P} compact={compact} />
      <div style={{ height: gap }} />
      <EduContact P={P} compact={compact} />
      <div style={{ height: gap }} />
      <PromptEnd />
    </div>
  );
}

// ──────────────────────── nav

function NavBar({ P }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      fontFamily: MONO, fontSize: 11, color: MUT2, letterSpacing: 1.5,
      borderBottom: `1px solid ${BRD}`, paddingBottom: 12, marginBottom: 28,
      flexWrap: "wrap", gap: 12,
    }}>
      <span style={{ color: ACC }}>★ TROPHY CASE / GAMEDEV-PM</span>
      <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
        <a href="#projects" style={navLink}>PROJECTS</a>
        <a href="#experience" style={navLink}>EXPERIENCE</a>
        <a href="#skills" style={navLink}>SKILLS</a>
        <a href="#contact" style={navLink}>CONTACT</a>
        <span style={{ color: ACC2 }}>● ONLINE</span>
      </span>
    </div>
  );
}
const navLink = { color: MUT2, textDecoration: "none" };

// ──────────────────────── hero

function Hero({ P, compact }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
      gap: 28, alignItems: "end",
    }}>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: MONO, fontSize: 11, color: ACC,
          letterSpacing: 3, marginBottom: 10,
        }}>▌ PROFILE_LOAD :: OK</div>
        <h1 style={{
          fontSize: compact ? 56 : 80, lineHeight: 0.9, margin: 0, fontWeight: 800,
          letterSpacing: -3, textWrap: "balance",
        }}>{P.bio.name}.</h1>
        <div style={{
          fontFamily: MONO, fontSize: 12, color: ACC2,
          letterSpacing: 2, marginTop: 14,
        }}>◆ {P.bio.role.toUpperCase()}</div>
        <div style={{
          color: MUT, marginTop: 12, maxWidth: 620, fontSize: 14, lineHeight: 1.55,
          textWrap: "pretty",
        }}>{P.bio.blurb}</div>
        <div style={{
          display: "flex", gap: 12, marginTop: 16, fontFamily: MONO,
          fontSize: 11, color: MUT, flexWrap: "wrap",
        }}>
          <span>✉ {P.bio.email}</span>
          <span style={{ color: MUT2 }}>|</span>
          <span>↗ {P.bio.linkedin}</span>
          <span style={{ color: MUT2 }}>|</span>
          <span>◉ {P.bio.location}</span>
        </div>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1,
        background: BRD, border: `1px solid ${BRD}`, alignSelf: "stretch",
      }}>
        {P.stats.map((s) => (
          <div key={s.v} style={{
            background: PNL, padding: compact ? 14 : 20,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            minHeight: 92,
          }}>
            <span style={{
              fontFamily: MONO, fontSize: 10, color: MUT2, letterSpacing: 1.5,
            }}>{s.v.toUpperCase()}</span>
            <span style={{
              fontSize: compact ? 28 : 40, fontWeight: 800, color: ACC,
              letterSpacing: -1.5, lineHeight: 1,
            }}>{s.k}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────── legend + project list

function Legend({ P }) {
  return (
    <div id="projects" style={{
      display: "flex", gap: 22, fontFamily: MONO, fontSize: 11, color: MUT2,
      letterSpacing: 1.5, borderTop: `1px solid ${BRD}`,
      borderBottom: `1px solid ${BRD}`, padding: "10px 0", marginBottom: 18,
      flexWrap: "wrap",
    }}>
      <span>★ TITLE</span><span>● GENRE</span><span>▤ PLATFORMS</span>
      <span>◆ ROLE</span><span>⚒ TECH</span>
      <span style={{ marginLeft: "auto", color: ACC }}>
        ▌ {P.projects.length} RELEASED · {P.ndaProjects.length} NDA
      </span>
    </div>
  );
}

function TrophyList({ P, compact }) {
  return (
    <div style={{ display: "grid", gap: compact ? 10 : 14 }}>
      {P.projects.map((p, i) => <Trophy key={p.id} p={p} i={i} compact={compact} />)}
    </div>
  );
}

function Trophy({ p, i, compact }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: compact
        ? "44px 100px minmax(0,1fr) auto"
        : "56px 130px minmax(0,1fr) auto",
      gap: compact ? 14 : 20, alignItems: "stretch",
      background: PNL, border: `1px solid ${BRD}`, padding: compact ? 12 : 16,
    }}>
      <div style={{
        fontFamily: MONO, fontSize: compact ? 28 : 36, fontWeight: 800,
        color: MUT2, letterSpacing: -2, alignSelf: "center", lineHeight: 1,
      }}>{String(i + 1).padStart(2, "0")}</div>

      <div style={{
        height: compact ? 70 : 90,
        background: `repeating-linear-gradient(45deg, oklch(0.28 0.08 ${p.hue}) 0 6px, oklch(0.20 0.08 ${p.hue}) 6px 12px)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
      }}>
        <div style={{
          fontFamily: MONO, fontSize: 9, color: BG, background: ACC,
          padding: "2px 6px", letterSpacing: 1.5,
        }}>{p.id.toUpperCase()}</div>
      </div>

      <div style={{
        display: "flex", flexDirection: "column", gap: 6, justifyContent: "center",
        minWidth: 0,
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
          <h3 style={{
            margin: 0, fontSize: compact ? 18 : 22, fontWeight: 700, letterSpacing: -0.5,
          }}>{p.title}</h3>
          <span style={{
            fontFamily: MONO, fontSize: 10, color: ACC, letterSpacing: 1.5,
          }}>● {p.genre.toUpperCase()}</span>
          <span style={{ fontSize: 11, color: MUT2, fontFamily: MONO }}>{p.year}</span>
        </div>
        <div style={{ fontSize: 12, color: MUT }}>◆ {p.role}</div>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {p.tech.map((t) => (
            <span key={t} style={{
              fontFamily: MONO, fontSize: 9, border: `1px solid ${BRD2}`,
              color: ACC, padding: "2px 6px", letterSpacing: 1,
            }}>⚒ {t}</span>
          ))}
        </div>
      </div>

      <div style={{
        display: "flex", flexDirection: "column", gap: 3, alignItems: "flex-end",
        fontFamily: MONO, fontSize: 10, color: MUT, letterSpacing: 1,
        alignSelf: "center", minWidth: 78,
      }}>
        {p.platforms.map((pl) => <span key={pl}>▤ {pl}</span>)}
      </div>
    </div>
  );
}

// ──────────────────────── NDA

function NDABlock({ P, compact }) {
  return (
    <div style={{
      padding: compact ? 18 : 24,
      border: `1px dashed ${BRD2}`,
      background: "linear-gradient(135deg, #100d1c 0%, #14102a 100%)",
    }}>
      <div style={{
        fontFamily: MONO, fontSize: 11, color: ACC,
        letterSpacing: 2, marginBottom: 12,
      }}>▒ CLASSIFIED / NDA — {P.ndaProjects.length} ENTRIES · ACCESS RESTRICTED</div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8,
      }}>
        {P.ndaProjects.map((n) => (
          <div key={n.tag} style={{
            border: `1px solid ${BRD2}`, padding: "10px 12px", background: BG,
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 10, color: ACC,
              letterSpacing: 1.5, marginBottom: 4,
            }}>{n.tag}  <span style={{ color: MUT2 }}>░░░░░░</span></div>
            <div style={{ fontSize: 13, color: FG }}>{n.genre}</div>
            <div style={{ fontSize: 11, color: MUT, marginTop: 2 }}>{n.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────── experience timeline

function ExperienceTimeline({ P, compact }) {
  return (
    <div id="experience">
      <SectionHeader cmd="$ cat ./experience.log" sub="// 7+ yrs · games · OTT · LiveOps" />
      <div style={{ display: "grid", gap: compact ? 10 : 14 }}>
        {P.experience.map((e, i) => (
          <div key={e.org} style={{
            display: "grid",
            gridTemplateColumns: compact ? "56px minmax(0,1fr)" : "72px minmax(0,1fr)",
            gap: compact ? 14 : 20,
            background: PNL, border: `1px solid ${BRD}`, padding: compact ? 14 : 18,
          }}>
            <div style={{
              fontFamily: MONO, fontSize: compact ? 11 : 12,
              color: ACC2, letterSpacing: 1.5, lineHeight: 1.4,
            }}>
              <div style={{ color: MUT2, fontSize: 10 }}>JOB</div>
              <div style={{ fontSize: compact ? 22 : 26, color: ACC, fontWeight: 800, marginTop: 4 }}>
                {String(P.experience.length - i).padStart(2, "0")}
              </div>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap" }}>
                <h3 style={{
                  margin: 0, fontSize: compact ? 17 : 20, fontWeight: 700,
                  letterSpacing: -0.3,
                }}>{e.role}</h3>
                <span style={{
                  fontFamily: MONO, fontSize: 11, color: ACC, letterSpacing: 1.2,
                }}>@ {e.org}</span>
                <span style={{
                  fontFamily: MONO, fontSize: 10, color: MUT2, marginLeft: "auto",
                }}>{e.period}</span>
              </div>
              <ul style={{
                margin: "10px 0 0", padding: 0, listStyle: "none",
                display: "grid", gap: 4,
              }}>
                {e.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: 12.5, color: MUT, lineHeight: 1.5 }}>
                    <span style={{ color: ACC2 }}>▸</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────── achievements

function KeyAchievements({ P, compact }) {
  return (
    <div>
      <SectionHeader cmd="$ ./run --report achievements" sub={`// ${P.achievements.length} highlights`} />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: compact ? 8 : 10,
      }}>
        {P.achievements.map((a, i) => (
          <div key={i} style={{
            background: PNL, border: `1px solid ${BRD}`,
            padding: compact ? 14 : 18, display: "flex", gap: 12,
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 22, fontWeight: 800, color: ACC,
              letterSpacing: -1, lineHeight: 1, flexShrink: 0,
            }}>{String(i + 1).padStart(2, "0")}</div>
            <div style={{ fontSize: 12.5, color: FG, lineHeight: 1.5 }}>{a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────── platforms report (terminal flourish from B)

function PlatformsReport({ P }) {
  return (
    <div>
      <SectionHeader cmd="$ ./run --report platforms" sub={`// ${P.platforms.length} targets`} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {P.platforms.map((pl) => (
          <span key={pl} style={{
            fontFamily: MONO, border: `1px solid ${BRD2}`, padding: "5px 10px",
            color: FG, fontSize: 12, letterSpacing: 0.5, background: PNL,
          }}>▤ {pl}</span>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────── skills dump (terminal flourish from B)

function SkillsDump({ P, compact }) {
  const cats = Object.keys(P.skills);
  return (
    <div id="skills">
      <SectionHeader cmd="$ cat ./skills.txt" sub={`// ${cats.length} domains`} />
      <div style={{
        display: "grid",
        gridTemplateColumns: compact ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: 1, background: BRD, border: `1px solid ${BRD}`,
      }}>
        {cats.map((cat) => (
          <div key={cat} style={{
            background: PNL, padding: compact ? 14 : 18,
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 11, color: ACC2,
              letterSpacing: 2, marginBottom: 10,
            }}>// {cat.toUpperCase()}</div>
            <ul style={{
              margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 4,
            }}>
              {P.skills[cat].map((s) => (
                <li key={s} style={{
                  fontSize: 11.5, color: FG, fontFamily: MONO, lineHeight: 1.5,
                }}>
                  <span style={{ color: MUT2 }}>·</span> {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────── edu + contact

function EduContact({ P, compact }) {
  return (
    <div id="contact" style={{
      display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr",
      gap: compact ? 16 : 24,
    }}>
      <div>
        <SectionHeader cmd="$ cat ./education.txt" />
        <div style={{ display: "grid", gap: 8 }}>
          {P.education.map((e) => (
            <div key={e.title} style={{
              background: PNL, border: `1px solid ${BRD}`, padding: "12px 14px",
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: FG }}>{e.title}</div>
              <div style={{ fontSize: 12, color: MUT, marginTop: 2 }}>{e.org}</div>
              <div style={{
                fontFamily: MONO, fontSize: 10, color: ACC, marginTop: 4,
              }}>● {e.year}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <SectionHeader cmd="$ ./contact --connect" />
        <div style={{
          background: PNL, border: `1px solid ${BRD}`, padding: 18,
        }}>
          <div style={{
            fontFamily: MONO, fontSize: 11, color: MUT2,
            letterSpacing: 1.5, marginBottom: 12,
          }}>// ESTABLISH_LINK</div>
          <div style={{ display: "grid", gap: 8 }}>
            {P.links.map((l) => (
              <a key={l.label} href={l.url} style={{
                display: "flex", justifyContent: "space-between",
                fontFamily: MONO, fontSize: 13, color: FG, textDecoration: "none",
                border: `1px solid ${BRD2}`, padding: "10px 14px",
                background: BG,
              }}>
                <span><span style={{ color: ACC }}>▸</span> {l.label}</span>
                <span style={{ color: MUT }}>{l.url.replace(/^https?:\/\//, "").replace(/^mailto:/, "")}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────── prompt-end cursor (from B)

function PromptEnd() {
  return (
    <div style={{
      fontFamily: MONO, fontSize: 13, color: MUT2,
      paddingTop: 12, borderTop: `1px dashed ${BRD}`,
    }}>
      <span style={{ color: ACC2 }}>oleksii@gamedev</span>
      <span>:</span>
      <span style={{ color: ACC }}>~/portfolio</span>
      <span>$ </span>
      <span style={{
        display: "inline-block", width: 9, height: 14, background: ACC2,
        verticalAlign: "-2px", animation: "blink 1s steps(2) infinite",
      }} />
    </div>
  );
}

// ──────────────────────── shared section header

function SectionHeader({ cmd, sub }) {
  return (
    <div style={{
      fontFamily: MONO, fontSize: 12, color: MUT2,
      letterSpacing: 1, marginBottom: 12,
      display: "flex", gap: 14, alignItems: "baseline", flexWrap: "wrap",
    }}>
      <span style={{ color: ACC2 }}>{cmd}</span>
      {sub && <span style={{ color: MUT2 }}>{sub}</span>}
    </div>
  );
}

window.TrophyFinal = TrophyFinal;
