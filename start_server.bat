@echo off
set "JAVA_HOME=c:\Program Files\Java\jdk-17"
set "MAVEN_HOME=c:\Users\Lenovo\OneDrive\Desktop\New folder\ApnaStore\maven\apache-maven-3.9.6"
set "PATH=%JAVA_HOME%\bin;%MAVEN_HOME%\bin;%PATH%"
cd /d "%~dp0"
echo "Starting Spring Boot Application..." > server.log
mvn spring-boot:run >> server.log 2>&1
