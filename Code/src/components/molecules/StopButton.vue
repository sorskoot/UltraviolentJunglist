<template>
    <uj-button :disabled="disabled" @click="$emit('stop')">Stop</uj-button>
</template>

<script>
import {ujButton} from '@/components/atoms'

export default {
    name:'uj-stop-button',
    components:{ujButton},
    props:{
        disabled:{
            type:Boolean,
            default:true
        }
    }
}
</script>