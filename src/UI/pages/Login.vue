<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card p-4">
            <div class="card-body">
              <form @submit="login">
                <h1>Login</h1>

                <p :class="{'text-muted': !authFailed, 'text-danger': authFailed}">
                  {{ !authFailed ? 'Sign In to your account' : 'Wrong username or password' }}
                </p>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="icon-user"></i></span>
                    </div>

                    <input v-model="username" type="email" class="form-control" placeholder="Username" required autocomplete="username email" />
                </div>
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="icon-lock"></i>
                    </span>
                  </div>

                  <input v-model="password" type="password" class="form-control" placeholder="Password" required autocomplete="current-password" />
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <button :class="{disabled: authenticating}" class="btn btn-primary px-4">
                      {{ !authenticating ? 'Login' : 'Please Wait...' }}
                    </button>
                  </div>
                  <!-- <b-col cols="6" class="text-right">
                    <b-button variant="link" class="px-0">Forgot password?</b-button>
                  </b-col> -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { login } from '../../services/API'
  import { saveUser } from '../../services/auth'

  export default {
    name: 'Login',
    data(){
      return {
        username: "",
        password: "",
        authenticating: false,
        authFailed: false
      }
    },
    methods: {
      async login(e){
        e.preventDefault();
        this.authenticating = true;
        this.authFailed = false;

        try {
          const user = await login({email: this.username, password: this.password});

          this.authenticating = false;
          this.username = "";
          this.password = "";

          this.$store.dispatch('setAuthUser', user);
          this.$router.replace('/');
          saveUser(user);
        } catch (error) {
          this.authenticating = false;
          this.authFailed = true;
        }
      }
    }
  }
</script>
