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
        <tr>
          <td>1,001</td>
          <td>ipsum</td>
          <td>dolor</td>
          <td>sit</td>
          <td>
            <button type="button" class="btn btn-sm btn-secondary">View</button>
            <router-link to='/edit' class='btn btn-sm btn-warning'>Edit</router-link>
            <button type="button" class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </main>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: ' This is home page!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
