import React from 'react'

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-primary-800 text-white p-4">
        <h1 className="text-2xl font-bold">St. Xavier School</h1>
      </header>
      
      <main className="flex-grow p-8">
        <section className="py-20 bg-blue-100 text-center rounded-lg">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">Welcome to St. Xavier School</h2>
          <p className="text-xl text-secondary-700">Landing page sections are being built...</p>
        </section>
      </main>

      <footer className="bg-secondary-900 text-white p-4 text-center">
        <p>&copy; 2024 St. Xavier School. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
