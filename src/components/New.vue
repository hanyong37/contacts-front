<template>
  <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
  <h2>New Contacts</h2>

  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">First Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name">
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Last Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name">
    </div>


    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>

    <div class="form-group">
      <label for="exampleTextarea">Description</label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>

    <div class="form-check">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input">
        Check me out
      </label>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </main>
</template>

<script>
export default {
  name: 'new',
  data () {
    return {
      msg: 'This is new page!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
