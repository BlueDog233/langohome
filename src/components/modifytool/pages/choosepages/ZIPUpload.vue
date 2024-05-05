<script setup>
import { ref, computed } from 'vue';
import JSZip from 'jszip';

const uploadRef = ref(null);
const uploadStatus = ref(false);
const uploadedFileName = ref('');

// 使用计算属性动态获取 headers
const headers = computed(() => ({
  token: localStorage.getItem('token') || ''
}));

const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    JSZip.loadAsync(file)
        .then(zip => {
          const hasHtml = Object.keys(zip.files).some(fileName => fileName.endsWith('.html'));
          if (hasHtml) {
            resolve();
          } else {
            reject('ZIP文件中必须包含至少一个HTML文件。');
          }
        })
        .catch(() => {
          reject('文件读取错误，请上传有效的ZIP文件。');
        });
  });
};

const handleChange = (file, fileList) => {
  uploadedFileName.value = file.name;
};

const handleSuccess = () => {
  uploadStatus.value = true;
};
</script>

<template>
  <el-upload
      ref="uploadRef"
      :before-upload="beforeUpload"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :show-file-list="false"
      :limit="1"
      :headers="headers"
      accept=".zip"
      action="http://localhost:8000/api/file/file"
  >
    <el-button slot="trigger" :type="uploadStatus ? 'success' : 'primary'">
      {{ uploadStatus ? '文件上传成功' : '选择文件' }}
    </el-button>
  </el-upload>
  <div v-if="uploadStatus" class="uploaded-info">
    上传的文件: {{ uploadedFileName }}
  </div>
</template>

<style>
.uploaded-info {
  margin-top: 10px;
  color: green;
}
</style>
