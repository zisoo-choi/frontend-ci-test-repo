<template>
    <v-app>
        <navigation-menu-page/>
        <v-main>
            <router-view/>
        </v-main>
        <Footer/>
    </v-app>
</template>

<script>
import Footer from '@/views/layoutForm/Footer.vue';
import NavigationMenuPage from '@/views/layoutForm/navigation/NavigationMenuPage.vue';

export default {
    name: 'App',

    data: () => ({
        //
    }),
    components: {
        NavigationMenuPage,
        Footer
    },
};
</script>