"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { projects } from "@/app/components/Projects";
import { FaLightbulb, FaLaptopCode, FaRocket } from "react-icons/fa";
import BannerTitle from "@/app/components/shared/BaneerTitle";
import Button from "@/app/components/shared/Button";
import Link from "next/link";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const projectIndex = projects.findIndex((p) => p.id === Number(id));
  const prevProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

  if (!project) return <p className="text-center mt-20">Project not found</p>;

  const steps = [
    {
      step: "Step 01",
      title: "Research",
      description:
        "We begin with in-depth research and analysis to understand project goals, user needs, and market opportunities. This foundation ensures that every decision is data-driven and strategically aligned.",
      icon: (
        <FaLightbulb className="w-6 h-6 text-gray-600 absolute top-4 right-4" />
      ),
    },
    {
      step: "Step 02",
      title: "Development",
      description:
        "Our team transforms ideas into functional solutions through agile development. We focus on clean, scalable code and intuitive design to deliver a product that is both reliable and user-friendly.",
      icon: (
        <FaLaptopCode className="w-6 h-6 text-gray-600 absolute top-4 right-4" />
      ),
    },
    {
      step: "Step 03",
      title: "Deploy",
      description:
        "Once development is complete, we ensure a smooth deployment with thorough testing and optimization. Our process guarantees performance, security, and scalability as the solution goes live.",
      icon: (
        <FaRocket className="w-6 h-6 text-gray-600 absolute top-4 right-4" />
      ),
    },
  ];

  const getRandomDuration = () => {
    const days = Math.floor(Math.random() * (13 - 7 + 1)) + 7;
    return `${days} Days`;
  };
  const projectInfo = [
    { label: "Name", value: project.title },
    { label: "Category", value: project.category },
    { label: "ID", value: "CM"+  project.id + "1" },
    { label: "Project Type", value: "Desktop Mockup" },
    { label: "Duration", value: getRandomDuration() },
  ];

  return (
    <>
      <BannerTitle title={project?.title} />
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {/* Two left images */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-5 mx-auto ">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* right image */}
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl text-white font-bold flex-0">
                  Projects Overview
                </h2>
                <Link
                  href={project?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button text="Live Demo" />
                </Link>
              </div>
              <p className="text-gray-300 mb-4">
                We build innovative, purpose-driven digital solutions designed
                to deliver measurable business impact. From concept to
                deployment, we focus on seamless execution to ensure every
                detail aligns with your long-term goals.
              </p>
              <p className="text-gray-300">
                By combining technical expertise with strategic design, we
                transform complex challenges into scalable, high-performing
                results. Collaboration is at the heart of our process, turning
                your vision into digital reality.
              </p>
            </section>

            {/* Working Process */}
            <section className="py-12">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Working Process
              </h2>
              <div className="grid md:grid-cols-3 gap-6 ">
                {steps.map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 
                       hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/10
                       transition-all duration-300 group"
                  >
                    {item.icon}
                    <p className="text-teal-400 font-semibold">{item.step}</p>
                    <h3 className="text-xl text-white  font-bold mt-1 group-hover:text-teal-400 transition">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom Images */}
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/workstation4.png"
                alt="Extra Image 1"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/workstation3.png"
                alt="Extra Image 2"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* Project Info Card */}
            <div className="bg-gradient-to-b from-black/80 to-green-900/40 border-1 border-gray-800 rounded-2xl p-6 w-full max-w-sm">
              {projectInfo.map((item, index) => (
                <div
                  key={index}
                  className={`py-4 border-b border-white/10 last:border-none`}
                >
                  <p className="text-gray-500 text-sm">{item.label}:</p>
                  <p className="text-white/70 font-bold text-lg">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div
              className="relative bg-black rounded-2xl overflow-hidden w-full max-w-sm"
              style={{ height: "300px" }}
            >
              {/* Background Image */}
              <Image
                src="/workstation3.png" // Replace with your actual image path
                alt="Work with us"
                width={600}
                height={400}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative px-6 flex flex-col justify-center h-full">
                <h2 className="text-white font-bold text-2xl">Ready to</h2>
                <h3 className="text-gray-300 text-2xl mb-6">work with us?</h3>
                <div>
                  <Link href="/#contactme">
                    <Button text="Get a quote" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* conclusion section */}
        <div className="bg-black text-white py-12">
          <div className="max-w-5xl mx-auto px-4">
            {/* Conclusion Text */}
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="text-gray-300 mb-4">
              Every project we undertake is guided by a commitment to quality,
              innovation, and impact. By combining strategic insight with
              technical expertise, we deliver solutions that are not only
              effective but also sustainable for the future. Our approach
              ensures that each outcome drives measurable value, fosters growth,
              and builds lasting success.
            </p>

            <hr className="border-gray-700 my-6" />

            {/* Navigation Links */}
            <div className="flex justify-between items-center">
              {/* Previous */}
              {prevProject ? (
                <Link
                  href={`/websites/${prevProject.id}`}
                  className="flex flex-col md:flex-row items-start gap-3"
                >
                  <Image
                    src={prevProject.image}
                    alt={prevProject.title}
                    width={600}
                    height={400}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <span className="text-emerald-500 text-xs font-semibold block">
                      PREVIOUS
                    </span>
                    <p className="font-bold leading-snug">
                      {prevProject.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {/* Next */}
              {nextProject ? (
                <Link
                  href={`/websites/${nextProject.id}`}
                  className="flex flex-col-reverse md:flex-row items-end gap-3 text-right"
                >
                  <div>
                    <span className="text-emerald-500 text-xs font-semibold block">
                      NEXT
                    </span>
                    <p className="font-bold leading-snug">
                      {nextProject.title}
                    </p>
                  </div>
                  <Image
                    src={nextProject.image}
                    alt={nextProject.title}
                    width={600}
                    height={400}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>

            <hr className="border-gray-700 mt-6" />
          </div>
        </div>
      </div>
    </>
  );
}
