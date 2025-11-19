import { TopicContent } from './types';

export const HARDWARE_CONTENT: TopicContent = {
  id: 'hardware',
  title: 'Hardware',
  description: 'Perangkat Keras: Komponen fisik yang dapat dilihat dan disentuh.',
  image: 'https://picsum.photos/id/1/800/600',
  details: [
    {
      subtitle: 'Pengertian Hardware',
      text: 'Hardware adalah semua bagian fisik komputer, dan dibedakan dengan data yang berada di dalamnya atau yang beroperasi di dalamnya. Hardware adalah perangkat yang dapat kita sentuh secara fisik.',
      items: []
    },
    {
      subtitle: 'Komponen Utama',
      text: 'Hardware dibagi menjadi beberapa kategori berdasarkan fungsinya. Klik pada kartu di bawah untuk melihat foto dan penjelasannya:',
      items: [
        { 
          label: 'Input Device', 
          desc: 'Alat untuk memasukkan data ke komputer.', 
          icon: '⌨️',
          examples: [
            { 
              name: 'Keyboard', 
              desc: 'Papan ketik untuk memasukkan huruf, angka, dan perintah.', 
              icon: '⌨️',
              // image: 'https://images.unsplash.com/photo-1587829741301-dc798b91a45e?auto=format&fit=crop&w=500&q=60'
              image: 'https://c.pxhere.com/photos/e3/09/keyboard_white_computer_keyboard_desktop_office-626035.jpg!d'

            },
            { 
              name: 'Mouse', 
              desc: 'Alat penunjuk untuk mengarahkan kursor di layar.', 
              icon: '🖱️',
              image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Scanner', 
              desc: 'Memindai dokumen fisik menjadi data digital.', 
              icon: '🖨️',
              image: 'https://images.unsplash.com/photo-1580910051053-540874c7b1f1?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Microphone', 
              desc: 'Menangkap suara untuk diubah menjadi sinyal audio digital.', 
              icon: '🎤',
              image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Webcam', 
              desc: 'Kamera digital untuk menangkap gambar/video secara real-time.', 
              icon: '📷',
              image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
        { 
          label: 'Process Device', 
          desc: 'Otak komputer yang memproses data.', 
          icon: '⚙️',
          examples: [
            { 
              name: 'CPU', 
              desc: 'Central Processing Unit, otak utama yang menjalankan instruksi.', 
              icon: '🧠',
              image: 'https://images.unsplash.com/photo-1555618568-a3db465983df?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'RAM', 
              desc: 'Random Access Memory, penyimpanan sementara saat aplikasi berjalan.', 
              icon: '⚡',
              image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'VGA Card', 
              desc: 'Mengolah data grafis untuk ditampilkan ke monitor.', 
              icon: '🎮',
              image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Motherboard', 
              desc: 'Papan sirkuit utama tempat semua komponen terhubung.', 
              icon: '🗺️',
              image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
        { 
          label: 'Output Device', 
          desc: 'Alat untuk menampilkan hasil pemrosesan.', 
          icon: '🖥️',
          examples: [
            { 
              name: 'Monitor', 
              desc: 'Layar visual untuk menampilkan antarmuka komputer.', 
              icon: '🖥️',
              image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Printer', 
              desc: 'Mencetak dokumen digital ke media kertas.', 
              icon: '🖨️',
              image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Speaker', 
              desc: 'Mengeluarkan output berupa suara.', 
              icon: '🔊',
              image: 'https://images.unsplash.com/photo-1545459720-aac3e5c29158?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Projector', 
              desc: 'Memproyeksikan tampilan layar ke dinding/layar besar.', 
              icon: '📽️',
              image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
        { 
          label: 'Storage Device', 
          desc: 'Media penyimpanan data permanen.', 
          icon: '💾',
          examples: [
            { 
              name: 'Harddisk (HDD)', 
              desc: 'Penyimpanan magnetik berkapasitas besar.', 
              icon: '💿',
              image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'SSD', 
              desc: 'Solid State Drive, penyimpanan cepat berbasis chip.', 
              icon: '🚀',
              image: 'https://plus.unsplash.com/premium_photo-1677716551380-0207f94eb427?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Flashdisk', 
              desc: 'Penyimpanan portabel kecil menggunakan USB.', 
              icon: '🔌',
              image: 'https://images.unsplash.com/photo-1623949556303-b0d17d198863?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
      ]
    }
  ]
};

export const SOFTWARE_CONTENT: TopicContent = {
  id: 'software',
  title: 'Software',
  description: 'Perangkat Lunak: Instruksi atau program yang menjalankan hardware.',
  image: 'https://picsum.photos/id/180/800/600',
  details: [
    {
      subtitle: 'Pengertian Software',
      text: 'Software adalah sekumpulan data elektronik yang disimpan dan diatur oleh komputer, data elektronik yang disimpan oleh komputer itu dapat berupa program atau instruksi yang akan menjalankan suatu perintah.',
      items: []
    },
    {
      subtitle: 'Jenis Software',
      text: 'Software dikategorikan menjadi beberapa jenis utama. Klik kartu di bawah untuk melihat contohnya:',
      items: [
        { 
          label: 'Sistem Operasi', 
          desc: 'Penghubung pengguna dan hardware.', 
          icon: '🪟',
          examples: [
            { 
              name: 'Microsoft Windows', 
              desc: 'Sistem operasi paling populer untuk penggunaan rumahan dan kantor.', 
              icon: '🪟',
              image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca7d?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'macOS', 
              desc: 'Sistem operasi eksklusif dari Apple yang dikenal stabil dan estetik.', 
              icon: '🍎',
              image: 'https://images.unsplash.com/photo-1621905251189-fc0f5ac543b2?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Linux', 
              desc: 'Sistem operasi open-source yang tangguh dan gratis.', 
              icon: '🐧',
              image: 'https://images.unsplash.com/photo-1629654291663-ade31b4439f0?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Android', 
              desc: 'Sistem operasi berbasis mobile yang paling banyak digunakan di dunia.', 
              icon: '🤖',
              image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
        { 
          label: 'Aplikasi', 
          desc: 'Program untuk tugas spesifik.', 
          icon: '📱',
          examples: [
            { 
              name: 'Microsoft Word', 
              desc: 'Aplikasi pengolah kata untuk membuat laporan dan dokumen.', 
              icon: '📝',
              image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Google Chrome', 
              desc: 'Web browser cepat untuk menjelajahi internet.', 
              icon: '🌐',
              image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Adobe Photoshop', 
              desc: 'Software standar industri untuk editing foto dan desain grafis.', 
              icon: '🎨',
              image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Spotify', 
              desc: 'Aplikasi streaming musik digital.', 
              icon: '🎵',
              image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
        { 
          label: 'Utility', 
          desc: 'Program bantu untuk merawat komputer.', 
          icon: '🛠️',
          examples: [
            { 
              name: 'Antivirus', 
              desc: 'Melindungi komputer dari serangan virus, malware, dan ancaman keamanan.', 
              icon: '🛡️',
              image: 'https://images.unsplash.com/photo-1563206767-5b1d972e8136?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'WinRAR / Zip', 
              desc: 'Mengecilkan ukuran file (kompresi) agar mudah disimpan dan dikirim.', 
              icon: '📦',
              image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Disk Cleanup', 
              desc: 'Membersihkan file sampah yang memenuhi harddisk.', 
              icon: '🧹',
              image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
        { 
          label: 'Bahasa Pemrograman', 
          desc: 'Instruksi untuk membuat program.', 
          icon: '💻',
          examples: [
            { 
              name: 'Python', 
              desc: 'Bahasa populer yang mudah dipelajari, digunakan untuk AI dan Web.', 
              icon: '🐍',
              image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfb35?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'JavaScript', 
              desc: 'Bahasa utama untuk membuat website menjadi interaktif.', 
              icon: '📜',
              image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'C++', 
              desc: 'Bahasa performa tinggi untuk pembuatan game dan sistem operasi.', 
              icon: '⚙️',
              image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
      ]
    }
  ]
};

export const BRAINWARE_CONTENT: TopicContent = {
  id: 'brainware',
  title: 'Brainware',
  description: 'Pengguna: Manusia yang mengoperasikan dan mengatur sistem komputer.',
  image: 'https://picsum.photos/id/1011/800/600',
  details: [
    {
      subtitle: 'Pengertian Brainware',
      text: 'Brainware adalah orang yang menggunakan, memakai, ataupun mengoprasikan perangkat komputer. Tanpa adanya brainware, komputer hanyalah seonggok besi yang tidak berguna.',
      items: []
    },
    {
      subtitle: 'Tingkatan Brainware',
      text: 'Brainware dikelompokkan berdasarkan kemampuan dan tugasnya. Klik kartu untuk melihat detail profesi:',
      items: [
        { 
          label: 'System Analyst', 
          desc: 'Merancang dan menganalisis sistem yang akan dibuat.', 
          icon: '📊',
          examples: [
            { 
              name: 'System Designer', 
              desc: 'Merancang arsitektur teknis dari sebuah aplikasi.', 
              icon: '📐',
              image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Business Analyst', 
              desc: 'Menganalisis proses bisnis untuk diterjemahkan ke dalam sistem.', 
              icon: '💼',
              image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
        { 
          label: 'Programmer', 
          desc: 'Membuat kode program berdasarkan rancangan.', 
          icon: '👨‍💻',
          examples: [
            { 
              name: 'Frontend Developer', 
              desc: 'Mengoding tampilan antarmuka (UI) yang dilihat pengguna.', 
              icon: '🎨',
              image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Backend Developer', 
              desc: 'Mengelola logika server, database, dan API.', 
              icon: '⚙️',
              image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Game Developer', 
              desc: 'Menciptakan video game yang interaktif.', 
              icon: '🎮',
              image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
        { 
          label: 'Administrator', 
          desc: 'Mengelola dan merawat sistem jaringan atau server.', 
          icon: '🛡️',
          examples: [
            { 
              name: 'Network Admin', 
              desc: 'Menjaga jaringan komputer agar tetap terhubung dan aman.', 
              icon: '🌐',
              image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'Database Admin', 
              desc: 'Bertanggung jawab atas keamanan dan kinerja database.', 
              icon: '🗄️',
              image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
        { 
          label: 'Operator', 
          desc: 'Pengguna akhir yang menjalankan aplikasi (End User).', 
          icon: '👤',
          examples: [
            { 
              name: 'Data Entry', 
              desc: 'Petugas yang memasukkan data ke dalam sistem.', 
              icon: '⌨️',
              image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60'
            },
            { 
              name: 'General User', 
              desc: 'Pengguna umum yang menggunakan komputer untuk aktivitas sehari-hari.', 
              icon: '👥',
              image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
      ]
    }
  ]
};