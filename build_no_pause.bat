@echo off
set "JAVA_HOME=c:\Program Files\Java\jdk-17"
set "MAVEN_HOME=c:\Users\Lenovo\OneDrive\Desktop\New folder\ApnaStore\maven\apache-maven-3.9.6"
set "PATH=%JAVA_HOME%\bin;%MAVEN_HOME%\bin;%PATH%"
cd /d "c:\Users\Lenovo\OneDrive\Desktop\New folder\ApnaStore"
echo Building project... > build.log
call mvn clean package -DskipTests >> build.log 2>&1
echo Build finished with exit code %ERRORLEVEL% >> build.log
