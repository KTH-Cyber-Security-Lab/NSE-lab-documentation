---
title: Vulnerabilities Found
parent: Previous Work
has_children: false
nav_order: 3
---

# Vulnerabilities Found

## [CVE-2021-22263](https://nvd.nist.gov/vuln/detail/CVE-2021-22263)

An issue has been discovered in GitLab affecting all versions starting from 13.0 before 14.0.9, all versions starting from 14.1 before 14.1.4, all versions starting from 14.2 before 14.2.2. A user account with 'external' status which is granted 'Maintainer' role on any project on the GitLab instance where 'project tokens' are allowed may elevate its privilege to 'Internal' and access Internal projects.

Students: John Augustsson & Johan Carlsson<br>
Supervisor: Pontus Johnson<br>
Examiner: Mathias Ekstedt


## [CVE-2021-22228](https://nvd.nist.gov/vuln/detail/CVE-2021-22228)

An issue has been discovered in GitLab affecting all versions. Improper access control allows unauthorised users to access project details using Graphql.

Students: John Augustsson & Johan Carlsson<br>
Supervisor: Pontus Johnson<br>
Examiner: Mathias Ekstedt

## [CVE-2021-39866](https://nvd.nist.gov/vuln/detail/CVE-2021-39866)

A business logic error in the project deletion process in GitLab 13.6 and later allows persistent access via project access tokens.

Students: John Augustsson & Johan Carlsson<br>
Supervisor: Pontus Johnson<br>
Examiner: Mathias Ekstedt


## [CVE-2021-37147](https://nvd.nist.gov/vuln/detail/CVE-2021-37147)

Improper input validation vulnerability in header parsing of Apache Traffic Server allows an attacker to smuggle requests. LF line ending forwarded.

Students: Asta Olofsson & Mattias Grenfeldt<br>
Supervisor: Robert Lagerström<br>
Examiner: Pawel Herman


## [CVE-2021-37148](https://nvd.nist.gov/vuln/detail/CVE-2021-37148)

Improper input validation vulnerability in header parsing of Apache Traffic Server allows an attacker to smuggle requests, "chunked" is chunked and Bad chunked body parsing.

Students: Asta Olofsson & Mattias Grenfeldt<br>
Supervisor: Robert Lagerström<br>
Examiner: Pawel Herman


## [CVE-2021-37149](https://nvd.nist.gov/vuln/detail/CVE-2021-37149)

Improper Input Validation vulnerability in header parsing of Apache Traffic Server allows an attacker to smuggle requests, multiple issues.

Students: Asta Olofsson & Mattias Grenfeldt<br>
Supervisor: Robert Lagerström<br>
Examiner: Pawel Herman


## [CVE-2021-22959](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-22959)

The http parser accepts requests with a space (SP) right after the header name before the colon. This can lead to HTTP Request Smuggling (HRS).

Students: Asta Olofsson & Mattias Grenfeldt<br>
Supervisor: Robert Lagerström<br>
Examiner: Pawel Herman


## [CVE-2021-22960](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-22960)

The parse function in llhttp < 2.1.4 and < 6.0.6. ignores chunk extensions when parsing the body of chunked requests. This leads to HTTP Request Smuggling (HRS) under certain conditions.

Students: Asta Olofsson & Mattias Grenfeldt<br>
Supervisor: Robert Lagerström<br>
Examiner: Pawel Herman


## [CVE-2021-34594](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34594)

Relative path traversal vulnerability through TwinCAT OPC UA Server.

Collaboration between:<br>
Beckoff Security Advisory<br>
Johannes Olegård<br>
Emre Süren<br>
Robert Lagerström<br>


## [CVE-2021-41504](https://nvd.nist.gov/vuln/detail/CVE-2021-41504)

An Elevated Privileges issue exists in D-Link DCS-5000L v1.05 and DCS-932L v2.17 and older. The use of the digest-authentication for the devices command interface may allow further attack vectors that may compromise the cameras configuration and allow malicious users on the LAN to access the device.

Students: Hristo Georgiev & Azad Mustafa<br>
Supervisor: Pontus Johnson<br>
Examiner: Mathias Ekstedt


## [CVE-2021-41503](https://nvd.nist.gov/vuln/detail/CVE-2021-41503)

DCS-5000L v1.05 and DCS-932L v2.17 and older are affected by Incorrect Access Control. The use of the basic authentication for the devices command interface allows attack vectors that may compromise the cameras configuration and allow malicious users on the LAN to access the device.

Students: Hristo Georgiev & Azad Mustafa<br>
Supervisor: Pontus Johnson<br>
Examiner: Mathias Ekstedt<br>


## [CVE-2021-41136](https://nvd.nist.gov/vuln/detail/CVE-2021-41136)

Puma is a HTTP 1.1 server for Ruby/Rack applications. Prior to versions 5.5.1 and 4.3.9, using `puma` with a proxy which forwards HTTP header values which contain the LF character could allow HTTP request smuggling.

Students: Asta Olofsson & Mattias Grenfeldt<br>
Supervisor: Robert Lagerström<br>
Examiner: Pawel Herman


## [CVE-2021-38512](https://nvd.nist.gov/vuln/detail/CVE-2021-38512)

An issue was discovered in the actix-http crate before 3.0.0-beta.9 for Rust. HTTP/1 request smuggling (aka HRS) can occur, potentially leading to credential disclosure.

Students: Asta Olofsson & Mattias Grenfeldt<br>
Supervisor: Robert Lagerström<br>
Examiner: Pawel Herman


## [CVE-2021-37555](https://nvd.nist.gov/vuln/detail/CVE-2021-37555)

TX9 Automatic Food Dispenser v3.2.57 devices allow access to a shell as root/superuser.

Student: Julia Lokrantz<br>
Supervisor: Pontus Johnson<br>
Examiner: Ibrahim Orhan


## [CVE-2021-33197](https://nvd.nist.gov/vuln/detail/CVE-2021-33197)

In Go before 1.15.13 and 1.16.x before 1.16.5, some configurations of ReverseProxy (from net/http/httputil) result in a situation where an attacker is able to drop arbitrary headers.

Students: Asta Olofsson & Mattias Grenfeldt<br>
Supervisor: Robert Lagerström<br>
Examiner: Pawel Herman


## [CVE-2021-33039](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-33039)

Reserved.


## [CVE-2021-32715](https://nvd.nist.gov/vuln/detail/CVE-2021-32715)

hyper is an HTTP library for rust. hyper's HTTP/1 server code had a flaw that incorrectly parses and accepts requests with a `Content-Length` header with a prefixed plus sign, when it should have been rejected as illegal.

Students: Asta Olofsson & Mattias Grenfeldt<br>
Supervisor: Robert Lagerström<br>
Examiner: Pawel Herman


## [CVE-2021-32714](https://nvd.nist.gov/vuln/detail/CVE-2021-32714)

hyper is an HTTP library for Rust. In versions prior to 0.14.10, hyper's HTTP server and client code had a flaw that could trigger an integer overflow when decoding chunk sizes that are too big.

Students: Asta Olofsson & Mattias Grenfeldt<br>
Supervisor: Robert Lagerström<br>
Examiner: Pawel Herman


## [CVE-2021-32471](https://nvd.nist.gov/vuln/detail/CVE-2021-32471)

Insufficient input validation in the Marvin Minsky 1967 implementation of the Universal Turing Machine allows program users to execute arbitrary code via crafted data.

Pontus Johnson<br>
Proof-of-concept code from Compsci boffin


## [CVE-2020-28396](https://us-cert.cisa.gov/ics/advisories/icsa-20-343-07)

A Protection Mechanism Failure was found in Siemens SICAM A8000 Remote Terminal Unit Series.

Student: Sam Hamra<br>
Supervisor: Mathias Ekstedt<br>
Examiner: Pontus Johnson


## [CVE-2020-15019](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-15019)

Reserved.


## [CVE-2020-13119](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-13119)
ismartgate PRO 1.5.9 is vulnerable to clickjacking.

Student: Madeleine Berner<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2020-12843](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12843)

ismartgate PRO 1.5.9 is vulnerable to malicious file uploads via the form for uploading sounds to garage doors. The magic bytes for WAV must be used.

Student: Madeleine Berner<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2020-12842](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12842)

ismartgate PRO 1.5.9 is vulnerable to privilege escalation by appending PHP code to /cron/checkUserExpirationDate.php.

Student: Madeleine Berner<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström

## [CVE-2020-12841](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12841)

ismartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to upload imae files via /index.php.

Student: Madeleine Berner<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2020-12840](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12840)

ismartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to upload sound files via /index.php.

Student: Madeleine Berner<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström

## [CVE-2020-12839](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12839)

ismartgate PRO 1.5.9 is vulnerable to privilege escalation by appending PHP code to /cron/checkExpirationDate.php.

Student: Madeleine Berner<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2020-12838](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12838)

ismartgate PRO 1.5.9 is vulnerable to privilege escalation by appending PHP code to /cron/mailAdmin.php.

Student: Madeleine Berner<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2020-12837](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12837)

ismartgate PRO 1.5.9 is vulnerable to malicious file uploads via the form for uploading images to garage doors. The magic bytes of PNG must be used.

Student: Madeleine Berner<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2020-12282](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12282)

iSmartgate PRO 1.5.9 is vulnerable to CSRF via the busca parameter in the form used for searching for users, accessible via /index.php. (This can be combined with reflected XSS.)

Student: Madeleine Berner<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2020-12281](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12281)

iSmartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to create a new user via /index.php.

Student: Madeleine Berner<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2020-12280](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12280)

iSmartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to open/close a specified garage door/gate via /isg/opendoor.php.

Student: Madeleine Berner<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2020-15781](https://nvd.nist.gov/vuln/detail/CVE-2020-15781)

XSS in Siemens SICAM A8000 RTUs.

Student: Emma Good<br>
Supervisor: Pontus Johnson<br>
Examiner: Mathias Ekstedt


## [CVE-2019-12941](https://nvd.nist.gov/vuln/detail/CVE-2019-12941)

AutoPi Wi-Fi/NB and 4G/LTE devices allows an attacker to perform a brute-force attack or dictionary attack to gain access to the WiFi network, which provides root access to the device.

Students: Aldin Burdzovic and Jonathan Matsson<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2019-12944](https://nvd.nist.gov/vuln/detail/CVE-2019-12944)

Glue Smart Lock 2.7.8 devices do not properly block guest access in certain situations where the network connection is unavailable.

Student: Arvid Viderberg<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2019-12943](https://nvd.nist.gov/vuln/detail/CVE-2019-12943)

Insecure permission, password reset function, in TTLock Open Platform.

Student: Arvid Viderberg<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2019-12942](https://nvd.nist.gov/vuln/detail/CVE-2019-12942)

Insecure permission, account revocation mechanism, in TTLock Open Platform.

Student: Arvid Viderberg<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2019-12821](https://nvd.nist.gov/vuln/detail/CVE-2019-12821)

Vulnerability in the app 2.0 of the Shenzhen Jisiwei i3 robot vacuum cleaner, while adding a device to the account using a QR-code.

Students: Theodor Olsson and Albin Larsson Forsberg<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2019-12820](https://nvd.nist.gov/vuln/detail/CVE-2019-12820)

Vulnerability in the app 2.0 of the Shenzhen Jisiwei i3 robot vacuum cleaner, possible MiTM attack on http.

Students: Theodor Olsson and Albin Larsson Forsberg<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2019-12797](https://nvd.nist.gov/vuln/detail/CVE-2019-12797)

Vulnerability in a clone version of an ELM327 OBD2 Bluetooth device, hardcoded PIN leading to arbitrary commands to an OBD-II bus of a vehicle.

Students: Ludvig Christensen and Daniel Dannberg<br>
Supervisor: Pontus Johnson<br>
Examiner: Robert Lagerström


## [CVE-2018-3786](https://nvd.nist.gov/vuln/detail/CVE-2018-3786)

A command injection vulnerability in egg-scripts v2.8.1 allows arbitrary shell command execution through a maliciously crafted command line argument.

Pontus Johnson