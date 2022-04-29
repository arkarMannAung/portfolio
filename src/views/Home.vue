<template>
  <Intro/>
  <Introduce/>
  <Resumes/>
  <Personal/>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'
import Introduce from '@/components/Introduce.vue'
import Resumes from '@/components/Resumes.vue'
import Personal from '@/components/Personal.vue'

export default {
  name: 'HomeView',
  components: {
    Intro,
    Introduce,
    Resumes,
    Personal
  }
}
</script>
