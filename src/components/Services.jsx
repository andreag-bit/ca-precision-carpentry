// src/components/Services.jsx
import { useEffect, useMemo, useRef, useState, useCallback } from "react"

// Carga automática de imágenes por carpeta (Vite)
// Solo subes archivos a la carpeta y se agregan solos (sin editar Services.jsx).
function loadGallery(globObj) {
  return Object.entries(globObj)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, mod]) => mod?.default)
    .filter(Boolean)
}

const ARCH = import.meta.glob("../assets/services/architectural/*.{jpg,jpeg,png,webp}", { eager: true })
const COM = import.meta.glob("../assets/services/commercial/*.{jpg,jpeg,png,webp}", { eager: true })
const SITE = import.meta.glob("../assets/services/site-install/*.{jpg,jpeg,png,webp}", { eager: true })
const KIT = import.meta.glob("../assets/services/kitchens/*.{jpg,jpeg,png,webp}", { eager: true })
const WAR = import.meta.glob("../assets/services/wardrobes/*.{jpg,jpeg,png,webp}", { eager: true })
const BATH = import.meta.glob("../assets/services/bathrooms/*.{jpg,jpeg,png,webp}", { eager: true })

export default function Services() {
  const SERVICES = useMemo(
    () => [
      {
        id: "architectural-joinery",
        title: "Architectural Joinery",
        desc:
          "Bespoke architectural elements with premium materials and precision detailing across residential and commercial spaces.",
        gallery: loadGallery(ARCH),
      },
      {
        id: "commercial-fitouts",
        title: "Commercial Fitouts",
        desc:
          "End-to-end fitouts for offices, clinics and retail: efficient layouts, durable finishes, and clean execution.",
        gallery: loadGallery(COM),
      },
      {
        id: "site-install-project-mgmt",
        title: "Site Install & Project Management",
        desc:
          "Coordination, site install, and project management to deliver on time, to spec, with safety and quality controls.",
        gallery: loadGallery(SITE),
      },
      {
        id: "kitchens-pantries",
        title: "Kitchens & Pantries",
        desc:
          "Tailored kitchen systems and pantries that combine function, flow and a timeless aesthetic.",
        gallery: loadGallery(KIT),
      },
      {
        id: "wardrobes-storage",
        title: "Wardrobes & Storage",
        desc:
          "Smart storage and built-ins made-to-measure, maximizing space with a clean, integrated look.",
        gallery: loadGallery(WAR),
      },
      {
        id: "bathrooms-vanities",
        title: "Bathrooms & Vanities",
        desc:
          "Moisture-ready finishes and refined lines for vanities and bathroom cabinetry built to last.",
        gallery: loadGallery(BATH),
      },
    ],
    []
  )

  // --- Modal state ---
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const [idx, setIdx] = useState(0)

  // --- Hover slideshow state (one card at a time) ---
  const [hoveredId, setHoveredId] = useState(null)
  const [hoverIdx, setHoverIdx] = useState(0)
  const hoverTimerRef = useRef(null)

  // Swipe support in modal
  const touchStartX = useRef(null)

  const hasImages = !!active?.gallery?.length

  const handleOpen = (service) => {
    setActive(service)
    setIdx(0)
    setOpen(true)
    document.body.style.overflow = "hidden"
  }

  const handleClose = useCallback(() => {
    setOpen(false)
    setActive(null)
    setIdx(0)
    document.body.style.overflow = ""
  }, [])

  const next = useCallback(() => {
    if (!active?.gallery?.length) return
    setIdx((v) => (v + 1) % active.gallery.length)
  }, [active])

  const prev = useCallback(() => {
    if (!active?.gallery?.length) return
    setIdx((v) => (v - 1 + active.gallery.length) % active.gallery.length)
  }, [active])

  // Keyboard controls for modal
  useEffect(() => {
    const onKey = (e) => {
      if (!open) return
      if (e.key === "Escape") handleClose()
      if (!active?.gallery?.length) return
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, active, next, prev, handleClose])

  // Safety: restore scroll on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = ""
      if (hoverTimerRef.current) window.clearInterval(hoverTimerRef.current)
    }
  }, [])

  // Tap zones inside modal image area
  const onTapImageArea = (e) => {
    if (!hasImages) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = x / rect.width

    if (pct <= 0.4) prev()
    else if (pct >= 0.6) next()
  }

  // Swipe for modal (optional but nice)
  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null
  }
  const onTouchEnd = (e) => {
    if (!hasImages) return
    const start = touchStartX.current
    const end = e.changedTouches?.[0]?.clientX ?? null
    touchStartX.current = null
    if (start == null || end == null) return

    const delta = end - start
    const THRESH = 40
    if (delta > THRESH) prev()
    if (delta < -THRESH) next()
  }

  // Hover slideshow handlers
  const startHover = (serviceId, maxFrames) => {
    setHoveredId(serviceId)
    setHoverIdx(0)

    if (hoverTimerRef.current) window.clearInterval(hoverTimerRef.current)
    // 1 segundo por frame (como pediste)
    hoverTimerRef.current = window.setInterval(() => {
      setHoverIdx((v) => (v + 1) % maxFrames)
    }, 1000)
  }

  const stopHover = () => {
    setHoveredId(null)
    setHoverIdx(0)
    if (hoverTimerRef.current) window.clearInterval(hoverTimerRef.current)
    hoverTimerRef.current = null
  }

  return (
    <section id="services" className="py-20" style={{ backgroundColor: "#0b0f14" }}>
      <div className="max-w-7xl mx-auto px-4">
        <header>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
          <p className="mt-3 text-gray-300 max-w-3xl">
            Custom joinery and fitouts — from concept to completion — aligned with your brief, budget and timeline.
          </p>
        </header>

        {/* Services grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const gallery = s.gallery || []
            // para el hover preview usamos hasta 4 imágenes (teaser), el modal tiene todas
            const preview = gallery.slice(0, Math.min(4, gallery.length))
            const thumb = preview[0]
            const isHovered = hoveredId === s.id
            const previewImg = isHovered && preview.length > 1 ? preview[hoverIdx] : thumb

            return (
              <button
                key={s.id}
                onClick={() => handleOpen(s)}
                onMouseEnter={() => preview.length > 1 && startHover(s.id, preview.length)}
                onMouseLeave={stopHover}
                className="group text-left rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/60 hover:bg-slate-900 transition shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-800">
                  {previewImg ? (
                    <img
                      src={previewImg}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 text-sm">
                      Image coming soon
                    </div>
                  )}

                  {/* indicador sutil si hay varias imágenes */}
                  {preview.length > 1 && (
                    <div className="absolute opacity-0 group-hover:opacity-100 transition">
                      {/* empty, kept for future if you want overlay */}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{s.desc}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div
                      className="inline-block rounded-xl px-3 py-2 text-sm font-semibold text-black"
                      style={{ backgroundColor: "#00aa66" }}
                    >
                      View details
                    </div>

                    {gallery.length > 0 && (
                      <span className="text-xs text-gray-400">
                        {gallery.length} photos
                      </span>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {open && active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 w-[95vw] max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <div>
                <h3 className="text-xl font-bold">{active.title}</h3>
                {hasImages && (
                  <p className="text-sm text-slate-500 mt-1">
                    {idx + 1} / {active.gallery.length}
                  </p>
                )}
              </div>

              <button
                onClick={handleClose}
                className="rounded-xl px-3 py-2 hover:bg-slate-100 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="relative bg-black">
              {hasImages ? (
                <div
                  className="relative"
                  onClick={onTapImageArea}
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  <img
                    src={active.gallery[idx]}
                    alt={`${active.title} ${idx + 1}`}
                    className="w-full max-h-[60vh] object-contain select-none"
                    draggable="false"
                  />

                  {/* Prev/Next buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prev()
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white px-3 py-2 shadow transition"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      next()
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white px-3 py-2 shadow transition"
                    aria-label="Next image"
                  >
                    ›
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/70">
                    Tap left/right or swipe
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-[40vh] text-gray-400">
                  No images yet.
                </div>
              )}
            </div>

            {/* Dots */}
            {hasImages && (
              <div className="px-5 py-4 flex items-center justify-center gap-2">
                {active.gallery.map((_, i) => {
                  const isActive = i === idx
                  return (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        isActive ? "bg-[#00aa66]" : "bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
