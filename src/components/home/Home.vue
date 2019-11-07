<template>
    <v-container fluid>
        <!--<v-row>
            <v-col align="center" justify="center">
                <img alt="Vue logo" src="@/assets/vue.png">
            </v-col>
        </v-row>-->
        <v-row>
            <v-col align="center" justify="center">
                <h1>Bienvenue !</h1>
            </v-col>
        </v-row>
        <v-row id="subtitle">
            <v-col align="center" justify="center">
                <h3>Sur notre super site de Dataviz des données de la SNCF</h3>
            </v-col>
        </v-row>
        <v-row class="ml-3 mt-5">
            <h3>Développé avec de supers outils comme :</h3>
        </v-row>
        <v-row class="mt-5">
            <v-card
                    class="mx-auto"
                    v-for="item in items"
                    :key="item.name"
            >
                <v-img
                        :src="item.src"
                        height="200px"
                        width="200px"
                ></v-img>

                <v-card-title class="justify-center">
                    {{ item.name }}
                </v-card-title>
            </v-card>
        </v-row>
    </v-container>
</template>


<script src="./lib/home.vmc.js"></script>

<style src="./lib/home.css" scoped></style>