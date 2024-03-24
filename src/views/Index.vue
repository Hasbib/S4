<template>
    <!--=================================
       MAIN MENU START
   ==================================-->
   <nav class="navbar navbar-expand-lg main_menu">
       <div class="container">
           <a class="navbar-brand" href="#">
               <img src="bootstrap/images/logo.png" alt="Olinas" class="img-fluid w-100">
           </a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
               aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <i class="far fa-bars menu_icon"></i>
               <i class="far fa-times close_icon"></i>
           </button>
           <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav ms-auto">
                   <li class="nav-item">
                       <a class="nav-link active" href="#">Beranda</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#tentang-section">Tentang</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#kategori-section">Kategori</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#timeline-section">Timeline</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#berita-section">Berita</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#sponsor-section">Sponsor</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="/kontak">Kontak</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link common_btn" href="/login">Login</a>
                   </li>
               </ul>
           </div>
       </div>
   </nav>
   <!--=================================
       MAIN MENU END
   ==================================-->


   <!--=================================
       BANNER START
   ==================================-->
   <section class="tf__banner" id="banner" style="background: url(bootstrap/images/home.jpg),url(bootstrap/images/event_img_1.jpg);">
       <div class="container">
           <div class="row">
               <div class="col-xl-7 col-lg-8">
                   <div class="tf__banner_text wow fadeInUp" data-wow-duration="1.5s">
                       <h1>Olimpiade Informatika Nusantara</h1>
                       <h7>OLINAS 2024</h7>
                       <!-- <p>20 Februari - 20 Maret 2024</p> --> <p></p>
                       <ul class="d-flex flex-wrap align-items-center">
                           <li><a class="common_btn5" href="file:///C:/xampp/htdocs/SEMESTER4/PBL/images/Tutorial%20biar%20jago.pdf">Daftar Sekarang</a></li>
                           <li><a class="common_btn6" href="file:///C:/xampp/htdocs/SEMESTER4/PBL/images/Tutorial%20biar%20jago.pdf">Panduan Lomba 2045</a></li>
                           <li><a class="common_btn7" href="file:///C:/xampp/htdocs/SEMESTER4/PBL/images/Tutorial%20biar%20jago.pdf">Panduan Pendaftaran dan Pengumpulan Karya</a></li>         
                       </ul>
                   </div>
               </div>
           </div>
       </div>
   </section>
   <!--=================================
       BANNER END
   ==================================-->
   <br>
   <!--=================================
       ABOUT 2 START
   ==================================-->
   <section id="tentang-section" class="tf__home_2_about pt_100 pb_100" style="background: url(bootstrap/images/about_2_bg.jpg);">
       <div class="container">
           <div class="row">
               <div class="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-duration="1.5s">
                   <div class="tf__home_2_about_img">
                       <img src="bootstrap/images/about_2_img_3.jpg" alt="about us" class="img-fluid w-100">
                   </div>
               </div>
               <div class="col-xl-6 col-lg-6 wow fadeInRight" data-wow-duration="1.5s">
                   <div> <!-- <div class="tf__home_2_about_text"-->
                       <div class="tf__heading_area tf__heading_area_left mb_25">
                           <h5>Apa itu OLINAS ?</h5>
                       </div>
                       <p class="tentang" > Olinas adalah Olimpiade Informatika Nasional, ajang kompetisi nasional bagi 
                           mahasiswa vokasi di Indonesia. Event ini memajukan keterampilan teknologi dan kreativitas, penting 
                           dalam menghadapi era digital. Olinas, acara tahunan yang dinantikan, menginspirasi pelajar untuk 
                           eksplorasi dan berkembang dalam teknologi informasi. Dengan peran yang semakin penting, Olinas 
                           memberikan motivasi bagi generasi mendatang untuk mengeksplorasi dunia digital. 
                       </p>
                   </div>
               </div>
           </div>
       </div>
   </section>
   <!--=================================
       ABOUT 2 END
   ==================================-->

   <!--=================================
       CATEGORIES START
   ==================================-->
   <section id="kategori-section" class="tf__categories mt_95">
       <div class="container">
           <div class="row">
               <div class="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp" data-wow-duration="1.5s">
                   <div class="tf__heading_area mb_15">
                       <h5>Kategori Lomba</h5>
                   </div>
               </div>
           </div>
           <div class="row">
               <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1.5s">
                   <div class="tf__single_category light_blue">
                       <div class="tf__single_category_icon">
                           <i class="fal fa-book"></i>
                       </div>
                       <div class="tf__single_category_text">
                           <h3>Lomba Poster</h3>
                           <p>Kata - kata hari ini</p>
                       </div>
                   </div>
               </div>
               <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1.5s">
                   <div class="tf__single_category blue">
                       <div class="tf__single_category_icon">
                           <i class="fal fa-book"></i>
                       </div>
                       <div class="tf__single_category_text">
                           <h3>Lomba Ar / Vr</h3>
                           <p>Kata - kata hari ini.</p>
                       </div>
                   </div>
               </div>
               <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1.5s">
                   <div class="tf__single_category green">
                       <div class="tf__single_category_icon">
                           <i class="fal fa-book"></i>
                       </div>
                       <div class="tf__single_category_text">
                           <h3>Lomba IOT</h3>
                           <p>Kata - kata hari ini.</p>
                       </div>
                   </div>
               </div>
               <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1.5s">
                   <div class="tf__single_category gray">
                       <div class="tf__single_category_icon">
                           <i class="fal fa-book"></i>
                       </div>
                       <div class="tf__single_category_text">
                           <h3>Lomba Jaringan</h3>
                           <p>Kata - kata hari ini.</p>
                       </div>
                   </div>
               </div>
               <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1.5s">
                   <div class="tf__single_category orange">
                       <div class="tf__single_category_icon">
                           <i class="fal fa-book"></i>
                       </div>
                       <div class="tf__single_category_text">
                           <h3>Lomba Bernyanyi</h3>
                           <p>Kata - kata hari ini.</p>
                       </div>
                   </div>
               </div>
               <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1.5s">
                   <div class="tf__single_category red">
                       <div class="tf__single_category_icon">
                           <i class="fal fa-book"></i>
                       </div>
                       <div class="tf__single_category_text">
                           <h3>Lomba PKM</h3>
                           <p>Kata - kata hari ini.</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>

   <section id="kategori-section" class="tf__categories mt_95">
        <div class="tf__activities_slider_area pt_95 pb_100">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp" data-wow-duration="1.5s">
                        <div class="tf__heading_area mb_15">
                            <h5>Kategori Lomba</h5>
                        </div>
                    </div>
                </div>
                <div class="row wow fadeInUp" data-wow-duration="1.5s">
                    <div class="col-xl-3">
                        <div class="tf__activities_item light_blue">
                            <span> <i class="fal fa-book"></i> </span>
                            <h3>Lomba AR/VR</h3>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="tf__activities_item green">
                            <span> <i class="fas fa-graduation-cap"></i> </span>
                            <h3>Lomba UI/UX</h3>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="tf__activities_item orange">
                            <span> <i class="far fa-university"></i> </span>
                            <h3>Creative Video</h3>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="tf__activities_item blue">
                            <span> <i class="fas fa-books-medical"></i> </span>
                            <h3>Smart System</h3>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="tf__activities_item green">
                            <span> <i class="fas fa-analytics"></i> </span>
                            <h3>Digital Marketing</h3>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="tf__activities_item green">
                            <span> <i class="fas fa-analytics"></i> </span>
                            <h3>Digital Marketing</h3>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="tf__activities_item green">
                            <span> <i class="fas fa-analytics"></i> </span>
                            <h3>Digital Marketing</h3>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="tf__activities_item green">
                            <span> <i class="fas fa-analytics"></i> </span>
                            <h3>Digital Marketing</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   <!--=================================
       CATEGORIES END
   ==================================-->


   <section id="timeline-section" class="tf__categories mt_95">
       <div class="container">
           <div class="row">
               <div class="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp" data-wow-duration="1.5s">
                   <div class="tf__heading_area mb_15">
                       <h5>Timeline</h5>
                   </div>
               </div>
           </div>
       </div>
   </section>
   <br><br>

<!--=================================
       EVENT START
   ==================================-->
   <section id="berita-section" class="tf__event mt_95">
       <div class="container">
           <div class="row">
               <div class="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp" data-wow-duration="1.5s">
                   <div class="tf__heading_area mb_40">
                       <h5>Berita</h5>
                   </div>
               </div>
           </div>
           <div class="row event_slider">
               <div class="col-xl-4 wow fadeInUp" data-wow-duration="1.5s" onclick="window.location.href='/informasiberita'">
                   <div class="tf__single_event">
                       <div class="tf__single_event_img">
                           <img src="bootstrap/images/event_img_1.jpg" alt="event" class="img-fluid w-100">
                       </div>
                       <div class="tf__single_event_text">
                           <a class="title" href="/informasiberita">Monitoring Perkembangan Projek Manajemen Lomba Prodi</a>
                           <p>Platform yang sering kami gunakan untuk melakukan diskusi online selain whatsapp adalah discord </p>
                           <div class="tf__single_event_footer">
                               <span>27 Februari 2024</span>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-xl-4 wow fadeInUp" data-wow-duration="1.5s" onclick="window.location.href='/informasiberita'">
                   <div class="tf__single_event">
                       <div class="tf__single_event_img">
                           <img src="bootstrap/images/liburan.jpg" alt="event" class="img-fluid w-100">
                       </div>
                       <div class="tf__single_event_text">
                           <a class="title"  href="/informasiberita">Berlibur Sebagai Persiapan Sebelum Memulai Proyek</a>
                           <p>Sebelum memulai proyek, kami melakukan liburan agar pikiran segar.</p>
                           <div class="tf__single_event_footer">
                               <span>29 Februari 2024</span>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-xl-4 wow fadeInUp" data-wow-duration="1.5s" onclick="window.location.href='/informasiberita'">
                   <div class="tf__single_event">
                       <div class="tf__single_event_img">
                           <img src="bootstrap/images/farel.png" alt="event" class="img-fluid w-100">
                       </div>
                       <div class="tf__single_event_text">
                           <a class="title"  href="/informasiberita">Profil Ketua Emailkomp Periode 2024</a>
                           <p>Emailkomp adalah sebuah organisasi dibawah pengawasan langsung oleh Prodi Teknik Informatika</p>
                           <div class="tf__single_event_footer">
                               <span>12 Desember 2023</span>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-xl-4 wow fadeInUp" data-wow-duration="1.5s" onclick="window.location.href='/informasiberita'">
                   <div class="tf__single_event">
                       <div class="tf__single_event_img">
                           <img src="bootstrap/images/game.png" alt="event" class="img-fluid w-100">
                       </div>
                       <div class="tf__single_event_text">
                           <a class="title"  href="/informasiberita">Bermain Game Untuk Melatih Kekompakan Tim</a>
                           <p>Hal yang sering kami lakukan ketika selesai diskusi yaitu bermain game gartic</p>
                           <div class="tf__single_event_footer">
                               <span>25 Februari 2024</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
   <!--=================================
       EVENT END
   ==================================-->

   <section id="sponsor-section" class="tf__categories mt_95">
       <div class="container">
           <div class="row">
            <div class="tf__heading_area mb_15">
                <h5>Sponsor</h5>
                <div class="sponsor-grid">
                    <div class="sponsor-item">
                        <img src="bootstrap/images/UNS.png" alt="about" class="img-fluid">
                    </div>
                    <div class="sponsor-item">
                        <img src="bootstrap/images/logo-sv.png" alt="about" class="img-fluid">
                    </div>
                    <div class="sponsor-item">
                        <img src="bootstrap/images/UNS.png" alt="about" class="img-fluid">
                    </div>
                    <div class="sponsor-item">
                        <img src="bootstrap/images/logo-sv.png" alt="about" class="img-fluid">
                    </div>
                    <div class="sponsor-item">
                        <img src="bootstrap/images/UNS.png" alt="about" class="img-fluid">
                    </div>
                    </div>
                </div>
           </div>
       </div>
   </section>

   <!--=================================
       FOOTER START
   ==================================-->
   <footer class="tf__footer mt_100">
       <div class="tf__footer_overlay pt_75">
           <div class="tf__copyright">
               <p>Copyright ©2024 Tim Website OLINAS</p>
           </div>
       </div>    
   </footer>
   <!--=================================
       FOOTER END
   ==================================-->


   <!--=============================
       SCROLL BUTTON START
   ==============================-->
   <div class="tf__scroll_btn" href="#"> go to top </div>
   <!--=============================
       SCROLL BUTTON END 
   ==============================-->
</template>

<script>
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
   console.log('Konten DOM Telah Dimuat');
   const banner = document.getElementById('banner');
   if (banner) {
       let count = 0;
       const images = [
           'bootstrap/images/home.jpg',
           'bootstrap/images/pantai.jpg',
           'bootstrap/images/merbabu.jpg',
       ];

       setInterval(function() {
           count = (count + 1) % images.length;
           banner.style.backgroundImage = `url(${images[count]})`;
       }, 6000);
   }
});


</script>