---
title: 0x02 - Analyzing ZigBee
parent: Radio Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 2
---

# Analyzing ZigBee

## 1. ZigBee internals
* Designed for low-power usage and low data transfer rate
* Allows devices to communicate using a mesh network topology
	
* Stack

	Application layer	| Customer application
	Application profile	| ZigBee
	Application framework	| ZigBee
	Network layer	| ZigBee
	MAC layer	| IEEE 802.15.4
	PHY layer	| IEEE 802.15.4

* Coordinator
	* selecting the correct channel (among 16 channels)
	* creating a network
	* forming security settings
	* handling authentication
	* (even) acting as a router
* Router
	* routes traffic in ZigBee network
* End devices
	* perform any task
	* usually sleep to save power
	* only wake up on a read or write request
		
* Addressing
	* MAC layer -> GUID of 64-bit
	* NWK address -> 16-bit
* Broadcast
	* send data to address 0xFFFF
* Communication is established with 3 data
	* address of the target
	* endpoint number
	* cluster ID

* ZigBee protocol implementation in devices
	* System-on-Chip (SoC)
		* functions and implementation are handled in a single chip
	* Network Co-processor (NXP)
		* similar to SoC
		* functions are handled through a serial interface (i.e. UART)
	* Microcontroller and Transreceiver
		* microcontroller handles functions and implementation of ZigBee stack
		* Transreceiver manages PHY and MAC layer
		
## 2. ZigBee pentest objectives
* Intercept (capture) traffic
* Replay attack
	* requires lack of CRC verification implementation
* Jam signals
		
## 3. ZigBee radio development module (hardware)
* Contains a combination of digital logic circuitry with analog circuits

* Xbee
	* plug-in Xbee to analysis computer
	* run XCTU utility
		* press 'Search Radio modules'
		* Select the  ports to scan
			* usbserial-*
		* Set port parameters
			* baud rate 2400 and 9600
			* 8 data bits, no parity bit, and one stop bit (8N1)
			* Flow control is None
		* identifies the MAC address of the radio device connected to usbserial-* port
		* XCTU allows to change various properties of the radio device (Xbee)
			* set the channel (i.e. 16)
			
* Arduino
	* plug-in Xbee to Arduino board
	* paste the vulnerable code Xbee_Password_Core
		* a simple authentication app over the ZigBee network
	* flash the code into Arduino board

## 4. ZigBee radio analysis (hardware)
* KillerBee
	* open-source toolkit for ZigBee communication analysis
	* supports various ZigBee sniffing hardware (i.e. Atmel RzRaven USB Stick)

* Atmel RzRaven USB Stick
	* flash the KillerBee firmware on to RzRaven using AVR Dragon over JTAG interface 
	* plug-in RzRaven to analysis computer
	
	* download and setup KillerBee on analysis computer
    
      ```
      cd killerbee/tools
      ./zbid
      ```
		
  * it will find RzRaven device with the Serial number FFFF…
			
* Identify the channel ID of the target device (Xbee) is operating
	* zbstumbler from KillerBee toolkit

	    `./zbstumbler –v`
	* when a frame is received for a beacon request, it means channel is found
		
* Sniffing traffic (actually channel)
	* zbdump from KillerBee toolkit
	
      `./zbdump -c <CHANNEL_ID> - w dump.pcap`
	
* Generate traffic
	* open serial monitor in Arduino
	* i.e. try authenticating with target device
	
* Real-time analysis rather than dumping to a file
	* zbwireshark from KillerBee toolkit
	
      `./zbwireshark-c <CHANNEL_ID>`
	
* Attify ZigBee Framework
	* a GUI toolkit built on top of KillerBee
	* set channel ID to capture, number of packets to capture, capture file location
	* generate traffic (press any button of the device)
	
* Replaying packets (Replay attack)
	* run Attify ZigBee Framework
	* set channel ID, delay (to 0.4), pcap file location,  number of packets to replay
	* observe that device will function without user interaction



