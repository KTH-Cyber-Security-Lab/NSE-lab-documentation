---
title: 0x05 - Analyzing eMMC
parent: Hardware Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 5
---

# Firmware extraction from eMMC

## Method 1: eMMC tapping
* Identify a pinout for an embedded Multi Media Card (eMMC) flash chip (embedded SD card)
* Dump the contents of the chip without removing it from the PCB
* Similar to in situ reading (dumping firmware from running device)
	
Method 2: eMMC unsoldering 
* Identify a pinout for an embedded Multi Media Card (eMMC) flash chip (embedded SD card)
* Unsolder (remove) eMMC from the PCB
* Plug-in eMMC to an adapter
* Dump the contents of the chip after
	
NOTE: These two methods are also applicable to SPI Flash

## References

* [How To Root The Google OnHub](https://www.youtube.com/watch?v=ylc9pKGLaZY&ab_channel=TheExploiteers)
