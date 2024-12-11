import { faker } from '@faker-js/faker';
import {test, expect } from '../utils/myTests';

//import { CollaboratorPage } from '../pages/CollaboratorPage';

const email = faker.internet.email();
const prenom = faker.person.firstName();
const nom = faker.person.lastName();
//const password = faker.internet.password();
const identifiant = faker.number.int({ min: 1000, max: 9999 })
const telephone = faker.number.int({min: 1000000, max:9999999})
const birthdayDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
const birthday = birthdayDate.toISOString().split('T')[0];
const profilAdresse = faker.location.streetAddress();
//const phoneNumber = faker.phone.number('76#######');
//verifier si a nvelle branche a été créé


test('@MA-1 Ajout collaborateur', async ({ collaboratorPage, page}) => {
    await collaboratorPage.addCollaborator(prenom, nom, email, '77' +telephone.toString(), birthday, identifiant.toString(), 'Testeur', '2000000', '123456789', 'WAVE');
});

test('Rechercher un collaborateur', async ({ rechercheCollabPage, page}) => {
    await rechercheCollabPage.RechercherdeCollab('3886');
});

test('Fonctionnalite Bouton Import Fichier', async ({ importerTelechargerCollabPage, page}) => {
    await importerTelechargerCollabPage.ImportGeneralFichier();
});

test('Editer un collaborateur', async ({ editerCollabPage, page}) => {
    await editerCollabPage.EditerCollaborateur(prenom, nom, birthday, 'gestionnaire', '500000');
});

test('Suspendre un collaborateur', async ({ suspendreCollabPage, page}) => {
    await suspendreCollabPage.SuspendreCollaborateur();
});

test('Dashboard: Verification des paramètres du widget Echeances sur salaire', async ({ verificationParamEcheanceSurSalPage, page}) => {
    await verificationParamEcheanceSurSalPage.VerificationParamEcheanceSurSal();
});

test('Dashboard: Verification de la vue d-ensemble du remboursement ', async ({ verificationDiagrammeVueEnsemblePage, page}) => {
    await verificationDiagrammeVueEnsemblePage.VerificationDiagrammeVueEnsemble();
});

test('Dashboard: Verification tableau utilisateurs', async ({ verificationTableauStatutsPage, page}) => {
    await verificationTableauStatutsPage.VerificationTableauStatuts();
});

test('Dashboard: Vérification des filtres sur le dashboard', async ({ filtrerSurDachboardPage, page}) => {
    await filtrerSurDachboardPage.FiltrerSurDachboard();
});

test('Activités: Vérification colonnes de ta table Activité', async ({ verificationColonneActivitesPage, page}) => {
    await verificationColonneActivitesPage.VerificationColonneActivites();
});

test('Activités: Recherche sur la table Activité', async ({ rechercheSurTabActivitePage, page}) => {
    await rechercheSurTabActivitePage.RechercheSurTabActivite('29/11/2024', '09:43:32');
    //'29/11/2024'
        //'09:43:32'
});

test('Mise à jour des données du profil connecté', async ({ modificationDonneesProfilPage, page}) => {
    await modificationDonneesProfilPage.ModificationDonneesProfil('77' +telephone.toString(), profilAdresse);
});

test('Vérifier paramètres du profil connecté', async ({ verificationParamProfilPage, page}) => {
    await verificationParamProfilPage.VerificationParamProfil();
});


