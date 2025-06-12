@echo off
echo Building NaidenovART Portfolio for mobile...

REM Clean dist directory
if exist dist rmdir /s /q dist
mkdir dist

REM Copy main files
copy *.html dist\
copy *.css dist\
copy *.js dist\
copy *.png dist\

REM Copy directories
xcopy /E /I Poetry dist\Poetry
xcopy /E /I Aseam dist\Aseam
xcopy /E /I Vehicle dist\Vehicle
xcopy /E /I Awards dist\Awards
xcopy /E /I PizzaProject dist\PizzaProject
xcopy /E /I Socials dist\Socials
xcopy /E /I AboutTheArtist dist\AboutTheArtist
xcopy /E /I ProjectAlfa dist\ProjectAlfa

echo Build completed!
echo Running capacitor sync...
npx cap sync

echo ✅ Ready for mobile deployment! 