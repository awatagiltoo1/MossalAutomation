import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { test, expect } from '@playwright/test';
import { th } from '@faker-js/faker';
import exp from 'constants';


export class FiltrerSurDachboardPage extends BasePage {
    readonly page: Page;
    readonly DashboardMenu: Locator;
    readonly FiltreDateBtn: Locator;
    readonly Datedebut: Locator;
    readonly Datefin: Locator;
    readonly FiltreTabUser: Locator;
    readonly FiltreNvoUser: Locator;
    readonly FiltreAvEnCours: Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.DashboardMenu = page.getByText('Vue d’ensemble des remboursements');
        this.FiltreDateBtn = page.getByText('keyboard_arrow_down' );
        this.Datedebut = page.locator('#debut' );
        this.Datefin = page.locator('#fin' );
        this.FiltreTabUser = page.getByText('filter_listFiltrer' );
        this.FiltreNvoUser = page.getByText(' Nouveaux utilisateurs inscrits récemment ' );
        this.FiltreAvEnCours = page.getByText(' Utilisateurs avec les avances en cours ' );
       // this.IdDiagramme = page.locator('SvgjsG3674' );
        
        //filter-date-dropdown
       
    }

    async FiltrerSurDachboard() {
        await this.DashboardMenu.click();
        await this.FiltreDateBtn.click();
        await this.Datedebut.fill('2024-01-22');
        await this.Datefin.fill('2025-12-31');
        await this.FiltreTabUser.click();
        await expect(this.FiltreNvoUser).toBeVisible();
        await expect(this.FiltreAvEnCours).toBeVisible();
              
    }
   
}
