---
title: Thesis Report
parent: Guides
has_children: false
nav_order: 7
---

# Thesis report

The final report can be organized as follows:

## Introduction
Provide the introduction, state the objectives of the project, delimitations, and outline the rest of the report.

## Background
Any related work should be presented here. That would include previous work on similar systems. If the system is based on some relevant theory, such as cryptography, database theory, operating system theory, networking theory, etc, that theory can be presented here. 

## Threat modeling methodology
Describe how you go about the threat modeling task. Convince the reader that your methodology ensures that you don't miss any important attacks. Base your method on established methods, or justify why not.

## The system under consideration
Describe the functionality and technology of the system under consideration. Even though you discovered some aspects of the system behavior and structure during penetration tests, you should probably still write about it here. 

## Threat model of the system under consideration
Draw one or several thread modeling diagrams of the system. Detail each attack that the system could be subjected to. Describe each relevant attack vector in the general case (not specifically related to your system under consideration). Refer to solid sources (e.g. papers or presentations to security conferences). This is your threat literature review. Then describe your assessment of each threat as applied to your system. Estimate the potential impact and the probability of successful exploitation. 

Choose a limited set of attack vectors for the penetration testing phase of the project. Document in the threat model how thoroughly you have explored each attack (perhaps by color coding)?

## Penetration testing
Describe the actual penetration tests here. 

### Penetration testing task #1
If the test is simple, then you won't need all the subheadings below.
#### Introduction
- Describe the attack vector to be explored

#### Method
- Describe how the testing is performed

#### Theory
- If the attack vector is based on particular theory (e.g. SQL injection requires some database theory), then that theory can be described here.

#### Results
- Describe your findings

#### Discussion
- Discuss the generalizability, reliability and validity of your findings.

### Penetration testing task #2
...

### Penetration testing task #n
...

### Discussion
Summarize the generalizability, reliability and validity of your findings.

### Conclusions
How secure is the system?

An example of a previous thesis report (which does not follow the above template, alas) can be found [here](https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1358429&dswid=9571). 
