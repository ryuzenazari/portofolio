'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';

export default function About() {
  return (
    <Container className="pt-32 md:pt-40">
      <SectionTitle 
        title="Tentang Saya" 
        subtitle="Mengenal lebih dekat siapa saya dan apa yang saya lakukan"
      />
      
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/3"
        >
          <div className="relative w-full aspect-square max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/profile.png" 
              alt="Diha Anfeu Nio Julaynda" 
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Diha Anfeu Nio Julaynda
          </h2>
          
          <p className="text-light-foreground/70 dark:text-dark-foreground/70 mb-6">
            <span className="font-semibold">Fullstack Developer</span> | <span className="text-primary">Teknik Informatika UNESA 2023</span>
          </p>
          
          <div className="space-y-6">
            <p className="text-light-foreground dark:text-dark-foreground">
              Saya adalah mahasiswa Teknik Informatika di Universitas Negeri Surabaya (UNESA) angkatan 2023 yang memiliki ketertarikan mendalam pada pengembangan web dan aplikasi. Dengan fokus utama pada frontend development, saya terus mengembangkan keterampilan dalam menciptakan antarmuka yang intuitif dan responsif.
            </p>
            
            <p className="text-light-foreground dark:text-dark-foreground">
              Perjalanan saya di dunia pemrograman dimulai sejak SMK, di mana saya mulai belajar dasar-dasar HTML, CSS, dan JavaScript. Seiring berjalannya waktu, saya memperluas pengetahuan dengan mempelajari framework modern seperti React dan Next.js, serta teknologi backend seperti Laravel, Node.js dan Express.
            </p>
            
            <p className="text-light-foreground dark:text-dark-foreground">
              Di luar kegiatan akademik, saya aktif dalam komunitas teknologi dan organisasi kampus yang membantu saya mengembangkan soft skill dan memperluas jaringan. Saya percaya bahwa kolaborasi dan berbagi pengetahuan adalah kunci untuk terus berkembang di bidang teknologi yang selalu berubah.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Informasi Pribadi</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Nama:</span>
                  <span className="text-light-foreground/70 dark:text-dark-foreground/70">Diha Anfeu Nio Julaynda</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Domisili:</span>
                  <span className="text-light-foreground/70 dark:text-dark-foreground/70">Gresik, Indonesia</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Email:</span>
                  <span className="text-light-foreground/70 dark:text-dark-foreground/70">dihaanfeu123@gmail.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Minat</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-light-foreground/70 dark:text-dark-foreground/70">Web Development</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-light-foreground/70 dark:text-dark-foreground/70">UI/UX Design</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-light-foreground/70 dark:text-dark-foreground/70">Mobile App Development</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-light-foreground/70 dark:text-dark-foreground/70">Cloud Computing</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}