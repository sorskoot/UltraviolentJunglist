<template>
    <uj-button :disabled="disabled" @click="$emit('play')">Play</uj-button>
</template>

<script>
import {ujButton} from '@/components/atoms'

export default {
    name:'uj-play-button',
    components:{ujButton},
    props:{
        disabled:{
            type:Boolean,
            default:true
        }
    }
}
</script>