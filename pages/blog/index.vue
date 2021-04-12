<template>
  <v-main class="pa-0">
    <!-- Hero Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col>
          <div class="blog-hero d-flex justify-center align-center flex-column flex-md-row ml-5 mr-5 ml-md-0 mr-md-0">
            <div class="title">
              <h1 class="text-h3 text-sm-h2 text-md-h1 darkText--text font-weight-black mb-5">
                <span>
                  <div id="blogTitle">Blog.</div>
                </span>
              </h1>
              <div id="blogDesc" class="font-weight-light mb-5">
                News. Articles. Inspiration. Technology.
              </div>
            </div>
            <div class="blog-hero-image ml-10">
              <v-img
                id="blogHeroImage"
                :src="require('~/assets/undraw_Publish_article_re_3x8h.svg')"
                :max-width="width"
              >
              </v-img>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Posts Section -->
    <section class="grey lighten-4 pt-10 pb-10">
      <v-container>
        <v-row align="center" justify="center">
          <v-col md="8">
            <div class="search-title text-center display-1 font-weight-black ml-5 mr-5 ml-sm-0 mr-sm-0">
              Search Articles.
            </div>
            <p class="font-weight-light text-center">Get to know the latest IT news </p>
            <v-form @submit.prevent>
              <v-autocomplete
                v-model="searchInput"
                filled
                placeholder="Search..."
                solo-inverted
                append-icon="mdi-magnify"
                flat
                :items="postTitles"
              >

              </v-autocomplete>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row align="center" justify="center">
          <v-col md="10" lg="8">
            <div class="posts-section ml-5 mr-5 ml-md-0 mr-md-0">
              <PostFeatured :post="featuredPost"/>
              <Posts
                :posts="filteredPosts"
                :class="$vuetify.breakpoint.name === 'xs' ?
                  'posts-xs-grid' :
                  ($vuetify.breakpoint.name === 'sm' ? 'posts-sm-grid' : 'posts-grid' )"/>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Summary Section -->
    <section class="darkText pt-15 pb-15">
      <v-container>
        <v-row align="center" justify="center">
          <v-col md="7">
            <div class="summary d-flex flex-column flex-md-row justify-center align-center mr-5 ml-5 mr-md-0 ml-md-0">
              <v-img
                class="mb-5 mb-md-0"
                :max-width="width"
                :src="require('~/assets/img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg')"
              >
              </v-img>
              <div class="summary-desc ml-md-10">
                <h1 class="text-h3 text-sm-h2 text-md-h1 white--text font-weight-black mb-5">
                  Learn.
                </h1>
                <p class="summ-parr white--text font-weight-light">
                  We expect our community to grow, that's why we'll provide the
                  latest information in our hands. Interesting topics will live
                  here in order to make it easier for the developer to get to
                  know as much as possible.
                </p>
                <p class="white--text font-weight-light mt-10">
                  Make sure you're always aware of our news.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

  </v-main>
</template>

<script>
import { mapGetters } from 'vuex'
import Posts from '../../components/posts/Posts'
import PostFeatured from '../../components/posts/PostFeatured'

export default {
  data: () => ({
    searchInput: '',
  }),
  components: {
    Posts,
    PostFeatured,
  },
  computed: {
    ...mapGetters({
      allPosts: 'posts/allPosts',
      featuredPost: 'posts/getFeaturedPost',
      postTitles: 'posts/getPostTitles'
    }),
    filteredPosts() {
      return this.allPosts.filter(post => {
        return post.title.toLowerCase().includes(this.searchInput.toLowerCase())
      })
    },

    width () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 220
        case 'sm': return 400
        case 'md': return 500
        case 'lg': return 600
        case 'xl': return 800
      }
    },
  }
}
</script>

<style scoped>
.blog-hero {
  height: 100vh;
}

.blog-posts-child:not(:first-child) {
  flex: 1 !important;
}

.posts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.posts-sm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.posts-xs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

</style>