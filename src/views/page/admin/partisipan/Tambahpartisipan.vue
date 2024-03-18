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
                        <h4 class="mb-0">Tambah Partisipan</h4>
                        <hr/>
                        <div class="">
                            <div class=""  style="margin-bottom: 10px;">
                                <label style="margin-bottom: 5px;">Nama Lengkap</label>
                                <input type="email" class="form-control" value="Muhammadddddd">
                            </div>
                            <div class=""  style="margin-bottom: 10px;">
                                <label style="margin-bottom: 5px;">Username</label>
                                <input type="email" class="form-control" value="Farhan">
                            </div>
                            <div class=""  style="margin-bottom: 10px;">
                                <label style="margin-bottom: 5px;">Email</label>
                                <input type="email" class="form-control" value="farhan@gmail.com">
                            </div>
                            <div class=""  style="margin-bottom: 10px;">
                                <label style="margin-bottom: 5px;">Password</label>
                                <div class="input-group" id="show_hide_password">
									<input type="password" class="form-control border-end-0" id="inputChoosePassword"  placeholder="*********"> <a href="javascript:;" class="input-group-text bg-transparent"><i class='bx bx-hide'></i></a>
								</div>
                            </div>
                            <div class="">
                                <label class="form-label">Role</label>
                                <div class="col-12">
                                    <select class="form-select" id="inputProductType">
                                        <option></option>
                                        <option value="1">Superadmin</option>
                                        <option value="2">Panelis</option>
                                        <option value="3">Eventadmin</option>
                                    </select>
                                </div>
                            </div>
                            <div class="">
                                <label class="form-label">Kategori</label>
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
                            <button class="btn btn-primary" style="width: 200px; margin-right: auto; margin-top: 50px; margin-bottom: 30px" onclick="window.location.href='/partisipan'">Tambah</button>
                            <button class="btn btn-danger" style="width: 200px; margin-left: auto; margin-top: 50px; margin-bottom: 30px" onclick="window.location.href='/partisipan'">Batal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--end page wrapper -->
    </div>
    </template>
    
   