<template>
  <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
  <h2>Create New Contacts</h2>

  <form @submit='create' >
    <contact-form :contact="contact"></contact-form>
    <back-to-list></back-to-list>
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
          this.$router.push('/contacts')
        },
        () => { alert('created contact failed') }
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
