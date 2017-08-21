<template>
  <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
  <h2>Edit Contacts</h2>

  <form @submit='saveChange' >
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
    <button type='submit' class="btn btn-primary">Save</button>
  </form>
  </main>
</template>

<script>
export default {
  name: 'edit',
  created: function () {
    this.$resource(this.contactUrl()).get({id: this.$route.params.id}).then(
      response => {
        console.log('success!')
        this.contact = response.body
      },
      () => { console.log('failed') }
    )
  },
  methods: {
    saveChange: function () {
      console.log('button clicked' + this.name)
      this.$resource(this.contactUrl()).update({id: this.contact.id}, this.contact).then(
        response => {
          alert('save success!')
        },
        () => { console.log('failed') }
      )
    }
  },
  data () {
    return {
      contact: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
