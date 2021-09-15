
  <template>
  <div class="main">
    <div class="main-container">
      <AdminMenu />
      <AdminTweets />
    </div>
  </div>
</template>

<script>
import AdminMenu from "./../components/AdminMenu";
import AdminTweets from "./../components/AdminTweets";
export default {
  components: {
    AdminMenu,
    AdminTweets,
  },
};
</script>
<style lang="scss" scoped>
.main-container {
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
  font-family: "Noto Sans TC";
}
</style>