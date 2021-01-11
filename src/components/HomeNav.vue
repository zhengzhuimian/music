<template>
  <div class="home-nav">
    <div class="icon">
      <router-link to="/collect">
        <svg
          t="1610332157871"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1075"
          width="30"
          height="30"
        >
          <path
            d="M390.12 257.01h410.22V357.2H390.12zM390.12 475.61h410.22V575.8H390.12zM390.12 694.21h410.22V794.4H390.12z"
            fill="#333333"
            p-id="1076"
          ></path>
          <path
            d="M277.82 307.62m-50.09 0a50.09 50.09 0 1 0 100.18 0 50.09 50.09 0 1 0-100.18 0Z"
            fill="#333333"
            p-id="1077"
          ></path>
          <path
            d="M277.82 525.71m-50.09 0a50.09 50.09 0 1 0 100.18 0 50.09 50.09 0 1 0-100.18 0Z"
            fill="#333333"
            p-id="1078"
          ></path>
          <path
            d="M277.82 738.94m-50.09 0a50.09 50.09 0 1 0 100.18 0 50.09 50.09 0 1 0-100.18 0Z"
            fill="#333333"
            p-id="1079"
          ></path>
        </svg>
      </router-link>
    </div>
    <ul id="home">
      <li><router-link to="/">推荐</router-link></li>
      <li><router-link to="/hot">热门</router-link></li>
      <li><router-link to="/search">搜索</router-link></li>
      <li><router-link to="/collect">喜欢</router-link></li>
    </ul>
    <div class="search-icon">
      <router-link to="/search">
        <svg
          t="1610333400220"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3404"
          width="32"
          height="32"
        >
          <path
            d="M958.570825 853.073072 851.013157 960.623577 652.771117 762.367211c-147.627269 97.81784-348.489996 81.740676-478.559377-48.350195-148.483776-148.490939-148.483776-389.245212 0-537.7515 148.483776-148.491962 389.260561-148.491962 537.737174 0 130.076544 130.083707 146.160871 330.923922 48.350195 478.559377L958.570825 853.073072zM658.199757 230.058676c-118.794593-118.801756-311.421752-118.801756-430.223508 0-118.779244 118.779244-118.779244 311.399239 0 430.193833 118.772081 118.764917 311.310212 118.78743 430.111968 0.089028l0.200568-0.200568C776.964674 541.339212 776.942161 348.801081 658.199757 230.058676z"
            p-id="3405"
          ></path>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.home-nav {
  display: flex;
  line-height: 34px;
  background-color: #ffe300;
  .icon {
    width: 36px;
    text-align: center;
    vertical-align: middle;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .search-icon {
    width: 36px;
    text-align: center;
    vertical-align: middle;
    svg {
      width: 23px;
    }
  }
  #home {
    display: flex;
    border-bottom: 1px solid #eeeeee;
    height: 41px;
    flex: 1;
    padding: 0 50px;
    //  justify-content:space-around
    li {
      flex: 1;
      justify-content:space-around;
     text-align: center;
      a {
        text-decoration: none;
        color: black;
        line-height: 40px;
        display: inline-block;
        // padding: 0 15px;
        &.router-link-exact-active {
          font-weight: 600;
          border-bottom: 2px solid black;
        }
      }
    }
  }
}
</style>