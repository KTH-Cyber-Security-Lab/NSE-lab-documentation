---
title: Choice of System to Explore
parent: Thesis Guidelines
has_children: false
nav_order: 3
---

## Choice of system to explore

There are many interesting [things to hack](things_to_hack.html). When choosing which system to explore, there are two main selection criteria to consider: Impact and vulnerability. During the first phase of the thesis project, the threat modeling phase, you will explore this issue in depth, but you may need to perform a superficial threat modeling already at the product selection stage. The higher the impact and vulnerability, the more pressing is the need for security testing of the system.

- Impact. How serious would the consequences be if the system were hacked?

- Vulnerability. How likely is it that you will find and exploit a vulnerability during the course of the thesis project? This will depend on many issues:

- How large is the attack surface? A device that features wifi, Bluetooth, JTAG, UART, USB, HTTP, etc may be easier to compromise than a device that only communicates over LTE, for instance.

- How complex is the product? A product with many bells and whistles will be more difficult to secure than one consisting of a single, simple function.
  
- How much time did the developers spend on security? In a price-pressed consumer market, or a start-up company, developers may not have had the resources to spend on securing the product, while that may have been a lesser problem in other markets.
 
- How competent were the developers?
 
- What is the security track record of the developing company? Some companies seem unable to create secure products, while others have an impressive track record. You can search for publicly reported vulnerabilities in the US National Vulnerability Database (NVD).

- To what extent was the system already exposed to security testing? If many security reviews were already conducted (e.g. for the major operating systems), then the low hanging fruits might already have been found, while these may still be around for products that for some reason were not reviewed. Reasons may be that the company makes it hard to review its software (e.g. Boeing), that the product is brand new, or that it caters to a small or security-unaware marketplace. 

- Can it be procured? KTH can buy interesting devices for security assessments. We consider devices costing SEK 1,000 to be pretty affordable, SEK 10,000 to be rather expensive, and SEK 100,000 very expensive. In exceptional cases, it might, however, be possible to invest in such a device. However, some devices cannot be straight-up purchased, e.g. many medical devices. In these cases, we may find collaboration partners that grant us access to the units of interest. Sometimes, the thesis project involves a company that already has access to the device to be assessed.
