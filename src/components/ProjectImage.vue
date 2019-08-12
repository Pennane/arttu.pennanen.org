<template>
    <div class="projectimage">
        <img :alt="alt" :src="src">
        </div>
</template>

<script>
export default {
    name:'projectImg',
    props: ['alt', 'src']
}
</script>