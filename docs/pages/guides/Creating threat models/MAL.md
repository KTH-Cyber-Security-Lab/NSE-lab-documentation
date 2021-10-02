---
title: MAL
parent: Creating Threat Models
grand_parent: Hacking Guides
has_children: false
nav_order: 2
---

# Meta Attack Language

## Introduction
Meta Attack Language (MAL) is a meta language designed to create domain specific-languages (DSL). It allows the user to create probabilistic attack graphs by defining assets and the relationship between these assets, a DSL. This allows the user to create unique networks and systems and run attack simulations without defining each asset every time. 

A short overview how the process work. First  define the different assets and relationships in a .mal file using MAL. Then the malcompiler compile the asstes into java-classes and the relationships into java-fields. This code can then be used either through securiCAD with a license or in a java program for free.

## Overview

MAL consists of categories, assets and associations. 

Categories groups assets together. For example, the category "Animals" could contain the assets "Dog", "Cat" and "Cow". The category "Trees" could contain the assets "Pine", "Oak" and "Birch".

Assets defines the objects or systems that the user want to connect to eachother. Using the above example, an asset could be a dog and it contains four legs. Accessing and using these legs, the dog can walk to the cat.

Associations connects the assets together.

Full syntax documenation can be found [here](https://github.com/mal-lang/mal-documentation/wiki/MAL-Syntax).



## Examples

A small example how to create a small DSL. In this DSL there should exist a computer and a web server. First create the necessary catagories.

```java
category Personal_Computers {

}

category Servers {

}
```
The category names are not important but good for structure. Lets create a computer inside the category Personal_Computers and a webserver inside Servers.

```java
category Personal_Computers {
  asset Computer {
  }
}

category Servers {
  asset Webserver {
  }
}
```
The computer and webserver has no properties at the moment, they just exist. Here is the step where the attack graph is defined. What are the connections between the assets? Lets imagine that an attacker can attack the computer and through it attack the webserver.

```java
category Personal_Computers {
  asset Computer {
    | attack -> myWebserver.attack
  }
}

category Servers {
  asset Webserver {
    | attack
  }
}
```
Now the only thing left is to create the association between the two assets.
```java
category Personal_Computers {
  asset Computer {
    | attack -> myWebserver.attack
  }
}

category Servers {
  asset Webserver {
    | attack
  }
}

associations {
  Computer [myComputer] 1 <-- connects --> * [myWebserver] Webserver
}
```
The association is between the Computer asset and the Webserver asset, using myComputer and myWebserver. 

You can read more how to apply these examples in the DSL ste-by-step guide.