<v-container>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="cookies-page">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="templates/CookiesPage.svg" width="234"></doc-image>
                    <v-card-title>CookiesPage</v-card-title>
                    <v-card-text>Utilisé pour permettre à l’utilisateur de gérer ses préférences de cookies.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="notfound-page">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="templates/NotFoundPage.svg" width="234"></doc-image>
                    <v-card-title>NotFoundPage</v-card-title>
                    <v-card-text>Utilisé pour afficher une page d'erreur.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="maintenance-page">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="templates/MaintenancePage.svg" width="234"></doc-image>
                    <v-card-title>MaintenancePage</v-card-title>
                    <v-card-text>Utilisé pour afficher une page de maintenance.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="error-page">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="templates/ErrorPage.svg" width="234"></doc-image>
                    <v-chip outlined color="red" x-small>Déprécié</v-chip>
                    <v-card-title>ErrorPage</v-card-title>
                    <v-card-text>Utilisé pour afficher une page d’erreur.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
    </v-row>
</v-container>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
    .v-card:hover {
        box-shadow: 0 0 0 2px #3f51b5 !important;
    }
    .v-card__title {
        font-weight: 600 !important;
    }
    img {
        width: 100%;
        height: auto;
        background-color: #E7ECF5;
    }
    .v-chip {
        position: absolute;
        top: 156px;
        right: 0;
        margin: 8px;
        padding: 0 5px;
    }
</style>
