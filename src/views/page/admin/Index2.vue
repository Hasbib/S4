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
					<a href="#">
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
                    <a href="/laporan">
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
					<div class="mobile-toggle-menu"><i class='bx bx-menu'></i>
					</div>
					<div class="top-menu ms-auto">
						<a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							<div class="user-info ps-3">
								<p class="user-name mb-0">Habib</p>
								<p class="designattion mb-0">Web Designer</p>
							</div>
						</a>
					</div>
				</nav>
			</div>
		</header>
		<!--end header -->
        
    </div>
    </div>
</template>
