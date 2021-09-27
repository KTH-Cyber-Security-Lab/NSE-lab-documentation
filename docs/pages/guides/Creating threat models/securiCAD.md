---
title: securiCAD
parent: Creating Threat Models
grand_parent: Hacking Guides
has_children: false
nav_order: 3
---

# securiCAD 

securiCAD is a quantitative threat modelling tool by foreseeti. It uses domain-specific languages created with MAL such ass coreLang to modell IT-infrastructure, so that the user can get an overview of what systems are at risk and what is the likelihood of these systems becoming compromised.

The strength of securiCAD is that the user do not need much or any cyber security knowledge. The user only needs knowledge about the IT infrastructure in order to generate insight about possible attack paths.

The basic functionality of the program can be found [here](https://www.youtube.com/watch?v=aDYWTVa88gk).


## Installation

1. Start with register an account at [foreseeti](https://signup.report.securicad.com/)
2. Download [securiCAD Professional](https://foreseeti.com/securicad-professional/)
3. Add the product key from the registration e-mail when starting securiCAD
4. Generate a token-file in securiCAD under "File" - "Licensing" - "Generate Token"
5. Send the token file to support@foreseeti.se for credential file
6. Add new license under "File" - "Licensing" - "Replace license"

securiCAD uses .jar-files. Access to foreseeti maven repository is required to build .jar-files that are compatible with securiCAD. Contact support@foreseeti.se for credential file. Store the file in ~/.aws/credentials for Linux and macOS and %UserProfile%\.aws\credentials for Windows.

To build a file use the command
```
mvn package -PsecuriCAD
```

## Overview

The program is divided into three parts. To the left are all objects and tools located. The middle part is the canvas where you can create your model by clicking and dragging the objects and connect them to eachother. The right section is where you can define the consequences for each component to be breach, set adjust defenses and analyze the time to compromise.