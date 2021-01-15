<template>
  <div class="contactDetailWrapper">
    <div class="contactDetailConatainer">
      <div class="topButtonsContainer">
        <router-link to="/ContactsPage">
          <button class="backToButton">Назад к контактам</button></router-link
        >
        <button class="cancelLastAction" @click="cancelLastChange()">
          Undo the last action
        </button>
      </div>

      <div v-for="field in fields" :key="field.fieldName">
        <div v-if="field.fieldName != `id`" class="paramsWrapper">
          <div class="parameters">
            <div v-if="field.fieldName !== `name`" class="parName">
              {{ field.fieldName }}
            </div>
            <input
              type="text"
              v-bind:value="field.fieldValue"
              v-bind:id="field.fieldName"
              disabled
            />
            <button
              v-if="!field.isRedactMode"
              class="tgglredactButton"
              @click="openRedactMode(field)"
            >
              Edit
            </button>

            <button
              @click="confirmChange(field)"
              v-if="field.isRedactMode"
              class="completeRedact"
            >
              Confirm changes
            </button>
            <button
              v-if="field.isRedactMode"
              @click="cancelChange(field)"
              class="cancelRedact"
            >
              Cancel Changes
            </button>
            <button
              v-if="field.fieldName != `name`"
              @click="deleteField(field)"
              class="delField"
            >
              Delete field
            </button>
          </div>
        </div>
      </div>

      <div class="addingCont">
        <input id="fieldToAdd" class="addField" type="text" />
        <button @click="addField()">Add field</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetail",
  props: {
    id: String,
    contacts: Array,
  },
  data() {
    return {
      contact: [],

      fields: [],

      lastChangedIndex: -1,

      lastAction: "none",

      changedField: {},
    };
  },
  mounted() {
    this.contact = this.contacts[this.getIdOfCurrentContact()];
    this.fields = [];
    let index = 0;
    for (const propertyName in this.contact) {
      this.fields.push({
        fieldName: propertyName,
        fieldValue: this.contact[propertyName],

        isRedactMode: false,

        fieldIndex: index,
      });
      index += 1;
    }
  },
  watch: {
    contacts() {
      this.contact = this.contacts[this.getIdOfCurrentContact()];
      this.fields = [];
      let index = 0;
      for (const propertyName in this.contact) {
        this.fields.push({
          fieldName: propertyName,
          fieldValue: this.contact[propertyName],

          isRedactMode: false,

          fieldIndex: index,
        });
        index += 1;
      }
    },
  },
  methods: {
    getIdOfCurrentContact() {
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].id == this.id) {
          return [i];
        }
      }
    },

    rememberLastAction(
      fieldIndex,
      action,
      changedFieldName,
      changedFieldValue
    ) {
      this.lastChangedIndex = fieldIndex;
      this.lastAction = action;
      this.changedField.value = changedFieldValue;
      this.changedField.name = changedFieldName;
    },
    addField() {
      const add = document
        .getElementById("fieldToAdd")
        .value.replace(/ /g, "")
        .split(":");
      if (add.length !== 2) {
        alert("The field is filled incorrectly!");
      } else if (add[0] === "id") {
        alert("This field is reserved");
      } else if (Object.prototype.hasOwnProperty.call(this.contact, add[0])) {
        alert("This field is already present for this contact!");
      } else {
        this.rememberLastAction(null, "add", add[0], add[1]);
        this.$emit("addField", this.getIdOfCurrentContact(), add[0], add[1]);
      }
    },
    deleteField(field) {
      if (field.fieldName === "id") {
        alert("This field is reserved and cannot be deleted");
      } else if (field.fieldName === "id") {
        alert("The Name field cannot be deleted");
      } else if (field.fieldName === "phone") {
        alert("The Contact number field cannot be deleted");
      } else if (confirm("Are you sure you want to delete this field?")) {
        this.rememberLastAction(
          field.fieldIndex,
          "delete",
          field.fieldName,
          field.fieldValue
        );
        this.$emit(
          "deleteField",
          this.getIdOfCurrentContact(),
          field.fieldName
        );
      }
    },

    openRedactMode(field) {
      document.getElementById(field.fieldName).disabled = false;
      field.isRedactMode = true;
    },

    cancelChange(field) {
      if (confirm("Are you sure you want to undo your editing?")) {
        document.getElementById(field.fieldName).disabled = true;
        field.isRedactMode = false;
      }
    },

    confirmChange(field) {
      if (document.getElementById(field.fieldName).value !== "") {
        this.rememberLastAction(
          field.fieldIndex,
          "edit",
          field.fieldName,
          field.fieldValue
        );
        field.fieldValue = document.getElementById(field.fieldName).value;
        document.getElementById(field.fieldName).isRedactMode = false;
        document.getElementById(field.fieldName).disabled = true;
        this.$emit(
          "changeField",
          this.getIdOfCurrentContact(),
          field.fieldName,
          field.fieldValue
        );
      } else {
        alert("The field cannot be empty!");
      }
    },

    cancelLastChange() {
      if (this.lastAction === "edit") {
        this.$emit(
          "changeField",
          this.getIdOfCurrentContact(),
          this.changedField.name,
          this.changedField.value
        );
      }
      if (this.lastAction === "delete") {
        this.$emit(
          "addField",
          this.getIdOfCurrentContact(),
          this.changedField.name,
          this.changedField.value
        );
      }
      if (this.lastAction === "add") {
        this.$emit(
          "deleteField",
          this.getIdOfCurrentContact(),
          this.changedField.name
        );
      }
    },
  },
};
</script>

<style lang="scss">
.contactDetailWrapper {
  width: 90%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border: solid 2px;
  border-radius: 5px;
  background: #fff;
  flex-direction: column;
}
.backToButton {
  background-color: rgb(21, 163, 0);
}
.contactDetailConatainer {
  padding: 30px;
}
.cancelLastAction {
  background: red;
}
.topButtonsContainer {
  display: flex;
  height: 30px;
  margin-bottom: 10px;
}
.parameters {
  padding: 2px;
  font-family: "Roboto";
  .parName {
    min-width: 120px;
    font-size: 22px;
    margin-right: 10px;
    font-weight: 500;
  }
  #name {
    width: 500px;
    font-size: 40px;
    color: black;
    font-weight: 600;
    border: 0;
    margin-bottom: 15px;
  }
  button {
    height: 100%;
    padding: 5px;
  }
  input {
    width: 250px;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.3);
    background: rgb(255, 191, 0);
    border-radius: 5px;
  }
  input:disabled {
    padding: 0;
    margin: 0;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.3);
    background: none;
    border-radius: 5px;
  }
  .delField {
    background: red;
  }
}
.addingCont {
  height: 30px;
  button {
    background: #15a300;
  }
}
</style>