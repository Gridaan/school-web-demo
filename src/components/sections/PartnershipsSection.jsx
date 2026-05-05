import React from 'react'
import { Container } from '../common'

const partners = [
  {
    id: 'promoted',
    label: 'Promoted By',
    name: 'St. Xavier',
    accent: 'bg-[#1d4f91]',
    description: 'Institutional support and vision',
  },
  {
    id: 'collaboration',
    label: 'Academic Collaboration',
    name: 'Shri Educare',
    accent: 'bg-[#1f7aaf]',
    description: 'Learning partnership and guidance',
  },
  {
    id: 'affiliation',
    label: 'Affiliated to CBSE',
    name: '1130643',
    accent: 'bg-[#0c8b6f]',
    description: 'Recognized curriculum affiliation',
  },
  {
    id: 'minority',
    label: 'Linguistic Minority',
    name: 'Status',
    accent: 'bg-[#f2b318]',
    description: 'Institutional identity badge',
  },
]

function LogoBadge({ accent, name }) {
  return (
    <div className={`flex h-20 w-20 items-center justify-center rounded-full ${accent} shadow-lg`}>
      <div className="h-14 w-14 rounded-full border border-white/70 bg-white/15 backdrop-blur-sm flex items-center justify-center text-center text-[13px] font-extrabold text-black leading-tight">
        {name}
      </div>
    </div>
  )
}

function PartnershipsSection() {
  return (
    <section className="bg-[#f1f2f4] py-12 md:py-16">
      <Container size="lg">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-white/80 px-5 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm md:px-8 md:py-10">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary-500">Key Associations & Partnerships</p>
            <h2 className="mt-3 text-3xl font-bold font-serif text-secondary-900 md:text-4xl">Trusted affiliations that shape our identity</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex h-56 flex-col items-center rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-secondary-500">{partner.label}</p>

                <div className="flex-1 flex items-center justify-center">
                  <LogoBadge accent={partner.accent} name={partner.name} />
                </div>

                <div className="mt-3">
                  <p className="text-lg font-extrabold text-secondary-900">{partner.name}</p>
                  <p className="mt-1 text-sm leading-6 text-secondary-700">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PartnershipsSection
