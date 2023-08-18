<template>
  <!-- <nav class="bg-blue-500 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-white text-lg font-semibold">Motivation App</router-link>
        <div>
          <router-link to="/create" class="text-white mr-4" v-if="isLoggedIn">Create Card</router-link>
          <router-link v-if="isLoggedIn" :to="'/profile/' + userId" class="text-white">Profile</router-link>
          <router-link v-else to="/login" class="text-white">Login</router-link>
        </div>
      </div>
    </nav> -->
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
 

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item is-large is-primary"> CARDS </a>


        
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Create</strong>
            </a>
            <a class="button is-light"> PROFILE </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      // Kullanıcı giriş yapmış mı kontrolü burada yapılabilir
      // Örneğin, bir state yönetimi veya localStorage kullanılabilir
      // isLoggedIn bilgisini gerçek projenize uygun şekilde belirleyin.
      return true; // Varsayılan olarak true döndürüyoruz
    },
    userId() {
      // Kullanıcı kimliğini burada alabilirsiniz
      // isLoggedIn true ise userId bilgisini gerçek projenize uygun şekilde belirleyin.
      return 'user123'; // Varsayılan olarak bir örnek kullanıcı kimliği dönüyoruz
    },
  },
};
</script>

<style scoped>
/* Stiller burada belirtilebilir */
</style>
