import { Metadata } from 'next';
import { PERSONAL_INFO } from './constants';

// Base URL untuk situs
const BASE_URL = 'https://nio-portfolio.vercel.app';

// Metadata dasar
const baseMetadata: Metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
  description: `Portofolio ${PERSONAL_INFO.nickname} - ${PERSONAL_INFO.role} dengan fokus pada Frontend. Mahasiswa ${PERSONAL_INFO.university} ${PERSONAL_INFO.batch}.`,
  keywords: [
    PERSONAL_INFO.nickname,
    PERSONAL_INFO.name,
    'Fullstack Developer',
    'Frontend Developer',
    'UNESA',
    'Teknik Informatika',
    'React',
    'Next.js',
    'Tailwind CSS',
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: BASE_URL,
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description: `Portofolio ${PERSONAL_INFO.nickname} - ${PERSONAL_INFO.role} dengan fokus pada Frontend. Mahasiswa ${PERSONAL_INFO.university} ${PERSONAL_INFO.batch}.`,
    siteName: `${PERSONAL_INFO.nickname} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description: `Portofolio ${PERSONAL_INFO.nickname} - ${PERSONAL_INFO.role} dengan fokus pada Frontend.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Fungsi untuk membuat metadata halaman
export function createMetadata({
  title,
  description,
  path = '',
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${PERSONAL_INFO.nickname} Portfolio`
    : baseMetadata.title;

  const pageDescription = description || baseMetadata.description;

  return {
    ...baseMetadata,
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      ...baseMetadata.openGraph,
      url: `${BASE_URL}${path}`,
      title: pageTitle as string,
      description: pageDescription as string,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: pageTitle as string,
      description: pageDescription as string,
    },
  };
}

export default baseMetadata;