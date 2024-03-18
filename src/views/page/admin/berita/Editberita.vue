<template>
    <div class="wrapper">
        <!--start header -->
        <header>
            <div class="navbar-tambah">
                <div class="navbar-left">
                    <img src="bootstrap/images/logo.png" alt="Logo">
                </div>
                <div class="navbar-right" style="margin-left: auto;">
                    <p>Habib</p>
                </div>
            </div>
        </header>
        <!--end header -->
        <!--start page wrapper -->
        <div class="page-wrapper-tambah">
            <div class="page-content">
                <div class="card">
                    <div class="card-body">
                        <h4 class="mb-0">Edit Berita</h4>
                        <hr/>
                        <div class="">
                            <div class=""  style="margin-bottom: 10px;">
                                <label style="margin-bottom: 5px;">Judul</label>
                                <input type="email" class="form-control" value="Monitoring Perkembangan Projek Manajemen Lomba Prodi">
                            </div>
                            <div class="">
                                <label style="margin-bottom: 5px;">Deskripsi</label>
                                <div class="col-12">
                                    <textarea class="form-control" id="inputProductDescription" rows="7" style="margin-bottom: 10px;" value="Platform yang sering kami gunakan untuk melakukan diskusi online selain whatsapp adalah discord"></textarea>
                                </div>
                            </div>
                            <div class="">
                                <label class="form-label">Tanggal Upload</label>
								<input type="date" class="form-control" style="margin-bottom: 8px;">
                            </div>

                            <div class="">
                                <label for="formFile" class="form-label">Upload Gambar</label>
								<input class="form-control" type="file" id="formFile">
                            </div>
                        </div>
                        <div style="display: flex;">
                            <button class="btn btn-primary" style="width: 200px; margin-right: auto; margin-top: 50px; margin-bottom: 30px" onclick="window.location.href='/berita'">Simpan</button>
                            <button class="btn btn-danger" style="width: 200px; margin-left: auto; margin-top: 50px; margin-bottom: 30px" onclick="window.location.href='/berita'">Batal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--end page wrapper -->
    </div>
    </template>
    
   