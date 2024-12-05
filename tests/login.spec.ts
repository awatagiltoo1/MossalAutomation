import { test, expect } from '@playwright/test';

test('@MA-15 connexion', async({ page})=>{

  await page.goto('https://app-dev.mossall.com/auth/login');
  await page.getByLabel('Email').fill('genieouzog+atos@gmail.com');
  await page.getByLabel('Mot de passe').fill('$Mossal1234');
  await page.getByRole('button', { name: 'Se connecter' }).click();

});


