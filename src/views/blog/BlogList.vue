<template>
  <div class="blog">

    <div align="left" style="margin-left: 150px;margin-right: 150px">
      <sui-grid class="ui padded horizontally vertically">
        <sui-grid-column :width="3">
          <div class="ui secondary vertical menu fluid ">
            <a class="active item green ">{{$t('blog.recommendedToYou')}}</a>
            <a class="item">{{$t('blog.popularContent')}}</a>
            <a class="item">{{$t('blog.latestContent')}}</a>
            <div class="ui horizontal divider">{{$t('blog.technologyChannel')}}</div>
            <a class="item">{{$t('blog.frontEnd')}}</a>
            <a class="item">{{$t('blog.backEnd')}}</a>
            <a class="item">Android</a>
            <a class="item">IOS</a>
            <a class="item">AI</a>
            <a class="item">{{$t('blog.openSource')}}</a>
            <a class="item">{{$t('blog.tool')}}</a>

          </div>
        </sui-grid-column>

        <sui-grid-column :width="9">
          <sui-header>{{$t('blog.recommendedToYou')}}</sui-header>
          <sui-divider></sui-divider>
          <sui-item-group>
            <sui-item v-for="i in blog" :key="i.article_id">

              <sui-item-content>
                <sui-item-header>
                  <router-link target="_blank" :to="{name: 'BlogView', params: { id: i.article_id }}"
                               style="color: #212121"
                  >
                    {{i.title}}
                  </router-link>
                </sui-item-header>

                <sui-item-meta>
                  <!--                  <span>{{i.user}}</span>-->
                  <!--                  <sui-label size="mini" v-for="l in i.tags" :key="l.id" :content="l.name">{{l.name}}</sui-label>-->
                </sui-item-meta>
                <sui-item-description>
                  <p>
                    <router-link target="_blank" :to="{name: 'BlogView', params: { id: i.article_id }}"
                                 style="color: #888"
                    >
                      {{i.abstract | wordLimit}}
                    </router-link>
                    <!--                    {{ i| setAbstract }}-->
                  </p>
                </sui-item-description>
                <sui-item-extra class="ui end floated">

                  <span>
                    <router-link
                      style="color: #475669"
                      :to="{name: 'UserDetail', params: { username: i.username }}">

                      <sui-image size="mini" circular :src="i.avatar ? i.avatar: defaultAvatar" avatar/>
                      {{i.username}}

                  </router-link>
                  </span>

                  <span>{{i.created_at | changeTime}}</span>

                  <span class="ui right floated"><sui-icon name="eye"/>{{i.click_num}}</span>
                  <span class="ui  right floated"><sui-icon name="comment"/>{{i.comment_num}}</span>
                  <span class="ui  right floated"><sui-icon name="thumbs up"/>{{i.like_num}}</span>

                </sui-item-extra>
              </sui-item-content>
              <router-link target="_blank" :to="{name: 'BlogView', params: { id: i.article_id }}"
                           style="color: #888">
                <sui-item-image class="cover-img"
                                :style="{'background-image': 'url('+ i.cover +')',
                                width: '180px',
                                height: '120px',
                                marginLeft: '20px'}"
                                v-if="i.cover" src=""/>
              </router-link>


            </sui-item>
          </sui-item-group>
          <infinite-loading v-if="blog" @infinite="infiniteHandler">
            <div slot="spinner"><sui-loader active inline /></div>
            <div slot="no-more">没有啦！别翻了😘</div>
            <div slot="no-results">暂无数据:(</div>
          </infinite-loading>

        </sui-grid-column>
        <sui-grid-column :width="4">

          <sui-card-group>
            <sui-card>
              <sui-card-content>
                <sui-card-header>推荐文章</sui-card-header>
                <sui-divider></sui-divider>
                <sui-card-description>


                  <sui-item-group>
                    <sui-item v-for="i in hottestArticles" :key="i.article_id">
                      <!--        <sui-item-image size="tiny" src="static/images/wireframes/image.png" />-->
                      <sui-item-content>

                        <sui-item-content>
                          <router-link target="_blank" :to="{name: 'BlogView', params: { id: i.article_id }}"
                                       style="color: #212121"
                          >
                            {{i.title}}
                          </router-link>
                        </sui-item-content>
                      </sui-item-content>
                    </sui-item>

                  </sui-item-group>


                </sui-card-description>
              </sui-card-content>
            </sui-card>

            <sui-card>
              <sui-card-content>
                <el-carousel :interval="4000" type="card" height="200px">
                  <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </sui-card-content>

            </sui-card>


          </sui-card-group>

        </sui-grid-column>
      </sui-grid>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script>

  import filters from "@/filters";
  import InfiniteLoading from 'vue-infinite-loading'
  import {ACCOUNT} from "@/store/types";
  import {mapState} from "vuex"

  import '@/assets/scss/cover.scss'


  export default {
    name: 'BlogList',
    components: {InfiniteLoading},

    data() {
      return {
        blog: [],
        next: '',
        previous: '',
        page: 1,
        end: true,
        hottestArticles: []

      }
    },
    computed: {
      ...mapState('account', {defaultAvatar: ACCOUNT.DEFAULT_AVATAR,})
    },
    methods: {

      async infiniteHandler($state) {

        this.$api.blog.getArticleParamList({
          page: this.page,
          status: 'P'
        }).then((res) => {
          if (this.end) {
            this.page += 1;
            this.blog.push(...res.data.results);
            this.end = res.data.next !== null
            $state.loaded();
          } else {
            $state.complete();
          }
          this.end = res.data.next !== null
          if (this.end === false) {
            $state.complete();
          }

        })

      },
    },

    async created() {

      // this.$loading.show()
      // await this.$api.blog.getArticleList().then((res)=>{
      //   this.blog = res.data.results
      //   this.next = res.data.next
      //   this.previous = res.data.previous
      //   console.log("create:", res.data)
      //   console.log("create:", res.data.next)
      //   console.log("create:", res.data.results)
      //   this.$loading.hide()
      // })

      this.$api.blog.getArticleParamList({
        username: this.username,
        page: this.page,
        size: 5,
        status: 'P',
        ordering: '-click_nums'
      }).then(res => {
        this.hottestArticles = res.data.results

      })


    },
    filters: {

      ...filters,

    },

  }

</script>

<style scoped lang="scss">



  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
