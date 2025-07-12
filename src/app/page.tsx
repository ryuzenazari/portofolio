'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import Container from '@/components/Container';

export default function Home() {
  return (
    <>
      <Container className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Halo, Saya</span>
              <span className="text-primary">Diha Anfeu Nio Julaynda</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-light-foreground/70 dark:text-dark-foreground/70 mb-8">
              Informatics Engineering Enthusiastic
            </p>
            
            <p className="text-light-foreground/70 dark:text-dark-foreground/70 mb-8 max-w-lg">
              Mahasiswa Teknik Informatika UNESA 2023 yang bersemangat dalam pengembangan web modern dan teknologi terkini.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button href="/about" variant="primary" size="lg">
                Tentang Saya
              </Button>
              <Button 
                href="/cv-diha-anfeu-nio.pdf" 
                variant="secondary" 
                size="lg"
                external={true}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary">
              <Image 
                src="/profile.png" 
                alt="Diha Anfeu Nio Julaynda" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
      
      <Container className="bg-light-card dark:bg-dark-card">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mahasiswa <span className="text-primary">Teknik Informatika</span> dengan Fokus Backend
          </h2>
          
          <p className="text-xl text-light-foreground/70 dark:text-dark-foreground/70 mb-10">
            Sebagai mahasiswa Teknik Informatika UNESA &#39;23, saya mengembangkan bermacam aplikasi web modern dengan Laravel, Next.js, React, dan Tailwind CSS, serta mobile app dengan Flutter dan React Native, sambil aktif berorganisasi di kampus dan komunitas teknologi.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-light-border dark:border-dark-border">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Network Computer</h3>
              <p className="text-light-foreground/70 dark:text-dark-foreground/70 text-center">Ahli dalam jaringan komputer dengan konfigurasi router, switch, dan access point seperti Cisco, dan MikroTik</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-light-border dark:border-dark-border">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fullstack Development</h3>
              <p className="text-light-foreground/70 dark:text-dark-foreground/70 text-center">Pengalaman dengan PHP, JavaScript, dan SQL/NoSQL</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-light-border dark:border-dark-border">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
              <p className="text-light-foreground/70 dark:text-dark-foreground/70 text-center">Pengalaman dengan Flutter dan React Native</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </>
  );
}
