<template>
    <div class="wrapper">
            <!--sidebar wrapper -->
            <div class="sidebar-wrapper" data-simplebar="true">
                <div class="sidebar-header">
                    <div>
                        <img src="bootstrap/images/logocb.png" class="logo-icon" alt="logo icon">
                    </div>
                    <div class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i>
                    </div>
                </div>
                <!--navigation-->
                <ul class="metismenu" id="menu">
                    <li>
                        <a href="/index2">
                            <div class="parent-icon"><i class='bx bx-home-circle'></i>
                            </div>
                            <div class="menu-title">Dashboard</div>
                        </a>
                    </li>
                    <li>
                        <a  href="/lomba">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-plus-circle"></i>
                            </div>
                            <div class="menu-title">Lomba</div>
                        </a>
                    </li>
                    <li>
                        <a href="/partisipan">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-street-view"></i>
                            </div>
                            <div class="menu-title">Partisipan</div>
                        </a>
                    </li>
                    <li>
                        <a href="/profil">
                            <div class="parent-icon"><i class="bx bx-user-circle"></i>
                            </div>
                            <div class="menu-title">Profile</div>
                        </a>
                    </li>
                    <li>
                        <a href="/laporan">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-file"></i>
                            </div>
                            <div class="menu-title">Laporan</div>
                        </a>
                    </li>
                    <li>
                        <a href="/event">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-calendar-event"></i>
                            </div>
                            <div class="menu-title">Event</div>
                        </a>
                    </li>
                    <li>
                        <a href="/berita">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-news"></i>
                            </div>
                            <div class="menu-title">Berita</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-user"></i>
                            </div>
                            <div class="menu-title">Sponsor</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-bell"></i>
                            </div>
                            <div class="menu-title">Pesan</div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-power-off"></i>
                            </div>
                            <div class="menu-title">Logout</div>
                        </a>
                    </li>
                </ul>
                <!--end navigation-->
            </div>
            <!--end sidebar wrapper -->
            <!--start header -->
            <header>
                <div class="topbar d-flex align-items-center">
                    <nav class="navbar navbar-expand">
					<div class="top-menu ms-auto">
						<a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#">
							<div class="user-info ps-3">
								<p class="user-name mb-0">Habib</p>						
							</div>
						</a>
					</div>
                    </nav>    
                        <div class="header-notifications-list">
                        </div>
                        <div class="header-message-list">                                                                                
                    </div>
                </div>
            </header>
            <!--end header -->
            <!--start page wrapper -->
            <div class="page-wrapper">
                <div class="page-content">
                    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div class="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0 p-0">
                                    <li class="breadcrumb-item">
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Berita</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="mb-0" style="margin-top: -5px;">Berita</h4>
                            <hr style="margin-top: 10px;" />		
                            <button class="btn btn-success"  style="margin-top: -7px;" onclick="window.location.href='/tambahberita'">Tambah Berita</button>
                            <hr style="margin-top: 10px;" />
                            <div style="display: flex; align-items: center; margin-top: -15px;">
                                <label  style="margin-right: 5px;">Show</label>
                                    <select id="theme_selector">
                                        <option value="15" selected>15</option>
                                        <option value="30">30</option>
                                        <option value="50">50</option>
                                    </select>
                                <label  style="margin-left: 5px;"> entries </label>
                                <br><br><br>
                                <div style="flex-grow: 1; text-align: right;">
                                    <label>Cari: </label>
                                    <label><input type="text" class="form-control" style="width: 250px;">
                                        <span class="product-show"><i></i></span>
                                    </label> 
                                </div>
                            </div>
                            <table id="example" class="table table-striped table-bordered" style="width:100%">
								<thead>
									<tr>
										<th>No</th>
										<th>Judul</th>
										<th>Tanggal Upload</th>
										<th>Aksi</th>
									</tr>
								</thead>
                                <tbody>
									<tr>
										<td>1</td>
										<td>Profil Ketua Emailkomp Periode 2024</td>
										<td>12 Desember 2023</td>
										<td>
                                            <div style="text-align: center;">
                                                <button class="btn btn-warning" onclick="window.location.href='/detailberita'">Detail</button>
                                                <button class="btn btn-primary" onclick="window.location.href='/editberita'">Edit</button>
                                                <button class="btn btn-danger">Hapus</button>
                                            </div>
                                        </td>
									</tr>
                                    <tr>
										<td>2</td>
										<td>Monitoring Perkembangan Projek Manajemen Lomba Prodi</td>
										<td>27 Februari 2024</td>
										<td>
                                            <div style="text-align: center;">
                                                <button class="btn btn-warning" onclick="window.location.href='/detailberita'">Detail</button>
                                                <button class="btn btn-primary" onclick="window.location.href='/editberita'">Edit</button>
                                                <button class="btn btn-danger">Hapus</button>
                                            </div>
                                        </td>
									</tr>
                                </tbody>
							</table>
                            <div class="card-body">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:;" aria-label="Previous">	<span aria-hidden="true">«</span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="javascript:;">1</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="javascript:;">2</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="javascript:;">3</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:;" aria-label="Next">	<span aria-hidden="true">»</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end page wrapper -->
        </div>
    </template>
    
   