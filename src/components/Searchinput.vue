<template>
  <el-row>
    <el-col :span="6" style="float:left;width: 200px;hight: 40px;">
      <el-input
        type="text"
        prefix-icon="el-icon-search"
        v-model="kb_content"
        placeholder="请输入"
        style="cursor: pointer"
        @keyup.enter.native="getAllKb"
      ></el-input>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "Searchinput"
}
</script>

<style scoped>

</style>
