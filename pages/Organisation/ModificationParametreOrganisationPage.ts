
import type { Page, Locator } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { BasePage } from '../Collaborateurs/Collab/BasePage';

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


