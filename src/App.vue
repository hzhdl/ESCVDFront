<template>
  <div id="mytask-layout" class="theme-indigo">
    <div  class="sidebar px-4 py-4 py-md-5 me-0">
      <Sidebar></Sidebar>

    </div>
    <div id="content" class="main px-lg-4 px-md-4">
      <Nav></Nav>
      <Main></Main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {Main, Sidebar, Nav}
}
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

</script>

<style lang="less" scoped>

</style>
