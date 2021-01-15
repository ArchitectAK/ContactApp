<template>
  <div class="welcomeContainer">
    <span>Contact book using local storage</span>
    <img src="../assets/logo.png" />
    <span
      >When you go to this page, the basic one is written to sessionStorage.
      list of contacts</span
    >
    <br />
    <br />
    <span
      >If something did not start for you or some kind of error got out, be are
      kind, write me an email: admin@ankitkumar.dev</span
    >
    <router-link to="/ContactsPage">To the task</router-link>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  background: #32363e;
}
.welcomeContainer {
  width: 90%;
  height: 100%;
  display: flex;
  flex: 1 0 auto;
  padding-top: 20px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  justify-content: space-around;
  font-family: "Roboto", sans-serif;
  span {
    margin-left: auto;
    margin-right: auto;
    font-size: 28px;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  img {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 15px 20px;
    font-size: 45px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    transition: 0.4s ease-in-out;
  }
}
</style>