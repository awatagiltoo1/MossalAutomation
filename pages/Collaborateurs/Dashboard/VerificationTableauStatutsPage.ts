import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { test, expect } from '@playwright/test';


export class VerificationTableauStatutsPage extends BasePage {
    readonly page: Page;
    readonly DashboardMenu: Locator;
    readonly TableauUsers: Locator;
    readonly ColonneIdentifiant: Locator;
    readonly ColonneCollaborateur : Locator;
    readonly ColonneSolde : Locator;
    readonly ColonneDate : Locator;
    readonly ColonneAvanceSalaire : Locator;
    readonly StatutValide: Locator;
    readonly StatutRejete: Locator;
    readonly StatutAttente: Locator;
    readonly StatutRembourse: Locator;
    readonly StatutAnnule: Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.DashboardMenu = page.getByText('Tableau de bord');
        this.TableauUsers = page.getByText('Utilisateurs enregistrés' );
        this.ColonneIdentifiant = page.getByText('Identifiant' );
        this.ColonneCollaborateur = page.getByText(' Collaborateur' );
        this.ColonneSolde = page.getByText('Solde ' );
        this.ColonneDate = page.getByText(' Date ' );
        this.ColonneAvanceSalaire = page.getByText('Avance sur salaire' );
        this.StatutValide = page.getByText('Validé' );
        this.StatutRejete = page.getByText('Rejeté' );
        this.StatutAttente = page.getByText('En attente' );
        this.StatutRembourse = page.getByText('Remboursé' );
        this.StatutAnnule = page.getByText('Annulé' );
       
    }

    async VerificationTableauStatuts() {
        await this.DashboardMenu.click();
        await expect(this.TableauUsers).toBeVisible();
        await expect(this.ColonneIdentifiant).toBeVisible();
       // await expect(this.ColonneCollaborateur).toBeVisible();
        await expect(this.ColonneSolde).toBeVisible();
        await expect(this.ColonneDate).toBeVisible();
       // await expect(this.ColonneAvanceSalaire).toBeVisible();
       // await expect(this.StatutAnnule).toBeVisible();
        await expect(this.StatutValide).toBeVisible();
        await expect(this.StatutRejete).toBeVisible();
 //       await expect(this.StatutAttente).toBeVisible();
        await expect(this.StatutRembourse).toBeVisible();
    
      
      
    }
}
