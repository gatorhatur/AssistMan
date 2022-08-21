# AssistMan


## Purpose
A simple command line application that ties into a mySQL backend. Users will be able manger the departments and roles within their organization.

## Built with
- mySQL
- Inquirer

## Getting Started
- Install mySQL Community Server - [mySQL Community Download]('https://dev.mysql.com/downloads/mysql/')
- Clone this repo - `git clone https://github.com/gatorhatur/AssistMan.git`
- Install the dependdencies with - `npm i`
### Create and Seed the Database
- From PowerShell or Command Prompt navigate to the 'db' directory of the cloned repo and log into mysql - `mysql -u root -p`
- Create and seed the database (If you do not want to seed the database delete the insert commands below the comment.) - `source schmea.sql`
- The schema file will create a service account use that will only have access to the created database.
### You're Ready!
From the ../AssistMan directory - `node index.js`

## Links

[View Demo]('https://drive.google.com/file/d/1qkCCPb-PY3U_r2Dn-E6eACHhhFvMDIqv/view')<br>
[Checkout the Code]('https://github.com/gatorhatur/AssistMan')