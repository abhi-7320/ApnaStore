@echo off
set "JAVA_HOME=c:\Program Files\Java\jdk-17"
set "PATH=%JAVA_HOME%\bin;%PATH%"
cd /d "%~dp0"
echo "Starting ApnaStore JAR..." > server_output.log
"c:\Program Files\Java\jdk-17\bin\java.exe" -jar target\apnastore-0.0.1-SNAPSHOT.jar --server.port=8081
