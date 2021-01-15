<template>
  <div class="contactListCont">
    <Contact
      v-for="(contact, index) in contacts"
      v-bind:contact="contact"
      v-bind:index="index"
      v-bind:id="contact.id"
      @deleteContact="deleteContact"
      :key="contact.id"
    />
  </div>
</template>

<script>
import Contact from "./Contact.vue";
export default {
  name: "ContactList",
  components: { Contact },
  props: {
    contacts: Array,
  },
  methods: {
    deleteContact(id, name) {
      this.$emit("deleteContact", id, name);
    },
  },
};
</script>

<style lang="scss">
.contactListCont {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  height: 92%;
  padding-right: 10px;
  padding-left: 10px;
}
.contactListCont::-webkit-scrollbar {
  width: 7px;
  height: 4px;
}
.contactListCont::-webkit-scrollbar-thumb {
  background-color: #0069ed;
  border-radius: 9em;
}
@media only screen and (max-width: 1200px) {
  .contactListCont {
    margin-right: 10px;
  }
}
</style>