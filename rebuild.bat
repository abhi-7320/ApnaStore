@echo off
set "JAVA_HOME=c:\Program Files\Java\jdk-17"
set "MAVEN_HOME=c:\Users\Lenovo\OneDrive\Desktop\New folder\ApnaStore\maven\apache-maven-3.9.6"
set "PATH=%JAVA_HOME%\bin;%MAVEN_HOME%\bin;%PATH%"
echo Rebuilding ApnaStore...
cd /d "c:\Users\Lenovo\OneDrive\Desktop\New folder\ApnaStore"
call mvn clean package -DskipTests
if %ERRORLEVEL% NEQ 0 (
    echo BUILD FAILED!
    exit /b %ERRORLEVEL%
)
echo BUILD SUCCESSFUL!
