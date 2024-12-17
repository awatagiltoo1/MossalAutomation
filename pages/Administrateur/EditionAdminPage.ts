import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/Dashboard/BasePage';


export class EditionAdminPage extends BasePage {
    readonly page: Page;
    readonly admintrateurMenu: Locator;
    readonly ActionBtn: Locator;
    readonly EditerBtn: Locator;
    readonly EditerBtnbis: Locator;
    /////////////////////////////
    readonly AdminPrenom: Locator;
    readonly AdminNom: Locator;
    readonly AdminPhone: Locator;
    readonly AdminFonction: Locator;
   //readonly AdminBirthDate: Locator;
    readonly AdminSalary: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.admintrateurMenu = page.getByText('Administrateurs');
        this.ActionBtn = page.getByText('Action')
      this.EditerBtn= page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > .btn-edit-statut > .text > span').first(); 
      this.EditerBtnbis= page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > #dropdown-action > div:nth-child(1)');   
     
       this.AdminPrenom = page.getByLabel('Prénom');
        this.AdminNom = page.getByPlaceholder('Doe');
        this.AdminPhone = page.getByLabel('Téléphone');
      //  this.collaboratorBirthDate = page.locator('#birthDate');
        this.AdminFonction = page.getByLabel('Fonction');
        this.AdminSalary = page.getByLabel('Salaire');
        this.saveButton = page.getByText('Sauvegarder');
    }

    async EditionAdmin(AdminPrenom: string, AdminNom: string, AdminPhone: string, AdminFonction: string,  AdminSalary: string) {
       
        await this.admintrateurMenu.click();
        await this.ActionBtn.click();
        await this.EditerBtn.click();
        await this.EditerBtnbis.click();
        
      await this.AdminPrenom.clear();
        await this.AdminPrenom.fill(AdminPrenom);
        await this.AdminNom.clear();
        await this.AdminNom.fill(AdminNom);
        await this.AdminPhone.clear();
        await this.AdminPhone.fill(AdminPhone);
        await this.AdminFonction.clear();
        await this.AdminFonction.fill(AdminFonction);
        await this.AdminSalary.clear();
        await this.AdminSalary.fill(AdminSalary);
        await this.saveButton.click();


    }
        
    
}
