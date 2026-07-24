import heroImage from '../assets/hero-image.jpg'
import homeHero from '../assets/home-hero.jpg'
import aboutHero from '../assets/about-hero.jpg'

const inspiration = [
  {
    title: 'Custom Interiors',
    image: heroImage,
  },
  {
    title: 'Warm Minimalism',
    image: homeHero,
  },
  {
    title: 'Crafted Details',
    image: aboutHero,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f2efe9] py-20 text-[#111111] md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.6fr] lg:items-center">

          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#a8752b]">
              DESIGN INSPIRATION
            </p>

            <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
              Spaces that inspire
            </h2>

            <div className="mt-6 h-px w-14 bg-[#b9883b]" />

            <p className="mt-7 max-w-md text-base leading-8 text-black/65">
              A collection of concepts and visual references that reflects our
              design direction, attention to detail and approach to craftsmanship.
            </p>

            <p className="mt-5 max-w-md text-xs leading-6 text-black/45">
              Images shown are used as design inspiration and do not represent
              completed CA Precision Carpentry projects.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block border border-[#a8752b] px-6 py-3 text-xs font-semibold tracking-[0.14em] transition hover:bg-[#a8752b] hover:text-white"
            >
              DISCUSS YOUR VISION
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <article className="group relative min-h-[520px] overflow-hidden sm:row-span-2">
              <img
                src={inspiration[0].image}
                alt={inspiration[0].title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 text-sm tracking-[0.16em] text-white">
                {inspiration[0].title}
              </p>
            </article>

            {inspiration.slice(1).map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[250px] overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 text-sm tracking-[0.16em] text-white">
                  {item.title}
                </p>
              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
