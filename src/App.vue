<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const reset = ref(false)

const menu = [
  {
    title: 'Home',
    to: {
      name: 'home'
    }
  },
  {
    title: 'One',
    to: {
      name: 'one'
    }
  },
  {
    title: 'Two',
    to: {
      name: 'two'
    }
  },
  {
    title: 'Three',
    to: {
      name: 'three'
    }
  }
]

const handleClickOnMenuItem = (routeName: string) => {
  if (routeName === route.name) {
    reset.value = true
    router.push({name: 'home'})
  } else {
    reset.value = false
  }
}
</script>

<template>
  <v-container>
    <v-card>
      <v-tabs
        background-color="primary"
        stacked
      >
        <v-tab
          v-for="(item, index) in menu"
          :key="index"
          :to="item.to"
          @click.prevent="handleClickOnMenuItem(item.to.name)"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>

      <v-card-text>
        <RouterView v-slot="{ Component }">
          <KeepAlive>
            <component
              :is="Component"
              :reset="reset"
            />
          </KeepAlive>
        </RouterView>
      </v-card-text>
    </v-card>
  </v-container>
</template>
