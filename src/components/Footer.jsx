export default function Footer() {
  return (
    <footer className="border-t border-[#b9883b]/25 bg-[#090909] py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs md:flex-row md:px-8">

        <p className="text-white/45">
          © {new Date().getFullYear()} CA Precision Carpentry. All rights reserved.
        </p>

        <nav className="flex items-center gap-6">
          <a
            href="#"
            className="tracking-[0.12em] text-white/55 transition hover:text-[#d5a34c]"
          >
            INSTAGRAM
          </a>

          <a
            href="#"
            className="tracking-[0.12em] text-white/55 transition hover:text-[#d5a34c]"
          >
            FACEBOOK
          </a>
        </nav>

      </div>
    </footer>
  )
}
