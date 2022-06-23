<template>
  <div id="mytask-layout" class="theme-indigo">
    <div  class="sidebar px-4 py-4 py-md-5 me-0 sidebar-mini">
      <Sidebar></Sidebar>

    </div>
    <div id="content" class=" content px-lg-4 px-md-4 main ">
      <Nav></Nav>
      <Main1></Main1>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import Main1 from "./Main";
export default {
  name: "All",
  components: {Main1, Nav, Sidebar}
}
</script>

<style scoped>

</style>
