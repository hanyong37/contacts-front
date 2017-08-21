<template>
  <div id="app">
    <!--head nav -->
    <nav class="navbar navbar-toggleable-sm navbar-inverse fixed-top bg-inverse">
      <button class="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Team247 App</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">My Contacts<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Help</a>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <!--end of Head nav -->
    <div class="container-fluid">
      <div class="row">
        <!--Left nav -->
        <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts" exact>All Contacts</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/new" exact>New Contact</router-link>
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
        <!--end of Left nav -->

        <router-view></router-view>
      </div>
    </div>

    <!--footer-->
    <footer class="footer">
      <div class="container">
        <span class="text-muted">All rights reserved awosome Company. 2017</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*copied from bootstrap example*/

/* Move down content because we have a fixed navbar that is 50px tall */
body {
  padding-top: 50px;
}

/*
 * Typography
 */

h1 {
  margin-bottom: 20px;
  padding-bottom: 9px;
  border-bottom: 1px solid #eee;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 51px;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  border-right: 1px solid #eee;
}

/* Sidebar navigation */
.sidebar {
  padding-left: 0;
  padding-right: 0;
}

.sidebar .nav {
  margin-bottom: 20px;
}

.sidebar .nav-item {
  width: 100%;
}

.sidebar .nav-item + .nav-item {
  margin-left: 0;
}

.sidebar .nav-link {
  border-radius: 0;
}

/*
 * Dashboard
 */

/* Placeholders */
.placeholders {
  padding-bottom: 3rem;
}

.placeholder img {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.footer {
  font-size: 0.5rem;
  text-align: center;
  z-index: 1001;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}

.input.is-danger, .textarea.is-danger {
  border-color: #ff3860;
}

.help.is-danger {
  color: #ff3860;
}
.help {
  display: block;
  font-size: 11px;
  margin-top: 5px;
}
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
</style>
