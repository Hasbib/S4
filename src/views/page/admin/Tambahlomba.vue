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
                        <a href="javascript:;" class="#">
                            <div class="parent-icon"><i class="bx bx-category"></i>
                            </div>
                            <div class="menu-title">Lomba</div>
                        </a>
                    </li>
                    <li>
                        <a  href="/tambahlomba">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-plus-circle"></i>
                            </div>
                            <div class="menu-title">Tambah Lomba</div>
                        </a>
                    </li>
                    <li>
                        <a href="/tambahjuri">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-street-view"></i>
                            </div>
                            <div class="menu-title">Tambah Juri</div>
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
                        <a href="#">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-file"></i>
                            </div>
                            <div class="menu-title">Laporan</div>
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
                    <div class="breadcrumb-title pe-3">Tambah Lomba</div>
                        <div class="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0 p-0">
                                    <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Tambah Lomba</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="mb-0">Tambah Lomba</h4>
                            <hr/>		
                            <button class="btn btn-success">Tambah Lomba</button>
                            <hr/>
                            <div style="display: flex; align-items: center;">
                                <label>Show</label>
                                    <select id="theme_selector">
                                        <option value="15" selected>15</option>
                                        <option value="30">30</option>
                                        <option value="50">50</option>
                                    </select>
                                <label> entries </label>
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
										<th>Nama Lomba</th>
										<th>Tanggal Mulai</th>
										<th>Tanggal Berakhir</th>
										<th>Aksi</th>
									</tr>
								</thead>
                                <tbody>
									<tr>
										<td>1</td>
										<td>Lomba Desain</td>
										<td>15 Maret 2024</td>
										<td>20 Maret 2024</td>
										<td>
                                            <div style="text-align: center;">
                                                <button class="btn btn-danger">Hapus</button>
                                                <button class="btn btn-primary">Detail</button>
                                                <button class="btn btn-warning">Update</button>
                                            </div>
                                        </td>
									</tr>
                                    <tr>
										<td>2</td>
										<td>Lomba AR/VR</td>
										<td>18 Maret 2024</td>
										<td>25 Maret 2024</td>
										<td>
                                            <div style="text-align: center;">
                                                <button class="btn btn-danger">Hapus</button>
                                                <button class="btn btn-primary">Detail</button>
                                                <button class="btn btn-warning">Update</button>
                                            </div>
                                        </td>
									</tr>
                                </tbody>
								</table>

                        </div>
                    </div>
                </div>
            </div>
            <!--end page wrapper -->
        </div>
    </template>
    
   
