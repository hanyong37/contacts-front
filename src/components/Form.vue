<!--this component include input controls and validate logic which are used by Edit and New-->
<template>
  <div>
    <div class="form-group">
      <label>First Name</label>
      <p :class="{ 'control': true }">
      <input type="text" v-model='contact.first_name' :value='contact.first_name' placeholder="Enter First Name" class="{'input': true, 'is-danger': errors.has('First_Name') }, form-control" v-validate="'required|alpha_spaces'" name="First_Name">
      <span v-show="errors.has('First_Name')" class="help is-danger">{{ errors.first('First_Name') }}</span>
      </p>
    </div>

    <div class="form-group">
      <label>Last Name</label>
      <p :class="{ 'control': true }">
      <input type="text" v-model='contact.last_name' :value='contact.last_name' placeholder="Enter Last Name" class="{'input': true, 'is-danger': errors.has('Last_Name') }, form-control" v-validate="'required|alpha_spaces'" name="Last_Name">
      <span v-show="errors.has('Last_Name')" class="help is-danger">{{ errors.first('Last_Name') }}</span>
      </p>
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>

      <p :class="{ 'control': true }">
      <!--<input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">-->
      <input type="text" class="{'input': true, 'is-danger': errors.has('email') }, form-control" v-validate="'required|email'" name="email" id="" v-model='contact.email' :value='contact.email' placeholder="Enter Email">
      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </p>

    </div>

    <div class="form-group">
      <label for="exampleTextarea">Description</label>

      <p :class="{ 'control': true }">
      <textarea v-model='contact.description' :value='contact.description' rows="3" class="{'input': true, 'is-danger': errors.has('Description') }, form-control" v-validate="'required'" name="Description"></textarea>
      <span v-show="errors.has('Description')" class="help is-danger">{{ errors.first('Description') }}</span>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  // hold referfence to parent contact obj
  props: ['contact'],
  name: 'ContractFormControls'
}
</script>
