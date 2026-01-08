import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
  Brand,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Andrew",
  lastName: "Apodaca",
  name: "Andrew Apodaca",
  role: "Software Engineer",
  avatar: "/images/avatars/andrew.png",
  email: "andy.apod@gmail.com",
  timezone: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  location: "Nashville, TN",
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DevTrapz",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/andrew-apodaca/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Discord",
    icon: "discord",
    link: `https://discord.com/channels/@me/trapzck/`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between technology and people</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Andrew, a
      <Text as="span" size="xl" weight="strong">
        {" "}
        software engineer{" "}
      </Text>
      building solutions for businesses and making technology simple.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.timezone}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/dgap1AU5zKy5BiQv9",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Andrew is a Software Engineer helping businesses streamline CRM
        operations, develop online portals, and integrate their data systems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Denari Software",
        timeframe: "2025 - Present",
        role: "Software Engineer",
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "GraphQL",
            icon: "graphql",
          },
        ],
        achievements: [
          <>
            Developed a monday.com app that allows users to select multiple
            items for bulk actions, integrating with their external systems
            using React, JavaScript, Vibe Design System, GraphQL, and Webhooks.
          </>,
          <>
            Engineered complex, cross-account data integrations for monday
            clients, connecting their workspaces with an external SQL server
            using make.com, JavaScript, GraphQL, and Webhooks.
          </>,
          <>
            Developed email & activities integration for monday CRM for emails
            sent from an external service that attaches the full HTML email
            content to CRM contacts.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Avery Automations",
        timeframe: "2025 - Present",
        role: "Solutions Engineer",
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "GraphQL",
            icon: "graphql",
          },
        ],
        achievements: [
          <>
            Consulted 10+ business clients to analyze complex system
            requirements and architect comprehensive, tailored solutions across
            CRM, integration, and custom web apps.
          </>,
          <>
            Engineered robust, full-stack solutions for Ontraport CRM clients,
            leveraging React, JavaScript, RSS/Webhooks APIs, and Google Cloud to
            resolve critical operational limitations.
          </>,
          <>
            Enhanced project delivery efficiency by developing a custom Project
            Management System (PMS) on monday.com with advanced GraphQL
            integrations, resulting in a 25% reduction in project delivery time.
          </>,
        ],
        images: [],
      },
      {
        company: "Support Pets",
        timeframe: "Aug 2025 - Present",
        role: "Software Contractor",
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
        ],
        achievements: [
          <>
            The existing subscription renewal process was insecure, provided a
            poor user experience, and had a high failure rate, which directly
            led to low customer retention rates.
          </>,
          <>
            Designed a solution to secure the one-click resubscribe payment
            processor utilizing Node.js, Express, WebSockets, Docker, and AWS
            ECS to integrate seamlessly with their CRM.
          </>,
          <>
            Consulted on strategic feature expansion for family-based
            subscriptions, scoping the technical requirements for CRM data
            modeling and billing logic to support new user roles and access
            permissions.
          </>,
        ],
        images: [],
      },
      {
        company: "Center for Intuitive Education",
        timeframe: "Nov 2025 - Present",
        role: "Software Contractor ( Frontend )",
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Docker",
            icon: "docker",
          },
        ],
        achievements: [
          <>
            The core product utilised an unreliable document generator that
            frequently went offline, was uneditable, and prevented their
            students from printing out critical documents.
          </>,
          <>
            Developed a web app that integrated with their education platform to
            reliably generate the document for download.
          </>,
          <>
            Restored critical document access for all students, boosting system
            availability from 25% to 100% while providing the flexibility for
            users to edit and download essential documents.
          </>,
        ],
        images: [],
      },
      {
        company: "Brand Financial Training",
        timeframe: "Jun 2025 - Nov 2025",
        role: "Software Contractor ( Backend )",
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Zapier",
            icon: "zapier",
          },
          {
            name: "RSS",
            icon: "rss",
          },
        ],
        achievements: [
          <>
            The business was relying on a costly external email service to
            compensate for a missing CRM feature, resulting in fragmented
            subscriber management.
          </>,
          <>
            Engineered a custom backend API to integrate the website's RSS feed
            directly with the CRM, providing seamless, automated email
            subscription updates without the need for an expensive third-party
            service.
          </>,
          <>
            The solution centralised contact and subscriber management in a
            single CRM service, reducing complexity and saving the business $600
            per month in expenses.
          </>,
        ],
        images: [],
      },
      {
        company: "Brightside Chiropractor",
        timeframe: "Aug 2025 - Oct 2025",
        role: "Software Contractor ( Backend )",
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
        ],
        achievements: [
          <>
            The online scheduling system had been offline for months, resulting
            in patient loss and the need for manual scheduling via phone calls.
          </>,
          <>
            Troubleshooted and restored the full functionality of the frontend
            scheduling system using JavaScript, HTML, and CSS.
          </>,
          <>
            Restored system availability from 0% to 100%, which streamlined
            patient scheduling and led to a 30% increase in appointments.
          </>,
        ],
        images: [],
      },
      {
        company: "Monday Man",
        timeframe: "Jun 2023 - Mar 2024",
        role: "Software Contractor ( Frontend  )",
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Monday",
            icon: "monday",
          },
        ],
        achievements: [
          <>
            The core product was being administered on a monday.com board that
            lacked real-time data, complete user information, and required
            manual updates.
          </>,
          <>
            Developed a custom monday.com app for subscription management using
            React, JavaScript, TypeScript, and Vibe Design System.
          </>,
          <>
            Streamlined subscription management operations by providing a
            platform to track customer subscriptions, search and filtering
            tools, and insights on usage, payments, and other vital data.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Western Govonors University",
        description: <>B.S. Software Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const brand: Brand = {
  display: true,
  image: "/images/dev-atomics-logo.svg",
  name: "Dev Atomics",
};

export { person, social, newsletter, home, about, blog, work, gallery, brand };
