import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { test, expect } from '@playwright/test';


export class VerificationParamEcheanceSurSalPage extends BasePage {
    readonly page: Page;
    readonly DashboardMenu: Locator;
    readonly NBDemandesAccordees: Locator;
    readonly NBDemandes_EnAttente: Locator;
    readonly NBRemboursementsRestants: Locator;
    readonly MntTotalDemandes: Locator;
    readonly NBInstruits: Locator;
    readonly MntRemboursementsRestants: Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.DashboardMenu = page.getByText('Tableau de bord');
        this.NBDemandesAccordees = page.getByText('Nombre de demandes accordés' );
        this.NBDemandes_EnAttente = page.getByText('Nombre de demandes en attente (actifs)' );
        this.NBRemboursementsRestants = page.getByText('Nombre de remboursements restants' );
        this.MntTotalDemandes = page.getByText('Montant total des demandes' );
        this.NBInstruits = page.getByText('Nombre d’inscrits' );
        this.MntRemboursementsRestants = page.getByText('Montant remboursements restants' );
       
    }

    async VerificationParamEcheanceSurSal() {
        await this.DashboardMenu.click();
        await expect(this.NBDemandesAccordees).toBeVisible();
        await expect(this.NBDemandes_EnAttente).toBeVisible();
        await expect(this.NBRemboursementsRestants).toBeVisible();
        await expect(this.MntTotalDemandes).toBeVisible();
        await expect(this.NBInstruits).toBeVisible();
        await expect(this.MntRemboursementsRestants).toBeVisible();
      
    }
}
