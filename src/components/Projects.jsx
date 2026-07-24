import { useState } from "react"

function loadImages(globObj) {
  return Object.entries(globObj)
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true })
    )
    .map(([, file]) => file.default)
}

const balgowlahGallery = loadImages(
  import.meta.glob(
    "../assets/projectBalgowhlah/*.{jpg,jpeg,png,webp}",
    { eager: true }
  )
)

const stAlexandriaGallery = loadImages(
  import.meta.glob(
    "../assets/projectStAlexandria/*.{jpg,jpeg,png,webp}",
    { eager: true }
  )
)
const wahroongaGallery = loadImages(
  import.meta.glob(
    "../assets/projectWahroonga/*.{jpg,jpeg,png,webp}",
    { eager: true }
  )
)

const terreyHillsGallery = loadImages(
  import.meta.glob(
    "../assets/projectTerreyHills/*.{jpg,jpeg,png,webp}",
    { eager: true }
  )
)

const projects = [
  {
    title: "Wahroonga",
    details: "Wahroonga • 2026",
    gallery: wahroongaGallery,
  },
  {
    title: "Balgowlah",
    details: "Balgowlah • 2025",
    gallery: balgowlahGallery,
  },
  {
    title: "Bourke St Alexandria",
    details: "Alexandria • 2024–2025",
    gallery: stAlexandriaGallery,
  },
  {
    title: "Terrey Hills Hospital",
    details: "Terrey Hills • 2022–2023",
    gallery: terreyHillsGallery,
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)

  function openProject(project) {
    setActiveProject(project)
    setCurrentImage(0)
  }

  function closeProject() {
    setActiveProject(null)
    setCurrentImage(0)
  }

  function previousImage() {
    const galleryLength = activeProject.gallery.length

    setCurrentImage(
      (currentImage - 1 + galleryLength) % galleryLength
    )
  }

  function nextImage() {
    const galleryLength = activeProject.gallery.length

    setCurrentImage(
      (currentImage + 1) % galleryLength
    )
  }

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">
              Selected projects
            </h2>

            <p className="mt-2 text-slate-600">
              A selection of recent GMC Solutions projects.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden md:inline rounded-xl bg-slate-900 text-white px-4 py-2"
          >
            Discuss your project
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <button
              key={project.title}
              type="button"
              onClick={() => openProject(project)}
              className="text-left rounded-2xl overflow-hidden border bg-white"
            >
              <img
                src={project.gallery[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600">
                  {project.details}
                </p>
                
<p className="mt-3 text-sm font-semibold">
  View gallery
</p>
              
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl overflow-hidden w-full max-w-5xl">
            <div className="flex items-center justify-between p-4">
              <h3 className="font-semibold text-lg">
                {activeProject.title}
              </h3>

              <button
                type="button"
                onClick={closeProject}
                className="text-2xl px-3"
              >
                ×
              </button>
            </div>

            <div className="relative bg-black">
              <img
                src={activeProject.gallery[currentImage]}
                alt={`${activeProject.title} ${currentImage + 1}`}
                className="w-full h-[65vh] object-contain"
              />

              {activeProject.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full px-4 py-2 text-2xl"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full px-4 py-2 text-2xl"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <p className="text-center p-3 text-sm text-slate-600">
              {currentImage + 1} of {activeProject.gallery.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
