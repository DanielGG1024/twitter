
  <template>
  <div class="main">
    <div class="main-container">
      <AdminMenu />
      <AdminUserCards />
    </div>
  </div>
</template>

<script>
import AdminMenu from "./../components/AdminMenu";
import AdminUserCards from "./../components/AdminUserCards";
export default {
  components: {
    AdminMenu,
    AdminUserCards,
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