@echo off
set JAVA_HOME=c:\PROGRA~1\Java\jdk-17
set MAVEN_HOME=%~dp0maven\apache-maven-3.9.6
set PATH=%JAVA_HOME%\bin;%MAVEN_HOME%\bin;%PATH%
mvn clean package -DskipTests
