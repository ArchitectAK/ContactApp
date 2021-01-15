<template>
  <div class="wrapper">
    <div class="pageContainer">
      <div class="addContactContainer">
        <AddAContact @addContact="addContact"></AddAContact>
      </div>
      <div class="contactListContainer">
        <div class="labelBlock">
          <span>List of contacts</span>
          <button class="sortButton" @click="alphabetSort">
            Sort alphabetically
          </button>
        </div>
        <ContactList
          v-bind:contacts="contacts"
          @deleteContact="deleteContact"
          @addContact="addContact"
        ></ContactList>
      </div>
    </div>
  </div>
</template>

<script>
import AddAContact from "../components/AddAContact.vue";
import ContactList from "../components/ContactList.vue";
export default {
  name: "PageOne",
  components: { AddAContact, ContactList },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    alphabetSort() {
      this.$emit("alphabetSort");
    },
    deleteContact(id, name) {
      if (confirm(`Вы действительно хотите удалить контакт ${name}?`)) {
        this.$emit("deleteContact", id);
      }
    },
    addContact(name, phone) {
      this.$emit("addContact", name, phone);
    },
  },
};
</script>
<style lang="scss" scoped>
html,
body {
  margin: 0;
}
.wrapper {
  background: #32363e;
  height: 100vh;
  width: 90%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
.labelBlock {
  display: flex;
  padding-left: 10px;
  span {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
  }
}
.pageContainer {
  display: flex;
  width: 100%;
  max-height: 510px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  background: #ffffff;
}
.contactListContainer {
  width: 100%;
  padding: 10px;
  height: 500px;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 500;
  font-size: 20px;
}
.sortButton {
  margin-left: 30px;
  background-color: rgb(21, 163, 0);
  height: 100%;
  padding: 5px;
}
@media only screen and (max-width: 1200px) {
  .pageContainer {
    flex-direction: column;
    min-height: 650px;
  }
  @media only screen and (max-width: 1000px) {
    .pageContainer {
      min-width: 817px;
      width: 100%;
    }
    .wrapper {
      width: 100%;
    }
  }
}
</style>