<template>
  <header class="menu">
    <div class="logo-wrapper">
      <a href="">
        <img class="logo" src="../assets/pic/Logo.png" alt="" />
      </a>
    </div>
    <nav class="menu-nav">
      <ul class="menu-nav-wrapper">
        <li class="menu-nav-link">
          <box-icon type="solid" name="home-circle"></box-icon>
          <a href="" class="menu-link"> 首頁 </a>
        </li>
        <li class="menu-nav-link">
          <box-icon type="solid" name="user"></box-icon>
          <a href="menu-link" class="menu-link"> 個人資料 </a>
        </li>
        <li class="menu-nav-link">
          <box-icon type="solid" name="cog"></box-icon>
          <a href="menu-link" class="menu-link"> 設定 </a>
        </li>
        <li class="menu-nav-post">
          <button class="menu-nav-btn">推文</button>
        </li>
      </ul>
      <ul class="menu-nav-wrapper">
        <li class="menu-nav-link">
          <box-icon name="log-out"></box-icon>
          <a href="" class="menu-link"> 登出 </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped lang="scss">
@import "./../assets/scss/menu.scss";
</style>