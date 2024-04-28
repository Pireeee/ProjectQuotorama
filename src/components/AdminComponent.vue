<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "AdminComponent",
  setup() {
    const User = ref({
      username: "",
      password: "",
      isAdmin: false
    });

    const apis = ref([]);

    const isAdmin = () => {
      console.log("Admin");
      console.log(User.value);
    };

    const getAllApis = () => {
      fetch("http://localhost:8080/apis/getAllApis", {
        mode: 'cors'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        apis.value = data;  // Make sure to assign to apis.value
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        apis.value = [];  // Reset apis or set a default state
      });
    };

    const editCell = (api, field) => {
      if (field === 'json') {
        // Create a temporary string property for editing JSON
        api.jsonString = JSON.stringify(api.json);
      }
      api.editing = true;
    };


    const saveEdit = (api, field) => {
      if (field === 'json') {
        // Parse the JSON string back to an object
        api.json = JSON.parse(api.jsonString);
      }
      console.log("sending api :\n"+ JSON.stringify(api))
      fetch("http://localhost:8080/apis/updateApi", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(api)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })


      api.editing = false;
    };


    return { User, apis, isAdmin, getAllApis, editCell, saveEdit };
  },
  mounted() {
    this.getAllApis();
  }
});
</script>

<template>
  <h1>Admin Panel</h1>
  
  <div class="responsive-table">
    <table>
      <tr>
        <th>API Name</th>
        <th>API URL</th>
        <th>API Description</th>
      </tr>
      <tr v-for="(api, index) in apis" :key="api.id">
        <td @click="editCell(api, 'name')">
          <span v-if="!api.editing">{{ api.name }}</span>
          <input v-else type="text" v-model="api.name" @blur="saveEdit(api, 'name')" @keyup.enter="saveEdit(api, 'name')">
        </td>
        <td @click="editCell(api, 'url')">
          <span v-if="!api.editing">{{ api.url }}</span>
          <input v-else type="text" v-model="api.url" @blur="saveEdit(api, 'url')" @keyup.enter="saveEdit(api, 'url')">
        </td>
        <td @click="editCell(api, 'json')">
          <span v-if="!api.editing">{{ JSON.stringify(api.json) }}</span>
          <input v-else type="text" v-model="api.jsonString" @blur="saveEdit(api, 'json')" @keyup.enter="saveEdit(api, 'json')">
        </td>

      </tr>
    </table>
  </div>

</template>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #ccc;
}
.responsive-table {
  overflow-x: auto;
}
</style>
