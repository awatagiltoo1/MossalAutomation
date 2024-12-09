import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class EditerCollabPage extends BasePage {
    readonly page: Page;
    readonly collaboratorMenu: Locator;
    readonly ActionBtn: Locator;
    readonly EditerBtn: Locator;
    readonly EditerBtnbis: Locator;
    readonly collaboratorPrenom: Locator;
    readonly CollaboratorNom: Locator;
    readonly collaboratorPhone: Locator;
    readonly collaboratorFonction: Locator;
    readonly collaboratorBirthDate: Locator;
    readonly collaboratorSalary: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.collaboratorMenu = page.getByText('Collaborateurs');
        this.ActionBtn = page.getByText('Action');
        /*
  await page.locator('.text').first().click();
  await page.locator('#dropdown-action > div > span:nth-child(2)').first().click();
*/
       this.EditerBtn = page.getByRole('row', { name: '017 New collaborateur' }).locator('mat-icon').first();
       this.EditerBtnbis= page.locator('#dropdown-action > div > span:nth-child(2)').first()
        this.collaboratorPrenom = page.getByLabel('Prénom');
        this.CollaboratorNom = page.getByPlaceholder('Doe');
        this.collaboratorPhone = page.getByLabel('Téléphone');
        this.collaboratorBirthDate = page.locator('#birthDate');
        this.collaboratorFonction = page.getByLabel('Fonction');
        this.collaboratorSalary = page.getByLabel('Salaire');
        this.saveButton = page.getByText('Sauvegarder');
    }

    async EditerCollaborateur(collaboratorPrenom: string, CollaboratorNom: string, collaboratorBirthDate: string, collaboratorFonction: string,  collaboratorSalary: string) {
        await this.collaboratorMenu.click();
        await this.ActionBtn.click();
        //this.demandeValideSelect = page.locator('#dropdown-statut').getByText('Validée');
        await this.EditerBtn.click();
        await this.EditerBtnbis.click();
       await this.collaboratorPrenom.clear();
        await this.collaboratorPrenom.fill(collaboratorPrenom);
        await this.CollaboratorNom.clear();
        await this.CollaboratorNom.fill(CollaboratorNom);
        await this.collaboratorBirthDate.clear();
        await this.collaboratorBirthDate.fill(collaboratorBirthDate);
        await this.collaboratorFonction.clear();
        await this.collaboratorFonction.fill(collaboratorFonction);
        await this.collaboratorSalary.clear();
        await this.collaboratorSalary.fill(collaboratorSalary);
        await this.saveButton.click();
    }
}
