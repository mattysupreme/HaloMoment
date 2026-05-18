import { 
  Target, Zap, Link as LinkIcon, 
  Gift, Heart, Moon, Sparkles 
} from 'lucide-react';

export const HERO_STATS = [
  { label: 'Project Selesai', value: '10+' },
  { label: 'Client Aktif', value: '5+' },
  { label: 'Kepuasan', value: '90%' },
];

export const FEATURES = [
  {
    icon: Target,
    title: 'Personal & Bermakna',
    description: 'Setiap microsite dirancang khusus agar pesan terasa lebih personal dan menyentuh hati.'
  },
  {
    icon: Zap,
    title: 'Modern & Interaktif',
    description: 'Menggunakan teknologi web modern dengan animasi dan interaksi yang memukau.'
  },
  {
    icon: LinkIcon,
    title: 'Mudah Diakses',
    description: 'Cukup bagikan link, penerima bisa langsung membuka ucapan di mana saja.'
  }
];

export const CREATE_MISSION = [
  { letter: 'C', word: 'Creative', description: 'Membuat desain ucapan yang unik dan menarik' },
  { letter: 'R', word: 'Responsive', description: 'Cepat dalam pengerjaan dan respons terhadap klien' },
  { letter: 'E', word: 'Engaging', description: 'Menghadirkan microsite yang interaktif' },
  { letter: 'A', word: 'Authentic', description: 'Pesan terasa personal dan bermakna' },
  { letter: 'T', word: 'Technology Driven', description: 'Menggunakan teknologi web modern' },
  { letter: 'E', word: 'Experience Focused', description: 'Memberikan pengalaman digital yang menyenangkan' },
];

export const PRICING_PACKAGES = [
  {
    title: 'Basic',
    price: 'Rp 15.000',
    popular: false,
    features: [
      { text: 'Microsite 1 halaman', included: true },
      { text: 'Template design', included: true },
      { text: 'Hosting 7 hari', included: true },
      { text: 'Foto/video Maks 3', included: true },
      { text: 'Background music', included: false },
      { text: 'Custom warna', included: false },
      { text: 'Custom design', included: false },
      { text: 'Statistik pengunjung', included: false },
      { text: 'Link share', included: true },
    ]
  },
  {
    title: 'Standard',
    price: 'Rp 30.000',
    popular: true,
    features: [
      { text: 'Microsite 1 halaman', included: true },
      { text: 'Template design', included: false, stringValue: '—' },
      { text: 'Hosting 14 hari', included: true },
      { text: 'Foto/video Maks 6', included: true },
      { text: 'Background music', included: true },
      { text: 'Custom warna', included: true },
      { text: 'Custom design', included: false },
      { text: 'Statistik pengunjung', included: false },
      { text: 'Link share', included: true },
    ]
  },
  {
    title: 'Premium',
    price: 'Rp 50.000',
    popular: false,
    features: [
      { text: 'Microsite 1 halaman', included: true },
      { text: 'Template design', included: false, stringValue: '—' },
      { text: 'Hosting 30 hari', included: true },
      { text: 'Foto/video Maks 10', included: true },
      { text: 'Background music', included: true },
      { text: 'Custom warna', included: false, stringValue: '—' },
      { text: 'Custom design', included: true },
      { text: 'Statistik pengunjung', included: true },
      { text: 'Link share', included: true },
    ]
  }
];

export const ORDER_STEPS = [
  { id: 1, title: 'Hubungi Kami', description: 'Hubungi melalui kontak yang tersedia' },
  { id: 2, title: 'Pilih Paket', description: 'Pilih paket layanan yang sesuai' },
  { id: 3, title: 'Kirim Materi', description: 'Kirim teks ucapan + foto/video' },
  { id: 4, title: 'Sampaikan Detail', description: 'Kebutuhan tambahan (musik, efek, dll)' },
  { id: 5, title: 'Konsep & Moodboard', description: 'Jelaskan konsep yang diinginkan' },
  { id: 6, title: 'Proses Pengerjaan', description: 'Tunggu proses pembuatan' },
  { id: 7, title: 'Terima Link', description: 'Hasil dikirim dalam bentuk link' },
];

export const PORTFOLIO_CATEGORIES = [
  { title: 'Greeting Ulang Tahun', description: 'Ucapan spesial untuk hari istimewa', icon: Gift },
  { title: 'Greeting Anniversary', description: 'Rayakan cinta dengan cara berbeda', icon: Heart },
  { title: 'Greeting Hari Raya', description: 'Sampaikan kehangatan di hari raya', icon: Moon },
  { title: 'Dan Lainnya', description: 'Launching produk, wisuda, & lebih', icon: Sparkles },
];

export const TESTIMONIALS = [
  { text: 'Pelayanan cepat dan hasilnya keren banget!', author: 'Client A' },
  { text: 'Desainnya beda dari yang lain, suka banget!', author: 'Client B' },
  { text: 'Cocok banget buat surprise pasangan 😍', author: 'Client C' },
];

export const CONTACT_LINK = 'https://wa.me/6285920295776';
