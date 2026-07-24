// src/components/AboutUs.jsx
import React from 'react'
import aboutImage from '../assets/about-hero.jpg'

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda: Imagen */}
          <div className="rounded-2xl overflow-hidden shadow-lg border">
            <img 
              src={aboutImage} 
              alt="About GMC Solutions - bespoke joinery and craftsmanship" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Columna derecha: Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              At GMC Solutions, we believe that every project should be as unique as the client behind it. 
              Our personalised design process ensures that your vision is at the heart of everything we do. 
              From the initial consultation to the final touches, we work closely with you to understand 
              your needs, preferences, and aspirations.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Each piece we create is meticulously designed and crafted to fit your specific space and aesthetic. 
              Our skilled team of joiners use the highest quality materials and advanced techniques to deliver 
              exceptional results. Whether it’s a custom staircase, a unique kitchen installation, or bespoke furniture, 
              we ensure that every detail is executed to perfection.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
