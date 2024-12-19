
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


export class ModificationParametreOrganisationPage extends BasePage {
    readonly page: Page;
    readonly menuOrganisation: Locator;
    readonly MajButton: Locator;
    readonly maxPourcentageDemande: Locator;
    readonly montantMaximal: Locator;
    readonly messageSucces: Locator;
    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.menuOrganisation = page.getByText('Organisation');
        this.maxPourcentageDemande= page.locator('#amountPercent'); 
        this.montantMaximal = page.locator('#maxDemandeAmount');
        this.MajButton = page.getByRole('button', { name: 'Mettre à jour' });
        this.messageSucces = page.getByText('Organization modifié avec succès');
    }

    async ModificationParametreOrganisation(maxPourcentageDemande: string, montantMaximal: string) {
        await this.menuOrganisation.click();
          await this.maxPourcentageDemande.clear();
        await this.maxPourcentageDemande.fill(maxPourcentageDemande);
        await this.montantMaximal.clear();
        await this.montantMaximal.fill(montantMaximal);
        await this.MajButton.click();
       // await expect(this.messageSucces).toBeVisible();
   
    }
}


