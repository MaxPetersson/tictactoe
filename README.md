# tictactoe
============================== Utvecklingsmiljö ==============================
TypeScript compiler:
1. Tanka hem Node.js (Ska även gå att kompilera genom VS Code, men vet inte hur).
2. Installera tsc (TypeScript compiler) via npm (Node.js packet manager) genom att köra detta command '$ npm install -g typescript'.
3. Guide 2 har ett extra steg för dig som använder Windows, ifall du får ett visst felmeddelande.
4. Skapa nya TS filer under src, eller gör dina ändringar i en befintlig .ts fil.
5. Öppna repot med terminalen.
6. Kör '$ tsc'. Dina filer har nu kompilerats till .js filer under en mapp kallad 'build' (inga .js filer under denna mappen spåras av git, pga merge conflict potential).
7. Inludera .js filen i index.html och kör hårt!

Mer info kan du hitta här:
https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html

!!!Jag följde inte sista steget i den 2:a guiden (npm install -g ts-node), ingen aning om vad det gör eller vad det används till.
!!!Möjligen skulle det kunna vara för att köra JS filer i terminalen.
https://www.typescripttutorial.net/typescript-tutorial/setup-typescript/

Live server:
1. Visual studio Code - gå till Extensions.
2. Sök på "Live Server" och ladda ner den pluginen.
3. Högerklicka på index.html i File Explorer i Visual Code och välj "Kör med Live Server".
4. Den kör html-filen på en web server istället för i en statisk webläsare så så fort ändringar görs i index.html och man sparar så refreshar den automatiskt.
5. Win!

================================= Bra länkar =================================

Guide för automatisering av TS bygge:
https://www.typescripttutorial.net/typescript-tutorial/nodejs-typescript/