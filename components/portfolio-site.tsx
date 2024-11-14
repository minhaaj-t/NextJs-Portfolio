"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Home,
  Code2,
  Briefcase,
  Mail,
  Github,
  ExternalLink,
  MessageSquare,
  Star,
  Laptop,
  Link2,
  X,
  CheckCircle,
  ImageIcon,
  Maximize2,
  WifiOff,
  Moon,
  Sun,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export function PortfolioSiteComponent() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOnline, setIsOnline] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const logoSliderRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const slider = logoSliderRef.current;
    let animationId;

    const animate = () => {
      if (slider) {
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += 1;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/minhajt.uae@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setIsMessageSent(true);
        reset();
        setTimeout(() => setIsMessageSent(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      type: "Full-stack Application",
      image: "https://i.postimg.cc/TYsc8pBy/e-commerce-web-exploration.jpg",
      description:
        "A modern e-commerce platform built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://example.com/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      type: "Web Application",
      image: "https://i.postimg.cc/QtjQg5Kz/Task-Management-App.jpg",
      description:
        "A collaborative task management application with real-time updates.",
      technologies: ["Vue.js", "Firebase", "Vuex", "Element UI"],
      link: "https://example.com/taskmanager",
    },
    {
      id: 3,
      title: "Weather Forecast App",
      type: "Mobile Application",
      image: "https://i.postimg.cc/Wbx0WxJg/Mobile-application-Weather-App.jpg",
      description:
        "A cross-platform mobile app that provides accurate weather forecasts.",
      technologies: [
        "React Native",
        "Redux",
        "OpenWeatherMap API",
        "Google Maps API",
      ],
      link: "https://example.com/weatherapp",
    },
  ];

  const skills = [
    { name: "Laravel", level: 90 },
    { name: "React js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "React Native", level: 75 },
    { name: "WordPress", level: 75 },
    { name: "SQL", level: 70 },
    { name: "Python", level: 70 },
    { name: "C, C++ & C#", level: 70 },
  ];

  const faqQuestions = [
    {
      question:
        "What's your approach to problem-solving in software development?",
      answer:
        "I follow a systematic approach: understand the problem, break it down into smaller tasks, research potential solutions, implement, test, and iterate. I also value collaboration and often discuss complex problems with team members.",
    },
    {
      question:
        "How do you stay updated with the latest technologies and trends?",
      answer:
        "I regularly read tech blogs, participate in online courses, attend webinars and conferences, and contribute to open-source projects. I also experiment with new technologies in side projects to gain hands-on experience.",
    },
    {
      question:
        "Can you describe a challenging project you've worked on and how you overcame the obstacles?",
      answer:
        "In a recent e-commerce project, we faced performance issues with a large product catalog. I implemented lazy loading, optimized database queries, and used Redis for caching, which improved load times by 60%. Communication and teamwork were key in identifying and resolving these issues.",
    },
    {
      question:
        "How do you ensure code quality and maintainability in your projects?",
      answer:
        "I follow clean code principles, use consistent naming conventions, and write comprehensive unit tests. I also conduct regular code reviews, use static code analysis tools, and document my code thoroughly. Version control and CI/CD pipelines are essential in my workflow.",
    },
    {
      question:
        "How do you handle disagreements within a team about technical decisions?",
      answer:
        "I believe in open and respectful communication. When disagreements arise, I listen to all perspectives, focus on objective criteria, and try to find a consensus. If needed, I'm not afraid to build prototypes or proofs of concept to evaluate different approaches empirically.",
    },
  ];

  const logos = [
    { name: "React", url: "https://i.postimg.cc/02jvNBj6/20220522-094110.png" },
    { name: "Vue", url: "https://i.postimg.cc/02jvNBj6/20220522-094110.png" },
    {
      name: "Angular",
      url: "https://i.postimg.cc/J7PmMLrV/20221023-130029.png",
    },
    {
      name: "Node.js",
      url: "https://i.postimg.cc/02jvNBj6/20220522-094110.png",
    },
    {
      name: "Python",
      url: "https://i.postimg.cc/J7PmMLrV/20221023-130029.png",
    },
    {
      name: "MongoDB",
      url: "https://i.postimg.cc/J7PmMLrV/20221023-130029.png",
    },
  ];

  const careerGapData = [
    { name: "Career", value: 100 },
    { name: "Gap", value: 0 },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsImageModalOpen(true);
  };

  const careerContent = {
    experience: [
      {
        role: "IT Engineer",
        company: "Ayenz Group of Companies",
        period: "2024 - Present",
        description:
          "Led development of scalable web applications, mentored junior developers, and implemented CI/CD pipelines.",
        skills: ["React", "Node.js", "AWS"],
      },
      {
        role: "Full Stack Developer",
        company: "Arkanet Technologies",
        period: "2023 - 2024",
        description:
          "Developed and maintained multiple web applications, worked in an agile environment, and contributed to architecture decisions.",
        skills: ["Vue.js", "Python", "Docker"],
      },
    ],
    education: [
      {
        degree: "B.Tech - Computer Science & Engineering",
        institution: "STM Kannur",
        year: "2023",
      },
      {
        degree: "Higher Secondary - Computer Science",
        institution: "S.I Hss Calicut",
        year: "2019",
      },
      {
        degree: "High School",
        institution: "N.A.M Hss Kannur",
        year: "2017",
      },
    ],
    certificates: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2022",
      },
      {
        name: "Google Cloud Professional Developer",
        issuer: "Google",
        year: "2021",
      },
    ],
    extraCurricular: [
      {
        activity: "Open Source Contributor",
        description: "Active contributor to React and Node.js ecosystems",
      },
      {
        activity: "Tech Meetup Organizer",
        description: "Organize monthly meetups for local developer community",
      },
    ],
    awards: [
      {
        name: "Best Innovation Award",
        issuer: "TechCorp Annual Hackathon",
        year: "2023",
      },
      {
        name: "Outstanding Performance",
        issuer: "StartUp Inc",
        year: "2020",
      },
    ],
  };

  const achievements = [
    { name: "Arctic Code Vault Contributor", icon: Star },
    { name: "Pull Shark", icon: Github },
    { name: "YOLO", icon: Laptop },
  ];

  const googleBadges = [
    {
      name: "Android Studio User",
      icon: "https://developers.google.com/static/profile/badges/activity/android/install-android-studio/badge.svg",
    },
    {
      name: "Completed 1+ Codelab",
      icon: "https://developers.google.com/static/profile/badges/codelabs/first-codelab/badge.svg",
    },
    {
      name: "Firebase and Flutter",
      icon: "https://developers.google.com/static/profile/badges/playlists/firebase/add_firebase_to_flutter/firebase-flutter.svg",
    },
    {
      name: "Learning Pathway",
      icon: "https://developers.google.com/static/profile/badges/playlists/first-playlist/badge.svg",
    },
  ];

  const photoGallery = [
    {
      id: 1,
      title: "Sunset at the Beach",
      url: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      title: "Mountain Landscape",
      url: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      title: "City Skyline",
      url: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      title: "Forest Trail",
      url: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      title: "Starry Night Sky",
      url: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      title: "Autumn Colors",
      url: "/placeholder.svg?height=300&width=300",
    },
  ];

  const content = {
    home: (
      <div className="space-y-8">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-950 p-1">
                  <image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qq.JPG-v2KirEmlsacwk1voYxyjaqu7fRyt7I.jpeg"
                    alt="Profile"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-950" />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Muhammed Minhaj Mahroof
              </h1>
              <p className="text-xl sm:text-2xl text-blue-400">
                Senior Full Stack Developer
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 text-sm sm:text-base py-1 px-3">
                React
              </Badge>
              <Badge className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 text-sm sm:text-base py-1 px-3">
                Laravel
              </Badge>
              <Badge className="bg-green-500/10 text-green-400 hover:bg-green-500/20 text-sm sm:text-base py-1 px-3">
                Wordpress
              </Badge>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                About Me
              </h2>
              <p className="text-slate-300 text-lg sm:text-xl">
                Full-stack developer with 5+ years of experience building
                scalable web applications. Passionate about clean code, user
                experience, and building products that make a difference.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/minhaaj-t"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/i-yam-three"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700"
                  >
                    <Link2 className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  50+
                </h3>
                <p className="text-slate-300 text-lg sm:text-xl">Projects</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  5+
                </h3>
                <p className="text-slate-300 text-lg sm:text-xl">Years</p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden bg-slate-800 rounded-lg p-4">
            <div ref={logoSliderRef} className="flex whitespace-nowrap">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <image
                  key={index}
                  src={logo.url}
                  alt={logo.name}
                  className="h-12 mx-4 grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-lg sm:text-xl font-medium text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-lg sm:text-xl font-medium text-slate-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Career Overview
              </h2>
              <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={careerGapData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {careerGapData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#0088FE] rounded-full mr-2"></div>
                  <span className="text-lg sm:text-xl text-slate-300">
                    Career (100%)
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#00C49F] rounded-full mr-2"></div>
                  <span className="text-lg sm:text-xl text-slate-300">
                    Gap (0%)
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                GitHub Achievements
              </h2>
              <div className="flex flex-wrap gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-slate-700 rounded-full px-4 py-2"
                  >
                    <achievement.icon className="w-6 h-6 text-yellow-400" />
                    <span className="text-lg sm:text-xl text-slate-300">
                      {achievement.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Google Developer Badges
              </h2>
              <div className="flex flex-wrap gap-4">
                {googleBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-slate-700 rounded-lg p-2"
                  >
                    <image
                      src={badge.icon}
                      alt={badge.name}
                      className="w-10 h-10"
                    />
                    <span className="text-lg sm:text-xl text-slate-300">
                      {badge.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    ),

    projects: (
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Featured Projects
        </h2>
        {projects.map((project) => (
          <ScrollReveal key={project.id}>
            <Card className="bg-slate-800 border-slate-700 overflow-hidden hover:border-slate-600 transition-colors shadow-lg">
              <CardContent className="p-0">
                <image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-slate-300">
                        {project.type}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-300 hover:text-white hover:bg-slate-700"
                        onClick={() => openImageModal(project.image)}
                      >
                        <Maximize2 className="w-5 h-5" />
                        <span className="sr-only">View full image</span>
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-slate-300 hover:text-white hover:bg-slate-700"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span className="sr-only">
                              View project details
                            </span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] bg-slate-800 text-white">
                          <DialogHeader>
                            <DialogTitle className="text-2xl sm:text-3xl">
                              {project.title}
                            </DialogTitle>
                            <DialogDescription className="text-slate-300 text-lg sm:text-xl">
                              {project.type}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <image
                              src={project.image}
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-slate-300 text-lg sm:text-xl">
                              {project.description}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                              {project.technologies.map((tech, index) => (
                                <Badge
                                  key={index}
                                  className="bg-slate-700 text-slate-300 py-1 px-3 text-sm sm:text-base"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <Button
                              className="w-full text-lg sm:text-xl"
                              onClick={() =>
                                window.open(project.link, "_blank")
                              }
                            >
                              <ExternalLink className="w-5 h-5 mr-2" />
                              View Project
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <p className="text-slate-300 text-lg sm:text-xl">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        className="bg-slate-700 text-slate-300 py-1 px-3 text-sm sm:text-base"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    ),

    career: (
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Career</h2>
        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Experience
              </h3>
              {careerContent.experience.map((job, index) => (
                <div
                  key={index}
                  className="space-y-3 pb-4 border-b border-slate-700 last:border-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-semibold text-white">
                        {job.role}
                      </h4>
                      <p className="text-lg sm:text-xl text-slate-300">
                        {job.company}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-slate-600 text-slate-300 text-sm sm:text-base py-1 px-3"
                    >
                      {job.period}
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-lg sm:text-xl">
                    {job.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {job.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        className="bg-slate-700 text-slate-300 py-1 px-3 text-sm sm:text-base"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Education
              </h3>
              {careerContent.education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-lg sm:text-xl text-slate-300">
                    {edu.institution}
                  </p>
                  <Badge
                    variant="outline"
                    className="border-slate-600 text-slate-300 text-sm sm:text-base py-1 px-3"
                  >
                    {edu.year}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Certificates
              </h3>
              {careerContent.certificates.map((cert, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white">
                    {cert.name}
                  </h4>
                  <p className="text-lg sm:text-xl text-slate-300">
                    {cert.issuer}
                  </p>
                  <Badge
                    variant="outline"
                    className="border-slate-600 text-slate-300 text-sm sm:text-base py-1 px-3"
                  >
                    {cert.year}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Extra Curricular
              </h3>
              {careerContent.extraCurricular.map((activity, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white">
                    {activity.activity}
                  </h4>
                  <p className="text-lg sm:text-xl text-slate-300">
                    {activity.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Awards & Honours
              </h3>
              {careerContent.awards.map((award, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white">
                    {award.name}
                  </h4>
                  <p className="text-lg sm:text-xl text-slate-300">
                    {award.issuer}
                  </p>
                  <Badge
                    variant="outline"
                    className="border-slate-600 text-slate-300 text-sm sm:text-base py-1 px-3"
                  >
                    {award.year}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    ),

    gallery: (
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          My Photographs Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photoGallery.map((photo) => (
            <ScrollReveal key={photo.id}>
              <Card
                className="bg-slate-800 border-slate-700 overflow-hidden hover:border-slate-600 transition-colors shadow-lg cursor-pointer"
                onClick={() => openImageModal(photo.url)}
              >
                <CardContent className="p-0">
                  <image
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-white text-lg sm:text-xl">
                      {photo.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    ),
    contact: (
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Get in Touch
        </h2>
        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                FAQ
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {faqQuestions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-white text-lg sm:text-xl">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 text-lg sm:text-xl">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </ScrollReveal>
        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-6">
              {[
                { icon: Mail, text: "minhajt.uae@gmail.com", action: "Copy" },
                { icon: Github, text: "github.com/minhaaj-t", action: "View" },
                {
                  icon: Link2,
                  text: "linkedin.com/in/i-yam-three",
                  action: "View",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-6 h-6 text-slate-300" />
                    <span className="text-slate-300 text-lg sm:text-xl">
                      {item.text}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-300 hover:text-white text-lg sm:text-xl"
                  >
                    {item.action}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>
        <ScrollReveal>
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for your message. I will get back to you as soon as possible."
                />
                <div>
                  <Input
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                    className="bg-slate-700 border-slate-600 text-white text-lg sm:text-xl"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Your Email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="bg-slate-700 border-slate-600 text-white text-lg sm:text-xl"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="bg-slate-700 border-slate-600 text-white text-lg sm:text-xl"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg sm:text-xl"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
              {isMessageSent && (
                <div className="flex items-center justify-center text-green-500 text-lg sm:text-xl">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Message sent successfully!
                </div>
              )}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    ),
  };

  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "projects", icon: Code2, label: "Projects" },
    { id: "gallery", icon: ImageIcon, label: "Gallery" },
    { id: "career", icon: Briefcase, label: "Career" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You might want to add logic here to change the theme of your entire application
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-slate-950" : "bg-slate-100"
      } min-h-screen pb-20`}
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 left-4 p-2 rounded-full bg-slate-800 text-white z-50 hover:bg-slate-700 transition-colors"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </button>

      {/* Offline Message */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white p-3 text-center z-50">
          <WifiOff className="inline-block w-5 h-5 mr-2" />
          You are offline. Some features may be unavailable.
        </div>
      )}

      {/* Main content */}
      <div className="container max-w-lg mx-auto px-4 py-12">
        {content[activeTab]}
      </div>

      {/* Bottom Navigation */}
      <div
        className={`fixed bottom-0 left-0 right-0 ${
          isDarkMode ? "bg-slate-900/80" : "bg-white/80"
        } backdrop-blur-lg border-t ${
          isDarkMode ? "border-slate-800" : "border-slate-200"
        }`}
      >
        <div className="container max-w-lg mx-auto px-4">
          <div className="flex justify-around items-center py-3 relative">
            {tabs.map((tab, index) => {
              const isCenter = index === Math.floor(tabs.length / 2);
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center transition-all ${
                    isCenter
                      ? "absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 bg-blue-600 p-4 rounded-2xl hover:bg-blue-700 shadow-lg"
                      : "space-y-1 px-3 py-1 rounded-lg"
                  } ${
                    activeTab === tab.id && !isCenter
                      ? "text-blue-400"
                      : isDarkMode
                      ? "text-slate-400 hover:text-slate-300"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  <div className={isCenter ? "" : ""}>
                    <tab.icon
                      className={`${
                        isCenter ? "w-8 h-8 text-white" : "w-6 h-6"
                      }`}
                    />
                  </div>
                  {!isCenter && <span className="text-xs">{tab.label}</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageModalOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-slate-900 p-2 rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <image
                src={selectedImage}
                alt="Full size image"
                className="w-full h-full object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-slate-800/50 rounded-full"
                onClick={() => setIsImageModalOpen(false)}
              >
                <X className="w-8 h-8" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
