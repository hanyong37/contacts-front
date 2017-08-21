<template>
  <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
  <h2>Contacts List</h2>

  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='c in contacts'>
          <td>{{ c.id }}</td>
          <td>{{ c.first_name }}</td>
          <td>{{ c.last_name }}</td>
          <td>{{ c.email }}</td>
          <td>
            <router-link :to="{ path: '/contact/'+c.id}" class='btn btn-sm btn-secondary'>View</router-link>
            <router-link :to="{ path: '/contact/'+c.id+'/edit'}" class='btn btn-sm btn-warning'>Edit</router-link>
            <button type="button" @click='deleteItem(c.id)' class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </main>
</template>

<script>
  export default {
    name: 'contacts',
    // When page was created, get contact list from api.
    created: function () {
      let self = this
      self.loadList()
    },
    methods: {
      // Refreshe contact list, resuable
      loadList: function () {
        this.$resource(this.contactUrl()).get().then(
          response => { this.contacts = response.body },
          () => { console.log('failed') }
        )
      },

      deleteItem: function (targetId) {
        if (confirm('do you want to delete this contact?')) {
          this.$resource(this.contactUrl()).delete({id: targetId}).then(
            response => {
              this.loadList()
              alert('Delete contact success!!')
            },
            () => { alert('Delete contact failed') }
          )
        }
      }
    },
    data () {
      return {
        contacts: []
      }
    }
  }
</script>
