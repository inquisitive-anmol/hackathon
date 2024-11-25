import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <section class="relative h-72 bg-blue-600">
        <img src="illustration.svg" alt="About Us" class="absolute inset-0 w-full h-full object-cover opacity-50"/>
        <div class="absolute inset-0 flex justify-center items-center">
            <h1 class="text-white text-4xl font-bold">About Us</h1>
        </div>
      </section>

    <section class="py-12 px-6">
        <div class="max-w-5xl mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-800 mb-6">Who We Are</h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-8">
                We are a passionate team committed to delivering excellence. With years of experience in our field, we pride ourselves on creating high-quality products and services for our customers. Our mission is to make the world a better place through innovation and collaboration.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-semibold text-gray-700 mb-4">Our Vision</h3>
                    <p class="text-gray-600">
                        Our vision is to be a leader in our industry by offering unparalleled products and services, focusing on customer satisfaction and sustainable practices.
                    </p>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-gray-700 mb-4">Our Values</h3>
                    <p class="text-gray-600">
                        Integrity, innovation, and commitment to excellence are the core values that drive us every day. We believe in building lasting relationships with our customers, partners, and employees.
                    </p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default AboutUs
