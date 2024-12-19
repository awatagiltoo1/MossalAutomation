import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/Collab/BasePage';
import { test, expect } from '@playwright/test';


export class VerificationOngletDashboardPage extends BasePage {
    readonly page: Page;
    readonly Dashboardmenu: Locator;
    readonly Demandemenu: Locator;
    readonly AdminMenu: Locator;
    readonly collaboratorMenu: Locator;
    readonly notificationMenu : Locator;
    readonly MonCompteMenu : Locator;
    readonly organisationMenu : Locator;
    readonly ActiviteMenu: Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.Dashboardmenu = page.getByText('Tableau de bord');
        this.Demandemenu = page.getByText('Liste des demandes');
        this.AdminMenu = page.getByText('Administrateurs' );
        this.collaboratorMenu = page.getByText('Collaborateurs' );
        this.notificationMenu = page.getByText('Notifications', { exact: true });
        this.MonCompteMenu = page.getByText('Mon Compte' );
        this.organisationMenu = page.getByText('Organisation' );     
        this.ActiviteMenu = page.getByText('Activités');  
       
    }

    async VerificationOngletDashboard() {
       // await this.ActiviteMenu.click();
        await expect(this.Dashboardmenu).toBeVisible();
        await expect(this.Demandemenu).toBeVisible();
        await expect(this.AdminMenu).toBeVisible();
        await expect(this.collaboratorMenu).toBeVisible();
        await expect(this.notificationMenu).toBeVisible();
        await expect(this.MonCompteMenu).toBeVisible(); 
        await expect(this.organisationMenu).toBeVisible();
        await expect(this.ActiviteMenu).toBeVisible();     
      
    }
}
