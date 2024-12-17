import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/Collab/BasePage';


export class SuspensionAdminPage extends BasePage {
    readonly page: Page;
    readonly admintrateurMenu: Locator;
    readonly ActionBtn: Locator;
    readonly EditerBtn: Locator;
    readonly SuspendreBtn: Locator;
    

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.admintrateurMenu = page.getByText('Administrateurs');
        this.ActionBtn = page.getByText('Action');   
        this.EditerBtn = page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > .btn-edit-statut > .text > span').first(); 
       this.SuspendreBtn = page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > #dropdown-action > div:nth-child(2)');   



      
    }

    async SuspensionAdmin() {
        await this.admintrateurMenu.click();
        await this.ActionBtn.click();
        await this.EditerBtn.click();
       await this.SuspendreBtn.click();
      
    }
}
