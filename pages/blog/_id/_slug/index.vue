<template>
  <v-main class="pa-0">
    <!-- Hero Section -->
    <section class="post-image" :style="`background-image: url('${post.thumbnail}');`">
      <div class="bottom-gradient"></div>
      <v-container>
        <v-row align="center" justify="center">
          <v-col lg="6">
            <div class="post d-flex justify-center align-end">
              <div class="post-heading d-flex flex-column text-center mb-10">
                <div class="post-title white--text font-weight-black text-h3 text-sm-h2 text-md-h1 mb-10">
                  {{post.title}}
                </div>
                <div class="post-excerpt white--text text-h6">
                  {{post.excerpt}}
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Content Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col lg="6">
          <div class="content mt-10 text-h5 darkText--text font-weight-medium text-pre-line">
            {{post.content}}
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Comments Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col lg="6">
          <div class="content mb-10 text-h5 darkText--text font-weight-medium text-pre-line">
            <h1 class="font-weight-black darkText--text display-2 mb-5" v-if="comments.length">
              Comments.
            </h1>
            <h1 class="darkText--text text-center text-body-1 mb-5" v-else>
              No Comments yet.
              Be the first!
            </h1>
            <Comments :comments="comments"/>
            <AddComment />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Comments from '@/components/posts/comments/Comments.vue'
import AddComment from '@/components/posts/comments/AddComment.vue'

export default {
  data: () => ({
    post: null,
    comments: null
  }),
  head() {
    return {
      title: this.post.title
    }
  },
  components: {
    Comments,
    AddComment
  },
  computed: {
    ...mapGetters({
      getPost: 'posts/getPost',
      getComments: 'comments/getComments'
    })
  },
  methods: {
    ...mapActions({
      fetchComments: 'comments/fetchComments'
    }),

    getPostItem(id) {
      this.post = this.getPost(id)
    },

    getCommentItems(id) {
      this.comments = this.getComments(id)
    }
  },
  created() {
    this.getPostItem(this.$route.params.id)
    this.getCommentItems(this.$route.params.id)
    this.fetchComments()
  }
}
</script>

<style scoped>

.post {
  position: relative;
  height: 75vh;
}

.post-image {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.bottom-gradient {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5) 100%, transparent 72px);
}

.content {
  line-height: 2em;
}

</style>