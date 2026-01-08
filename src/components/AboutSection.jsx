import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I’m an IT student and full-stack developer passionate about building
              meaningful digital products. With hands-on experience using
              JavaScript, Python, React, Node.js, and modern databases, I enjoy
              creating applications that are fast, reliable, and user-friendly.
            </p>

            <p className="text-muted-foreground">
              Beyond development, I actively sharpen my problem-solving skills
              through competitive programming and collaborative projects.
              Whether it’s crafting scalable features, designing backend
              systems, or working in cloud environments, I aim to turn ideas
              into impactful solutions through clean code and teamwork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1a-LnJ0HxPOkDHkz8tSsItVtedz6GF_kk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* cards unchanged */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable web applications using React, Node.js,
                    Express, REST APIs, MongoDB, and SQL.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Team Collaboration</h4>
                  <p className="text-muted-foreground">
                    Active contributor in engineering clubs solving real-world
                    challenges with modern frameworks and tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Leadership & Growth</h4>
                  <p className="text-muted-foreground">
                    Leading 70+ students as a class representative while
                    completing internships and cloud certifications from AWS &
                    Google.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
