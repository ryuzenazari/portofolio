/**
 * Format tanggal ke format Indonesia
 * @param dateString String tanggal dalam format ISO atau string tanggal valid
 * @returns String tanggal dalam format Indonesia (contoh: 1 Januari 2023)
 */
export function formatDateID(dateString: string): string {
  const date = new Date(dateString);
  
  // Daftar nama bulan dalam bahasa Indonesia
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} ${month} ${year}`;
}

/**
 * Format tanggal ke format relatif (contoh: 2 hari yang lalu)
 * @param dateString String tanggal dalam format ISO atau string tanggal valid
 * @returns String tanggal dalam format relatif
 */
export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  // Kurang dari 1 menit
  if (diffInSeconds < 60) {
    return 'baru saja';
  }
  
  // Kurang dari 1 jam
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} menit yang lalu`;
  }
  
  // Kurang dari 1 hari
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} jam yang lalu`;
  }
  
  // Kurang dari 1 bulan
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} hari yang lalu`;
  }
  
  // Kurang dari 1 tahun
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} bulan yang lalu`;
  }
  
  // Lebih dari 1 tahun
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} tahun yang lalu`;
}