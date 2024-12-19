
import type { Page, Locator } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { BasePage } from '../Collaborateurs/Collab/BasePage';

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
