import React, { useState } from 'react'
import { FiPlus, FiSave, FiTrash2, FiArrowRight } from 'react-icons/fi'
import {
  Button,
  Card,
  Badge,
  Container,
  Spinner,
  Icon,
  Toast,
  Modal,
} from '../components/common'
import { SectionHeader, FeatureSection, GridContainer } from '../components/sections'
import FormField from '../components/forms/FormField'

/**
 * Component Demo Page
 * Showcase of all reusable components
 */
function ComponentsDemo() {
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState('success')

  const handleShowToast = (type) => {
    setToastType(type)
    setShowToast(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container size="lg" className="space-y-20">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-secondary-900 mb-4">
            Component Showcase
          </h1>
          <p className="text-lg text-secondary-700">
            All reusable components used in the landing page
          </p>
        </div>

        {/* Section: Buttons */}
        <section>
          <SectionHeader
            title="Buttons"
            description="Various button variants and sizes"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="text">Text Button</Button>
            <Button variant="danger">Danger Button</Button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>

          <div className="mt-8 flex gap-4">
            <Button isLoading>Loading State</Button>
            <Button disabled>Disabled</Button>
            <Button fullWidth>Full Width Button</Button>
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Button icon={FiPlus} size="md">
              With Icon
            </Button>
            <Button icon={FiSave} iconPosition="right">
              Icon Right
            </Button>
          </div>
        </section>

        {/* Section: Cards */}
        <section>
          <SectionHeader
            title="Cards"
            description="Card components with various configurations"
          />
          <GridContainer columns={3}>
            <Card shadow="md">
              <Card.Header title="Card Title" subtitle="Optional subtitle" />
              <Card.Body>
                This is card content with flexible body section.
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="text">Learn More</Button>
              </Card.Footer>
            </Card>

            <Card shadow="lg" hoverEffect>
              <Card.Body className="p-6">
                <h3 className="text-lg font-semibold mb-2">Hover Card</h3>
                <p className="text-secondary-700">
                  This card has hover effect
                </p>
              </Card.Body>
            </Card>

            <Card border shadow="sm">
              <Card.Body className="p-6">
                <h3 className="text-lg font-semibold mb-2">Bordered Card</h3>
                <p className="text-secondary-700">
                  Card with subtle border
                </p>
              </Card.Body>
            </Card>
          </GridContainer>
        </section>

        {/* Section: Badges */}
        <section>
          <SectionHeader
            title="Badges"
            description="Status indicators and labels"
          />
          <div className="flex flex-wrap gap-4">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="gold">Gold</Badge>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </section>

        {/* Section: Spinners */}
        <section>
          <SectionHeader
            title="Spinners"
            description="Loading indicators"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Spinner size="sm" label="Small" />
            <Spinner size="md" label="Medium" />
            <Spinner size="lg" label="Large" />
            <Spinner size="xl" label="Extra Large" />
          </div>
        </section>

        {/* Section: Form Fields */}
        <section>
          <SectionHeader
            title="Form Fields"
            description="Input components with validation"
          />
          <div className="max-w-2xl space-y-6">
            <FormField
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
            <FormField
              label="Email"
              type="email"
              placeholder="your@email.com"
              required
              helperText="We'll never share your email"
            />
            <FormField
              label="Message"
              type="textarea"
              placeholder="Your message here..."
              error="This field is required"
            />
            <FormField
              label="Phone"
              type="tel"
              placeholder="+91 9XXXXXXXXX"
            />
          </div>
        </section>

        {/* Section: Section Header */}
        <section>
          <SectionHeader
            title="Section Headers"
            subtitle="Subtitles"
            description="Headers with various alignment options"
          />
          <div className="space-y-8">
            <SectionHeader
              title="Left Aligned"
              alignment="left"
              description="Description text goes here"
            />
            <SectionHeader
              title="Center Aligned"
              alignment="center"
              description="This is centered with a decorative line"
            />
          </div>
        </section>

        {/* Section: Feature Section */}
        <section>
          <SectionHeader title="Feature Sections" />
          <FeatureSection
            subtitle="ABOUT US"
            title="Our Mission"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
            image="https://images.unsplash.com/photo-1427504494785-cddb76c0fa41?w=500&h=500&fit=crop"
            imageAlt="Feature"
            imagePosition="right"
            cta={<Button icon={FiArrowRight} iconPosition="right">Learn More</Button>}
          />
        </section>

        {/* Section: Grid Container */}
        <section>
          <SectionHeader
            title="Grid Layouts"
            description="Responsive grid containers"
          />
          <GridContainer columns={3}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <p className="font-semibold">Item {item}</p>
              </div>
            ))}
          </GridContainer>
        </section>

        {/* Section: Modals & Toasts */}
        <section>
          <SectionHeader
            title="Modals & Toasts"
            description="Dialog and notification components"
          />
          <div className="space-y-4">
            <Button onClick={() => setShowModal(true)}>
              Open Modal
            </Button>
            <div className="flex gap-4 flex-wrap">
              <Button
                variant="success"
                onClick={() => handleShowToast('success')}
              >
                Show Success Toast
              </Button>
              <Button
                variant="danger"
                onClick={() => handleShowToast('error')}
              >
                Show Error Toast
              </Button>
              <Button onClick={() => handleShowToast('warning')}>
                Show Warning Toast
              </Button>
              <Button onClick={() => handleShowToast('info')}>
                Show Info Toast
              </Button>
            </div>
          </div>
        </section>

        {/* Section: Icons */}
        <section>
          <SectionHeader
            title="Icons"
            description="Icon component wrapper"
          />
          <div className="flex gap-6 flex-wrap">
            <Icon icon={FiPlus} size="md" color="primary" />
            <Icon icon={FiSave} size="lg" color="success" />
            <Icon icon={FiTrash2} size="xl" color="error" />
            <Icon icon={FiArrowRight} size="2xl" color="accent" />
          </div>
        </section>
      </Container>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Example Modal"
        size="md"
        footer={
          <>
            <Button
              variant="secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setShowModal(false)}>
              Confirm
            </Button>
          </>
        }
      >
        <p className="text-secondary-700">
          This is an example modal. Click outside or press ESC to close.
        </p>
      </Modal>

      {/* Toast */}
      {showToast && (
        <Toast
          message={`This is a ${toastType} notification!`}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  )
}

export default ComponentsDemo
