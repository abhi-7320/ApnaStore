@echo off
set "JAVA_HOME=c:\Program Files\Java\jdk-17"
set "MAVEN_HOME=%~dp0maven\apache-maven-3.9.6"
set "PATH=%JAVA_HOME%\bin;%MAVEN_HOME%\bin;%PATH%"
cd /d "%~dp0"
mvn spring-boot:run
