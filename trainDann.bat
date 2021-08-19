@echo off
set /p epoch="Number of epochs: "
cls
node ./src/dannTrainer.js %epoch%
echo Done!
pause
