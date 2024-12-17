import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/Collab/BasePage';
import { test, expect } from '@playwright/test';


export class ImporterTelechargerAdminPage extends BasePage {
    readonly page: Page;
    readonly admintrateurMenu: Locator;
    readonly BtnImportFichier: Locator;
    readonly ImportExcel: Locator;
    readonly TelechargerTemplate: Locator;
   // readonly TelechargerTemplate: Locator;
    

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.admintrateurMenu = page.getByText('Administrateurs');
        this.BtnImportFichier = page.getByText('Importer un fichier');
        //this.searchCollab = page.getByPlaceholder('Recherche');
        this.ImportExcel = page.getByText('ImporterFormat accepté : XLSX' );
        this.TelechargerTemplate = page.getByText('Télécharger le template' );
       
    }

    async ImporterTelechargerAdmin() {
        await this.admintrateurMenu.click();
        await this.BtnImportFichier.click();
        await expect(this.ImportExcel).toBeVisible();
        await expect(this.TelechargerTemplate).toBeVisible();
      
    }
}
