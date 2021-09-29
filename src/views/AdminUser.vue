
  <template>
  <div class="main">
    <div class="main-container">
      <AdminMenu />
      <main class="content">
        <div class="content-header">
          <span class="title">使用者列表</span>
        </div>
        <div class="cards-wrapper">
          <AdminUserCards v-for="user in users" :key="user.id" :user="user" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AdminMenu from "./../components/AdminMenu";
import AdminUserCards from "./../components/AdminUserCards";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
export default {
  name:'adminUser',
  components: {
    AdminMenu,
    AdminUserCards,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchAdminUser();
  },
  methods: {
    async fetchAdminUser() {
      try {
        const { data } = await adminAPI.adminGetUsers();
        this.users = data;
      } catch {
        Toast({
          icon: "error",
          title: "無法取得後台使用者資料",
        });
      }
    },
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
.content {
  height: 100vh;
  width: 1062px;
  border-left: 1px solid $tweetListBg;
}

.content-header {
  height: 55px;
  border-bottom: 1px solid $tweetListBg;
}

.title {
  font-size: 18px;
  line-height: 55px;
  font-weight: 700;
  padding-left: 15px;
}

.cards-wrapper {
  height: calc(100vh - 55px);
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
}
</style>