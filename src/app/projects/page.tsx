'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  technologies: string[];
  features: string[];
  link?: string;
  githubLink?: string;
}

const ProjectCard = ({ title, description, imagePath, technologies, features, link, githubLink }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full"
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden group">
        <Image 
          src={imagePath} 
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Fitur Utama:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6 flex gap-3">
        {link && (
          <Button 
            href={link} 
            variant="primary" 
            size="sm" 
            className="flex-1"
            external={true}
          >
            Lihat Website
          </Button>
        )}
        {githubLink && (
          <Button 
            href={githubLink} 
            variant="outline" 
            size="sm" 
            className="flex-1"
            external={true}
          >
            Source Code
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: "Website HMP TI UNESA",
      description: "Website resmi Himpunan Mahasiswa Prodi Teknik Informatika Universitas Negeri Surabaya yang menampilkan informasi organisasi, kegiatan, dan sumber daya untuk mahasiswa.",
      imagePath: "/projects/hmpti-website.png",
      technologies: ["Vue.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      features: [
        "Informasi tentang visi, misi, dan struktur organisasi",
        "Berita dan pengumuman kegiatan terbaru",
        "Galeri dokumentasi kegiatan",
        "Informasi bidang minat dan penjurusan",
        "Kontak dan media sosial"
      ],
      link: "https://hmptiunesa.vercel.app"
    },{
        title: "ABF-USM Image Processor",
        description: "Aplikasi pemrosesan citra berbasis web yang mengimplementasikan Adaptive Bilateral Filter (ABF) dan Unsharp Masking (USM) untuk peningkatan kualitas gambar.",
        imagePath: "/projects/abf-usm.png",
        technologies: ["PHP", "JavaScript", "jQuery", "HTML5", "CSS3"],
        features: [
          "Pemrosesan gambar menggunakan metode Adaptive Bilateral Filter",
          "Peningkatan ketajaman gambar dengan Unsharp Masking",
          "Preview sebelum dan sesudah pemrosesan",
          "Pengaturan parameter filter secara interaktif",
          "Antarmuka web yang ringan dan responsif"
        ],
        link: "https://github.com/ryuzenazari/ABF-USMImageProcessor"
      }

  ];

  return (
    <Container className="pt-32 md:pt-40">
      <SectionTitle 
        title="Projects" 
        subtitle="Berikut adalah beberapa proyek yang telah saya kerjakan"
      />
          
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
          />
        ))}
      </div>
    </Container>
  );
}