<template>
  <div class="home-nav">
    <div class="icon">
      <router-link to="/collect">
       <svg t="1615252146235" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2994" width="28" height="28"><path d="M127 192c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z m0 384c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z m0 384c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64zM288 88h632c22.091 0 40 17.909 40 40s-17.909 40-40 40H288c-22.091 0-40-17.909-40-40s17.909-40 40-40z m0 384h632c22.091 0 40 17.909 40 40s-17.909 40-40 40H288c-22.091 0-40-17.909-40-40s17.909-40 40-40z m0 384h632c22.091 0 40 17.909 40 40s-17.909 40-40 40H288c-22.091 0-40-17.909-40-40s17.909-40 40-40z" p-id="2995" fill="#ffffff"></path></svg>
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
          t="1615252079164"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2178"
          width="34"
          height="34"
        >
          <path
            d="M487.8 258.68c118.69 0 218.72 92.87 227.73 211.42 9.56 125.77-84.98 235.87-210.75 245.42-5.93 0.45-11.83 0.67-17.69 0.67-118.69 0-218.73-92.87-227.74-211.42-4.63-60.92 14.74-120.01 54.55-166.36 39.81-46.35 95.28-74.43 156.2-79.06 5.94-0.44 11.84-0.67 17.7-0.67m-0.01-96c-8.26 0-16.59 0.31-24.96 0.95-178.83 13.6-312.79 169.59-299.2 348.43 12.96 170.46 155.29 300.15 323.46 300.15 8.26 0 16.59-0.31 24.96-0.95 178.84-13.59 312.79-169.59 299.2-348.42-12.95-170.47-155.28-300.16-323.46-300.16z"
            fill="#ffffff"
            p-id="2179"
          ></path>
          <path
            d="M861.3 909.31c-12.28 0-24.56-4.69-33.94-14.06L702.12 769.99c-18.75-18.75-18.75-49.12 0-67.88s49.12-18.75 67.88 0l125.25 125.25c18.75 18.75 18.75 49.12 0 67.88-9.38 9.38-21.67 14.07-33.95 14.07z"
            fill="#ffffff"
            p-id="2180"
          ></path>
          <path
            d="M668.163 736.059l67.875-67.875L850.503 782.65l-67.874 67.874z"
            fill="#ffffff"
            p-id="2181"
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
  line-height: 44px;
  background-color: #1d82fe;
  .icon {
    width: 42px;
    height: 41px;
    text-align: center;
    vertical-align: middle;
    svg {
      width: 19px;
      height: 19px;
    }
  }
  .search-icon {
    width: 42px;
    text-align: center;
    // vertical-align: middle;
    svg {
      width: 24px;
    }
  }
  #home {
    display: flex;
    height: 48px;
    flex: 1;
    padding: 0 30px;
    li {
      flex: 1;
      justify-content: space-around;
      text-align: center;
      a {
        text-decoration: none;
        color: white;
        line-height: 47px;
        display: inline-block;
        // padding: 0 15px;
        &.router-link-exact-active {
          font-weight: 600;
          font-size: 18px;
          border-bottom: 2px solid white;
        }
      }
    }
  }
}
</style>