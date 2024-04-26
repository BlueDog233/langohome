<template>
  <div class="back" style="display: flex;align-items: center;justify-content: center;width: 100vw;height: 100vh">
    <div class="auth-container">
      <h1 v-if="isLoginMode">Login</h1>
      <h1 v-else>Register</h1>
      <form @submit.prevent="handleAuth">
        <div class="form-group">
          <label for="username">Username:</label>
          <input v-model="username" type="text" id="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input v-model="password" type="password" id="password" required>
        </div>
        <div class="form-group" v-if="!isLoginMode">
          <label for="repeatPassword">Repeat Password:</label>
          <input v-model="repeatPassword" type="password" id="repeatPassword" required>
        </div>
        <button type="submit">{{ isLoginMode ? 'Login' : 'Register' }}</button>
      </form>
      <button @click="toggleMode">
        Switch to {{ isLoginMode ? 'Register' : 'Login' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {login, registe} from "@/base/request/requests.ts";
import router from "@/router/index.js";

const username = ref('');
const password = ref('');
const repeatPassword = ref('');
const isLoginMode = ref(true);

const handleAuth = () => {
  if (isLoginMode.value) {
    console.log('Logging in with:', username.value, password.value);
    login({
      password:password.value,
      nickname:username.value
    }).then((res)=>{
      localStorage.setItem("token",res.data)
      router.push("/")
    })
  } else {
    if (password.value !== repeatPassword.value) {
      alert("Passwords do not match.");
      return;
    }
    console.log('Registering with:', username.value, password.value);
    // 注册逻辑，比如 API 调用
    registe({
      nickname:username.value,
      password:password.value,
      checkPassword:repeatPassword.value
    }).then((res)=>{
      localStorage.setItem("token",res.data)
      router.push("/")
    })
  }
};

const toggleMode = () => {
  isLoginMode.value = !isLoginMode.value;
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-container {
  
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  line-height: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
