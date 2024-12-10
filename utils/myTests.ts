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


type TestFixtures = {
    basePage: BasePage
    collaboratorPage: CollaboratorPage
    rechercheCollabPage: RechercheCollabPage
    importerTelechargerCollabPage: ImporterTelechargerCollabPage
    editerCollabPage: EditerCollabPage
    suspendreCollabPage: SuspendreCollabPage
    verificationParamEcheanceSurSalPage: VerificationParamEcheanceSurSalPage
    verificationDiagrammeVueEnsemblePage: VerificationDiagrammeVueEnsemblePage
    verificationTableauStatutsPage: VerificationTableauStatutsPage
    filtrerSurDachboardPage: FiltrerSurDachboardPage
}

export const test = base.extend<TestFixtures>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await basePage.goto();
        await basePage.login('genieouzog+atos@gmail.com', '$Mossal1234');
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

});


export { expect } from '@playwright/test';