import AnimatedTestimonials from "../components/ui/animated-testimonials";

export function OurHeads() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Badri amouri",
      designation: "dev&technical lead at SkillTell",
      src: "src/assets/man3.avif",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/sarahchen",
        gmail: "mailto:sarahchen@example.com",
        instagram: "https://www.instagram.com/sarahchen",
      },
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "src/assets/man2.avif",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/michaelrodriguez",
        gmail: "mailto:michaelrodriguez@example.com",
        instagram: "https://www.instagram.com/michaelrodriguez",
      },
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "src/assets/man3.avif",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/emilywatson",
        gmail: "mailto:emilywatson@example.com",
        instagram: "https://www.instagram.com/emilywatson",
      },
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "src/assets/man4.avif",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/jameskim",
        gmail: "mailto:jameskim@example.com",
        instagram: "https://www.instagram.com/jameskim",
      },
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "src/assets/man.avif",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/lisathompson",
        gmail: "mailto:lisathompson@example.com",
        instagram: "https://www.instagram.com/lisathompson",
      },
    },
  ];

  return (
    <div className=" bg-[#1a0132] h-screen flex flex-col items-center justify-center ">
      <h1 className="text-[96px] text-white">Our Heads</h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
