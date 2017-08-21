<template>
  <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
  <h2>Create New Contacts</h2>

  <form @submit='create' >
    <div class="form-group">
      <label for="exampleInputEmail1">First Name</label>
      <p>{{ contact.first_name }}</p>
      <input type="text" class="form-control" id="" v-model='contact.first_name' :value='contact.first_name' placeholder="Enter First Name">
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Last Name</label>
      <input type="text" class="form-control" id="" v-model='contact.last_name' :value='contact.last_name' placeholder="Enter Last Name">
    </div>


    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="text" class="form-control" id="" v-model='contact.email' :value='contact.email' placeholder="Enter Email">
    </div>

    <div class="form-group">
      <label for="exampleTextarea">Description</label>
      <textarea class="form-control" v-model='contact.description' :value='contact.description' id="exampleTextarea" rows="3"></textarea>
    </div>

    <router-link class='btn btn-secondary' to='/contacts'>Back to List</router-link>
    <button type='submit' class="btn btn-primary">Create</button>
  </form>
  </main>
</template>

<script>
export default {
  name: 'edit',
  methods: {
    create: function () {
      console.log('button clicked' + this.name)
      this.$resource(this.contactUrl()).save(this.contact).then(
        response => {
          alert('created contact success!')
        },
        () => { console.log('failed') }
      )
    }
  },
  data () {
    return {
      contact: {
        first_name: '',
        last_name: '',
        email: '',
        description: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
