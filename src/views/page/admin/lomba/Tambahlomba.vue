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
                        <h4 class="mb-0">Tambah Lomba</h4>
                        <hr/>
                        <div class="row">
                            <div class="col-md-6"  style="margin-bottom: 10px;">
                                <label style="margin-bottom: 5px;">Nama Lomba</label>
                                <input type="email" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label style="margin-bottom: 5px;">Tempat</label>
                                <input type="email" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label style="margin-bottom: 5px;">Deskripsi</label>
                                <div class="col-12">
                                    <textarea class="form-control" id="inputProductDescription" rows="7" style="margin-bottom: 10px;"></textarea>
                                    
                                    <label for="formFile" class="form-label">Upload Gambar</label>
									<input class="form-control" type="file" id="formFile">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label style="margin-bottom: 5px;">Kontak PJ</label>
                                <input type="email" class="form-control" style="margin-bottom: 8px;">
                                
                                <label class="form-label">Tanggal Mulai</label>
								<input type="date" class="form-control" style="margin-bottom: 8px;">

                                <label class="form-label">Tanggal Berakhir</label>
								<input type="date" class="form-control" style="margin-bottom: 8px;">

                                <label style="margin-bottom: 5px;">Kategori Lomba</label>
                                <div class="col-12">
                                    <select class="form-select" id="inputProductType">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex;">
                            <button class="btn btn-primary" style="width: 200px; margin-right: auto; margin-top: 50px; margin-bottom: 30px" onclick="window.location.href='/lomba'">Tambah</button>
                            <button class="btn btn-danger" style="width: 200px; margin-left: auto; margin-top: 50px; margin-bottom: 30px" onclick="window.location.href='/lomba'">Batal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--end page wrapper -->
    </div>
    </template>
    
   