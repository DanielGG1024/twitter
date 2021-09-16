<template>
  <main class="content">
    <div class="content-header">
      <span class="title">推文清單</span>
    </div>
    <!-- tweets -->
    <div class="admin-tweet">
      <div class="wrapper">
        <div class="tweet-wrapper">
          <div class="icon-wrapper">
            <img class="user-icon" src="./../assets/pic/Photo.png" alt="" />
          </div>
          <div class="admin-txt-wrapper">
            <div class="tweet-info">
              <span class="tweet-name">Apple</span>
              <span class="tweet-account">＠apple</span>
              <span class="time">．3小時</span>
            </div>
            <div class="tweet-txt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, non harum debitis unde quam fugiat illo architecto
              adipisci accusantium culpa sunt maxime iusto quisquam eveniet
              ipsam inventore magnam vel? Tempore!
            </div>
          </div>
        </div>
      </div>
      <div class="close-wrapper">
        <img class="close-icon" src="./../assets/pic/adminClose.png" alt="" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/admintweets.scss";
</style>