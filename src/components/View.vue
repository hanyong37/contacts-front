<template>
  <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
  <h2>View Contacts</h2>

  <div class="row">
    <div class="col-sm-3">
      ID:
    </div>
    <div class="col-sm-9">
      <p>{{contact.id}}</p>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-3">
      First Name:
    </div>
    <div class="col-sm-9">
      <p>{{contact.first_name}}</p>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-3">
      Last Name:
    </div>
    <div class="col-sm-9">
      <p>{{contact.last_name}}</p>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-3">
      Email:
    </div>
    <div class="col-sm-9">
      <p>{{contact.email}}</p>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-3">
      Description:
    </div>
    <div class="col-sm-9">
      <p>{{contact.description}}</p>
    </div>
  </div>

  <back-to-list></back-to-list>

  </main>
</template>

<script>
var contactUrl = 'http://localhost:8089/contacts{/id}'
export default {
  name: 'new',
  data () {
    return {
      contact: {}
    }
  },
  mounted: function () {
    this.$resource(contactUrl).get({id: this.$route.params.id}).then(
      response => {
        console.log('success!')
        this.contact = response.body
      },
      () => { console.log('failed') }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
