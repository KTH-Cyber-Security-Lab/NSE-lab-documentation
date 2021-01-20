---
title: 0x01 - Analyzing SDR
parent: Radio Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 1
---

# Analyzing SDR

## 1. Software Defined Radio (SDR) internals
* Devices communicate each other via radio signals
* Without SDR
  * different radio signal processing hardware is required 
  * for the devices which communicate with different frequency
* Allows to change functionality without touching the SDR hardware (receiver/transmitter)
  * no longer need different SDR hardware for different devices
* Allows to implement radio processing functionalities 
* Allows to work with an extremely large frequency range
	
* Logic

	transmitter	| Wi-Fi router
	modulate	| data is modulated by the router with a carrier signal (of 2.4 GHz)
	transmit	| Wi-Fi router passes the final signal to air via antenna
	receiver	| wireless chip inside the laptop
	receive	| wireless chip receives signal
	demodulate	| signal is demodulated by the wireless chip to decode data to understandable format

  * Baseband signal is carried by a higher frequency wave called the carrier signal
  * Properties of final signal changes based on the properties of the carrier signal and the type of modulation

* Transmitter
  * Generates an electric current which is to be transmitted
  * Electric current emits the data which requires to be modulated
 
* Modulation
  * noise reduction
  * multiplexing
  * working with various bandwidth and frequencies
  * cable properties
  * etc.

* Modulation types

	Analog Modulation	| Amplitude, Frequency, SSB, and DSB modulation
	Digital Modulation	| ASK, FSK, PSK ,and QAM

* Analog to Digital Converter (ADC)
  * Most of the real-world data collected is analog data
  * Computers can understand digital data
  * SDR hardware tools contain ADC

* Other Terminology
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
  * if there is no verification, captured data can be replied without problem
  * otherwise it is required jamming the signal and capturing an unused radio packet
* Reverse engineer unknown protocol

## 3. Tools

OS	| Ubuntu as primary OS (not VM) recommended
GNURadio| digital and analog signal processing C++ library
GQRX	| based on GNURadio library provides analysis of frequency spectrums in a GUI
RTL-SDR | only sniff (monitor) a wide range of frequency (not capable of transmitting data)
HackRF	| open-source hardware allows to analyze radio and to transmit data
Installation | apt install gqrx gnuradio rtl-sdr hackrf
Alternative installation | https://github.com/csete/gqrx<br>https://wiki.gnuradio.org/index.php/InstallingGRFromSource<br>https://osmocom.org/projects/sdr/wiki/rtl-sdr<br>https://github.com/mossmann/hackrf/wiki/OperatingSystem-Tips#installing-hackrf-tools-manually


RTL-SDR	| 500kHz - 1766 MHz
HackRF		| 1 MHz - 6 GHz
LimeSDR	| 100 kHz to 3.8 GHz
Human ear	| 20 Hz - 20kHz
Wi-Fi & BLE	| 2.4 GHz

## 4. GNURadio
* Digital and analog signal processing C++ library
  * supports development in python
  * supports RTL-SDR, HackRF, USRP, and more hardware
  * GNURadio Companion is the GUI version
    * save workspace as a .grc file
  * GQRX is a GUI, based on GNURadio for frequency analysis 
* Allows 
  * analyzing a captured signal
  * performing demodulation
  * extracting data from signals
  * reversing unknown protocols, and more
* Advanced usage
  * audio processing
  * mobile communication analysis
  * flight and satellite tracking
  * RADAR systems
* Homework: Create a transmitter (TCP Sink) and receiver (Scope Sink) via GNURadio Companion

## 5. Identify frequency (or frequency range) of the device
* Online search
  * look up the FCC ID of the device
  * manufacturer website
  * community forums
* Visual inspection
  * external inspection
    * FCC ID might be found
  * internal inspection
    * operating frequency of the oscillator might be found (433 MHZ)
* Active scan
  * connect hardware (i.e. RTL-SDR) to analysis computer

	`lsusb`

  * run gqrx
    * select device (i.e. RTL-SDR or any hardware under test)
		
## 6. Capture the transmitted data
* Connect hardware (i.e. RTL-SDR) to analysis computer
* Start related utility (i.e. rtl_433 utility in RTL-SDR)
* Usage: `rtl_433 -f <axact frequency>`
  
  `rtl_433 -f 433920000`

* Press any buttons on the device to change transmitted data
* Observe utility (i.e. rtl_433) output 
	
## 7. Replay captured radio (known as Replay attack)
* If the frequency is commonly known, transmitting module can be found easily
* Otherwise HackRF is required
	
* Method 1: 433 MHz transmitter + Arduino Nano
  * Step 1: 433MHZ receiver is connected to the Arduino board
    * Arduino 5V  --> VCC of both transmitter and receiver
    * Arduino GND --> GND of both transmitter and receiver
    * Arduino D10 --> Data of transmitter
    * Arduino D2  --> Data of receiver 
		
  * Step 2: Import Arduino library RC_Switch to Arduino IDE
    * https://github.com/sui77/rc-switch
    * it transmits data on 433 MHz
		
  * Step 3: Start receiver 
    * execute ReceiveAdvanced implementation
    * https://github.com/sui77/rc-switch/blob/master/examples/ReceiveDemo_Advanced/
    * it starts serial monitor at 9600 baud rate
		
  * Step 4: Transmit data
    * press any buttons of the device
		
  * Step 5: Capture data
    * serial terminal will show the captured data
    * save the captured data
		
  * Step 6: Replay data
    * execute SendDemo implementation
    * https://github.com/sui77/rc-switch/tree/master/examples/SendDemo
    * paste the captured data as parameter to the sendTriState() method
			
* Method 2: Hack RF
  * connect it to analysis computer

	`hackrf_info`

  * store packet captures (sample rate, frequency, capture file)

	`hackrf_transfer –s 5 –f 433920000 –r radio.dump`

  * replay (sample rate, frequency, capture file)

	`hackrf_transfer –s 5 –f 433920000 –t radio.dump`

## 8. Decode data
* When the captured data is not understandable, it is most likely to be encoded (modulated)
* GNURadio companion
  * Step 1
    * set the 'Generate Options' to WX
    * change the 'sample rate' to 1M 
		
  * Step 2
    * move 'RTL-SDR' block and set frequency to 433.92 MHz
    * output type is 'Complex float32', we need to convert it to make data understandable
		
  * Step 3
    * move 'Complex to Mag^2'
    * connect 'RTL-SDR' to 'Complex to Mag^2'
		
  * Step 4
    * amplify the signal via 'Multiply Const' and set constant value to 20
    * connect 'Complex to Mag^2' to 'Multiply Const'
		
  * Step 5
    * move 'Wav File Sink' and set output location
    * to save the output result to a wav file
    * connect 'Multiply Const' to 'Wav File Sink'
		
  * Step 6
    * move 'WX GUI FFT Sink'
    * connect 'RTL-SDR' to 'WX GUI FFT Sink'
		
  * Step 7
    * run
    * take the saved output wav file for decoding

* Audacity
  * a tool for audio analysis
  * without the Multiply Const the signal is weak, so the wav file resulted in meaningless data
  * identify modulation type
    * On-Off Keying (OOK)
      * a form of Amplitude-Shift Keying (ASK) modulation
      * shorter pulse is 0 and longer pulse is 1
  * convert all pulses to corresponding 0 or 1
  * decode binary to decimal
  * done




