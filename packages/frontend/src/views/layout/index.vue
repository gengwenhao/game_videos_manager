<script setup lang="ts">

</script>

<template>
  <el-container class="common-layout">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.common-layout {
  min-height: max(100vh, 700px);

  .el-aside {
    background-color: red;
  }

  .el-header {
    background-color: lightblue;
  }

  .el-main {
    background-color: lightgoldenrodyellow;
  }
}
</style>
