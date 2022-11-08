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
</style>

# Vulnerabilities Found

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

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-41136)">CVE-2021-41136</a></dt>
  <dd>
    Puma is a HTTP 1.1 server for Ruby/Rack applications. Prior to versions 5.5.1 and 4.3.9, using `puma` with a proxy which forwards HTTP header values which contain the LF character could allow HTTP request smuggling.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
    </dd>


  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-38512)">CVE-2021-38512</a></dt>
  <dd>
    An issue was discovered in the actix-http crate before 3.0.0-beta.9 for Rust. HTTP/1 request smuggling (aka HRS) can occur, potentially leading to credential disclosure.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
    </dd>


  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-37555)">CVE-2021-37555</a></dt>
  <dd>
    TX9 Automatic Food Dispenser v3.2.57 devices allow access to a shell as root/superuser.
    <br>
    <i><b>Student</b></i>: Julia Lokrantz<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Ibrahim Orhan
    </dd>


  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-33197)">CVE-2021-33197</a></dt>
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

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-32715)">CVE-2021-32715</a></dt>
  <dd>
    hyper is an HTTP library for rust. hyper's HTTP/1 server code had a flaw that incorrectly parses and accepts requests with a `Content-Length` header with a prefixed plus sign, when it should have been rejected as illegal.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
    </dd>


  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-32714)">CVE-2021-32714</a></dt>
  <dd>
    hyper is an HTTP library for Rust. In versions prior to 0.14.10, hyper's HTTP server and client code had a flaw that could trigger an integer overflow when decoding chunk sizes that are too big.
    <br>
    <i><b>Students</b></i>: Asta Olofsson & Mattias Grenfeldt<br>
    <i><b>Supervisor</b></i>: Robert Lagerström<br>
    <i><b>Examiner</b></i>: Pawel Herman
    </dd>


  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2021-32471)">CVE-2021-32471</a></dt>
  <dd>
    Insufficient input validation in the Marvin Minsky 1967 implementation of the Universal Turing Machine allows program users to execute arbitrary code via crafted data.
    <br>
    Pontus Johnson<br>
    Proof-of-concept code from Compsci boffin

  </dd>

  <dt><a href="https://us-cert.cisa.gov/ics/advisories/icsa-20-343-07)">CVE-2020-28396</a></dt>
  <dd>
    A Protection Mechanism Failure was found in Siemens SICAM A8000 Remote Terminal Unit Series.
    <br>
    <i><b>Student</b></i>: Sam Hamra<br>
    <i><b>Supervisor</b></i>: Mathias Ekstedt<br>
    <i><b>Examiner</b></i>: Pontus Johnson
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

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2020-15781">CVE-2020-15781</a></dt>
  <dd>

    XSS in Siemens SICAM A8000 RTUs.
    <br>
    <i><b>Student</b></i>: Emma Good<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Mathias Ekstedt
  </dd>

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2019-12941">CVE-2019-12941</a></dt>
  <dd>

    AutoPi Wi-Fi/NB and 4G/LTE devices allows an attacker to perform a brute-force attack or dictionary attack to gain access to the WiFi network, which provides root access to the device.
    <br>
    <i><b>Students</b></i>: Aldin Burdzovic and Jonathan Matsson<br>
    <i><b>Supervisor</b></i>: Pontus Johnson<br>
    <i><b>Examiner</b></i>: Robert Lagerström
  </dd>

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

  <dt><a href="https://nvd.nist.gov/vuln/detail/CVE-2018-3786">CVE-2018-3786</a></dt>
  <dd>
    A command injection vulnerability in egg-scripts v2.8.1 allows arbitrary shell command execution through a maliciously crafted command line argument.
    <br>
    Pontus Johnson
  </dd>

</dl>
