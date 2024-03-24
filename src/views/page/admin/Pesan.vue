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
                        <a href="javascript:;" class="has-arrow">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-plus-circle"></i>
                            </div>
                            <div class="menu-title">Event</div>
                        </a>
                        <ul>
                            <li> <a href="/lomba"><i class="fadeIn animated bx bx-plus-circle"></i>Lomba</a>
                            </li>
                            <li> <a href="/administrator"><i class="bx bx-right-arrow-alt"></i>Administrator</a>
                            </li>
                            <li> <a href="/landingpage"><i class="bx bx-right-arrow-alt"></i>Landing Page</a>
                            </li>
                            <li> <a href="/tim"><i class="bx bx-right-arrow-alt"></i>Tim</a>
                            </li>
                            <li> <a href="/sponsor"><i class="bx bx-right-arrow-alt"></i>Sponsor</a>
                            </li>
                            <li> <a href="/berita"><i class="bx bx-right-arrow-alt"></i>Berita</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/partisipan">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-street-view"></i>
                            </div>
                            <div class="menu-title">Partisipan</div>
                        </a>
                    </li>
                    <li>
                        <a href="/pesan">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i>
                            </div>
                            <div class="menu-title">Pesan</div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i>
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
                                    <li class="breadcrumb-item active" aria-current="page">Pesan</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="mb-0" style="margin-top: -5px;">Tabel Pesan</h4>
                            <hr style="margin-top: 10px;" />		
                            <label style="margin-right: 10px;">Tampilkan Status</label> 
								<select class="form-select2">
									<option selected>Semua</option>
									<option>Belum Dibaca</option>
                                    <option>Sudah Dibaca</option>
								</select>
                            <div style="display: flex; align-items: center; margin-top: -15px;">
                                <label  style="margin-right: 5px;">Tampilkan</label>
                                    <select id="theme_selector">
                                        <option value="15" selected>15</option>
                                        <option value="30">30</option>
                                        <option value="50">50</option>
                                    </select>
                                <label  style="margin-left: 5px;"> entri </label>
                                <br><br><br>
                                <div style="flex-grow: 1; text-align: right;">
                                    <label style="margin: 10px;">Cari </label>
                                    <label><input type="text" class="form-control" style="width: 250px;">
                                        <span class="product-show"><i></i></span>
                                    </label> 
                                </div>
                            </div>
                            <table id="example" class="table table-bordered" style="width:100%">
								<thead class="table-dark">
									<tr>
										<th>ID</th>
										<th>Nama</th>  
										<th>Email</th>
                                        <th>No WhatsApp</th>
                                        <th>Pesan</th>
										<th style="border: none;">Status</th>
                                        <th style="border: none;"></th> 
									</tr>
								</thead>
                                <tbody>
									<tr>
										<td>1</td>
										<td>Lionel Andres </td>
										<td>goat@gmail.com</td>
                                        <td>08123456789</td>
                                        <td>Mohon ijin min, saya tidak bisa login akun min, mohon solusinya</td>
                                        <td style="border: none;"><label>Unread</label></td>
                                        <td style="border: none;">
                                            <input type="checkbox">
                                        </td>
									</tr>
                                    <tr>
										<td>2</td>
										<td>Cristiano Ikhsan </td>
										<td>goat@gmail.com</td>
                                        <td>08123456789</td>
                                        <td>Mohon ijin min, saya tidak bisa login akun min, mohon solusinya</td>
                                        <td style="border: none;"><label>Read</label></td>
                                        <td style="border: none;">
                                            <input type="checkbox" checked>
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