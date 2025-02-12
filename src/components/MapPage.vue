<template>
  <div class="page-container">
    <header class="header fixed-top">
      <nav :class="['navbar', isScrolled ? 'bg-body-tertiary' : 'transparent-header']">
        <div class="container-fluid">
          <a class="navbar-logo" @click="$router.push('/')">B|B</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Меню</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link" @click="$router.push('/User')">Личный кабинет</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="$router.push('СКОРО БУДЕТ')">Преподавателям</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="$router.push('/ForStudent')">Студентам</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="content">
      <div class="background-image">

        <div class="background-image-content">
          <div class="filter-container">
            <div class="filter-Search">
              <div>
    <div class="sidebar-overlay" @click="toggleSidebar"></div>

    <aside id="sidebar" ref="sidebar" class="sidebar sidebar-default open"
  :class="{'sidebar-stacked': isStacked, 'scrolled': isScrolled}">

      <div class="sidebar-header header-cover" :style="{'background-image': 'url(https://2.bp.blogspot.com/-2RewSLZUzRg/U-9o6SD4M6I/AAAAAAAADIE/voax99AbRx0/s1600/14%2B-%2B1%2B%281%29.jpg)'}">
        <!-- Sidebar toggle button -->
        <button type="button" class="sidebar-toggle" @click="toggleSidebar">
          <i class="icon-material-sidebar-arrow"></i>
        </button>
        <!-- Sidebar brand image -->
        <div class="sidebar-image">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg">
        </div>
        <!-- Sidebar brand name -->
        <a class="sidebar-brand" href="#">
          john.doe@gmail.com
        </a>
      </div>

      <!-- Sidebar navigation -->
      <ul class="nav sidebar-nav">
        <li>
          <a href="#">
            <i class="sidebar-icon md-inbox"></i>
            Inbox
          </a>
        </li>
        <li>
          <a href="#">
            <i class="sidebar-icon md-star"></i>
            Starred
          </a>
        </li>
        <li>
          <a href="#">
            <i class="sidebar-icon md-send"></i>
            Sent Mail
          </a>
        </li>
        <li>
          <a href="#">
            <i class="sidebar-icon md-drafts"></i>
            Drafts
          </a>
        </li>
      </ul>
    </aside>

    <!-- Кнопка для открытия/закрытия sidebar -->
    <button class="sidebar-toggle-button" :class="{'visible': !isSidebarOpen}" @click="toggleSidebar">

      <i class="icon-material-sidebar-arrow"></i>
    </button>

    <div class="wrapper">
      <!-- Your main content here -->
    </div>
  </div>
            </div>
            <div class="filter">

            </div>
          </div>
        </div>


      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isStacked: true,
      isSidebarOpen: true,
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
  if (this.$refs.sidebar) {
    this.$refs.sidebar.classList.toggle('open', this.isSidebarOpen);
  }
},
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      const sidebar = document.getElementById('sidebar');
      const overlay = document.querySelector('.sidebar-overlay');
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
};



</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.9);
  transition: background-color 0.3s ease;
}

.page-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
}

.background-image {
  background: url('@/components/img/Map3.png') no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
}

.background-image-dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.background-image-content {
  position: relative;
  z-index: 2;
  top: 10%;
  left: 7%;
  width: 90%;
  color: white;
}

.navbar-logo {
  font-size: 2rem;
  font-weight: bolder;
  color: red;
}
.nav-item {
  margin-left: 10px;
}
.navbar.bg-body-tertiary {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.transparent-header {
  background-color: transparent !important;
}

/* Add your CSS styles here */
.sidebar-overlay {
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: #000;
  z-index: 1034;
  transition: visibility 0 linear .4s, opacity .4s cubic-bezier(.4,0,.2,1);
}

.sidebar-overlay.active {
  opacity: 0.5;
  visibility: visible;
  transition-delay: 0;
}

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 280px;
  background: #fff;
  z-index: 1035;
  transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  transform: translateX(-280px);
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar-stacked {
  left: 0;
}

.sidebar.scrolled {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  height: 157.5px; /* 16:9 aspect ratio */
  background-size: cover;
  background-position: center;
}

.sidebar-toggle {
  position: absolute;
  right: 16px;
  top: 16px;
  background: none;
  border: none;
  cursor: pointer;
}

.sidebar-brand {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  color: #757575;
  text-decoration: none;
}

.sidebar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li a {
  display: block;
  padding: 16px;
  color: #212121;
  text-decoration: none;
}

.sidebar-nav li a:hover {
  background: #e0e0e0;
}

.sidebar-toggle-button {
  position: fixed;
  left: 270px;
  top: 50%;

  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 0 50% 50% 0;
  cursor: pointer;
  z-index: 2;
  transition: left 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-toggle-button.visible {
  left: 0px;
}

.sidebar-toggle-button i {
  font-size: 20px;
  color: #333;
}
</style>
