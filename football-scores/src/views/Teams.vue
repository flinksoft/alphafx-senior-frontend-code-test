<template>
  <div class="home">
    <TeamSheet />
  </div>
</template>

<script>
// @ is an alias to /src
import TeamSheet from '@/components/TeamSheet.vue'

export default {
  name: 'home',
  components: {
    TeamSheet
  }
}
</script>
