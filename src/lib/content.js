const content = [
  {
    id: 1,
    title: "Tips keuangan untuk gen Z",
    desc: "Bagaimana cara kamu sebagai Gen Z mengatur keuangan dengan tepat? mulai dari mengelola keuangan diri sendiri adalah jawabannya. Salah satu pengetahuan dasar manajemen keuangan adalah memahami cara mengatur keuangan pribadi. Sebagian orang yang berpikir tentang mengelola keuangan membuat hidup lebih baik adalah mitos, belum tentu mereka melakukannya dengan tepat. Di bawah ini adalah 10 langkah-langkah mengatur keuangan dengan baik agar kamu terhindar dari masalah keuangan.",
    link: "https://kumparan.com/hanifahpagaralam92/10-tips-mengatur-keuangan-ala-gen-z-20dxzxeimne/3",
  },
  {
    id: 2,
    title: "Budgeting for Young Adults: 19 Money Saving Tips for 2024",
    desc: "From juggling student loan payments to saving for a car, making personal finance decisions can be overwhelming. On top of that, you may have other financial goals in mind but no idea how to achieve them.",
    link: "https://www.stash.com/learn/budgeting-for-young-adults/",
  },
  {
    id: 3,
    title: "10 Aplikasi Pencatat Keuangan Paling Recommended, GRATIS!",
    desc: "Sulit mengatur keuangan? Jangan khawatir, 10 aplikasi pencatat keuangan berikut ini bisa Anda jadikan solusinya! Hadir dengan berbagai fitur yang menarik dan mudah untuk digunakan, aplikasi ini dapat Anda unduh melalui Playstore maupun App Store.",
    link: "https://www.bfi.co.id/id/blog/aplikasi-pencatat-keuangan-paling-recommended",
  },
  {
    id: 4,
    title:
      "Begini Strategi Investasi yang Efektif untuk Generasi Z dan Milenial. Wajib Coba!",
    desc: "Dalam berinvestasi, memiliki strategi investasi yang efektif sangat diperlukan, termasuk bagi generasi z dan milenial sebagai investor pemula. Tentunya agar strategi investasi tersebut tepat dan dapat mencapai tujuan investasi yaitu untuk mendapatkan imbal hasil. Namun perlu diingat juga bahwa risiko adalah hal yang bisa tidak bisa dipisahkan dari investasi, tapi ada yang bisa dihindari. ",
    link: "https://rhbtradesmart.co.id/article/begini-strategi-investasi-yang-efektif-untuk-generasi-z-dan-milenial-wajib-coba/",
  },
  {
    id: 5,
    title: "6 Jenis Investasi Yang Cocok Untuk Anak Muda",
    desc: "Investasi untuk anak muda sekarang banyak dibicarakan oleh praktisi keuangan, media, maupun di kalangan masyarakat sendiri demi mencapai tujuan financial freedom. Apa yang dimaksud dengan financial freedom? Artinya kondisi individu yang sudah mempunyai investasi atau dana simpanan yang cukup untuk menikmati masa kini dan masa yang akan datang. Nah, sudah penasaran apa saja jenis investasi untuk anak muda yang bisa dimulai dari sekarang? Berikut ini pilihannya!",
    link: "https://futureskills.id/blog/6-jenis-investasi-yang-cocok-untuk-anak-muda/",
  },
  {
    id: 6,
    title:
      "Mau Coba Pakai Paylater? Pertimbangkan 4 Sisi Buruk Paylater Ini Dulu",
    desc: "Paylater adalah metode pembayaran nanti yang dilakukan dengan sistem pencicilan. Sistem ini serupa dengan sistem pembayaran kredit cicilan. Sistem pembayaran ini menjadi sangat diminati karena praktis dan mudah dilakukan di mana pun. Meski nyaman dan terlihat praktis untuk digunakan, tetap ada beberapa dampak buruk dari penggunaan paylater, lo.",
    link: "https://momsmoney.kontan.co.id/news/mau-coba-pakai-paylater-pertimbangkan-4-sisi-buruk-paylater-ini-dulu",
  },
  {
    id: 7,
    title: "3 Rahasia Belanja Pintar dan Hemat Ala Gen Z",
    desc: "Gen Z perlu memperhatikan cara hingga tips belanja hemat agar pengeluaran tidak boncos. Di mana mereka perlu memikirkan dengan matang saat ingin berbelanja. Karena nyatanya ketika melihat banyak promo yang berseliweran, rasanya ingin memasukkan semua barang ke dalam keranjang. ",
    link: "https://economy.okezone.com/read/2023/10/05/622/2895262/3-rahasia-belanja-pintar-dan-hemat-ala-gen-z",
  },
  {
    id: 8,
    title: "5 Tips Menabung untuk Generasi Z, Minimalkan Utang",
    desc: "Hayo siapa disini Gen Z yang kerjaannya suka boros? nongkrong sana-sini tapi nggak inget buat save money. Belum lagi beliin barang-barang yang bahkan sebenernya nggak penting dan nggak kamu perluin banget. Maka dari itu, dengan kamu mengelola keuangan dengan baik, termasuk menabung, adalah keterampilan yang sangat penting untuk dikuasai sejak dini, khususnya untuk Gen Z. Nah, berikut lima tips menabung agar kamu bisa mengatur finansial dengan baik. Let's go",
    link: "https://www.idntimes.com/life/inspiration/danang-pradipta/tips-menabung-generasi-z-c1c2",
  },
  {
    id: 9,
    title: "4 Cara Self Reward yang Tetap On Budget",
    desc: "Self reward yang menjadi bagian dari self love, memang sedang digaungkan dua tahun belakangan. Hal ini sejalan dengan masyarakat yang semakin sadar akan pentingnya kesehatan mental. Salah satu cara untuk menerapkan self reward adalah dengan membeli barang atau jasa yang diinginkan. Misalnya setelah lima hari penuh bekerja, kamu memanjakan diri pada akhir pekan dengan pergi ke spa, nonton bioskop, atau belanja untuk mengapresiasi hasil kerja kerasmu",
    link: "https://blog.kredivo.com/4-cara-self-reward-yang-tetap-on-budget/",
  },
  {
    id: 10,
    title: "Tren Soft Saving : Cara Gen Z Menabung Dana Pensiun",
    desc: "Dalam dua tahun belakangan, istilah financial independence, retire early (FIRE) sangat keras digaungkan oleh perencana dan konsultan keuangan. Namun, tahukah kamu kalau ternyata hal tersebut mendapatkan perlawanan dari anak muda, terutama Gen Z?. Sebelumnya, kamu pasti pernah terpapar konten keuangan atau setidaknya mendengar bahwa betapa enaknya pensiun lebih cepat, tanpa perlu menunggu tua. Maka itu, kamu harus bekerja lebih keras dan cerdas untuk bisa mengumpulkan uang lebih besar.",
    link: "https://klasika.kompas.id/baca/tren-soft-saving-cara-gen-z-menabung-dana-pensiun/",
  },
  {
    id: 11,
    title: "Pentingnya Dana Darurat Untuk Kaum Milenial ",
    desc: "Peran dana darurat dalam pengelolaan keuangan pribadi merupakan aspek yang sangat penting, apalagi pada saat terjadi sesuatu yang di luar dugaan atau tidak kita inginkan. Salah satunya adalah di masa pandemi seperti sekarang ini yang memicu krisis finansial dan banyak aktivitas bisnis yang berhenti.",
    link: "https://www.cxomedia.id/business-and-career/20220213122604-61-173706/pentingnya-dana-darurat-untuk-kaum-milenial",
  },
  {
    id: 12,
    title: "Generasi Milenial, Jangan Lupa Siapkan Dana Pensiun",
    desc: "Menurut sensus penduduk tahun 2021, hampir 28 persen dari populasi Indonesia termasuk dalam kategori generasi Z dan sekira 26 persen lainnya termasuk dalam generasi milenial. Dalam beberapa tahun ke depan, kedua generasi ini akan memasuki rentang usia produktif, yaitu antara 15 hingga 41 tahun.",
    link: "https://www.republika.id/posts/48876/generasi-milenial-jangan-lupa-siapkan-dana-pensiun",
  },
  {
    id: 13,
    title: "8 Tips Mengatur Keuangan untuk Sandwich Generation",
    desc: "Sandwich generation memang selalu menarik untuk dibahas.  Sandwich generation atau ‘generasi roti lapis’ adalah sekelompok orang dewasa yang telah berkeluarga dan bertanggung jawab merawat orang tua mereka serta anak-anak mereka sendiri. Menjadi sandwich generation memang bukan perkara mudah. Merawat orang tua baik secara fisik, mental, serta keuangan ketika kita telah memiliki keluarga sendiri adalah sebuah tantangan tersendiri.",
    link: "https://mediakeuangan.kemenkeu.go.id/article/show/8-tips-mengatur-keuangan-untuk-sandwich-generation",
  },
  {
    id: 14,
    title: "6 Tips Menyiapkan Biaya Pernikahan",
    desc: "Menikah merupakan momen sakral yang ingin dilakukan setiap orang dengan istimewa dan tak terlupakan. Butuh persiapan yang matang untuk bisa mewujudkan pernikahan yang sesuai dengan wedding dream kita. Utamanya adalah mempersiapkan budget atau biaya yang akan dipakai untuk segala macam kebutuhan acara tersebut. Jika dana pernikahan kita tidak dipersiapkan secara matang tentu dampaknya bisa berbahaya. Ini dia beberapa tips menyiapkan dana biaya pernikahan.",
    link: "https://mediakeuangan.kemenkeu.go.id/article/show/6-tips-menyiapkan-biaya-pernikahan",
  },
  {
    id: 15,
    title: "8 Tips Merencanakan Keuangan Agar Mencapai Financial Freedom",
    desc: "Apakah Smart People termasuk golongan orang-orang yang ingin hidup mapan dan memiliki kondisi keuangan yang stabil? Jawabannya sudah pasti iya, dong? Siapa sih yang gak mau hidup nyaman dengan kondisi finansial yang baik? Hal yang satu ini tentunya menjadi dambaan bagi setiap orang. Kalau Smart People adalah orang yang belajar trading saham, kemungkinan Smart People sudah pernah dengar kata berikut ini.",
    link: "https://rhbtradesmart.co.id/article/articles-8-tips-merencanakan-keuangan-agar-mencapai-financial-freedom/",
  },
  {
    id: 16,
    title: "Anti Boros! 9 Cara Mengatur Keuangan Rumah Tangga",
    desc: "Keuangan adalah aspek penting yang perlu diperhatikan, termasuk ketika bicara tentang rumah tangga. Di dalam kehidupan rumah tangga, tentunya ada berbagai keperluan yang perlu dipenuhi, sehingga keuangan pun perlu disusun dengan baik. Sebenarnya, ada berbagai cara mengatur keuangan rumah tangga yang efektif dan bisa menjadi referensi.",
    link: "https://amartha.com/blog/pendana/money-plus/sembilan-cara-mengatur-keuangan-rumah-tangga/",
  },
  {
    id: 17,
    title: "Apakah Millennials dan Gen-Z Perlu Kartu Kredit?",
    desc: "Kembali lagi dengan artikel untuk para generasi Millennials dan Gen-Z. Kali ini kita akan membahas apakah kamu, sebagai Millennials dan Gen-Z memerlukan kartu kredit. Kartu kredit sendiri merupakan salah satu alat transaksi non-tunai yang berbasis pinjaman atau utang.  Singkatnya dengan kartu ini, kamu bisa melakukan transaksi tanpa harus membayar secara tunai, melainkan dengan utang yang bisa dibayarkan secara berangsur per bulan.",
    link: "https://blog.klob.id/2022/03/09/apakah-millennials-dan-gen-z-perlu-kartu-kredit/",
  },
  {
    id: 18,
    title: "9 Ide Sumber Passive Income untuk Gen Z 2024, Yuk Cobain!",
    desc: "Punya penghasilan pasif adalah keinginan banyak orang, termasuk gen Z. Kabar baiknya, kini ada banyak opsi tang bisa dipilih untuk mendapat uang tanpa banyak bekerja.Sebagai generasi yang dekat dengan teknologi, gen Z punya kapasitas untuk memanfaatkan produk digital. Dengan begitu, passive income untuk gen Z adalah hal yang sangat mungkin dicapai.",
    link: "https://www.finansialku.com/perencana-keuangan/passive-income-untuk-gen-z/",
  },
  {
    id: 19,
    title:
      "Millennial Dicap Konsumtif, Begini Tips Kelola Gaji Supaya Gak Cekak",
    desc: "Pengelolaan keuangan yang baik dan bijak bakal memberi dampak yang baik kehidupan di masa depan. Namun menurut sejumlah riset, hal itu belum tercermin pada diri generasi millennial saat ini. Para generasi muda ini dinilai begitu asyik menikmati hidup sesaat saja tanpa memikirkan masa depan mereka.",
    link: "https://www.idntimes.com/business/finance/hana-adi-perdana-1/millennial-dicap-konsumtif-begini-tip-kelola-gaji-supaya-gak-cekak",
  },
  {
    id: 20,
    title: "Cara Mengatur Keuangan Dengan Metode 50 30 20",
    desc: "Saat ini pekerja berpenghasilan rendah maupun tinggi memiliki kesulitan untuk menabung. Rasanya kebutuhan dan keinginan semakin meningkat seiring meningkatnya inflasi dan pergeseran gaya hidup pasca pandemi Covid-19. Namun hal ini tidak menjadi alasan untuk tidak menabung. Elizabeth Warren dan Amelia Warren Tyagi melalui bukunya yang berjudul All Your Worth : The Ultimate Lifetime Money Plan mempopulerkan metode mengatur keuangan 50/30/20",
    link: "https://aaji.or.id/Articles/cara-mengatur-keuangan-dengan-metode-50-30-20",
  },
];

export default content;
