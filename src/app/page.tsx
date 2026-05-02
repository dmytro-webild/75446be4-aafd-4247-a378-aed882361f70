"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Calendar, Globe, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="eSMS Africa"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardGallery
      background={{
        variant: "radial-gradient",
      }}
      title="SMS Solutions for Africa"
      description="Enterprise-grade messaging platform designed for scale across the continent. Reliable, fast, and secure SMS API."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fantasy-house-moon-illustration_23-2151627870.jpg?_wi=1",
          imageAlt: "Dashboard UI",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-web-graphic-computer-element_1127-2398.jpg",
          imageAlt: "Network Connectivity",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/smartphone-with-opened-ai-chat-it_1268-21624.jpg",
          imageAlt: "Mobile Messaging",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/worker-holding-device-with-greenscreen_482257-76711.jpg",
          imageAlt: "Dashboard UI 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-tech-view-futuristic-earth_23-2151100372.jpg",
          imageAlt: "Connectivity 2",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Scale and Impact"
      tag="Live Performance"
      metrics={[
        {
          id: "m1",
          value: "99.9%",
          description: "Delivery Success Rate",
        },
        {
          id: "m2",
          value: "50M+",
          description: "Monthly Messages Sent",
        },
        {
          id: "m3",
          value: "15+",
          description: "African Countries Covered",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Seamless API Integration",
          description: "Get up and running in minutes with our documented REST API.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/artistic-background-wallpaper-with-color-halftone-effect_58702-8891.jpg",
            imageAlt: "Code Snippet",
          },
          items: [
            {
              text: "Comprehensive SDKs",
            },
            {
              text: "Real-time Analytics",
            },
            {
              text: "High Throughput",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/fantasy-house-moon-illustration_23-2151627870.jpg?_wi=2",
          imageAlt: "code editor software interface",
        },
      ]}
      title="Developer Friendly Features"
      description="Everything you need to integrate professional SMS messaging into your product."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Mission Driven Connectivity"
      metrics={[
        {
          label: "Founded",
          value: "2018",
          icon: Calendar,
        },
        {
          label: "Countries",
          value: "15+",
          icon: Globe,
        },
        {
          label: "Clients",
          value: "500+",
          icon: Users,
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "start",
          badge: "Entry",
          price: "$0.02",
          subtitle: "Per message for volume",
          buttons: [
            {
              text: "Get Started",
              href: "#contact",
            },
          ],
          features: [
            "Basic API Access",
            "Email Support",
            "Standard Delivery",
          ],
        },
        {
          id: "pro",
          badge: "Business",
          price: "$0.01",
          subtitle: "Per message for scaling",
          buttons: [
            {
              text: "Contact Sales",
              href: "#contact",
            },
          ],
          features: [
            "Advanced API Access",
            "Priority Support",
            "Dedicated Routes",
            "Analytics Dashboard",
          ],
        },
      ]}
      title="Flexible Pricing Plans"
      description="Choose the volume that fits your business needs perfectly."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah O.",
          role: "CEO",
          company: "TechStream",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-man-smiling-portrait_23-2149280768.jpg",
        },
        {
          id: "2",
          name: "David M.",
          role: "CTO",
          company: "Innovate Lab",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-with-curly-hair-isolated_273609-48192.jpg",
        },
        {
          id: "3",
          name: "Emily K.",
          role: "PM",
          company: "Growth Co",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/classic-studio-portrait-black-american-male-dressed-suit-grey-vignette-background_613910-9558.jpg",
        },
        {
          id: "4",
          name: "John B.",
          role: "Dev",
          company: "App Works",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-successful-businessman-standing-restaurant-with-crossed-arm_23-2147955259.jpg",
        },
        {
          id: "5",
          name: "Alice T.",
          role: "CEO",
          company: "Net Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/waist-up-confident-businessman-office_329181-19349.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "5.0",
          label: "Avg Rating",
        },
        {
          value: "100+",
          label: "Projects",
        },
        {
          value: "99.9%",
          label: "Uptime",
        },
      ]}
      title="Trusted by Leaders"
      description="Hear what our partners have to say about our reliability."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get In Touch"
      description="Ready to integrate eSMS into your workflow? Contact us today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/global-communication-phone-wallpaper-business-network-design_53876-160272.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="eSMS Africa"
      columns={[
        {
          title: "Platform",
          items: [
            {
              label: "API Docs",
              href: "#",
            },
            {
              label: "Status",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
