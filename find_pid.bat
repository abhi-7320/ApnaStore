@echo off
wmic process where "commandline like '%%ApnaStore%%'" get processid,commandline > "%~dp0wmic_output.txt"
netstat -ano | findstr :8081 > "%~dp0netstat_output.txt"
