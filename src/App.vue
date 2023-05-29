<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import { doc, setDoc } from "firebase/firestore";

import ulid from "./helpers/ulid";
import HelloWorld from "./components/HelloWorld.vue";
import firestore from "./helpers/firestore";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: () => ({
    messages: [],
  }),
  beforeCreate() {
    let password = prompt("Passwordnya:");

    if (password !== "loveyou") {
      alert("Password salah!");
      this.$destroy();
    }

    if (firestore) console.log("Connected to firestore");
  },
  mounted() {
    // onSnapshot(firestore.collection("chats"), (snapshot) => {
    //   console.log(snapshot.docs.map((doc) => doc.data()));
    // });
  },
  methods: {
    async sendMessage() {
      const id = ulid();
      const ref = doc(firestore, "chats", id);
      await setDoc(
        ref,
        { id, type: "question", message: "Hello World" },
        { merge: true }
      );
    },
    async getResponse() {
      const id = ulid();

      // add getting response from chat.openai
      return {
        id,
        type: "answer",
        message: "Hello World",
      };
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
  margin-top: 60px;
}
</style>
