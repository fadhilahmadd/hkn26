"use client";
import React, { useState } from "react";

export default function RulesPage() {
  const [isDownloadingParental, setIsDownloadingParental] = useState(false);

  const handleDownloadParental = async () => {
    setIsDownloadingParental(true);
    try {
      const response = await fetch("/Surat-Persetujuan-Orang-Tua-HKN-FUN-RUN-2026.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Surat-Persetujuan-Orang-Tua-HKN-FUN-RUN-2026.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    } finally {
      setIsDownloadingParental(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-[4%] max-w-4xl mx-auto text-white/90">
      <h1 className="text-4xl md:text-5xl font-black font-nunito tracking-tight mb-8 text-white">
        Rules & <span className="text-[#8baa37]">Regulations</span>
      </h1>
      
      <div className="prose prose-invert prose-lg max-w-none space-y-6">
        <p className="font-semibold text-white">
          Semua peserta diwajibkan untuk membaca dan memahami seluruh Peraturan dan Ketentuan Lomba sebelum mendaftarkan diri di HKN Fun Run 2026.
        </p>
        <p className="italic border-l-4 border-[#8baa37] pl-4 text-white/70">
          Dengan mendaftar pada HKN Fun Run 2026, para Peserta telah menerima sepenuhnya dan wajib memenuhi Peraturan & Ketentuan Lomba berikut.
        </p>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-12 mb-6">KETENTUAN UMUM</h2>
        <ul className="list-disc pl-5 space-y-3">
          <li>HKN Fun Run 2026 akan dilaksanakan pada Minggu, 18 Oktober 2026 berlokasi di Alun Alun Wonosobo</li>
          <li>Kategori lomba adalah 5 KM</li>
          <li>Pendaftaran terbuka bagi pria dan wanita Warga Negara Indonesia pemilik KTP/SIM/Paspor Republik Indonesia dan Warga Negara Asing pemilik KITAS. Perlu diingat bahwa Warga Negara Asing tidak berhak atas podium dan hadiah pemenang.</li>
          <li>
            Peserta berusia dibawah 17 tahun pada saat perlombaan diharuskan untuk membawa <span className="font-bold">surat izin orang tua</span> (parental consent letter) dengan format yang dapat diunduh
            {isDownloadingParental ? (
              <span className="inline-flex items-center ml-1 text-[#8baa37]">
                <svg className="animate-spin h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                mengunduh...
              </span>
            ) : (
              <button onClick={handleDownloadParental} className="text-[#8baa37] hover:underline underline-offset-4 cursor-pointer focus:outline-none ml-1">
                di sini
              </button>
            )}
            .
          </li>
          <li>Kategori Pelajar diperuntukan khusus untuk peserta pelajar berstatus pelajar aktif memiliki rentang usia 10-17 tahun. Status pelajar aktif harus dapat dibuktikan dalam bentuk kartu pelajar yang valid dan/atau surat pernyataan dari sekolah. Bagi peserta yang pada hari lomba kedapatan tidak memenuhi salah satu ketentuan tersebut, akan terdiskualifikasi secara otomatis.</li>
          <li>Umur maksimal yang direkomendasikan adalah 65 tahun.</li>
          <li>Podium juara diberikan kepada pemenang laki-laki dan perempuan yang mendaftar sesuai kategorinya masing-masing. Peserta Warga Negara Asing tidak berhak mendapatkan podium dan hadiah pemenang.</li>
          <li>Perlu diingat bahwa inspeksi akan dilakukan selama perlombaan untuk memastikan bahwa seluruh peraturan lomba ditaati.</li>
          <li>Para peserta dihimbau untuk mendapatkan rekomendasi medis dari dokter terkait dengan kondisi kesehatan saat menjelang hari lomba.</li>
          <li>Setiap peserta memahami sepenuhnya bahwa olahraga ini memiliki resiko yang dapat mengakibatkan cedera, cacat bahkan kematian.</li>
          <li>Penyelenggara acara tidak bertanggung jawab atas segala kerugian yang disebabkan oleh hal-hal berikut:
            <ul className="list-[circle] pl-5 mt-2 space-y-1">
              <li>Penyakit atau kecelakaan (tidak termasuk perawatan darurat)</li>
              <li>Kehilangan dan/atau kerusakan properti pribadi</li>
              <li>Kedatangan yang terlambat ke perlombaan karena kendala dengan lalu lintas, transportasi umum dan atau kondisi jalan yang buruk.</li>
            </ul>
          </li>
          <li>Meskipun tetap aktif berolahraga selama kehamilan, peserta wanita yang sedang hamil disarankan untuk berkonsultasi dengan dokter sebelum berpartisipasi di perlombaan. Penyelenggara tidak akan bertanggung jawab atas komplikasi atau masalah kesehatan yang mungkin timbul dari partisipasi di perlombaan ini selama dalam masa kehamilan.</li>
          <li>Pendaftaran yang sudah terkonfirmasi tidak dapat dialihnamakan/dipindahtangankan dan bersifat final serta menerima sepenuhnya atas seluruh peraturan dan ketentuan yang berlaku. Peserta yang memberikan nomor lomba (bib) kepada pihak/peserta lain akan didiskualifikasi dari perlombaan.</li>
          <li>Biaya pendaftaran tidak dapat dikembalikan. Pihak penyelenggara memiliki hak untuk menolak pendaftaran setelah pendaftaran diterima apabila ada pendaftar yang memberikan informasi yang salah/tidak akurat.</li>
          <li>Apabila kegiatan/acara terpaksa dibatalkan dikarenakan hal-hal diluar kontrol pihak penyelenggara (force majeur) termasuk diantaranya bencana alam, hujan deras, badai, dan demonstrasi, maka tidak ada pengembalian biaya pendaftaran yang telah dibayarkan dan pihak penyelenggara tidak bertanggung jawab atas kerugian atau ketidaknyamanan yang terjadi.</li>
          <li>Penyelenggara tidak menyediakan penginapan / akomodasi bagi peserta.</li>
          <li>Peserta secara tegas dan eksklusif memberikan kepada penyelenggara lomba dan pihak yang terlibat, hak yang tidak dapat dibatalkan untuk menggunakan nama, keserupaan, biografi pelari, secara faktual atau sebaliknya sehubungan dengan produksi, distribusi dan eksploitasi gambar-gambar yang terkait dengan acara lari, di seluruh dunia, di setiap dan semua perangkat dan media.</li>
          <li>Hak cipta dari gambar, foto, artikel, catatan lomba, dan informasi lokasi, yang meliput acara tersebut, dan hak penggunaannya untuk siaran TV, surat kabar, majalah, dan Internet, menjadi milik penyelenggara acara. Hak cipta yang disebutkan di atas termasuk tetapi tidak terbatas pada nama dan informasi pribadi lainnya seperti usia dan alamat (hanya negara, provinsi dan kota) dari peserta yang disebutkan dalam artikel yang meliput acara tersebut.</li>
          <li>Penyelenggara berhak mengubah aturan kapan saja yang dianggap perlu dan sesuai dengan keadaan, baik sebelum dan saat lomba berlangsung, tanpa pemberitahuan terlebih dahulu beserta alasannya.</li>
          <li>Hal-hal lain yang belum tercantum dalam Peraturan & Ketentuan ini akan ditentukan kemudian oleh Penyelenggara.</li>
          <li>Sistem pengaturan waktu akan disiapkan oleh Panitia Pelaksana untuk 5 pelari tercepat masing-masing kategori baik laki-laki maupun perempuan. Wajib tetap berada di jalur yang ditandai. Memotong jalur (shortcutting) atau menyimpang dari rute dilarang dan dapat menyebabkan diskualifikasi.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-12 mb-6">PARTISIPASI</h2>
        <ul className="list-disc pl-5 space-y-3">
          <li>Pengajuan pendaftaran melalui pendaftaran online dengan menggunakan website resmi HKN Fun Run 2026 (dan link khusus dari Penyelenggara Lomba untuk program pendaftaran lainnya) dianggap sebagai pengakuan dan penerimaan atas Peraturan & Ketentuan HKN Fun Run 2026</li>
          <li>Dengan melakukan pendaftaran Lomba, maka Peserta mengakui, menerima, dan menyetujui Peraturan & Ketentuan Lomba HKN Fun Run 2026</li>
          <li>Biaya pendaftaran regular adalah sebagai berikut:<br/><strong>5K: Rp 150.000,-</strong></li>
          <li>Penyelesaian formulir pendaftaran online menegaskan persetujuan peserta untuk mematuhi seluruh Peraturan dan Ketentuan lomba.</li>
          <li>Konfirmasi pendaftaran lomba akan diberikan setelah melengkapi pendaftaran dan pembayaran.</li>
          <li>Pihak penyelenggara memiliki hak untuk menutup pendaftaran sebelum tenggang waktu tanpa pemberitahuan terlebih dahulu ketika kuota lomba sudah terpenuhi.</li>
          <li>Peserta menyetujui untuk memberikan informasi tentang kepesertaan yang benar, akurat, terkini dan menyeluruh, yang terdapat dalam formulir pendaftaran. Pihak penyelenggara dapat menghubungi peserta sewaktu-waktu melalui surat elektronik. Surat pemberitahuan dikirim ke alamat surat elektronik yang terdaftar, untuk itu mohon agar dapat mengecek kembali alamat email yang benar pada saat mendaftar.</li>
          <li>Nomor peserta lomba (bib) adalah pengenal spesifik perseorangan dan tidak dapat dipertukarkan dengan atau dipindahkan/dijual kepada orang lain.</li>
          <li>Penjualan dan/atau pemindahtanganan nomor peserta lomba sangat dilarang keras dan akan mengakibatkan diskualifikasi dan/atau pelarangan orang tersebut dalam keikutsertaan di acara HKN Fun Run 2026 di masa yang akan datang.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-12 mb-6">PARTISIPASI KATEGORI</h2>
        <ul className="list-disc pl-5 space-y-3">
          <li>Kategori Umum diperuntukan untuk peserta berusia 17 tahun keatas.</li>
          <li>Kategori Pelajar diperuntukan khusus untuk peserta pelajar berstatus pelajar aktif memiliki rentang usia maksimal 17 tahun (pada saat hari lomba 18 Oktober 2026) dibuktikan dengan kartu pelajar.</li>
          <li>Kategori Instansi Kesehatan diperuntukan khusus untuk peserta yang bekerja di Fasilitas Pelayanan Kesehatan dibuktikan dengan SIP (Surat Ijin Praktek) / Surat Keterangan Kerja / ID Card Pegawai / Data Diri e-SIMPEG.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-12 mb-6">PAKET LOMBA & HARI LOMBA</h2>
        <ul className="list-disc pl-5 space-y-3">
          <li>Paket lomba harus diambil pada: Informasi perihal pengambilan paket lomba akan diinformasikan kemudian selambat-lambatnya tiga hari sebelum jadwal pengambilan paket lomba.</li>
          <li>Nomor lomba (bib) akan diberikan pada saat adanya penyerahan bukti konfirmasi dan kartu identitas. Nomor lomba (bib) harus dapat terbaca dengan jelas selama perlombaan.</li>
          <li>Paket lomba tidak dapat dikirim dan tidak dapat diambil pada hari lomba.</li>
          <li>Pengambilan paket lomba dapat diwakilkan dengan syarat membawa fotokopi konfirmasi pendaftaran, fotokopi kartu identitas peserta dan surat kuasa dari peserta. Format surat kuasa dapat diunduh di sini.</li>
          <li>Perwakilan untuk pengambilan paket lomba hanya diperbolehkan untuk mengambil maksimum tiga (3) paket lomba dalam satu (1) antrian.</li>
          <li>Peserta diijinkan untuk memulai perlombaan sesuai dengan waktu start dengan batas waktu maksimum untuk memulai lomba adalah 10 menit setelah Gun Start.</li>
          <li>Penunjuk waktu akan ditampilkan di start line dan finish line. Para peserta diijinkan untuk menyelesaikan jarak tempuh lomba untuk masing-masing kategori dalam waktu yang sudah ditentukan.</li>
          <li>Para peserta harus dapat menyelesaikan jarak penuh mulai dari garis start sampai garis finish sejak lomba dimulai dalam waktu yang telah ditentukan, yaitu: 1 jam 30 menit</li>
          <li>Peserta yang ditemukan melakukan perilaku tidak sportif yang mencakup tetapi tidak terbatas pada: memblokir, menghalangi peserta lain dan atau rute lari akan didiskualifikasi secara otomatis dari perlombaan. Selain itu peserta yang mencari keuntungan waktu dengan berlari memperpendek jarak lomba, membonceng kendaraan, dan kecurangan/pelanggaran lainnya terhadap ketentuan-ketentuan perlombaan akan dikenakan diskualifikasi.</li>
          <li>Pos-pos minum dan pos medis terletak di titik km 2.5 pada lintasan lomba dan di garis finish.</li>
          <li>Peserta tidak diperbolehkan untuk menggunakan sepeda, sepatu roda, papan luncur, kursi roda dan atau kereta bayi selama berlomba di rute lomba. Penggunaan kendaraan bermotor dan sepeda sangat dilarang keras di jalur lomba, kecuali terkait Penyelenggaraan Lomba.</li>
          <li>Binatang peliharaan dalam bentuk apa pun dengan atau tanpa tali tidak diijinkan untuk masuk rute lari.</li>
          <li>Peserta tidak diperbolehkan mengenakan pakaian atau mengenakan perlengkapan yang mungkin berbahaya, menyakitkan atau membahayakan pelari lainnya. Peserta juga tidak diperbolehkan berlari dengan seluruh bagian wajah tertutup.</li>
          <li>Peserta tidak diperbolehkan memakai pakaian untuk tujuan pernyataan atau propaganda politik atau agama, serta iklan. Peserta juga tidak diperbolehkan mengenakan pakaian untuk tujuan mempromosikan atau mengiklankan nama individu, wilayah tertentu atau organisasi yang tidak diakui penyelenggara acara.</li>
          <li>Peserta tidak boleh menggunakan pakaian atau aksesoris apapun yang dapat menyebabkan pelari lain salah mengenali sebagai sinyal start dan menyebabkan kebingungan bagi manajemen perlombaan, atau menggunakan perangkat apa pun dengan volume suara yang keras yang dapat mengganggu pelari lain.</li>
          <li>Peserta tidak boleh melakukan tindakan apa pun yang dapat menghambat lomba seperti menari, melakukan/memainkan instrumen, berdiri di dekat garis start atau finish, atau di jalan-jalan di sepanjang rute lari.</li>
          <li>Peserta tidak dapat meminta kontribusi uang, tanda tangan, dan sejenisnya.</li>
          <li>Peserta tidak boleh mencegah pejalan kaki untuk melintasi jalur atau menghalangi jalannya kendaraan darurat di titik-titik tertentu, kapan dan dimana mereka diizinkan melakukannya.</li>
          <li>Peserta tidak boleh menghalangi lomba dengan tidak mengikuti instruksi dari panitia perlombaan.</li>
          <li>Penyelenggara acara berhak untuk menghentikan peserta dari melanjutkan perlombaan jika peserta berperilaku dengan cara yang dianggap tidak sesuai dengan peraturan perlombaan.</li>
          <li>Peserta dilarang untuk membawa barang-barang yang berpotensi menghambat perlombaan, dapat menyebabkan bahaya atau risiko bahaya dan keselamatan peserta lain</li>
          <li>Keamanan jalan raya dibawah pengendalian Pihak Kepolisian, Dinas Perhubungan & Otoritas setempat. Layanan kesehatan akan diberikan oleh Panitia Pelaksana bekerjasama dengan Rumah Sakit setempat dan Pelindung Masyarakat di sepanjang lintasan lomba. Para petugas kesehatan dapat menghentikan peserta untuk melanjutkan lomba dikarenakan alasan kesehatan.</li>
          <li>Sistem pengaturan waktu akan disiapkan oleh Panitia Pelaksana untuk 10 pelari tercepat baik laki-laki maupun perempuan.</li>
          <li>Pemenang lomba harus mengenakan nomor bib dengan tag pencatat waktu dan diharuskan untuk memberikan bukti identifikasi (KTP/SIM/Kartu Pelajar/Akta Kelahiran/Kartu Keluarga/Paspor) yang berlaku yang sesuai dengan identitas yang didaftarkan. Jika bib Anda tidak memiliki tag pencatat waktu di bagian belakang, harap melapor kepada penyelenggara pada saat pengambilan paket lomba.</li>
          <li>Bib harus dapat terlihat jelas oleh marshal lomba, race director, dan petugas keamanan. Peserta yang tidak mengenakan bib dengan lengkap dan benar dapat dikeluarkan dari perlombaan oleh marshal maupun petugas keamanan.</li>
          <li>Pemenang dan urutan pemenang ditentukan oleh urutan waktu Gun Time peserta ketika batang tubuhnya menyentuh garis finish. Gun time adalah waktu yang berlaku setelah tanda start dibunyikan sampai waktu ketika peserta menyentuh garis finish.</li>
          <li>Pemenang yang tidak dapat membuktikan identitas diri sesuai bukti pendaftaran, nomor dada, data catatan waktu lomba dan kartu identitas (KTP/SIM/Kartu Pelajar/Akta Kelahiran/Kartu Keluarga/Paspor), maka Panitia dapat memutuskan untuk menggugurkan/mendiskualifikasi pemenang tersebut.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-12 mb-6">PODIUM & HADIAH</h2>
        <ul className="list-disc pl-5 space-y-3">
          <li>Semua pemenang podium berkewarganegaraan Indonesia harus menunjukkan bentuk identifikasi seperti KTP/SIM/Paspor/Akta Kelahiran/Kartu Pelajar/KIA/Kartu Keluarga pada saat proses verifikasi dilakukan.</li>
          <li>Pengumuman pemenang dan penyerahan hadiah akan dilakukan setelah tim verifikasi menyatakan bahwa peserta yang berpotensi menang telah memenuhi semua persyaratan perlombaan, tidak melanggar peraturan lomba, tidak melanggar administrasi lomba, dan memenuhi persyaratan lainnya.</li>
          <li>Hadiah bagi Pemenang pada Podium di masing-masing kategori jarak Lomba berupa uang yang nominalnya telah ditentukan Penyelenggara Lomba.</li>
          <li>Mohon diperhatikan bahwa hadiah Pemenang berupa uang adalah obyek pajak menurut peraturan pemerintah yang berlaku, yang ditanggung sepenuhnya oleh pemenang. Panitia berkewajiban untuk memungut langsung pajak hadiah Pemenang serta menyetorkan dan melaporkan kepada instansi pemerintah terkait.</li>
          <li>Proses pencairan hadiah Pemenang akan dilakukan dalam waktu maksimal 15 hari kerja sejak Hari Lomba. Pemenang harus memastikan keakuratan informasi nomor rekening bank, alamat yang disyaratkan oleh Penyelenggara Lomba. Kegagalan memberikan informasi yang akurat sehingga berpotensi mengakibatkan keterlambatan proses pencairan hadiah, adalah sepenuhnya tanggung jawab Pemenang terkait.</li>
          <li>Pemenang lomba harus mengenakan nomor bib dengan tag pencatat waktu dan diharuskan untuk memberikan bukti identifikasi (KTP/SIM/Kartu Pelajar/Akta Kelahiran/Kartu Keluarga/Paspor) yang berlaku yang sesuai dengan identitas yang didaftarkan. Jika bib Anda tidak memiliki tag pencatat waktu di bagian belakang, harap melapor kepada penyelenggara pada saat pengambilan paket lomba.</li>
          <li>Juara dan Pemenang pada kelompok Pelajar adalah mereka yang berusia 17 tahun ke bawah pada saat mengikuti lomba terhitung pada tanggal tanggal pelaksanaan (18 Oktober 2026) tahun berjalan.</li>
          <li>Juara dan Pemenang pada kelompok INSTANSI KESEHATAN adalah diharuskan untuk memberikan bukti identifikasi berupa SIP (Surat Ijin Praktek) / Surat Keterangan Kerja / ID Card Pegawai / Data Diri e-SIMPEG.</li>
        </ul>

      </div>
    </div>
  );
}
