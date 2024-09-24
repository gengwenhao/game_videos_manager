<script lang="ts" setup>
import { reactive } from 'vue'

const tableData = new Array(200).fill(0).map((o) => ({
  title: 'gg',
  date: '2016-05-03',
  name: 'Tom',
  desc: 'No. 189, Grove St, Los Angeles'
}))

const formInline = reactive({
  user: '',
  region: '',
  date: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div aria-label="A complete example of page header">
    <el-main class="workbench-container">
      <el-card style="margin-bottom: 10px">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="Approved by">
            <el-input v-model="formInline.user" placeholder="Approved by" clearable />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="formInline.region" placeholder="Activity zone" clearable>
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time">
            <el-date-picker
              v-model="formInline.date"
              type="date"
              placeholder="Pick a date"
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Query</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <el-card style="max-height: calc(100vh - 250px)">
        <el-table :data="tableData" style="height: calc(100vh - 290px)">
          <el-table-column prop="title" label="Title" width="180" />
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="desc" label="Desc" />
        </el-table>
      </el-card>
    </el-main>
  </div>
</template>
