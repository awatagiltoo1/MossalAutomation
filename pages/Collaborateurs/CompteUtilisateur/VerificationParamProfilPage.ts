import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collab/BasePage';
import { test, expect } from '@playwright/test';


export class VerificationParamProfilPage extends BasePage {
    readonly page: Page;
    readonly CompteMenu: Locator;
    readonly PrenomProfil: Locator;
    readonly NomProfil: Locator;
    readonly AdresseMailProfil : Locator;
    readonly PhoneProfil : Locator;
    readonly AdresseProfil : Locator;
    readonly AncienMdp : Locator;
    readonly NvoMdp : Locator;
    readonly NvoMdpConfirm : Locator;
    readonly Notification : Locator;
    readonly MajProfil: Locator
    readonly MajMdp: Locator

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.CompteMenu = page.getByText('Mon Compte');
        this.PrenomProfil = page.getByText('Prénom *' );
        this.NomProfil = page.getByText('Nom' );
        this.AdresseMailProfil = page.getByText('Adresse mail' );
        this.PhoneProfil = page.getByText('Téléphone' );
        this.AdresseProfil = page.getByText('Adresse' );  
        this.AncienMdp = page.getByText('Mot de passe actuel');
        this.NvoMdp = page.getByText('Nouveau mot de passe' );
        this.NvoMdpConfirm = page.getByText('Confirmation de votre mot de passe' );
        this.Notification = page.getByText(' Notifications par email' );
        this.MajProfil = page.getByText('Mettre à jour' );
        this.MajMdp = page.getByText('Mettre à jour' );   
       
    }

    async VerificationParamProfil() {
        await this.CompteMenu.click();
        await expect(this.PrenomProfil).toBeVisible();
       // await expect(this.NomProfil).toBeVisible();
        await expect(this.AdresseMailProfil).toBeVisible();
        await expect(this.PhoneProfil).toBeVisible();
      //  await expect(this.AdresseProfil).toBeVisible();  
        ///
        await expect(this.AncienMdp).toBeVisible();
        await expect(this.NvoMdp).toBeVisible();
        await expect(this.NvoMdpConfirm).toBeVisible();
        await expect(this.Notification).toBeVisible();
      //  await expect(this.MajProfil).toBeVisible();    
     //   await expect(this.MajMdp).toBeVisible();  
      
    }
}
