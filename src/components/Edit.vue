<template>
  <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
  <h2>Edit Contacts</h2>

  <form @submit='saveChange' >
    <contact-form :contact="this.contact"></contact-form>
    <back-to-list></back-to-list>
    <button type='submit' class="btn btn-primary">Save</button>
  </form>
  </main>
</template>

<script>
import ContactForm from '@/components/Form'

export default {
  components: {'contact-form': ContactForm},
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
