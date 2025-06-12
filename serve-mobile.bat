@echo off
echo Starting NaidenovART Portfolio mobile development server...
echo.
echo Building latest version...
call build.bat
echo.
echo Starting local server on http://localhost:8000
echo Press Ctrl+C to stop the server
echo.

cd dist
python -m http.server 8000 