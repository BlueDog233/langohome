<template>
  <div class="back" style="display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background: url('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg');background-position: center;background-size: contain; no-repeat center center; background-size: cover;">
    <div class="auth-container" style="padding: 40px; background: rgba(0, 0, 0, 0.6); border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); transition: transform 0.3s ease-in-out;margin-left: 60vw;width: 35vw">
      <h1>{{ isLoginMode ? '登录' : '注册' }}</h1>
      <form @submit.prevent="handleAuth" style="display: flex; flex-direction: column; gap: 20px;">
        <div class="form-group">
          <label for="username">用户名:</label>
          <input v-model="username" type="text" id="username" required style="padding: 10px; border-radius: 5px; border: none; background: rgba(255, 255, 255, 0.8); transition: background-color 0.3s ease;">
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input v-model="password" type="password" id="password" required style="padding: 10px; border-radius: 5px; border: none; background: rgba(255, 255, 255, 0.8); transition: background-color 0.3s ease;">
        </div>
        <div class="form-group" v-if="!isLoginMode">
          <label for="repeatPassword">确认密码:</label>
          <input v-model="repeatPassword" type="password" id="repeatPassword" required style="padding: 10px; border-radius: 5px; border: none; background: rgba(255, 255, 255, 0.8); transition: background-color 0.3s ease;">
        </div>
        <button type="submit" style="padding: 10px 20px; border-radius: 5px; background: #6a85b9; color: white; border: none; cursor: pointer; transition: background-color 0.3s ease;">
          {{ isLoginMode ? '登录' : '注册' }}
        </button>
      </form>
      <button @click="toggleMode" style="margin-top: 20px; padding: 10px 20px; border-radius: 5px; background: transparent; color: white; border: 1px solid #fff; cursor: pointer; transition: border-color 0.3s ease;">
        切换到 {{ isLoginMode ? '注册' : '登录' }}
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
