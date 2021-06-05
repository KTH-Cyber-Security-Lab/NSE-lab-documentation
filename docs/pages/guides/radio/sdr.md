---
title: 0x01 - Analyzing SDR
parent: Radio Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 1
---

# Analyzing SDR

## 1. Software Defined Radio (SDR) internals
Many devices such as car keys and garage door openers communicate with each other via radio signals.
Software Defined Radio, or SDR, is "the use of digital signal processing to implement radio functions"[1]. Without SDR, different radio signal processing hardware is required for the devices that communicate with different frequencies.

SDR allows for the changing of functionality without touching the SDR hardware (receiver/transmitter). There is no longer the need for different SDR hardware for different devices. It also allows for the implementation of radio processing functionalities, and allows us to work with an extremely large frequency range.

### Logic

|Transmitter|Wi-Fi router|
|Modulate|Data is modulated by the router with a carrier signal (of 2.4 GHz)|
|Transmit|Wi-Fi router passes the final signal to air via antenna|
|Receiver|Wireless chip inside the laptop|
|Receive|Wireless chip receives signal|
|Demodulate|Signal is demodulated by the wireless chip to decode data to understandable format|

The baseband signal is carried by a higher frequency wave called the carrier signal. Properties of the final signal changes based on the properties of the carrier signal and the type of modulation.

### Transmitter
  * Generates an electric current which is to be transmitted
  * Electric current emits the data which requires to be modulated
 
### Modulation
  * Noise reduction
  * Multiplexing
  * Working with various bandwidth and frequencies
  * Cable properties
  * Etc.

### Modulation types
Analog Modulation	| Amplitude, Frequency, SSB, and DSB modulation
Digital Modulation	| ASK, FSK, PSK ,and QAM

### Analog to Digital Converter (ADC)
  * Most of the real-world data collected is analog data
  * Computers can understand digital data
  * SDR hardware tools contain ADC

### Other Terminology
  * Sample rate
  * Fast Fourier Transform (FFT)
  * Bandwidth
  * Wavelength
  * Frequency
  * Antenna
  * Gain
  * Filters

## 2. Pentest Objectives
* Decode radio protocols
* Replay attack
  * If there is no verification, captured data can be replied without problem
  * Otherwise jamming the signal is required, and capturing an unused radio packet
* Reverse engineer unknown protocol

## 3. Tools

OS | Ubuntu as primary OS (not VM) recommended
GNURadio | Digital and analog signal processing C++ library
GQRX | Based on GNURadio library provides analysis of frequency spectrums in a GUI
RTL-SDR | Only sniff (monitor) a wide range of frequency (not capable of transmitting data)
HackRF | Open-source hardware allows to analyze radio and to transmit data
Installation | `apt install gqrx gnuradio rtl-sdr hackrf`
Alternative installation | [gqrx Github](https://github.com/csete/gqrx)<br>[GNURadio](https://wiki.gnuradio.org/index.php/InstallingGR)<br>[RTL-SDR](https://osmocom.org/projects/sdr/wiki/rtl-sdr)<br>[OS Tips for HackRF One](https://github.com/mossmann/hackrf/wiki/Operating-System-Tips)

### Frequency Guide

RTL-SDR	| 500kHz - 1766 MHz
HackRF		| 1 MHz - 6 GHz
LimeSDR	| 100 kHz to 3.8 GHz
Human ear	| 20 Hz - 20kHz
Wi-Fi & BLE	| 2.4 GHz

## 4. GNURadio
* Digital and analog signal processing C++ library
  * Supports development in python
  * Supports RTL-SDR, HackRF, USRP, and more hardware
  * GNURadio Companion is the GUI version
    * Save workspace as a .grc file
  * GQRX is a GUI, based on GNURadio for frequency analysis
* Allows for:
  * Analyzing a captured signal
  * Performing demodulation
  * Extracting data from signals
  * Reversing unknown protocols, and more
* Advanced usage
  * Audio processing
  * Mobile communication analysis
  * Flight and satellite tracking
  * RADAR systems
* Homework: Create a transmitter (TCP Sink) and receiver (Scope Sink) via GNURadio Companion

## 5. Identify frequency (or frequency range) of the device
* Online search
  * Look up the FCC ID of the device
  * Manufacturer website
  * Community forums
* Visual inspection
  * External inspection
    * FCC ID might be found on the device
  * Internal inspection
    * Operating frequency of the oscillator might be found (433 MHZ)
* Active scan
  * Connect hardware (i.e. RTL-SDR) to analysis computer

	`lsusb`

  * Run gqrx
    * select device (i.e. RTL-SDR or any hardware under test)
		
## 6. Capture the transmitted data
* Connect hardware (i.e. RTL-SDR) to analysis computer
* Start related utility (i.e. rtl_433 utility in RTL-SDR)
* Usage: `rtl_433 -f <axact frequency>`
  
  `rtl_433 -f 433920000`

* Press any buttons on the device to change transmitted data
* Observe utility (i.e. rtl_433) output
	
## 7. Replay captured radio (known as Replay attack)
If the frequency is commonly known, transmitting module can be found easily. Otherwise a HackRF is required.
	
### Method 1: 433 MHz transmitter + Arduino Nano
  1. 433MHZ receiver is connected to the Arduino board
    * Arduino 5V  --> VCC of both transmitter and receiver
    * Arduino GND --> GND of both transmitter and receiver
    * Arduino D10 --> Data of transmitter
    * Arduino D2  --> Data of receiver 
		
  2. Import Arduino library RC_Switch to Arduino IDE
    * https://github.com/sui77/rc-switch
    * It transmits data on 433 MHz
		
  3. Start receiver
    * Execute ReceiveAdvanced implementation
    * https://github.com/sui77/rc-switch/blob/master/examples/ReceiveDemo_Advanced/
    * It starts serial monitor at 9600 baud rate
		
  4. Transmit data
    * Press any buttons of the device
		
  5. Capture data
    * Serial terminal will show the captured data
    * Save the captured data
		
  6. Replay data
    * Execute SendDemo implementation
    * https://github.com/sui77/rc-switch/tree/master/examples/SendDemo
    * Paste the captured data as parameter to the sendTriState() method
			
### Method 2: HackRF
  * Connect the HackRF to the analysis computer

	`hackrf_info`

  * Store packet captures (sample rate, frequency, capture file)

	`hackrf_transfer –s 5 –f 433920000 –r radio.dump`

  * Replay (sample rate, frequency, capture file)

	`hackrf_transfer –s 5 –f 433920000 –t radio.dump`

## 8. Decode data
* When the captured data is not understandable, it is most likely encoded (modulated)
* GNURadio companion
  1.
    * Set the 'Generate Options' to WX
    * Change the 'sample rate' to 1M 
		
  2.
    * Move 'RTL-SDR' block and set frequency to 433.92 MHz
    * Output type is 'Complex float32', we need to convert it to make data understandable
		
  3.
    * Move 'Complex to Mag^2'
    * Connect 'RTL-SDR' to 'Complex to Mag^2'
		
  4.
    * Amplify the signal via 'Multiply Const' and set constant value to 20
    * Connect 'Complex to Mag^2' to 'Multiply Const'
		
  5.
    * Move 'Wav File Sink' and set output location
    * To save the output result to a wav file
    * Connect 'Multiply Const' to 'Wav File Sink'
		
  6.
    * Move 'WX GUI FFT Sink'
    * Connect 'RTL-SDR' to 'WX GUI FFT Sink'
		
  7.
    * Run
    * Take the saved output wav file for decoding

## Audacity
  * A tool for audio analysis
  * Without the Multiply Const the signal is weak, so the wav file resulted in meaningless data
  * Identify modulation type
    * On-Off Keying (OOK)
      * A form of Amplitude-Shift Keying (ASK) modulation
      * Shorter pulse is 0 and longer pulse is 1
  * Convert all pulses to corresponding 0 or 1
  * Decode binary to decimal
  * Done

## References
[1] Software Defined Radio with HackRF - Lesson 1: Welcome. Michael Ossman. Great Scott Gadgets. 2014. [https://greatscottgadgets.com/sdr/1/](https://greatscottgadgets.com/sdr/1/). (Fetched 2021-06-05)