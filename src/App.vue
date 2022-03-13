<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <i-button @click="show">Click me!</i-button>
      <p>{{ $t("message") }}</p>
      <span>{{$t("myChoose")}}</span>
      <Select v-model="myChoose" style="width=200px" :placeholder='$t("chooseLanguage")'>
        <Option
          v-for="(item, index) in localeLanguage"
          :value="item.language"
          :key="index"
          >{{ item.word }}</Option
        >
      </Select>


      <Button @click="confirm">Normal</Button>
      <Button @click="custom">Custom button text</Button>
      <Button @click="async">Asynchronous closing</Button>
    </div>
    <DatePicker
      type="date"
      multiple
      :placeholder='$t("myChoose")'
      style="width: 300px"
    ></DatePicker>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      visible: false,
      myChoose: "",
      localeLanguage: [
        {
          language: "zh-CN",
          word:"Chinese"
        },
        {
          language: "en-US",
          word:"English"
        },
      ],
    };
  },
  watch:{
    "myChoose":function(){
      //alert(this.myChoose)
      var pick = this.myChoose;
      this.$i18n.locale = pick;
      console.log(this.$i18n.locale)
    }
  },
  methods: {
    /* changeLanguage() {
      if (this.$i18n.locale === "en-US") {
        this.$i18n.locale = "zh-CN";
        this.localeLanguage = "中文";
      } else if (this.$i18n.locale === "zh-CN") {
        this.$i18n.locale = "en-US";
        this.localeLanguage = "EN";
      }
    }, */
    myChooseLanguage() {
      alert("value")
      //var choose = value;
      //choose = this.$i18n.locale 
    },
    confirm() {
      this.$Modal.confirm({
        title: this.$t("title"),
        content: "<p>Content of dialog</p><p>Content of dialog</p>",
        okText: this.$t("ok"),
        cancelText: this.$t("cancel"),
        onOk: () => {
          this.$Message.info("Clicked ok");
        },
        onCancel: () => {
          this.$Message.info("Clicked cancel");
        },
      });
    },
    custom() {
      this.$Modal.confirm({
        title: this.$t("title"),
        content: "<p>Content of dialog</p><p>Content of dialog</p>",
        //okText: "OK",
        //cancelText: "Cancel",
      });
    },
    async() {
      this.$Modal.confirm({
        title: this.$t("title"),
        content: "<p>The dialog box will be closed after 2 seconds</p>",
        loading: true,
        onOk: () => {
          setTimeout(() => {
            this.$Modal.remove();
            this.$Message.info("Asynchronously close the dialog box");
          }, 2000);
        },
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
