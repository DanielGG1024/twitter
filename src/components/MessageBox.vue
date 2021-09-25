<template>
  <div class="messageBox">
    <div class="header">
      <div class="title">公開聊天室</div>
    </div>
    <div class="messageBox-wrapper">
      <div class="notify">
        <div class="notify-mgs">Apple 上線</div>
      </div>

      <div class="user-remote">
        <div class="avatar">
          <div class="pic">
            <img class="icon" src="./../assets/pic/Photo.png" alt="" />
          </div>
        </div>
        <div class="txt-wrapper">
          <div class="message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odit at
            eum quis architecto reiciendis quas, excepturi cumque, delectus
            accusantium, debitis omnis reprehenderit error et esse tempora culpa
            totam ullam! Vitae architecto ex, perferendis nobis, ratione quidem
            nulla dolorem aliquam velit fuga corporis facere dolore ipsum nihil
            explicabo quis excepturi. At, ullam! Eveniet laborum, iste fuga
            commodi quisquam nisi sit? Ipsam a consequuntur, accusantium nemo
            rem quia laudantium aut harum magni voluptatum, ut doloremque
            architecto voluptatibus ea ex eligendi fugit, quidem aspernatur
            repellat maxime adipisci vel dicta? Blanditiis, facere non?
            Consectetur minima unde et quo quibusdam perferendis recusandae
            explicabo, eligendi eum ipsa incidunt quia voluptas illo accusamus
            reprehenderit, natus fuga eos rem sit, rerum provident repellat?
            Sunt modi et voluptatem! Commodi natus quos, dicta in maiores
            suscipit distinctio earum ut at ea pariatur eveniet aliquid eaque
            fugiat porro eos. Omnis beatae eum
          </div>
          <div class="time">下午 4.44</div>
        </div>
      </div>

      <div class="user-local">
        <div class="txt-wrapper">
          <div class="message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odit at
            eum quis architecto reiciendis quas, excepturi cumque, delectus
            accusantium, debitis omnis reprehenderit error et esse tempora culpa
            totam ullam! Vitae architecto ex, perferendis nobis, ratione quidem
            nulla dolorem aliquam velit fuga corporis facere dolore ipsum nihil
            explicabo quis excepturi. At, ullam! Eveniet laborum, iste fuga
            commodi quisquam nisi sit? Ipsam
          </div>
          <div class="time">下午 4:25</div>
        </div>
      </div>

      <div class="user-local">
        <div class="txt-wrapper">
          <div class="message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odit at
            eum quis architecto reiciendis quas, excepturi cumque, delectus
            accusantium, debitis omnis reprehenderit error et esse tempora culpa
            totam ullam! Vitae architecto ex, perferendis nobis, ratione quidem
            nulla dolorem aliquam velit fuga corporis facere dolore ipsum nihil
            explicabo quis excepturi. At, ullam! Eveniet laborum, iste fuga
            commodi quisquam nisi sit? Ipsam
          </div>
          <div class="time">下午 4:25</div>
        </div>
      </div>

      <div class="user-local">
        <div class="txt-wrapper">
          <div class="message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odit at
            eum quis architecto reiciendis quas, excepturi cumque, delectus
            accusantium, debitis omnis reprehenderit error et esse tempora culpa
            totam ullam! Vitae architecto ex, perferendis nobis, ratione quidem
            nulla dolorem aliquam velit fuga corporis facere dolore ipsum nihil
            explicabo quis excepturi. At, ullam! Eveniet laborum, iste fuga
            commodi quisquam nisi sit? Ipsam
          </div>
          <div class="time">下午 4:25</div>
        </div>
      </div>
      <div class="user-local">
        <div class="txt-wrapper">
          <div class="message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odit at
            eum quis architecto reiciendis quas, excepturi cumque, delectus
            accusantium, debitis omnis reprehenderit error et esse tempora culpa
            totam ullam! Vitae architecto ex, perferendis nobis, ratione quidem
            nulla dolorem aliquam velit fuga corporis facere dolore ipsum nihil
            explicabo quis excepturi. At, ullam! Eveniet laborum, iste fuga
            commodi quisquam nisi sit? Ipsam
          </div>
          <div class="time">下午 4:25</div>
        </div>
      </div>
    </div>

    <div class="input-area">
      <input type="text" placeholder="輸入訊息..." v-model="MESSAGE" />
      <button class="btn" @click="send">submit</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'socket',
  data() {
    return{
      text: "",
    }
  },

  methods:{
    sendMessage(){
      this.$socket.emit('chatmessage', {
        msg: this.text,
      });
      this.text="";
    },
  },

}

</script>






<style lang="scss" scoped>
@import "./../assets/scss/messageBox.scss";
</style>