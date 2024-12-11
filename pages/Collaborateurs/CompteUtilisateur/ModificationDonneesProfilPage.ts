import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collab/BasePage';


export class ModificationDonneesProfilPage extends BasePage {
    readonly page: Page;
    readonly compteMenu: Locator;
    readonly MajBtn: Locator;
    readonly profilPhone: Locator;
    readonly profilAdresse: Locator;
    
    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.compteMenu = page.getByText('Mon Compte');
        this.profilPhone= page.getByPlaceholder('770000000'); 
        this.profilAdresse = page.locator('#code-postal');
        this.MajBtn = page.getByRole('button', { name: 'Mettre à jour' }).nth(1);
    }

    async ModificationDonneesProfil(profilPhone: string, profilAdresse: string) {
        await this.compteMenu.click();
          await this.profilPhone.clear();
        await this.profilPhone.fill(profilPhone);
        await this.profilAdresse.clear();
        await this.profilAdresse.fill(profilAdresse);
        await this.MajBtn.click();
    }
}
