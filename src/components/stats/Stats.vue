<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <h1>Statistiques</h1>
        </v-row>
        <v-row justify="center" align="center" class="mx-5">
            <DonutChart :chartdata="chartdata" :options="options" v-if="!$store.state.loading"/>
            <MoonLoader v-else class="mt-12"/>
        </v-row>
    </v-container>
</template>

<script src="./lib/stats.vmc.js"></script>

<style src="./lib/stats.css" scoped></style>