<template>
  <div class="addUserContainer">
    <form>
      <div class="formTbs">
        <label htmlFor="name">Name</label>
        <input type="text" id="nameForAdd" class="inputInfo" />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phoneForAdd" class="inputInfo" />
      </div>
    </form>
    <button @click="addContact" class="buttonitselfonClick">Add user</button>
  </div>
</template>

<script>
export default {
  name: "AddAContact",
  methods: {
    addContact() {
      if (
        document.getElementById("nameForAdd").value.length !== 0 &&
        document.getElementById("phoneForAdd").value.length !== 0
      ) {
        this.$emit(
          "addContact",
          document.getElementById("nameForAdd").value,
          document.getElementById("phoneForAdd").value
        );
        document.getElementById("nameForAdd").value = "";
        document.getElementById("phoneForAdd").value = "";
      } else {
        alert("Please fill in all fields!");
      }
    },
  },
};
</script>

<style lang="scss">
.addUserContainer {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  height: 150px;
  width: 200px;
  font-family: "Roboto";
  font-size: 16px;
  .formTbs {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
    flex-direction: column;
  }
  input[type="text"] {
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 0;
    height: 25px;
    position: relative;
    left: 0;
    outline: none;
    border: 1px solid #cdcdcd;
    border-color: rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
  }
  button {
    display: inline-block;
    border: none;
    height: 100%;
    border-radius: 5px;
    margin: 3px;
    margin-top: 5px;
    margin-right: 8px;
    margin-left: 8px;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  button:hover,
  button:focus {
    background: #0053ba;
  }
  button:active {
    transform: scale(0.99);
  }
}
@media only screen and (max-width: 1200px) {
  .addUserContainer {
    width: 100%;
  }
}
</style>