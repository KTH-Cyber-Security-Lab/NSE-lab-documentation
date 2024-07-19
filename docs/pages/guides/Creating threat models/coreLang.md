---
title: coreLang
parent: Creating Threat Models
grand_parent: Hacking Guides
has_children: false
nav_order: 4
---

# coreLang

## Introduction

coreLang is a domain specific language (DSL) built with the meta attack language (MAL). coreLang focuses on modelling IT infrastructure. The language contains five different categories: System, Networking, Vulnerability, IAM, User and Data resources. MAL assumes that all attack steps are known but with coreLang, using the Vulnerability-assets, the user can use unknown vulnerabilities in the model.

## Overview

coreLang contains 6 different categories of assets. These are

1. Data resources
2. Vulnerability
3. System
4. IAM
5. User
6. Networking


## Installation

To install coreLang, do the following steps

```
git clone https://github.com/mal-lang/coreLang.git

cd path/to/coreLang

mvn test
```

if you have a securiCAD-key you can create a .jar-file to use with the command

```
mvn package -PsecuriCAD
```

When you open securiCAD the program will prompt you to chose a *.jar file. You will find your coreLang.jar at path-to-project/coreLang/target/corelang-\*.jar. Load the file and now you can drag and drop the assets and connect them in securiCAD.