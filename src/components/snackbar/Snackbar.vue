<template>
    <div class="text-center ma-2">
        <v-btn dark @click="snackbar = true">Open Snackbar</v-btn>
        <v-snackbar
                v-model="snackbar"
                top
        >
            {{ text }}
            <v-btn
                    color="pink"
                    text
                    icon
                    @click="snackbar = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script src="./lib/snackbar.vmc.js"></script>

<style src="./lib/snackbar.css" scoped></style>