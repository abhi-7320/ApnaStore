@echo off
set "JAVA_HOME=c:\Program Files\Java\jdk-17"
set "MAVEN_HOME=c:\Users\Lenovo\OneDrive\Desktop\New folder\ApnaStore\maven\apache-maven-3.9.6"
set "PATH=%JAVA_HOME%\bin;%MAVEN_HOME%\bin;%PATH%"
cd /d "c:\Users\Lenovo\OneDrive\Desktop\New folder\ApnaStore"
call mvn clean compile
