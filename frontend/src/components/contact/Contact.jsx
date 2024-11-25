import React from 'react'
// import 'contact.css'
// import styles from './contact.module.css'

const Contact = () => {
  return (
    <div>
      <section class="bg-blue-600 text-white text-center py-20">
        <h1 class="text-4xl font-bold">Contact Us</h1>
        <p class="mt-4 text-lg">We'd love to hear from you! Reach out to us with any questions or comments.</p>
    </section>
    <section class="py-12 px-6">
        <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">Get In Touch</h2>
            <form action="#" method="POST">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="name" name="name" class="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your full name" required/>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email" class="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" required/>
                    </div>
                </div>
                <div class="mt-6">
                    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="6" class="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Write your message here..." required></textarea>
                </div>
                <div class="mt-6 text-center">
                    <button type="submit" class="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Send Message</button>
                </div>
            </form>
        </div>
    </section>
    <section class="bg-gray-50 py-12">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <p class="text-lg text-gray-600 mb-4">Feel free to reach us through any of the following methods:</p>
            <div class="flex flex-col items-center space-y-6 md:flex-row md:space-x-12 md:space-y-0 justify-center">
                <div class="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7l4 4m0 0l4-4m-4 4v10"></path>
                    </svg>
                    <span class="text-lg">+91 999-999-9999</span>
                </div>
                <div class="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7 4 7-4M3 12l7 4 7-4m0 0v4m-7 4V8"></path>
                    </svg>
                    <span class="text-lg">doc4u@gmail.com</span>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact
