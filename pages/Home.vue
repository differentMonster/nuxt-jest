<template>
    <div>
        <h1>Home</h1>
        <AppTag text="vue" dark></AppTag>
        <AppReveal text="Hello"></AppReveal>
        <AppList>
            <li>Item one</li>
        </AppList>

        <AppFormInput v-model="body"></AppFormInput>

        {{body}}
    </div>
</template>

<script>
    import AppTag from '@/components/AppTag.vue';
    import AppReveal from '@/components/AppReveal.vue';
    import AppList from '@/components/AppList.vue';
    import AppFormInput from '@/components/AppFormInput.vue';

    export default {
        data() {
            return {
                body: 'abc'
            }
        },
        components: {
            AppTag,
            AppReveal,
            AppList,
            AppFormInput
        }
    }
</script>

<style>

</style>