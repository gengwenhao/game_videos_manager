<script setup lang="ts">
import { Menu as IconMenu, Setting, VideoCameraFilled } from '@element-plus/icons-vue'
</script>

<template>
  <el-container class="common-layout">
    <el-aside style="width: auto;">
      <el-menu class="el-menu-vertical" collapse default-active="1">
        <el-menu-item index="1">
          <el-icon>
            <video-camera-filled />
          </el-icon>
          <span>Videos</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <setting />
          </el-icon>
          <span>Settings</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
.common-layout {
  min-height: max(100vh, 700px);

  .el-aside {
    .el-menu-vertical {
      min-height: 100%;
      user-select: none;
    }
  }

  .el-header {
    background-color: lightgray;
  }

  .el-main {
    background-color: whitesmoke;
  }
}
</style>
