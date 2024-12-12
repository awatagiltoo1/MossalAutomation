import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/Collab/BasePage';
import { th } from '@faker-js/faker';


export class AjouttAdminstrateur extends BasePage {
    readonly page: Page;
    readonly admintrateurMenu: Locator;
    readonly addAdministrateurButton: Locator;
    readonly administrateurFirstName: Locator;
    readonly administrateurLasttName: Locator;
    readonly administrateurEmail: Locator;
    readonly administrateurPhone: Locator;
    readonly administrateurFonction: Locator;
    readonly administrateurAdress: Locator;
    readonly administrateurrId: Locator;
    readonly administrateurSalary: Locator;
    readonly administrateurBankAccount: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.admintrateurMenu=page.getByText('Administrateurs');
        this.addAdministrateurButton=page.getByText('Ajouter un admin')
        this.administrateurFirstName=page.locator('#prenom');
        this.administrateurLasttName=page.getByPlaceholder('Doe');
        this.administrateurEmail=page.getByPlaceholder('john@gmail.com');
        this.administrateurPhone=page.getByPlaceholder('770000000');
        this.administrateurFonction=page.locator('#fonction');
        this.administrateurrId=page.locator('#unique-id');
        this.administrateurSalary=page.locator('#salary');
        this.administrateurBankAccount=page.locator('#nbr-compte');
        this.saveButton=page.getByRole('button', {name:'Envoyé'})

    }

    async addAdministrateur(firstname: string, lastname: string, email: string, phone: string,  fonction: string, id: string, salary: string, bankAccount: string) {
        await this.admintrateurMenu.click();
        await this.addAdministrateurButton.click();
        await this.administrateurFirstName.fill(firstname);
        await this.administrateurLasttName.fill(lastname);
        await this.administrateurEmail.fill(email);
        await this.administrateurPhone.fill(phone);
        await this.administrateurFonction.fill(fonction);
        await this.administrateurrId.fill(id);
        await this.administrateurSalary.fill(salary);
        await this.administrateurBankAccount.fill(bankAccount);
        await this.saveButton.click();

// ht

}
}
