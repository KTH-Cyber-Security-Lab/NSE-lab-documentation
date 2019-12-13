---
title: Introduction to Clusterfuzz
parent: Fuzzing
has_children: false
nav_order: 2
---

# Introduction to Clusterfuzz

Clusterfuzz is a scalable fuzzing infrastructure offered by Google. It allows you to use the Google Cloud Platform to systematically and efficiently fuzz software in order to find security issues. At NSE we want students to use the Clusterfuzz service we have set up to analyse the security of software as part of their research.

## What is fuzzing?

Fuzzing is an automated method of testing software by supplying it with a large number of inputs. The type of input is determined by the method of fuzzing you use. In the early days fuzzing produced completely random inputs to try and cause bugs in the target software, however now most fuzzing engines create variations on the software's valid input in order to cause unexpected behavior deep in the code. There are many types of fuzzing tools, two of the most popular and the ones used in Clusterfuzz are [AFL](https://github.com/google/AFL) and [Libfuzzer](https://llvm.org/docs/LibFuzzer.html). You should read through the concise Wikipedia [article](https://en.wikipedia.org/wiki/Fuzzing) on fuzzing to get a better understanding of this process.

## How does Clusterfuzz work?

Clusterfuzz's main selling point is that instead of using your own machines or servers to fuzz, you use Google's cloud platform. When you create your own instance of Clusterfuzz it launches a web application that allows users to upload their target software to fuzz and offers a nice UI for the results from fuzzing. I recommend reading through the Clusterfuzz documentation to get a better understanding on how to use the Clusterfuzz web interface.

