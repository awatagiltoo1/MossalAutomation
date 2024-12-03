//Installation Playwright: npm init playwright@latest      

/*
INTEGRATION GITHUB
git init
git add . 
git commit -m "Mettre mon commentaire"
git remote add origin https://awatagiltoo1@github.com/awatagiltoo1/MossalAutomation.git    
git push origin master
*/

/*
INTEGRATION ALLURE
Ajouter la ligne ci-dessous dans le package.json
reporter: [["line"], ["allure-playwright"]],
Taper les commandes suivantes sur le terminal
npm install --save-dev allure-commandline
npm install --save-dev @playwright/test allure-playwright
npx playwright test './tests/login.spec.ts' --project chromium
npx allure serve allure-results  

*/