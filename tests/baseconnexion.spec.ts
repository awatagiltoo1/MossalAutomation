import { faker } from '@faker-js/faker';
import {test, expect } from '../utils/myTests';
//import { CollaboratorPage } from '../pages/CollaboratorPage';
const email = faker.internet.email();
const prenom = faker.person.firstName();
const nom = faker.person.lastName();
const identifiant = faker.number.int({ min: 1000, max: 9999 })
const telephone = faker.number.int({min: 1000000, max:9999999})
const birthdayDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
const birthday = birthdayDate.toISOString().split('T')[0];
const profilAdresse = faker.location.streetAddress();
const pourcentage = faker.number.int({ min: 1, max: 100 });
//const phoneNumber = faker.phone.number('76#######');
//verifier si a nvelle branche a été créé
test.describe('TestSuite Collaborateurs', () => {
test('@MA-69 Ajout collaborateur', async ({ collaboratorPage, page}) => {
    await collaboratorPage.addCollaborator(prenom, nom, email, '77' +telephone.toString(), birthday, identifiant.toString(), 'Testeur', '2000000', '123456789', 'WAVE');
});
test('@MA-70 Rechercher un collaborateur', async ({ rechercheCollabPage, page}) => {
    await rechercheCollabPage.RechercherdeCollab('3886');
});
test('@MA-71 Fonctionnalite Bouton Import Fichier', async ({ importerTelechargerCollabPage, page}) => {
    await importerTelechargerCollabPage.ImportGeneralFichier();
});
test('@MA-72 Editer un collaborateur', async ({ editerCollabPage, page}) => {
    await editerCollabPage.EditerCollaborateur(prenom, nom, birthday, 'gestionnaire', '500000');
});
test('@MA-73 Suspendre un collaborateur', async ({ suspendreCollabPage, page}) => {
    await suspendreCollabPage.SuspendreCollaborateur();
});
});
test.describe('TestSuite Dashboard', () => {
test('@MA-74 Dashboard: Verification des paramètres du widget Echeances sur salaire', async ({ verificationParamEcheanceSurSalPage, page}) => {
    await verificationParamEcheanceSurSalPage.VerificationParamEcheanceSurSal();
});
test('@MA-75 Dashboard: Verification de la vue d-ensemble du remboursement ', async ({ verificationDiagrammeVueEnsemblePage, page}) => {
    await verificationDiagrammeVueEnsemblePage.VerificationDiagrammeVueEnsemble();
});
test('@MA-76 Dashboard: Verification tableau utilisateurs', async ({ verificationTableauStatutsPage, page}) => {
    await verificationTableauStatutsPage.VerificationTableauStatuts();
});
test('@MA-77 Dashboard: Vérification des filtres sur le dashboard', async ({ filtrerSurDachboardPage, page}) => {
    await filtrerSurDachboardPage.FiltrerSurDachboard();
});
});
test.describe('TestSuite Activités', () => {
test('@MA-65 Activités: Vérification colonnes de ta table Activité', async ({ verificationColonneActivitesPage, page}) => {
    await verificationColonneActivitesPage.VerificationColonneActivites();
});
test('@MA-66 Activités: Recherche sur la table Activité', async ({ rechercheSurTabActivitePage, page}) => {
    await rechercheSurTabActivitePage.RechercheSurTabActivite('29/11/2024', '09:43:32');
});
});
test.describe('TestSuite Compte_Utilisateur', () => {
test('@MA-67 Mise à jour des données du profil connecté', async ({ modificationDonneesProfilPage, page}) => {
    await modificationDonneesProfilPage.ModificationDonneesProfil('77' +telephone.toString(), profilAdresse);
});
test('@MA-68 Vérifier paramètres du profil connecté', async ({ verificationParamProfilPage, page}) => {
    await verificationParamProfilPage.VerificationParamProfil();
});
});

test.describe('TestSuite administrateur', () => {
    test(' Ajouter un administrateur', async ({ ajouttAdminstrateur, page}) => {
        await ajouttAdminstrateur.addAdministrateur(prenom,nom,email,'77' +telephone.toString(),'comptable',identifiant.toString(), '250000',identifiant.toString());
    });
    test(' Rechercher un administrateur', async ({ rechercheAdminPage, page}) => {
        await rechercheAdminPage.RechercheAdmin('2980');
    })
    test(' Importer un fichier', async ({ importerTelechargerAdminPage, page}) => {
        await importerTelechargerAdminPage.ImporterTelechargerAdmin();
    })

    test(' Editer un administrateur', async ({ editionAdminPage, page}) => {
        await editionAdminPage.EditionAdmin(prenom, nom, '77' +telephone.toString(), 'Gestionnaire', '500000');
        
    })

    test(' Suspendre un administrateur', async ({ suspensionAdminPage, page}) => {
        await suspensionAdminPage.SuspensionAdmin();
        
    })
    
    });
 
    test.describe('Onglets Dashboard', () => {
        test('Verifier présence des onglets du menu du dashboard', async ({ verificationOngletDashboardPage, page}) => {
            await verificationOngletDashboardPage.VerificationOngletDashboard();
        });
        
        });
        test.describe('TestSuite Organisation', () => {
            test('Modification parametre organisation', async ({ modificationParametreOrganisationPage, page}) => {
                await modificationParametreOrganisationPage.ModificationParametreOrganisation(pourcentage.toString(), '400000');
            });
            test('Modification date limite paiement', async ({ modificationDateLimitePaiementPage, page}) => {
                await modificationDateLimitePaiementPage.ModificationDateLimitePaiement();
            });
            });
    