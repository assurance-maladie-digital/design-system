<v-container>
    <h2 class="mb-4">Structure</h2>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="structure/header-bar">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/Header.svg" width="234"></doc-image>
                    <v-card-title>HeaderBar</v-card-title>
                    <v-card-text>Utilisé pour afficher l’en-tête d’une page ainsi qu’une barre de navigation.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="structure/sub-header">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/SubHeader.svg"></doc-image>
                    <v-card-title>SubHeader</v-card-title>
                    <v-card-text>Utilisé pour afficher un bloc d’informations sous l’en-tête principale.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="structure/footer-bar">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/FooterBar.svg"></doc-image>
                    <v-card-title>FooterBar</v-card-title>
                    <v-card-text>Utilisé pour afficher un pied de page.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
    </v-row>
    <h2 class="mt-8 mb-4">Layout</h2>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="layout/page-container">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/PageContainer.svg"></doc-image>
                    <v-card-title>PageContainer</v-card-title>
                    <v-card-text>Conteneur transparent utilisé pour afficher une page.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
    </v-row>
    <h2 class="mt-8 mb-4">Navigation</h2>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="navigation/external-links">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/ExternalsLinks.svg"></doc-image>
                    <v-card-title>ExternalsLinks</v-card-title>
                    <v-card-text>Utilisé pour afficher un menu avec une liste vers des liens externes.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
    </v-row>
    <h2 class="mt-8 mb-4">Boutons</h2>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="boutons/back-btn">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/BackBtn.svg"></doc-image>
                    <v-card-title>BackBtn</v-card-title>
                    <v-card-text>Utilisé pour permettre à l’utilisateur de revenir à la page précédente.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="boutons/copy-btn">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/CopyBtn.svg"></doc-image>
                    <v-card-title>CopyBtn</v-card-title>
                    <v-card-text>Utilisé pour afficher un bouton permettant à l’utilisateur de copier du texte.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <!-- <v-col cols="12" sm="6" md="4">
            <nuxt-link to="boutons/back-to-top-btn">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/BackToTopBtn.svg"></doc-image>
                    <v-card-title>BackToTopBtn</v-card-title>
                    <v-card-text>Utilisé pour afficher un bouton permettant à l’utilisateur de remonter en haut d'une page.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col> -->
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="boutons/lang-btn">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/LangBtn.svg"></doc-image>
                    <v-card-title>LangBtn</v-card-title>
                    <v-card-text>Utilisé pour permettre à l’utilisateur de choisir la langue de l’application.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="boutons/download-btn">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/DownloadBtn.svg"></doc-image>
                    <v-card-title>DownloadBtn</v-card-title>
                    <v-card-text>Utilisé pour permettre à l’utilisateur de télécharger un document provenant d’une API.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="boutons/france-connect-btn">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/FranceConnectBtn.svg"></doc-image>
                    <v-card-title>FranceConnectBtn</v-card-title>
                    <v-card-text>Utilisé pour afficher un bouton de connexion à FranceConnect.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="boutons/user-menu-btn">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/UserMenuBtn.svg"></doc-image>
                    <v-card-title>UserMenuBtn</v-card-title>
                    <v-card-text>Utilisé pour afficher un bouton activant un menu d’actions liées à l’utilisateur.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
    </v-row>
    <h2 class="mt-8 mb-4">Formulaires</h2>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="formulaires/date-picker">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/DatePicker.svg" width="234"></doc-image>
                    <v-card-title>DatePicker</v-card-title>
                    <v-card-text>Utilisé pour permettre à l’utilisateur de sélectionner ou de saisir une date.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="formulaires/form-builder">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/FormBuilder.svg" width="234"></doc-image>
                    <v-card-title>FormBuilder</v-card-title>
                    <v-card-text>Utilisé pour afficher un questionnaire.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="formulaires/form-field">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/FormField.svg" width="234"></doc-image>
                    <v-card-title>FormField</v-card-title>
                    <v-card-text>Utilisé pour afficher un champ de formulaire.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="formulaires/form-field-list">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/FormFieldList.svg" width="234"></doc-image>
                    <v-card-title>FormFieldList</v-card-title>
                    <v-card-text>Utilisé pour afficher un formulaire composé d’une liste de champs.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="formulaires/file-upload">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/FileUpload.svg" width="234"></doc-image>
                    <v-card-title>FileUpload</v-card-title>
                    <v-card-text>Utilisé pour permettre à l’utilisateur de sélectionner ou de glisser-déposer des fichiers.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="formulaires/nir-field">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/NirField.svg" width="234"></doc-image>
                    <v-card-title>NirField</v-card-title>
                    <v-card-text>Utilisé pour permettre à l’utilisateur de saisir un numéro de Sécurité sociale (NIR).</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="formulaires/phone-field">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/PhoneField.svg" width="234"></doc-image>
                    <v-card-title>PhoneField</v-card-title>
                    <v-card-text>Utilisé pour permettre à l’utilisateur de saisir un numéro de téléphone.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="formulaires/upload-workflow">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/UploadWorkflow.svg" width="234"></doc-image>
                    <v-card-title>UploadWorkflow</v-card-title>
                    <v-card-text>Utilisé pour permettre à l’utilisateur de sélectionner une liste de fichiers.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
    </v-row>
    <h2 class="mt-8 mb-4">Tableaux</h2>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="tableaux/paginated-table">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/PaginatedTable.svg" width="234"></doc-image>
                    <v-card-title>PaginatedTable</v-card-title>
                    <v-card-text>Utilisé pour afficher une VDataTable de Vuetify avec une pagination persistante.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="tableaux/filter-module">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/FilterModule.svg" width="234"></doc-image>
                    <v-card-title>FilterModule</v-card-title>
                    <v-card-text>Utilisé pour permettre à l’utilisateur de sélectionner des filtres.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="tableaux/table-toolbar">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/TableToolbar.svg" width="234"></doc-image>
                    <v-card-title>TableToolbar</v-card-title>
                    <v-card-text>Utilisé pour afficher une barre au-dessus des tableaux.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
    </v-row>
    <h2 class="mt-8 mb-4">Données</h2>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="donnees/data-list">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/DataList.svg" width="234"></doc-image>
                    <v-card-title>DataList</v-card-title>
                    <v-card-text>Utilisé pour afficher une liste d’informations.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="donnees/data-list-group">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/DataListGroup.svg" width="234"></doc-image>
                    <v-card-title>DataListGroup</v-card-title>
                    <v-card-text>Utilisé pour afficher une liste de DataList.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
    </v-row>
    <h2 class="mt-8 mb-4">Feedback</h2>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="donnees/dialog-box">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/DialogBox.svg" width="234"></doc-image>
                    <v-card-title>DialogBox</v-card-title>
                    <v-card-text>Utilisé pour afficher une boîte de dialogue avec des boutons d’actions.</v-card-text>
                </v-card>
            </nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <nuxt-link to="donnees/notification-bar">
                <v-card class="fill-height" max-width="234">
                    <doc-image src="components/NotificationBar.svg" width="234"></doc-image>
                    <v-card-title>NotificationBar</v-card-title>
                    <v-card-text>Utilisé avec le module Vuex notification pour afficher des notifications à l’utilisateur.</v-card-text>
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
</style>
