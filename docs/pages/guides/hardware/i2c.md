---
title: 0x02 - Analyzing I2C
parent: Hardware Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 2
---

# Analyzing I2C (Inter-Integrated Circuit)

## 1. I2C protocol internals
* Bus protocols designed for data communications between different components in an embedded device
* Common modules having bus protocol
  * Flash chip
  * EEPROM chip
  * Microcontrollers
  * LCD
  * RTC (Real Time Clocks)
  * Analog to Digital Convertors (ADC)
  * etc.
* I2C and SPI are both meant for communicating with other peripherals located on the same board
* UART limitations compared to I2C
  * facilitating communication between only two devices at a given time
  * start-stop bits increase size and reduce speed of process
  * originally intended for communication for large distances, 
    * while interacting with external devices via cables
  
* Multi-master serial protocol (with multi-slaves)
* Half-duplex (send or receive) (read or write)
* Consists of 2 pins for data transfer
  * Serial Data (SDA) and Serial Clock (SCL)
* If 2 masters wanted to take control over an I2C bus at the same time?
  * Whichever master pulls the SDA to LOW (0) will gain control of the bus
  * i.e. zero rushes to win

## 2. Pentest objectives
  * Read (dump) contents (firmware and sensitive data) from a device’s flash chip
  * Write (flash) content (such as backdoor firmware image) to the flash chip
  
## 3. Tools
  * I2C Converter/Adapter (any supported FTDI based hardware)
    * USB-TTL (or)
    * BusPriate (or)
    * Attify Badge
  * i2ceeprom.py

## 4. Identify the I2C pinouts
  * Open the device
  * Visually identify the I2C EEPROM chip on the PCB
  * Note the component number printed on the I2C chip
  * Look up online for the datasheet to figure out the pinouts of EEPROM
  
  * Flash and EEPROM have common pinouts but sometimes changes according to the manufacturers
    * Flash pinouts
      * #CS, SO/IO1, SI/IO0, VSS, VCC
    * EEPROM pinouts
      * #CS, SCK, MISO, MOSI, GND, VCC, #WP, #HOLD
  
## 5. Connecting EEPROM
  * Method 1: SOIC clip
    * directly connect it to the adapter by holding the EEPROM using a SOIC clip
  * Method 2: Desoldering
    * remove the EEPROM from the PCB by de-soldering
    * solder it on a EEPROM adapter (or reader)
      * use an adapter which is suitable for EEPROM packaging type
  * SOIC clip vs desoldering
    * The memory component on the PCB is accessed using the SOIC clip or by desoldering.
    * Although the SOIC clip approach is more practical and less invasive, 
      * desoldering is sometimes unavoidable.
    * The voltage supplied to the memory through the SOIC clip sometimes also powers other chips.
    * Some of the other components on the PCB may attempt to communicate with the memory, 
      * thus blocking communication between the memory and the external adapter.
    * Therefore, it becomes imperative to remove the memory component from the PCB.
  
  * Adapter (Attify Badge) pin layout
  
    D0  | SCK Serial Clock
    D1  | SDA* Serial Data
    D2  | SDA* Serial Data

    Note: For I2C, the D1 and D2 lines need to be connected together for SDA. 
  
  * Connect the EEPROM pins to the adapter (Attify Badge)

    EEPROM  | Adapter
    --------|--------
    A0, A1, A2, GND  |  GND
    VCC   | 5V 
    WP    | 5V (Write Protect)
    SDA   | D1 and D2 of Attify badge
    CLK   | D0 of Attify badge
    
  * Connect the adapter to the analysis PC via USB
    
## 6. Reading data
  * Read data from the device using an I2C EEPROM
  * Use the i2ceeprom.py script
  * Need to modify parameters (size and speed) before start

    `eeprom.Start()`  | to start the I2C clock
    `Start`  | initialize the EEPROM
    `eeprom.Write(RCMD)`  | set EEPROM to Read mode
    `data()`  | start reading content from the EEPROM and saving it
    `Stop() Close()`  | stop and we close the I2C connection
    `write()`  | write the content to a binary file
  
  * Dump the contents to a file
  
## 7. Writing data
  * Write data to the I2C EEPROM
  * Use the `i2ceeprom.py` script

## References

* [I2C Hacking Demystified](https://elinux.org/images/d/d8/Stoppa.pdf)
