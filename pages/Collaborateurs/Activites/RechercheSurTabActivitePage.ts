import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collab/BasePage';
import { test, expect } from '@playwright/test';


export class RechercheSurTabActivitePage extends BasePage {
    readonly page: Page;
    readonly ActiviteMenu: Locator;
    readonly ZoneRecherche: Locator;
    readonly PresenceStatut: Locator;
    readonly AffichageDate : Locator;
    readonly FiltreParStatutInitial : Locator;


    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.ActiviteMenu = page.getByText('Activités');
        this.ZoneRecherche = page.getByPlaceholder('Recherche' );
        this.AffichageDate = page.getByText('CHEIKH NDIAYE');
        this.PresenceStatut = page.getByText('Statut initial: VALIDATED' );
        
        //Statut initial: VALIDATED
        /* this.FiltreParHeure = page.getByText('Fait par' );
        this.FiltreParNumDemande = page.getByText(' Email' );
        this.FiltreParStatutInitial = page.getByText('Scope' );*/
          
       
    }

    async RechercheSurTabActivite() {
        await this.ActiviteMenu.click();
        await this.ZoneRecherche.fill('29/11/2024');
      //  await expect(this.AffichageDate).toBeVisible();
        await this.ZoneRecherche.clear();
        await this.ZoneRecherche.fill('09:43:32');
        await expect(this.PresenceStatut).toBeVisible();
      
    }
}
