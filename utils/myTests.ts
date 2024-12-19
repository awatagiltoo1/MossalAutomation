import {test as base } from '@playwright/test';
import { BasePage } from '../pages/Collaborateurs/Collab/BasePage';
import { CollaboratorPage } from '../pages/Collaborateurs/Collab/CollaboratorPage';
import { RechercheCollabPage } from '../pages/Collaborateurs/Collab/RechercheCollabPage';
import {ImporterTelechargerCollabPage} from '../pages/Collaborateurs/Collab/ImporterTelechargerCollabPage';
import { EditerCollabPage } from '../pages/Collaborateurs/Collab/EditerCollabPage';
import { SuspendreCollabPage } from '../pages/Collaborateurs/Collab/SuspendreCollabPage';
import { VerificationParamEcheanceSurSalPage } from '../pages/Collaborateurs/Dashboard/VerificationParamEcheanceSurSalPage';
import {VerificationDiagrammeVueEnsemblePage} from '../pages/Collaborateurs/Dashboard/VerificationDiagrammeVueEnsemblePage'
import { VerificationTableauStatutsPage } from '../pages/Collaborateurs/Dashboard/VerificationTableauStatutsPage';
import {FiltrerSurDachboardPage} from '../pages/Collaborateurs/Dashboard/FiltrerSurDachboardPage'
import { VerificationColonneActivitesPage } from '../pages/Collaborateurs/Activites/VerificationColonneActivitesPage';
import { RechercheSurTabActivitePage } from '../pages/Collaborateurs/Activites/RechercheSurTabActivitePage';
import { ModificationDonneesProfilPage } from '../pages/Collaborateurs/CompteUtilisateur/ModificationDonneesProfilPage';
import { VerificationParamProfilPage } from '../pages/Collaborateurs/CompteUtilisateur/VerificationParamProfilPage';
import { AjouttAdminstrateur } from '../pages/Administrateur/AjoutAdminstrateur';
import { ValiderDemandePage } from '../pages/Collaborateurs/Demande/ValiderDemandePage';
import { RechercheAdminPage } from '../pages/Administrateur/RechercheAdminPage';
import { ImporterTelechargerAdminPage } from '../pages/Administrateur/ImporterTelechargerAdminPage';
import { EditionAdminPage } from '../pages/Administrateur/EditionAdminPage';
import { SuspensionAdminPage } from '../pages/Administrateur/SuspensionAdminPage';
import { ModificationParametreOrganisationPage } from '../pages/Organisation/ModificationParametreOrganisationPage';
import { ModificationDateLimitePaiementPage } from '../pages/Organisation/ModificationDateLimitePaiementPage';
import { VerificationOngletDashboardPage } from '../pages/OngletDashboard/VerificationOngletDashboardPage';

export type TestFixtures = {
    basePage: BasePage;
    collaboratorPage: CollaboratorPage;
    rechercheCollabPage: RechercheCollabPage;
    importerTelechargerCollabPage: ImporterTelechargerCollabPage;
    editerCollabPage: EditerCollabPage;
    suspendreCollabPage: SuspendreCollabPage;
    verificationParamEcheanceSurSalPage: VerificationParamEcheanceSurSalPage;
    verificationDiagrammeVueEnsemblePage: VerificationDiagrammeVueEnsemblePage;
    verificationTableauStatutsPage: VerificationTableauStatutsPage;
    filtrerSurDachboardPage: FiltrerSurDachboardPage;
    verificationColonneActivitesPage: VerificationColonneActivitesPage;
    rechercheSurTabActivitePage: RechercheSurTabActivitePage;
    modificationDonneesProfilPage: ModificationDonneesProfilPage;
    verificationParamProfilPage: VerificationParamProfilPage;
    ajouttAdminstrateur: AjouttAdminstrateur;
    validerDemandePage: ValiderDemandePage;
    rechercheAdminPage: RechercheAdminPage;
    importerTelechargerAdminPage: ImporterTelechargerAdminPage;
    editionAdminPage: EditionAdminPage;
    suspensionAdminPage: SuspensionAdminPage;
    modificationParametreOrganisationPage: ModificationParametreOrganisationPage;
    modificationDateLimitePaiementPage: ModificationDateLimitePaiementPage;
    verificationOngletDashboardPage: VerificationOngletDashboardPage
};
export const test = base.extend<TestFixtures>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await basePage.goto();
        await basePage.login('genieouzog+atos@gmail.com', '$Mossall123');
        await use(basePage);
      //  await basePage.logout();
    },

    
    collaboratorPage: async ({ basePage }, use) => {
        const collaboratorPage = new CollaboratorPage(basePage.page);
        await use(collaboratorPage);
    },

    rechercheCollabPage: async ({ basePage }, use) => {
        const rechercheCollabPage = new RechercheCollabPage(basePage.page);
        await use(rechercheCollabPage);
    },

    importerTelechargerCollabPage: async ({ basePage }, use) => {
        const importerTelechargerCollabPage = new ImporterTelechargerCollabPage(basePage.page);
        await use(importerTelechargerCollabPage);
    },

    editerCollabPage: async ({ basePage }, use) => {
        const editerCollabPage = new EditerCollabPage(basePage.page);
        await use(editerCollabPage);
    },

    suspendreCollabPage: async ({ basePage }, use) => {
        const suspendreCollab = new SuspendreCollabPage(basePage.page);
        await use(suspendreCollab);
    },
    verificationParamEcheanceSurSalPage: async ({ basePage }, use) => {
        const verificationEcheanceSurSalPage = new VerificationParamEcheanceSurSalPage(basePage.page);
        await use(verificationEcheanceSurSalPage);
    },

    verificationDiagrammeVueEnsemblePage: async ({ basePage }, use) => {
        const verificationVueEnsemblePage = new VerificationDiagrammeVueEnsemblePage(basePage.page);
        await use(verificationVueEnsemblePage);
    },

    verificationTableauStatutsPage: async ({ basePage }, use) => {
        const verificationTableauStatutsPage = new VerificationTableauStatutsPage(basePage.page);
        await use(verificationTableauStatutsPage);
    },
    filtrerSurDachboardPage: async ({ basePage }, use) => {
        const filtrerSurDachboardPage = new FiltrerSurDachboardPage(basePage.page);
        await use(filtrerSurDachboardPage);
    },

    verificationColonneActivitesPage: async ({ basePage }, use) => {
        const verificationColonneActivitesPage = new VerificationColonneActivitesPage(basePage.page);
        await use(verificationColonneActivitesPage);
    },

    rechercheSurTabActivitePage: async ({ basePage }, use) => {
        const rechercheSurTabActivitePage = new RechercheSurTabActivitePage(basePage.page);
        await use(rechercheSurTabActivitePage);
    },

    modificationDonneesProfilPage: async ({ basePage }, use) => {
        const modificationDonneesProfilPage = new ModificationDonneesProfilPage(basePage.page);
        await use(modificationDonneesProfilPage);
    },
    verificationParamProfilPage: async ({ basePage }, use) => {
        const verificationParamProfilPage = new VerificationParamProfilPage(basePage.page);
        await use(verificationParamProfilPage);
    },

    ajouttAdminstrateur: async ({ basePage }, use) => {
        const ajouttAdminstrateur = new AjouttAdminstrateur(basePage.page);
        await use(ajouttAdminstrateur);
    },

    validerDemandePage: async ({ basePage }, use) => {
        const validerDemandePage = new ValiderDemandePage(basePage.page);
        await use(validerDemandePage);
    },

    
    rechercheAdminPage: async ({ basePage }, use) => {
        const rechercheAdminPage = new RechercheAdminPage(basePage.page);
        await use(rechercheAdminPage);
    },
    importerTelechargerAdminPage: async ({ basePage }, use) => {
        const importerTelechargerAdminPage = new ImporterTelechargerAdminPage(basePage.page);
        await use(importerTelechargerAdminPage);
    },

    editionAdminPage: async ({ basePage }, use) => {
        const editionAdminPage = new EditionAdminPage(basePage.page);
        await use(editionAdminPage);
    },
    suspensionAdminPage: async ({ basePage }, use) => {
        const suspensionAdminPage = new SuspensionAdminPage(basePage.page);
        await use(suspensionAdminPage);
    },
    modificationParametreOrganisationPage: async ({ basePage }, use) => {
        const modificationParametreOrganisationPage = new ModificationParametreOrganisationPage(basePage.page);
        await use(modificationParametreOrganisationPage);
    },
    modificationDateLimitePaiementPage: async ({ basePage }, use) => {
        const modificationDateLimitePaiementPage = new ModificationDateLimitePaiementPage(basePage.page);
        await use(modificationDateLimitePaiementPage);
    },
verificationOngletDashboardPage: async ({ basePage }, use) => {
        const verificationOngletDashboardPage = new VerificationOngletDashboardPage(basePage.page);
        await use(verificationOngletDashboardPage);
    },

});


export { expect } from '@playwright/test';