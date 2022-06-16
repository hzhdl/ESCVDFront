<template>
  <div id="sidebar" class="d-flex flex-column h-100"><a href="index.html" class="mb-0 brand-icon">
    <span class="logo-icon">
      <svg t="currentColor" class="bi bi-clipboard-check" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3731" width="35" height="35"><path d="M512 64.223v369.743l-267.095 83.14L512 64.223zM512 64.223v369.743l267.095 83.14L512 64.223zM512 959.777V702.502L244.905 555.207 512 959.777zM512 959.777V702.502l267.095-147.295L512 959.777z" fill="#1296DB" p-id="3732"></path><path d="M244.905 517.106L512 392.986v255.311L244.905 517.106zM779.095 517.106L512 392.986v255.311l267.095-131.191z" fill="#1296DB" p-id="3733"></path></svg>
      <!--      <svg fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1824" width="35" height="35"><path d="M600.721723 566.307446H349.113108c-27.191138 0-49.230769-22.043569-49.23077-49.230769s22.039631-49.230769 49.23077-49.230769h251.608615c27.1872 0 49.230769 22.043569 49.230769 49.230769s-22.039631 49.230769-49.230769 49.230769zM675.426462 282.805169a49.045662 49.045662 0 0 1-33.591139-13.252923c-19.869538-18.558031-20.932923-49.711262-2.374892-69.5808 57.930831-62.026831 59.321108-116.125538 59.309292-116.645415-0.641969-27.183262 20.869908-49.738831 48.053169-50.3808 27.076923-0.720738 49.734892 20.873846 50.376862 48.053169 0.224492 9.416862-0.291446 94.645169-85.783631 186.178954a49.081108 49.081108 0 0 1-35.989661 15.627815zM334.347815 990.523077c-27.191138 0-49.230769-22.043569-49.230769-49.230769 0-92.341169 57.993846-146.026338 114.723446-186.360123 22.157785-15.757785 52.893538-10.562954 68.651323 11.59483s10.562954 52.897477-11.59483 68.651323c-61.050092 43.405785-73.314462 72.782769-73.314462 106.11397-0.003938 27.1872-22.047508 49.230769-49.234708 49.230769z" fill="#B0A7F7" p-id="1825"></path><path d="M661.200738 727.103015c80.840862-60.037908 151.378708-144.513969 146.782524-234.562953-4.052677-79.470277-62.109538-142.832246-172.544-188.317539-121.450338-50.0224-174.072123-105.141169-196.832493-142.576246-22.728862-37.383877-20.137354-63.488-20.015261-64.578954-0.1024 0.917662-0.212677 1.390277-0.212677 1.390277l-97.012185-16.829046c-1.559631 8.975754-7.597292 56.926523 26.501908 119.693784 19.385108 35.6864 47.623877 68.730092 84.440615 98.973539-118.784 77.178092-137.042708 166.368492-135.971446 217.257354 2.083446 99.107446 75.941415 187.608615 197.572923 236.729107 183.744985 74.220308 209.073231 133.742277 209.073231 187.006031 0 27.1872 22.043569 49.230769 49.230769 49.230769s49.230769-22.043569 49.230769-49.230769c0-86.445292-43.189169-154.127754-140.244677-214.185354z m-266.421169-211.621415c-1.1776-56.020677 45.757046-111.604185 129.630523-154.663385 22.709169 12.114708 47.214277 23.607138 73.531077 34.445785 49.624615 20.436677 109.284431 54.776123 111.706585 102.293662 2.938092 57.576369-71.0656 131.414646-148.543016 178.160246a1222.848985 1222.848985 0 0 0-30.314338-12.733046c-82.688-33.394215-134.801723-89.915077-136.010831-147.503262z" fill="#594BC8" p-id="1826"></path></svg>-->
      <!--      <svg width="35" height="35" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16" >-->
<!--&lt;!&ndash;        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>&ndash;&gt;-->
<!--&lt;!&ndash;        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>&ndash;&gt;-->
<!--&lt;!&ndash;        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>&ndash;&gt;-->
<!--      </svg>-->
      </span><span class="logo-text">ESCVD</span></a><!-- Menu:main ul -->
    <ul class="menu-list flex-grow-1 mt-3">
      <!--                <li class="collapsed"><a class="m-link" data-bs-toggle="collapse" data-bs-target="#dashboard-Components" href="#"><i class="icofont-home fs-5"></i><span>Dashboard</span><span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>&lt;!&ndash; Menu:Sub menu ul &ndash;&gt;-->
      <!--                    <ul class="sub-menu collapse" id="dashboard-Components">-->
      <!--                        <li><a class="ms-link" href="index.html"><span>Hr Dashboard</span></a></li>-->
      <!--                        <li><a class="ms-link" href="project-dashboard.html"><span>Project Dashboard</span></a></li>-->
      <!--                    </ul>-->
      <!--                </li>-->
      <li><router-link class="m-link" to="/center"><i class="iconfont icon-shujuguanli"></i><span>个人中心</span></router-link></li>
      <li><router-link class="m-link" to="/complie"><i class="iconfont icon-jihuaxietong"></i><span>合约编译</span></router-link></li>
      <li><router-link class="m-link" to="/detect"><i class="iconfont icon-mingxihuaxiang"></i><span>漏洞检测</span></router-link></li>
    </ul>

    <!-- Theme:Switch Theme -->
    <ul class="list-unstyled mb-0">
<!--      <li class="d-flex align-items-center justify-content-center">-->
<!--        <div class="form-check form-switch theme-switch">-->
<!--          <input class="form-check-input" type="checkbox" id="theme-switch">-->
<!--          <label class="form-check-label" for="theme-switch">Enable Dark Mode!</label>-->
<!--        </div>-->
<!--      </li>-->
<!--          <li class="d-flex align-items-center justify-content-center">-->
<!--              <div class="form-check form-switch theme-rtl">-->
<!--                  <input class="form-check-input" type="checkbox" id="theme-rtl">-->
<!--                  <label class="form-check-label" for="theme-rtl">Enable RTL Mode!</label>-->
<!--              </div>-->
<!--          </li>-->
    </ul>
    <!-- Menu:menu collepce btn -->
    <button type="button" class="btn btn-link sidebar-mini-btn text-light">
      <span class="ms-2"><i class="icofont-bubble-right"></i></span>
    </button>
  </div>

</template>

<script>

export default {
  name: "Sidebar",
  created() {
    console.log('sad4f35sda435f4s')
  }
}
</script>

<style lang="less" scoped>
.sidebar .iconfont{
  width: 30px;
  font-size: larger;
}
.sidebar-mini .iconfont{
  width: 100%;
  font-size: larger;
}

//#sidebartem{
//  width: 100%;
//  height: 100%;
//}
//#sidelogo{
//  width: 35px;
//  height: 35px;
//  color: white;
//}

</style>
