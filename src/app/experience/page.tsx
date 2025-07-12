'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';

type ExperienceItemProps = {
  title: string;
  organization: string;
  period: string;
  description: string;
  index: number;
  logoPath?: string;
};

const ExperienceItem = ({ title, organization, period, description, index, logoPath }: ExperienceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10 pb-10 border-l border-gray-200 dark:border-gray-800"
    >
      <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900" />
      
      <div className="mb-2 text-primary font-medium">{period}</div>
      <div className="flex items-start gap-4">
        {logoPath && (
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-primary overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <Image 
              src={logoPath} 
              alt={`${organization} logo`} 
              width={40} 
              height={40} 
              className="w-10 h-10 transition-transform duration-300 hover:scale-110"
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="text-gray-600 dark:text-gray-400 mb-3">{organization}</div>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const experiences = [
    {
      title: "Ketua Himpunan",
      organization: "Himpunan Mahasiswa Teknik Informatika UNESA",
      period: "2025 - Sekarang",
      description: "Mengkoordinasikan seluruh program kerja himpunan dan memimpin tim dalam pelaksanaan kegiatan akademik maupun non-akademik. Menginisiasi pengembangan sistem digital internal serta menjaga kolaborasi yang solid antardivisi dan pihak eksternal.",
      logoPath: "/organizations/hmpti.svg"
    },
    {
      title: "Koor Divisi Acara",
      organization: "Karang Taruna RT29 RW09, Graha Menganti",
      period: "2025 - Sekarang",
      description: "Mendesain dan melaksanakan program peningkatan kapasitas anggota, seperti pelatihan soft skill dan mentoring. Berperan aktif dalam menyusun materi serta evaluasi pengembangan individu dalam organisasi.",
      logoPath: "/organizations/karang-taruna.svg"
    },
    {
      title: "Staff Pengembangan Sumber Daya Manusia",
      organization: "Barisan Organisasi Mahasiswa Madiun",
      period: "2025 - Sekarang",
      description: "Mendesain dan melaksanakan program peningkatan kapasitas anggota, seperti pelatihan soft skill dan mentoring. Berperan aktif dalam menyusun materi serta evaluasi pengembangan individu dalam organisasi.",
      logoPath: "/organizations/bomm.svg"
    },
    {
      title: "Staff Departemen Luar Negeri",
      organization: "Badan Eksekutif Mahasiswa Fakultas Teknik UNESA",
      period: "2024",
      description: "Menjalin relasi dengan organisasi eksternal di luar kampus, serta mewakili fakultas dalam forum-forum regional. Membantu merancang program kolaborasi tingkat nasional dan memperluas jejaring antaruniversitas.",
      logoPath: "/organizations/bem-ft.svg"
    },
    {
      title: "Staff Humas dan Informasi",
      organization: "UKM Peduli Kemanusiaan UNESA",
      period: "2024",
      description: "Bertugas dalam penyusunan konten publikasi dan pengelolaan media sosial organisasi. Mendukung promosi acara sosial dan kegiatan kemanusiaan agar dapat menjangkau lebih banyak relawan dan donatur.",
      logoPath: "/organizations/ukmpk.svg"
    },
    {
      title: "Staff Komunikasi dan Informasi",
      organization: "Forum Mahasiswa Madiun UNESA",
      period: "2023",
      description: "Mengelola alur komunikasi antaranggota dan dokumentasi kegiatan organisasi. Menyusun laporan informasi kegiatan serta mengoordinasikan distribusi publikasi ke jaringan mahasiswa asal Madiun.",
      logoPath: "/organizations/formad.svg"
    }

  ];

  return (
    <Container className="pt-32 md:pt-40">
      <SectionTitle 
        title="Pengalaman" 
        subtitle="Ringkasan singkat aktivitas dan pengalaman saya"
      />
      
      <div className="max-w-3xl mx-auto mt-12">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            organization={exp.organization}
            period={exp.period}
            description={exp.description}
            logoPath={exp.logoPath}
            index={index}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg max-w-3xl mx-auto"
      >
        <h3 className="text-xl font-bold mb-4">Komunitas & Pembelajaran</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Selain pengalaman formal di atas, saya juga aktif dalam berbagai komunitas teknologi online dan offline. Saya percaya bahwa pembelajaran berkelanjutan dan berbagi pengetahuan adalah kunci untuk berkembang di bidang teknologi.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Saya secara rutin mengikuti webinar, workshop, dan meetup teknologi untuk memperluas wawasan dan jaringan. Saya juga senang berbagi pengetahuan melalui diskusi dan sesi belajar bersama dengan sesama mahasiswa.
        </p>
      </motion.div>
    </Container>
  );
}