<template>
  <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">

  <h2>Contacts List</h2>
  <!--<p>{{ this.contactUrl() }}</p>-->
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
            <button type="button" class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </main>
</template>

<script>
// var contactUrl = 'http://localhost:8089/contacts{/id}'

export default {
  name: 'home',
  created: function () {
    this.$resource(this.contactUrl()).get().then(
      response => { this.contacts = response.body },
      () => { console.log('failed') }
    )
  },
  data () {
    return {
      msg: ' This is home page!!',
      contacts: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
