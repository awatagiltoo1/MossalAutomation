
import type { Page, Locator } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { BasePage } from '../Collaborateurs/Collab/BasePage';
import { AjouttAdminstrateur } from '../Administrateur/AjoutAdminstrateur';
import { EditionAdminPage } from '../Administrateur/EditionAdminPage';
import { ImporterTelechargerAdminPage } from '../Administrateur/ImporterTelechargerAdminPage';
import { RechercheAdminPage } from '../Administrateur/RechercheAdminPage';
import { SuspensionAdminPage } from '../Administrateur/SuspensionAdminPage';
import { RechercheSurTabActivitePage } from '../Collaborateurs/Activites/RechercheSurTabActivitePage';
import { VerificationColonneActivitesPage } from '../Collaborateurs/Activites/VerificationColonneActivitesPage';
import { CollaboratorPage } from '../Collaborateurs/Collab/CollaboratorPage';
import { EditerCollabPage } from '../Collaborateurs/Collab/EditerCollabPage';
import { ImporterTelechargerCollabPage } from '../Collaborateurs/Collab/ImporterTelechargerCollabPage';
import { RechercheCollabPage } from '../Collaborateurs/Collab/RechercheCollabPage';
import { SuspendreCollabPage } from '../Collaborateurs/Collab/SuspendreCollabPage';
import { ModificationDonneesProfilPage } from '../Collaborateurs/CompteUtilisateur/ModificationDonneesProfilPage';
import { VerificationParamProfilPage } from '../Collaborateurs/CompteUtilisateur/VerificationParamProfilPage';
import { FiltrerSurDachboardPage } from '../Collaborateurs/Dashboard/FiltrerSurDachboardPage';
import { VerificationDiagrammeVueEnsemblePage } from '../Collaborateurs/Dashboard/VerificationDiagrammeVueEnsemblePage';
import { VerificationParamEcheanceSurSalPage } from '../Collaborateurs/Dashboard/VerificationParamEcheanceSurSalPage';
import { VerificationTableauStatutsPage } from '../Collaborateurs/Dashboard/VerificationTableauStatutsPage';
import { ValiderDemandePage } from '../Collaborateurs/Demande/ValiderDemandePage';
import { ModificationParametreOrganisationPage } from './ModificationParametreOrganisationPage';

export class ModificationDateLimitePaiementPage extends BasePage {
    readonly page: Page;
    readonly menuOrganisation: Locator;
    readonly SoumettreButton: Locator;
    readonly dateTime: Locator;
   
    
    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.menuOrganisation = page.getByText('Organisation');
       // this.dateTime= page.locator('#amountPercent'); 
        this.dateTime = page.getByText('26')
        this.SoumettreButton = page.getByRole('button', { name: 'Soumettre' });
    }

    async ModificationDateLimitePaiement() {
        await this.menuOrganisation.click();
         // await this.dateTime.clear();
        await this.dateTime.click();

        await this.SoumettreButton.click();
   
    }
}
