<template>
  <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
  <h2>Create New Contacts</h2>

  <form @submit='create' >
    <!--reuse form controls and validate logic-->
    <contact-form :contact="contact"></contact-form>

    <!--reusable link component-->
    <back-to-list></back-to-list>
    <button type='submit' class="btn btn-primary">Create</button>
  </form>
  </main>
</template>

<script>
import ContactForm from '@/components/Form'

export default {
  name: 'edit',
  components: {'contact-form': ContactForm},
  methods: {
    // when form submtted, will post current data to api to create new contact
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
