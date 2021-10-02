---
title: Prerequisites
parent: Creating Threat Models
grand_parent: Hacking Guides
has_children: false
nav_order: 1
---

# Prerequisites

In order to run MAL and the DSL:s you need

1. jdk 11

2. Maven

## How to install jdk 11 on macOS

Start with checking with version of java you're using. 
```
% java --version
````
If you already have Java 11 then you do not need to do anything. Else do the following

```
brew install java11

sudo ln -sfn /usr/local/opt/openjdk@11/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-11.jdk

export JAVA_11_HOME=$(/usr/libexec/java_home -v11)\

alias java11='export JAVA_HOME=$JAVA_11_HOME'\
```
now you can change to jdk 11 with the command java11.

## How to install jdk 11 on Ubuntu

Ubuntu 18.04 should have jdk11 by default. Just as with macOS you check the version with the command

```
java --version
```

If you need to install jdk 11 for Ubuntu 18.04 do
```
sudo add-apt-repository ppa:linuxuprising/java

sudo apt update

sudo apt install oracle-java11-set-default
```

If you use Ubuntu 20.04
```
sudo apt update

sudo apt install openjdk-11-jdk
```
## How to install jdk 11 on Windows

You can find instructions how to install jdk 11 on Windows [here](https://docs.oracle.com/en/java/javase/11/install/installation-jdk-microsoft-windows-platforms.html#GUID-A7E27B90-A28D-4237-9383-A58B416071CA).

## Maven

You can find link to Maven and how to install it [here](https://maven.apache.org/install.html).
