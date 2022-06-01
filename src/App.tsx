import { defineComponent } from "vue"
import { RouterView } from "vue-router"
const App = defineComponent({
    setup() {
        return () => {
            return <>
                <h1>俺是真滴佛了</h1>
                <RouterView></RouterView>
            </>
        }
    }
})

export default App




{/* <template>
    <Son ref="sonRef" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Son from './son.vue'

interface sonData {
    fn: () => void
    count: number
}

class C {
    x = 0;
    y = 0
}

type sonType = typeof Son
const sonRef = ref<InstanceType<typeof Son> & sonData>()

onMounted(() => {
    console.log(sonRef.value?.$el)
    console.log(sonRef.value?.fn)
})
</script> */}
