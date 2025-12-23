import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* About Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              Aspiring Full-Stack Developer | MCA Graduate | Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m a passionate software developer with a strong interest in
              building user-friendly web and mobile applications. I enjoy
              learning new technologies and turning ideas into real-world
              projects through hands-on practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and modern websites using HTML, CSS,
                    React, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>

            {/* UI / UX */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI / UX Design</h4>
                  <p className="text-muted-foreground">
                    Creating clean and simple user interfaces with a focus on
                    usability and user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects & Learning */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects & Learning</h4>
                  <p className="text-muted-foreground">
                    Working on academic and personal projects to improve
                    problem-solving and development skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section (Added inside About) */}
        <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          <span className="text-primary">Education</span>
        </h3>

        <div className="grid grid-cols-1 gap-8">
          {/* MCA */}
          <div className="gradient-border p-6 card-hover">
            <h4 className="text-xl font-semibold mb-1">
              Master of Computer Applications (MCA)
            </h4>

            <p className="text-primary text-sm mb-3">
              PSG College Of Technology · 2023 – 2025
            </p>

            <p className="text-muted-foreground">
              Focused on software development and computer applications.
              Gained knowledge in Java, web technologies, databases, and
              application development through coursework and projects.
            </p>
          </div>

          {/* BSc Mathematics */}
          <div className="gradient-border p-6 card-hover">
            <h4 className="text-xl font-semibold mb-1">
              Bachelor of Science (B.Sc) – Mathematics
            </h4>

            <p className="text-primary text-sm mb-3">
              Government Arts and Science College for Men · 2019 – 2022
            </p>

            <p className="text-muted-foreground">
              Built a strong foundation in mathematical concepts, logical
              reasoning, and analytical thinking. Developed interest in
              programming and problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
