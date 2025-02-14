<template>
  <header class="header fixed-top">
      <nav
        :class="[
          'navbar',
          isScrolled ? 'bg-body-tertiary' : 'transparent-header',
        ]"
      >
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
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link" @click="$router.push('/User')"
                    >Личный кабинет</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="$router.push('СКОРО БУДЕТ')"
                    >Преподавателям</a
                  >
                </li>
                <li class="nav-item">
                <d class="nav-link">Студентам
                  <li class="nav-item">
                <a class="nav-link" @click="$router.push('/Universities')">Universities</a>
                <a class="nav-link" @click="$router.push('/Colleges')">Colleges</a>
                  </li>
                </d>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="$router.push('/Test')">Профориентационный тест</a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div class="user-container">
      <div class="user-background">

      </div>
      <div class="user-content">
        <div class="user-img">
          <img src="@/components/img/UserAvatar.png" class="user-img-avatar">
        </div>
        <div class="user-info">
          <div class="user-name">
            <h> Login name</h>
            <p>student</p>

          </div>
          <div class="user-logout">
            <button class="logout-button" @click="logout()">logout</button>
          </div>
        </div>

      </div>

      <div class="user-events">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>

      </div>
    </div>
  <body>

  </body>
</template>

<script>
      
</script>

<style scoped>

body {
  width: 100%;
  height: 100%;
}
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
.nav-item {
  margin-left: 10px;
}
.navbar-logo {
  font-size: 2rem;
  font-weight: bolder;
  color: red;
}

.user-container {
  width: 100%;
  height: 100vw;
}

.user-background {
  background-color: #495B69;
  width: 100%;
  height: 14%;
}

.user-content {
  position: relative;
  height: 100px;
}

.user-img {
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 85px;
  left: 100px;
}


.user-img-avatar{
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
}

.user-info {
  display: flex;
  justify-content:space-between;
  margin-left: 23%;
  padding: 10px;
}

h {
  font-size: 5rem;
  color: black;
  font-weight: bold;
}

p {
  font-size: 2rem;
  color:#919EA9;
  font-weight: normal;
}

.logout-button {
  background-color: white !important;
  color: #BB0000;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5em;
}
</style>
