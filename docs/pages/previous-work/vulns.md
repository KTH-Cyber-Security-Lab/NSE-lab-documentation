---
title: Vulnerabilities Found
parent: Previous Work
has_children: false
nav_order: 3
---
<style type='text/css'>
    dd {
        padding-bottom: 20px;
    }
    h3 {
      text-align: center;
      font-size: 25px !important;
    }
    .button {
      background-color: transparent; /* Default background color */
      border: none; /* Remove borders */
      color: #2c84fa; /* Blue text color */
      cursor: pointer; /* Mouse pointer on hover */
      width: 100%;
      border-radius: 10px;
      padding: 5px;
      font-size: 15px;
    }
    .button:hover {
      background-color: #484848;
    }
</style>



# Vulnerabilities Found

Here you can find a list of all published CVEs (Common Vulnerabilities and Exposures) on the official publication organisms such as the [NIST National Vulnerability Database](https://nvd.nist.gov/), the [MITRE CVE Record](https://cve.mitre.org/index.html) and the [CISA Industrial control systems database](https://www.cisa.gov/uscert/ics/advisories).

Change view:
<div style="text-align: -webkit-center;">
<table>
<tr>
  <td style="text-align: center;border-radius: 10px; width: 50%;"> <button class="button" id="button1">Order by Category</button></td>
  <td style="text-align: center;border-radius: 10px; width: 50%;"> <button class="button" id="button2">Order by Date</button></td>
</tr>
</table>
</div>

<div id="byclass">
The vulnerabilities are organized in the following categories:

<div style="font-size: 18px;">
<details>
<summary> <a href="#smart-devices"> Smart Devices</a> </summary>
  <ul>
      <li> <a href="#3d-printers"> 3D printers </a> </li>
      <li> <a href="#ip-cameras"> IP cameras </a> </li>
      <li> <a href="#smart-food-dispensers"> Smart Food Dispensers </a> </li>
      <li> <a href="#smart-gate-openers"> Smart Gate Openers </a> </li>
      <li> <a href="#obd-readers"> OBD Readers </a> </li>
      <li> <a href="#smart-locks"> Smart Locks </a> </li>
      <li> <a href="#smart-vacuum-cleaners"> Smart Vacuum Cleaners </a> </li>
      <li> <a href="#home-alarm-systems"> Home Alarm Systems </a> </li>
      <li> <a href="#drones"> Drones </a> </li>
      <li> <a href="#other-smart-devices"> Other Smart Devices </a> </li>
  </ul>
</details>

<details>
<summary> <a href="#web"> Web </a> </summary>
<ul>
    <li> <a href="#web-pages"> Web Pages </a> </li>
    <li> <a href="#web-servers"> Web Servers </a> </li>
    <li> <a href="#http-parsing"> HTTP Parsing </a> </li>
</ul>
</details>

<details>
<summary> <a href="#ics"> ICS </a> </summary>
</details>

<details>
<summary> <a href="#programming-languages"> Programming Languages </a> </summary>
</details>

<details>
<summary> <a href="#reserved"> Reserved </a> </summary>
</details>
</div>

<h2 id="smart-devices"> Smart Devices </h2>

<h3 id="3d-printers"> 3D printers </h3>
<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-34086">CVE-2021-34086</a></dt>
  <dd>
    In Ultimaker S3 3D printer, Ultimaker S5 3D printer, Ultimaker 3 3D printer S-line through 6.3 and Ultimaker 3 through 5.2.16, the local webserver hosts APIs vulnerable to CSRF. They do not verify incoming requests.<br>
    <i><b>Students</b></i>: Linus Backlund & Linnéa Ridderström<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Anita Kullen
  </dd>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-34087">CVE-2021-34087</a></dt>
  <dd>
    In Ultimaker S3 3D printer, Ultimaker S5 3D printer, Ultimaker 3 3D printer S-line through 6.3 and Ultimaker 3 through 5.2.16, the local webserver can be used for clickjacking. This includes the settings page.<br>
    <i><b>Students</b></i>: Linus Backlund & Linnéa Ridderström<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Anita Kullen
  </dd>
</dl>

<h3 id="ip-cameras"> IP cameras </h3>

<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2022-34138">CVE-2022-34138</a></dt>
  <dd>
    In the Biltema IP and Baby Camera with Software v124, the use of insecure direct object references (IDOR) in the web server allows attackers to access sensitive information by not properly authenticating the credentials when accessing a protected resource.
    <br>
    <i><b>Students</b></i>: Tova Stroeven & Felix Soderman<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Anita Kullen
  </dd>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-41504">CVE-2021-41504</a></dt>
  <dd>
    An Elevated Privileges issue exists in D-Link DCS-5000L v1.05 and DCS-932L v2.17 and older. The use of the digest-authentication for the devices command interface may allow further attack vectors that may compromise the cameras configuration and allow malicious users on the LAN to access the device.
    <br>
    <i><b>Students</b></i>: Hristo Georgiev & Azad Mustafa<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Mathias Ekstedt
    </dd>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-41503">CVE-2021-41503</a></dt>
  <dd>
    DCS-5000L v1.05 and DCS-932L v2.17 and older are affected by Incorrect Access Control. The use of the basic authentication for the devices command interface allows attack vectors that may compromise the cameras configuration and allow malicious users on the LAN to access the device.
    <br>
    <i><b>Students</b></i>: Hristo Georgiev & Azad Mustafa<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Mathias Ekstedt<br>
    </dd>
</dl>

<h3 id="smart-food-dispensers"> Smart Food Dispensers </h3>

<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-37555">CVE-2021-37555</a></dt>
  <dd>
    TX9 Automatic Food Dispenser v3.2.57 devices allow access to a shell as root/superuser.
    <br>
    <i><b>Student</b></i>: Julia Lokrantz<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Ibrahim Orhan
  </dd>
</dl>

<h3 id="smart-gate-openers"> Smart Gate Openers </h3>

<dl>
  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-13119">CVE-2020-13119</a></dt>
  <dd>
    ismartgate PRO 1.5.9 is vulnerable to clickjacking.
    <br>
    <i><b>Student</b></i>: Madeleine Berner<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström

  </dd>
  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12843">CVE-2020-12843</a></dt>
  <dd>
    ismartgate PRO 1.5.9 is vulnerable to malicious file uploads via the form for uploading sounds to garage doors. The magic bytes for WAV must be used.
    <br>
    <i><b>Student</b></i>: Madeleine Berner<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12842">CVE-2020-12842</a></dt>
  <dd>
    ismartgate PRO 1.5.9 is vulnerable to privilege escalation by appending PHP code to /cron/checkUserExpirationDate.php.
    <br>
    <i><b>Student</b></i>: Madeleine Berner<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>
  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12841">CVE-2020-12841</a></dt>
  <dd>
    ismartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to upload imae files via /index.php.
    <br>
    <i><b>Student</b></i>: Madeleine Berner<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12840">CVE-2020-12840</a></dt>
  <dd>
    ismartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to upload sound files via /index.php.
    <br>
    <i><b>Student</b></i>: Madeleine Berner<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>
  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12839">CVE-2020-12839</a></dt>
  <dd>
    ismartgate PRO 1.5.9 is vulnerable to privilege escalation by appending PHP code to /cron/checkExpirationDate.php.
    <br>
    <i><b>Student</b></i>: Madeleine Berner<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12838">CVE-2020-12838</a></dt>
  <dd>
    ismartgate PRO 1.5.9 is vulnerable to privilege escalation by appending PHP code to /cron/mailAdmin.php.
    <br>
    <i><b>Student</b></i>: Madeleine Berner<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12837">CVE-2020-12837</a></dt>
  <dd>
    ismartgate PRO 1.5.9 is vulnerable to malicious file uploads via the form for uploading images to garage doors. The magic bytes of PNG must be used.
    <br>
    <i><b>Student</b></i>: Madeleine Berner<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12282">CVE-2020-12282</a></dt>
  <dd>
    iSmartgate PRO 1.5.9 is vulnerable to CSRF via the busca parameter in the form used for searching for users, accessible via /index.php. (This can be combined with reflected XSS.)
    <br>
    <i><b>Student</b></i>: Madeleine Berner<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12281">CVE-2020-12281</a></dt>
  <dd>
    iSmartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to create a new user via /index.php.
    <br>
    <i><b>Student</b></i>: Madeleine Berner<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12280">CVE-2020-12280</a></dt>
  <dd>
    iSmartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to open/close a specified garage door/gate via /isg/opendoor.php.
    <br>
    <i><b>Student</b></i>: Madeleine Berner<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>
</dl>

<h3 id="obd-readers"> OBD Readers </h3>

<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12941">CVE-2019-12941</a></dt>
  <dd>
    AutoPi Wi-Fi/NB and 4G/LTE devices allows an attacker to perform a brute-force attack or dictionary attack to gain access to the WiFi network, which provides root access to the device.
    <br>
    <i><b>Students</b></i>: Aldin Burdzovic and Jonathan Matsson<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12797">CVE-2019-12797</a></dt>
  <dd>
    Vulnerability in a clone version of an ELM327 OBD2 Bluetooth device, hardcoded PIN leading to arbitrary commands to an OBD-II bus of a vehicle.
    <br>
    <i><b>Students</b></i>: Ludvig Christensen and Daniel Dannberg<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>
</dl>

<h3 id="smart-locks"> Smart Locks </h3>

<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12944">CVE-2019-12944</a></dt>
  <dd>

    Glue Smart Lock 2.7.8 devices do not properly block guest access in certain situations where the network connection is unavailable.
    <br>
    <i><b>Student</b></i>: Arvid Viderberg<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12943">CVE-2019-12943</a></dt>
  <dd>

    Insecure permission, password reset function, in TTLock Open Platform.
    <br>
    <i><b>Student</b></i>: Arvid Viderberg<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12942">CVE-2019-12942</a></dt>
  <dd>

    Insecure permission, account revocation mechanism, in TTLock Open Platform.
    <br>
    <i><b>Student</b></i>: Arvid Viderberg<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

</dl>

<h3 id="smart-vacuum-cleaners"> Smart Vacuum Cleaners </h3>

<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12821">CVE-2019-12821</a></dt>
  <dd>
    Vulnerability in the app 2.0 of the Shenzhen Jisiwei i3 robot vacuum cleaner, while adding a device to the account using a QR-code.
    <br>
    <i><b>Students</b></i>: Theodor Olsson and Albin Larsson Forsberg<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12820">CVE-2019-12820</a></dt>
  <dd>
    Vulnerability in the app 2.0 of the Shenzhen Jisiwei i3 robot vacuum cleaner, possible MiTM attack on http.
    <br>
    <i><b>Students</b></i>: Theodor Olsson and Albin Larsson Forsberg<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>
</dl>

<h3 id="home-alarm-systems"> Home Alarm Systems </h3>

<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-40171">CVE-2021-40171</a></dt>
  <dd>
    The absence of notifications regarding an ongoing RF jamming attack in the SecuritasHome home alarm system, version HPGW-G 0.0.2.23F BG_U-ITR-F1-BD_BL.A30.20181117, allows an attacker to block legitimate traffic while not alerting the owner of the system.
    <br>
    <i><b>Student</b></i>: Axel Lindeberg <br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-40170">CVE-2021-40170</a></dt>
  <dd>
    An RF replay attack vulnerability in the SecuritasHome home alarm system, version HPGW-G 0.0.2.23F BG_U-ITR-F1-BD_BL.A30.20181117, allows an attacker to trigger arbitrary system functionality by replaying previously recorded signals. This lets an adversary, among other things, disarm an armed system.
    <br>
    <i><b>Student</b></i>: Axel Lindeberg <br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>
</dl>

<h3 id="drones"> Drones </h3>

<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2020-29664">CVE-2020-29664</a></dt>
  <dd>
    A command injection issue in dji_sys in DJI Mavic 2 Remote Controller before firmware version 01.00.0510 allows for code execution via a malicious firmware upgrade packet.
    <br>
    <i><b>Students</b></i>: Viktor Edström & Eldar Zeynalli <br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
  </dd>
</dl>

<h3 id="other-smart-devices"> Other Smart Devices </h3>
<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2022-35860">CVE-2022-35860</a></dt>
  <dd>
    Missing AES encryption in Corsair K63 Wireless 3.1.3 allows physically proximate attackers to inject and sniff keystrokes via 2.4 GHz radio transmissions.
    <br>
    <i><b>Students</b></i>: Niklas Tomsic <br>
    <i><b>Supervisors</b></i>: Roberto Guanciale & Johan von Konow <br>
    <i><b>Examiner</b></i>: Gerald Quentin Maguire Jr.
  </dd>
</dl>


<h2 id="web"> Web </h2>

<h3 id="web-pages"> Web Pages </h3>

<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-22263">CVE-2021-22263</a></dt>
  <dd>
    An issue has been discovered in GitLab affecting all versions starting from 13.0 before 14.0.9, all versions starting from 14.1 before 14.1.4, all versions starting from 14.2 before 14.2.2. A user account with 'external' status which is granted 'Maintainer' role on any project on the GitLab instance where 'project tokens' are allowed may elevate its privilege to 'Internal' and access Internal projects.<br>
    <i><b>Students</b></i>: John Augustsson & Johan Carlsson<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Mathias Ekstedt
  </dd>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-22228">CVE-2021-22228</a></dt>
  <dd>
    An issue has been discovered in GitLab affecting all versions. Improper access control allows unauthorised users to access project details using Graphql.
    <br>
    <i><b>Students</b></i>: John Augustsson & Johan Carlsson<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Mathias Ekstedt
  </dd>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-39866">CVE-2021-39866</a></dt>
  <dd>
    A business logic error in the project deletion process in GitLab 13.6 and later allows persistent access via project access tokens.
    <br>
    <i><b>Students</b></i>: John Augustsson & Johan Carlsson<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Mathias Ekstedt
  </dd>
</dl>

<h3 id="web-servers"> Web Servers </h3>

<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-37147">CVE-2021-37147</a></dt>
  <dd>
    Improper input validation vulnerability in header parsing of Apache Traffic Server allows an attacker to smuggle requests. LF line ending forwarded.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-37148">CVE-2021-37148</a></dt>
  <dd>
    Improper input validation vulnerability in header parsing of Apache Traffic Server allows an attacker to smuggle requests, "chunked" is chunked and Bad chunked body parsing.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
    </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-37149">CVE-2021-37149</a></dt>
  <dd>
    Improper Input Validation vulnerability in header parsing of Apache Traffic Server allows an attacker to smuggle requests, multiple issues.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
    </dd>
</dl>

<h3 id="http-parsing"> HTTP Parsing </h3>

<dl>
  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-22959">CVE-2021-22959</a></dt>
  <dd>
    The http parser accepts requests with a space (SP) right after the header name before the colon. This can lead to HTTP Request Smuggling (HRS).
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
    </dd>

  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-22960">CVE-2021-22960</a></dt>
  <dd>
    The parse function in llhttp < 2.1.4 and < 6.0.6. ignores chunk extensions when parsing the body of chunked requests. This leads to HTTP Request Smuggling (HRS) under certain conditions.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
    </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-41136">CVE-2021-41136</a></dt>
  <dd>
    Puma is a HTTP 1.1 server for Ruby/Rack applications. Prior to versions 5.5.1 and 4.3.9, using `puma` with a proxy which forwards HTTP header values which contain the LF character could allow HTTP request smuggling.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
    </dd>


  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-38512">CVE-2021-38512</a></dt>
  <dd>
    An issue was discovered in the actix-http crate before 3.0.0-beta.9 for Rust. HTTP/1 request smuggling (aka HRS) can occur, potentially leading to credential disclosure.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-32715">CVE-2021-32715</a></dt>
  <dd>
    hyper is an HTTP library for rust. hyper's HTTP/1 server code had a flaw that incorrectly parses and accepts requests with a `Content-Length` header with a prefixed plus sign, when it should have been rejected as illegal.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-32714">CVE-2021-32714</a></dt>
  <dd>
    hyper is an HTTP library for Rust. In versions prior to 0.14.10, hyper's HTTP server and client code had a flaw that could trigger an integer overflow when decoding chunk sizes that are too big.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
  </dd>
</dl>

<h2 id="ics"> ICS </h2>

<dl>
  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34594">CVE-2021-34594</a></dt>
  <dd>
    Relative path traversal vulnerability through TwinCAT OPC UA Server.
    <br>
    <i><b>Collaboration between</b></i>:<br>
    Beckoff Security Advisory<br>
    Johannes Olegård<br>
    Emre Süren<br>
    Robert Lagerström<br>
  </dd>

  <dt><a href="https://us-cert.cisa.gov/ics/advisories/icsa-20-343-07">CVE-2020-28396</a></dt>
  <dd>
    A Protection Mechanism Failure was found in Siemens SICAM A8000 Remote Terminal Unit Series.
    <br>
    <i><b>Student</b></i>: Sam Hamra<br>
    <i><b>Supervisor</b></i>: Mathias Ekstedt<br>
    <i><b>Examiner</b></i>: Pontus Johnson
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2020-15781">CVE-2020-15781</a></dt>
  <dd>

    XSS in Siemens SICAM A8000 RTUs.
    <br>
    <i><b>Student</b></i>: Emma Good<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Mathias Ekstedt
  </dd>
</dl>

<h2 id="programming-languages"> Programming languages </h2>

<dl>
  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-33197">CVE-2021-33197</a></dt>
  <dd>
    In Go before 1.15.13 and 1.16.x before 1.16.5, some configurations of ReverseProxy (from net/http/httputil) result in a situation where an attacker is able to drop arbitrary headers.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-32471">CVE-2021-32471</a></dt>
  <dd>
    Insufficient input validation in the Marvin Minsky 1967 implementation of the Universal Turing Machine allows program users to execute arbitrary code via crafted data.
    <br>
    Pontus Johnson<br>
    Proof-of-concept code from Compsci boffin
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2018-3786">CVE-2018-3786</a></dt>
  <dd>
    A command injection vulnerability in egg-scripts v2.8.1 allows arbitrary shell command execution through a maliciously crafted command line argument.
    <br>
    Pontus Johnson
  </dd>
</dl>

<h3 id="reserved"> Reserved </h3>

<dl>
  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-33039">CVE-2021-33039</a></dt>
  <dd>
    Reserved.
  </dd>

  <dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-15019">CVE-2020-15019</a></dt>
  <dd>
    Reserved.
  </dd>

</dl>

</div>

<div id="bydate" style="display:none;">
The vulnerabilities are ordered by date of publication, with the most recent at the top:
<div style="font-size: 18px;">
<details>
<summary> <a href="#2022"> 2022 </a> </summary>
</details>
<details>
<summary> <a href="#2021"> 2021 </a> </summary>
</details>
<details>
<summary> <a href="#2020"> 2020 </a> </summary>
</details>
<details>
<summary> <a href="#2019"> 2019 </a> </summary>
</details>
<details>
<summary> <a href="#2018"> 2018 </a> </summary>
</details>
</div>


<h3 id="2022"> 2022 </h3>

<dl>
<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2022-35860">CVE-2022-35860</a></dt>
<dd>
Missing AES encryption in Corsair K63 Wireless 3.1.3 allows physically proximate attackers to inject and sniff keystrokes via 2.4 GHz radio transmissions.
<br>
<i><b>Students</b></i>: Niklas Tomsic <br>
<i><b>Supervisors</b></i>: Roberto Guanciale & Johan von Konow <br>
<i><b>Examiner</b></i>: Gerald Quentin Maguire Jr.
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2022-34138">CVE-2022-34138</a></dt>
<dd>
In the Biltema IP and Baby Camera with Software v124, the use of insecure direct object references (IDOR) in the web server allows attackers to access sensitive information by not properly authenticating the credentials when accessing a protected resource.
<br>
<i><b>Students</b></i>: Tova Stroeven & Felix Soderman<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Anita Kullen
</dd>

</dl>

<h3 id="2021"> 2021 </h3>

<dl>
<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-41504">CVE-2021-41504</a></dt>
<dd>
An Elevated Privileges issue exists in D-Link DCS-5000L v1.05 and DCS-932L v2.17 and older. The use of the digest-authentication for the devices command interface may allow further attack vectors that may compromise the cameras configuration and allow malicious users on the LAN to access the device.
<br>
<i><b>Students</b></i>: Hristo Georgiev & Azad Mustafa<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Mathias Ekstedt
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-41503">CVE-2021-41503</a></dt>
<dd>
DCS-5000L v1.05 and DCS-932L v2.17 and older are affected by Incorrect Access Control. The use of the basic authentication for the devices command interface allows attack vectors that may compromise the cameras configuration and allow malicious users on the LAN to access the device.
<br>
<i><b>Students</b></i>: Hristo Georgiev & Azad Mustafa<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Mathias Ekstedt<br>
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-41136">CVE-2021-41136</a></dt>
<dd>
Puma is a HTTP 1.1 server for Ruby/Rack applications. Prior to versions 5.5.1 and 4.3.9, using `puma` with a proxy which forwards HTTP header values which contain the LF character could allow HTTP request smuggling.
<br>
<i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
<i><b>Supervisor</b></i>: Robert Lagerström<br>
<i><b>Examiner</b></i>: Pawel Herman
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-40171">CVE-2021-40171</a></dt>
<dd>
The absence of notifications regarding an ongoing RF jamming attack in the SecuritasHome home alarm system, version HPGW-G 0.0.2.23F BG_U-ITR-F1-BD_BL.A30.20181117, allows an attacker to block legitimate traffic while not alerting the owner of the system.
<br>
<i><b>Student</b></i>: Axel Lindeberg <br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-40170">CVE-2021-40170</a></dt>
<dd>
An RF replay attack vulnerability in the SecuritasHome home alarm system, version HPGW-G 0.0.2.23F BG_U-ITR-F1-BD_BL.A30.20181117, allows an attacker to trigger arbitrary system functionality by replaying previously recorded signals. This lets an adversary, among other things, disarm an armed system.
<br>
<i><b>Student</b></i>: Axel Lindeberg <br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-39866">CVE-2021-39866</a></dt>
<dd>
A business logic error in the project deletion process in GitLab 13.6 and later allows persistent access via project access tokens.
<br>
<i><b>Students</b></i>: John Augustsson & Johan Carlsson<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Mathias Ekstedt
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-38512">CVE-2021-38512</a></dt>
<dd>
An issue was discovered in the actix-http crate before 3.0.0-beta.9 for Rust. HTTP/1 request smuggling (aka HRS) can occur, potentially leading to credential disclosure.
<br>
<i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
<i><b>Supervisor</b></i>: Robert Lagerström<br>
<i><b>Examiner</b></i>: Pawel Herman
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-37555">CVE-2021-37555</a></dt>
<dd>
TX9 Automatic Food Dispenser v3.2.57 devices allow access to a shell as root/superuser.
<br>
<i><b>Student</b></i>: Julia Lokrantz<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Ibrahim Orhan
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-37149">CVE-2021-37149</a></dt>
<dd>
Improper Input Validation vulnerability in header parsing of Apache Traffic Server allows an attacker to smuggle requests, multiple issues.
<br>
<i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
<i><b>Supervisor</b></i>: Robert Lagerström<br>
<i><b>Examiner</b></i>: Pawel Herman
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-37148">CVE-2021-37148</a></dt>
<dd>
Improper input validation vulnerability in header parsing of Apache Traffic Server allows an attacker to smuggle requests, "chunked" is chunked and Bad chunked body parsing.
<br>
<i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
<i><b>Supervisor</b></i>: Robert Lagerström<br>
<i><b>Examiner</b></i>: Pawel Herman
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-37147">CVE-2021-37147</a></dt>
<dd>
Improper input validation vulnerability in header parsing of Apache Traffic Server allows an attacker to smuggle requests. LF line ending forwarded.
<br>
<i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
<i><b>Supervisor</b></i>: Robert Lagerström<br>
<i><b>Examiner</b></i>: Pawel Herman
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34594">CVE-2021-34594</a></dt>
<dd>
Relative path traversal vulnerability through TwinCAT OPC UA Server.
<br>
<i><b>Collaboration between</b></i>:<br>
Beckoff Security Advisory<br>
Johannes Olegård<br>
Emre Süren<br>
Robert Lagerström<br>
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-34087">CVE-2021-34087</a></dt>
<dd>
In Ultimaker S3 3D printer, Ultimaker S5 3D printer, Ultimaker 3 3D printer S-line through 6.3 and Ultimaker 3 through 5.2.16, the local webserver can be used for clickjacking. This includes the settings page.<br>
<i><b>Students</b></i>: Linus Backlund & Linnéa Ridderström<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Anita Kullen
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-34086">CVE-2021-34086</a></dt>
<dd>
In Ultimaker S3 3D printer, Ultimaker S5 3D printer, Ultimaker 3 3D printer S-line through 6.3 and Ultimaker 3 through 5.2.16, the local webserver hosts APIs vulnerable to CSRF. They do not verify incoming requests.<br>
<i><b>Students</b></i>: Linus Backlund & Linnéa Ridderström<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Anita Kullen
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-33197">CVE-2021-33197</a></dt>
<dd>
In Go before 1.15.13 and 1.16.x before 1.16.5, some configurations of ReverseProxy (from net/http/httputil) result in a situation where an attacker is able to drop arbitrary headers.
<br>
<i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
<i><b>Supervisor</b></i>: Robert Lagerström<br>
<i><b>Examiner</b></i>: Pawel Herman
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-33039">CVE-2021-33039</a></dt>
<dd>
Reserved.
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-32715">CVE-2021-32715</a></dt>
<dd>
hyper is an HTTP library for rust. hyper's HTTP/1 server code had a flaw that incorrectly parses and accepts requests with a `Content-Length` header with a prefixed plus sign, when it should have been rejected as illegal.
<br>
<i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
<i><b>Supervisor</b></i>: Robert Lagerström<br>
<i><b>Examiner</b></i>: Pawel Herman
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-32714">CVE-2021-32714</a></dt>
<dd>
hyper is an HTTP library for Rust. In versions prior to 0.14.10, hyper's HTTP server and client code had a flaw that could trigger an integer overflow when decoding chunk sizes that are too big.
<br>
<i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
<i><b>Supervisor</b></i>: Robert Lagerström<br>
<i><b>Examiner</b></i>: Pawel Herman
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-32471">CVE-2021-32471</a></dt>
<dd>
Insufficient input validation in the Marvin Minsky 1967 implementation of the Universal Turing Machine allows program users to execute arbitrary code via crafted data.
<br>
Pontus Johnson<br>
Proof-of-concept code from Compsci boffin
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-22960">CVE-2021-22960</a></dt>
<dd>
The parse function in llhttp < 2.1.4 and < 6.0.6. ignores chunk extensions when parsing the body of chunked requests. This leads to HTTP Request Smuggling (HRS) under certain conditions.
<br>
<i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
<i><b>Supervisor</b></i>: Robert Lagerström<br>
<i><b>Examiner</b></i>: Pawel Herman
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-22959">CVE-2021-22959</a></dt>
<dd>
The http parser accepts requests with a space (SP) right after the header name before the colon. This can lead to HTTP Request Smuggling (HRS).
<br>
<i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
<i><b>Supervisor</b></i>: Robert Lagerström<br>
<i><b>Examiner</b></i>: Pawel Herman
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-22263">CVE-2021-22263</a></dt>
<dd>
An issue has been discovered in GitLab affecting all versions starting from 13.0 before 14.0.9, all versions starting from 14.1 before 14.1.4, all versions starting from 14.2 before 14.2.2. A user account with 'external' status which is granted 'Maintainer' role on any project on the GitLab instance where 'project tokens' are allowed may elevate its privilege to 'Internal' and access Internal projects.<br>
<i><b>Students</b></i>: John Augustsson & Johan Carlsson<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Mathias Ekstedt
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-22228">CVE-2021-22228</a></dt>
<dd>
An issue has been discovered in GitLab affecting all versions. Improper access control allows unauthorised users to access project details using Graphql.
<br>
<i><b>Students</b></i>: John Augustsson & Johan Carlsson<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Mathias Ekstedt
</dd>

</dl>

<h3 id="2020"> 2020 </h3>

<dl>
<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2020-29664">CVE-2020-29664</a></dt>
<dd>
A command injection issue in dji_sys in DJI Mavic 2 Remote Controller before firmware version 01.00.0510 allows for code execution via a malicious firmware upgrade packet.
<br>
<i><b>Students</b></i>: Viktor Edström & Eldar Zeynalli <br>
<i><b>Supervisor</b></i>: Robert Lagerström<br>
<i><b>Examiner</b></i>: Pawel Herman
</dd>

<dt><a href="https://us-cert.cisa.gov/ics/advisories/icsa-20-343-07">CVE-2020-28396</a></dt>
<dd>
A Protection Mechanism Failure was found in Siemens SICAM A8000 Remote Terminal Unit Series.
<br>
<i><b>Student</b></i>: Sam Hamra<br>
<i><b>Supervisor</b></i>: Mathias Ekstedt<br>
<i><b>Examiner</b></i>: Pontus Johnson
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2020-15781">CVE-2020-15781</a></dt>
<dd>

XSS in Siemens SICAM A8000 RTUs.
<br>
<i><b>Student</b></i>: Emma Good<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Mathias Ekstedt
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-15019">CVE-2020-15019</a></dt>
<dd>
Reserved.
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-13119">CVE-2020-13119</a></dt>
<dd>
ismartgate PRO 1.5.9 is vulnerable to clickjacking.
<br>
<i><b>Student</b></i>: Madeleine Berner<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström

</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12843">CVE-2020-12843</a></dt>
<dd>
ismartgate PRO 1.5.9 is vulnerable to malicious file uploads via the form for uploading sounds to garage doors. The magic bytes for WAV must be used.
<br>
<i><b>Student</b></i>: Madeleine Berner<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12842">CVE-2020-12842</a></dt>
<dd>
ismartgate PRO 1.5.9 is vulnerable to privilege escalation by appending PHP code to /cron/checkUserExpirationDate.php.
<br>
<i><b>Student</b></i>: Madeleine Berner<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12841">CVE-2020-12841</a></dt>
<dd>
ismartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to upload imae files via /index.php.
<br>
<i><b>Student</b></i>: Madeleine Berner<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12840">CVE-2020-12840</a></dt>
<dd>
ismartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to upload sound files via /index.php.
<br>
<i><b>Student</b></i>: Madeleine Berner<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12839">CVE-2020-12839</a></dt>
<dd>
ismartgate PRO 1.5.9 is vulnerable to privilege escalation by appending PHP code to /cron/checkExpirationDate.php.
<br>
<i><b>Student</b></i>: Madeleine Berner<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12838">CVE-2020-12838</a></dt>
<dd>
ismartgate PRO 1.5.9 is vulnerable to privilege escalation by appending PHP code to /cron/mailAdmin.php.
<br>
<i><b>Student</b></i>: Madeleine Berner<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12837">CVE-2020-12837</a></dt>
<dd>
ismartgate PRO 1.5.9 is vulnerable to malicious file uploads via the form for uploading images to garage doors. The magic bytes of PNG must be used.
<br>
<i><b>Student</b></i>: Madeleine Berner<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12282">CVE-2020-12282</a></dt>
<dd>
iSmartgate PRO 1.5.9 is vulnerable to CSRF via the busca parameter in the form used for searching for users, accessible via /index.php. (This can be combined with reflected XSS.)
<br>
<i><b>Student</b></i>: Madeleine Berner<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12281">CVE-2020-12281</a></dt>
<dd>
iSmartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to create a new user via /index.php.
<br>
<i><b>Student</b></i>: Madeleine Berner<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-12280">CVE-2020-12280</a></dt>
<dd>
iSmartgate PRO 1.5.9 is vulnerable to CSRF that allows remote attackers to open/close a specified garage door/gate via /isg/opendoor.php.
<br>
<i><b>Student</b></i>: Madeleine Berner<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

</dl>

<h3 id="2019"> 2019 </h3>

<dl>
<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12944">CVE-2019-12944</a></dt>
<dd>

Glue Smart Lock 2.7.8 devices do not properly block guest access in certain situations where the network connection is unavailable.
<br>
<i><b>Student</b></i>: Arvid Viderberg<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12943">CVE-2019-12943</a></dt>
<dd>

Insecure permission, password reset function, in TTLock Open Platform.
<br>
<i><b>Student</b></i>: Arvid Viderberg<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12942">CVE-2019-12942</a></dt>
<dd>

Insecure permission, account revocation mechanism, in TTLock Open Platform.
<br>
<i><b>Student</b></i>: Arvid Viderberg<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12941">CVE-2019-12941</a></dt>
<dd>
AutoPi Wi-Fi/NB and 4G/LTE devices allows an attacker to perform a brute-force attack or dictionary attack to gain access to the WiFi network, which provides root access to the device.
<br>
<i><b>Students</b></i>: Aldin Burdzovic and Jonathan Matsson<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12821">CVE-2019-12821</a></dt>
<dd>
Vulnerability in the app 2.0 of the Shenzhen Jisiwei i3 robot vacuum cleaner, while adding a device to the account using a QR-code.
<br>
<i><b>Students</b></i>: Theodor Olsson and Albin Larsson Forsberg<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12820">CVE-2019-12820</a></dt>
<dd>
Vulnerability in the app 2.0 of the Shenzhen Jisiwei i3 robot vacuum cleaner, possible MiTM attack on http.
<br>
<i><b>Students</b></i>: Theodor Olsson and Albin Larsson Forsberg<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12797">CVE-2019-12797</a></dt>
<dd>
Vulnerability in a clone version of an ELM327 OBD2 Bluetooth device, hardcoded PIN leading to arbitrary commands to an OBD-II bus of a vehicle.
<br>
<i><b>Students</b></i>: Ludvig Christensen and Daniel Dannberg<br>
<i><b>Supervisor</b></i>: Pontus Johnson<br>
<i><b>Examiner</b></i>: Robert Lagerström
</dd>

</dl>

<h3 id="2018"> 2018 </h3>

<dl>
<dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2018-3786">CVE-2018-3786</a></dt>
<dd>
A command injection vulnerability in egg-scripts v2.8.1 allows arbitrary shell command execution through a maliciously crafted command line argument.
<br>
Pontus Johnson
</dd>

</dl>

</div>

<script>
    var btnCat = document.getElementById("button1");
    var btnDate = document.getElementById("button2");
    var byCat = document.getElementById("byclass");
    var byDate = document.getElementById("bydate");
    btnCat.addEventListener("click", function() {
        byCat.style.display = "block";
        byDate.style.display = "none";
    });
    btnDate.addEventListener("click", function() {
        byCat.style.display = "none";
        byDate.style.display = "block";
    });
</script>