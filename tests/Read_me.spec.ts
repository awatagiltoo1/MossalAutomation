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
/*
INTEGRATION CI/CD,
Mise à jour fichier playwright.yml
Ajout de la permission d'écriture sur le git
  Ajout des commandes d'execution et de génération du rapport allure
Mise à jour fichier package.jsn
Ajout de la section Scripts qui permet d'ouvrir la rapport allure et supprimer l'ancien à chaque nouvelle génération
  "scripts": {
    "clean:allure": "rimraf allure-results && rimraf allure-report",
    "test": "playwright test",
    "allure:generate": "allure generate --clean",
    "allure:open": "allure open",
    "test:allure": "npm run clean:allure && npm run test || true && npm run allure:generate"
  },
Mise à jour fichier playwright.config.ts
 testDir: './tests',  //Ajout du repertoire à lancer à chaque execution: 
reporter: [["line"], ["allure-playwright"]]  // configuration du reporter
*/
/*INTEGRATION SLACK:
Configuration du slack, avec le lien du rapport et le nom du webhook créé dans les variables secrètes du git
- name: Notify Slack 
    run: |
                curl -X POST -H 'Content-type: application/json' --data '{"text":"📊 *Le rapport Allure est maintenant disponible !* 🚀\n\nVous pouvez consulter le rapport complet en suivant ce lien : <https://awatagiltoo1.github.io/MossalAutomation/|Allure Report>"}' ${{ secrets.WEBHOOK_MOSSAL_AUTOMATION }}    

*/

/*Configuration JIRA:
Installation dotenv et axios avec les commandes suivantes:
npm install axios
npm install dotenv
Ajout du fichier .env dans la racine du projet, on y mettra les clé d'API du jira auquel le projet est lié
Ajout du fichier jira.reporter.ts, dans lequel on remplace le prefixe des tickets jira
*/