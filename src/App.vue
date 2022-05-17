<template>
  <custom-container>
    <custom-header>Header</custom-header>
    <custom-main>Main</custom-main>
    <custom-footer>Footer</custom-footer>
  </custom-container>
  <hr>

  <custom-container>
    <custom-header>Header</custom-header>
    <custom-container>
      <custom-aside width="200px">Aside</custom-aside>
      <custom-main>Main</custom-main>
    </custom-container>
  </custom-container>
  <hr>

  <custom-container>
    <custom-aside width="200px">Aside</custom-aside>
    <custom-container>
      <custom-header>Header</custom-header>
      <custom-main>Main</custom-main>
      <custom-footer>Footer</custom-footer>
    </custom-container>
  </custom-container>
</template>

<script setup lang="ts"></script>

<style>
body {
  width: 1000px;
  margin: 10px auto;
}

.custom-header,
.custom-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.custom-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.custom-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.custom-container {
  margin-bottom: 40px;
}

.custom-container:nth-child(5) .custom-aside,
.custom-container:nth-child(6) .custom-aside {
  line-height: 260px;
}

.custom-container:nth-child(7) .custom-aside {
  line-height: 320px;
}
</style>
