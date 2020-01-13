<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <h1>Carte des gares françaises</h1>
        </v-row>
        <v-row justify="center" align="center" class="mx-5">
            <Map :gares="gare" v-if="!$store.state.loadingGa"/>
            <MoonLoader v-else class="mt-12"/>
        </v-row>
    </v-container>
</template>

<script src="./lib/carte.vmc.js"></script>

<style src="./lib/carte.css" scoped></style>