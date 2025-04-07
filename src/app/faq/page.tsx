import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our IT staffing and services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">For Employers</h2>
            <Accordion type="single" collapsible className="mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger>How quickly can you find candidates?</AccordionTrigger>
                <AccordionContent>
                  For most positions, we can present qualified candidates within 1-2 weeks. For urgent needs or
                  specialized roles, we will work with you to establish a realistic timeline. Our extensive network and
                  database of pre-screened candidates often allows us to move quickly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What types of IT roles do you fill?</AccordionTrigger>
                <AccordionContent>
                  We specialize in a wide range of IT positions, from developers and engineers to project managers and
                  executives. Our expertise spans across various technologies and industries, including software
                  development, cloud infrastructure, cybersecurity, data science, and IT management.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What is your fee structure?</AccordionTrigger>
                <AccordionContent>
                  Our fees vary based on the type of placement (contract vs. permanent) and the complexity of the role.
                  We are transparent about our pricing and will provide detailed information during our initial
                  consultation. For contract positions, we typically charge a markup on the hourly rate, while permanent
                  placements usually involve a percentage of the first-year salary.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do you screen candidates?</AccordionTrigger>
                <AccordionContent>
                  Our screening process includes technical assessments, behavioral interviews, reference checks, and
                  skills verification. We tailor our approach to each role to ensure candidates have both the technical
                  qualifications and soft skills needed for success in your specific environment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer any guarantees?</AccordionTrigger>
                <AccordionContent>
                  Yes, we stand behind our placements with a satisfaction guarantee. For permanent placements, we offer
                  a replacement guarantee period (typically 90 days). If a placed candidate does not work out during this
                  period, we will find a replacement at no additional cost.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-2xl font-bold mb-8">For Job Seekers</h2>
            <Accordion type="single" collapsible className="mb-12">
              <AccordionItem value="item-6">
                <AccordionTrigger>Is there a fee for job seekers?</AccordionTrigger>
                <AccordionContent>
                  No, our services are completely free for job seekers. We are paid by the companies that hire through
                  us. You will never be charged for our placement services or career guidance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>How long does the placement process take?</AccordionTrigger>
                <AccordionContent>
                  The timeline varies depending on the position and client needs. Some placements happen within days,
                  while others may take a few weeks, especially for senior roles. We work to keep you informed
                  throughout the process and move as quickly as possible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>What happens after I submit my resume?</AccordionTrigger>
                <AccordionContent>
                  Our recruiters will review your qualifications and reach out if there is a potential match. We will
                  discuss your career goals and preferences before presenting any opportunities. If we dont have an
                  immediate match, we will keep your resume on file and contact you when relevant positions become
                  available.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>Do you offer career guidance?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide resume review, interview preparation, and career advice to help you succeed. Our
                  recruiters have industry experience and can offer valuable insights on market trends, in-demand
                  skills, and salary expectations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>What types of positions do you offer?</AccordionTrigger>
                <AccordionContent>
                  We work with a variety of IT positions including contract, permanent, and contract-to-hire roles. Our
                  opportunities range from entry-level to executive positions across various IT disciplines and
                  industries.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-2xl font-bold mb-8">About Our IT Services</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-11">
                <AccordionTrigger>What IT services do you provide?</AccordionTrigger>
                <AccordionContent>
                  We offer a range of IT services including managed IT support, cloud solutions, custom software
                  development, cybersecurity services, and IT consulting. Our team can help with everything from
                  day-to-day technical support to complex digital transformation projects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-12">
                <AccordionTrigger>How are your IT services priced?</AccordionTrigger>
                <AccordionContent>
                  Our pricing models vary based on the service. We offer fixed-price projects, monthly service
                  retainers, and hourly billing options. During our initial consultation, we will discuss your needs and
                  recommend the most appropriate pricing structure for your situation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-13">
                <AccordionTrigger>Can you support businesses of any size?</AccordionTrigger>
                <AccordionContent>
                  Yes, we work with businesses of all sizes, from startups to enterprise organizations. Our services are
                  scalable and can be tailored to meet the specific needs and budget constraints of your organization.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-14">
                <AccordionTrigger>Do you offer emergency IT support?</AccordionTrigger>
                <AccordionContent>
                  Yes, for our managed service clients, we offer emergency IT support with guaranteed response times. We
                  understand that IT issues can be critical to your business operations and strive to resolve problems
                  quickly and efficiently.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-15">
                <AccordionTrigger>How do you ensure quality in your IT services?</AccordionTrigger>
                <AccordionContent>
                  We maintain high standards through rigorous quality assurance processes, regular training for our
                  technical staff, and adherence to industry best practices. We also collect client feedback regularly
                  and use it to continuously improve our services.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized assistance with your IT staffing or service needs.
          </p>
          <Button size="lg" className="text-white bg-blue-600 hover:bg-blue-400">Contact Us</Button>
        </div>
      </section>
    </>
  )
}

