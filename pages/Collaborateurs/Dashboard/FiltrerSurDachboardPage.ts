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
        
        //await expect(this.Montant).toBeVisible();

      
    }
    //dropdown-filter-user-list-saved


    /*
    import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-dev.mossall.com/auth/login');
  await page.getByPlaceholder('awafall@mossal.com').click();
  await page.getByPlaceholder('awafall@mossal.com').fill('genieouzog+atos@gmail.com');
  await page.getByPlaceholder('entrer votre mot de passe').click();
  await page.getByPlaceholder('entrer votre mot de passe').fill('$Mossal1234');
  await page.getByRole('button', { name: 'Se connecter' }).click();
  await page.getByText('keyboard_arrow_down').click();
  await page.getByLabel('Du').fill('2024-01-22');
  await page.getByLabel('Au').fill('2025-12-31');
});
    */
}
