import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/Collab/BasePage';
import { test, expect } from '@playwright/test';


export class RechercheAdminPage extends BasePage {
    readonly page: Page;
    readonly admintrateurMenu: Locator;
    readonly searchAdmin: Locator;
    readonly nomAdminbverifie: Locator;
    

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.admintrateurMenu = page.getByText('Administrateurs');
        this.searchAdmin = page.getByPlaceholder('Recherche');
        this.nomAdminbverifie = page.getByText('Reina Lakin' );
       
    }

    async RechercheAdmin(searchColab: string) {
        await this.admintrateurMenu.click();
        await this.searchAdmin.fill(searchColab);
        await expect(this.nomAdminbverifie).toBeVisible();
      
    }
}
