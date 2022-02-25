<template>
    <div class="tag" :class="{
  'tag--dark': dark
  }">
        <p>
            Pharetra pharetra, massa massa ultricies mi, quis hendrerit dolor magna eget est. Dui sapien eget mi proin sed libero enim, sed faucibus turpis in eu mi bibendum neque egestas congue?
        </p>
        {{ text }}
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                required: true,
                type: String
            },
            dark: {
                required: false,
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style>

</style>