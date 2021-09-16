<template>
  <header class="menu">
    <div class="logo-wrapper">
      <router-link to="/adminMain">
        <img class="logo" src="../assets/pic/Logo.png" alt="" />
      </router-link>
    </div>
    <nav class="menu-nav">
      <ul class="menu-nav-wrapper">
        <li class="menu-nav-link">
          <router-link to="/adminMain" class="menu-link">
            <i class="bx bxs-home-circle"></i>
            <span class="menu-link-title"> 推文清單 </span>
          </router-link>
        </li>
        <li class="menu-nav-link">
          <router-link to="/adminUser" class="menu-link">
            <i class="bx bx-user"></i>
            <span class="menu-link-title"> 使用者列表 </span>
          </router-link>
        </li>
      </ul>
      <ul class="menu-nav-wrapper">
        <li class="menu-nav-link">
          <router-link to="/logout" class="menu-link">
            <i class="bx bx-log-out"></i>
            <span class="menu-link-title"> 登出 </span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "./../assets/scss/adminmenu.scss";
</style>