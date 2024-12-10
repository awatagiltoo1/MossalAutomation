import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { test, expect } from '@playwright/test';


export class VerificationDiagrammeVueEnsemblePage extends BasePage {
    readonly page: Page;
    readonly DashboardMenu: Locator;
    readonly VueEnsembleText: Locator;
    readonly MontantTotalText: Locator;
    readonly ResteAPayerText: Locator;
    readonly Montant: Locator;
    readonly IdDiagramme: Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.DashboardMenu = page.getByText('Vue d’ensemble des remboursements');
        this.VueEnsembleText = page.getByText('Reste à payer' );
        this.MontantTotalText = page.getByText('Montant total' );
        this.ResteAPayerText = page.getByText('Montant' );
        this.Montant = page.getByText('Montant total des demandes' );
        this.IdDiagramme = page.locator('SvgjsG3674' );
        
        //SvgjsG3674
       
    }

    async VerificationDiagrammeVueEnsemble() {
        await this.DashboardMenu.click();
        await expect(this.VueEnsembleText).toBeVisible();
        await expect(this.Montant).toBeVisible();

      
    }
}
