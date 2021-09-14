<template>
  <header class="menu left-column">
    <div class="logo-wrapper">
      <a href="#">
        <img class="logo" src="../assets/pic/Logo.png" alt="logo" />
      </a>
    </div>

    <nav class="nav">
      <ul class="nav-items">
        <li class="nav-item">
          <img
            class="icon"
            src="../assets/pic/icon_index.png"
            alt="icon-index"
          />
          <a href="#" class="nav-link"> 首頁 </a>
        </li>
        <li class="nav-item">
          <img class="icon" src="../assets/pic/icon_user.png" alt="icon-user" />
          <a href="#" class="nav-link"> 個人資料 </a>
        </li>
        <li class="nav-item">
          <img class="icon" src="../assets/pic/icon_cog.png" alt="icon-cog" />
          <a href="#" class="nav-link"> 設定 </a>
        </li>
        <li class="nav-item nav-post">
          <button class="nav-post-btn">推文</button>
        </li>
      </ul>
    </nav>
    <ul class="logout">
      <li class="logout-item">
        <img
          class="icon"
          src="../assets/pic/icon_logout.png"
          alt="logout-icon"
        />
        <a href="#" class="nav-link"> 登出 </a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/userLeftColumn.scss";
</style>