<template>
  <div>
    <p>{{ msg }}</p>
    <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Contact List<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">New Contact</a>
        </li>
      </ul>

      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link" href="#">Family</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Colleagues</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Girl Friends</a>
        </li>
      </ul>

    </nav>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      msg: ' This is menu page!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
