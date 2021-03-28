---
title: 0x03 - Analyzing SPI
parent: Hardware Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 3
---

# Analyzing SPI (Serial Peripheral Interface)

## 1. SPI protocol internals
* Designed for synchronous serial communication between the master and slave devices
* Master controls the clock for all the slaves
  * fastest serial clock speed in SPI is half the speed of the master clock
* SPI (Serial Peripheral Interface) implementation standard is not strict
  * manufacturers design as their wish
* Need to look up the datasheet to understand SPI implementation protocol
  
* SPI advantages
  * Speed is not limited (has faster data transmission rates compared to I2C)
  * Full-duplex (both read and write data happens at the same time)
  
* SPI downside
  * Single master protocol
  * Consists of 3 pins for data transfer and one pin for Chip/Slave select
    * increases the overall requirement of space compared to I2C
    * when there is no data to read, when there is a write request, 
      * the slave should send dummy data to make the connection established
    
## 2. Pentest objectives
* Get console access
  * custom bootloaders are designed to prevent from entering single user mode
  * but that can also be bypassed
    
## 3. Tools
* SPI Converter/Adapter (any supported FTDI based hardware)
  * USB-TTL (or)
  * BusPriate (or)
  * Attify Badge
 * spiflash.py
  
## 4. Identify the SPI Flash pinouts
* Open the device
* Visually identify the SPI flash chip on the PCB
* Note the component number printed on the SPI chip
* Look up online for the datasheet to figure out the pinouts
  
* SPI pins

    SCK  | Serial Clock
    MOSI  | Master Out Slave In
    MISO  | Master In Slave Out
    SS—Slave Select | (Active Low, output from master)
  
* SCK, MISO, and MOSI pins are shared by slaves
* Each SPI slave will have its own unique SS pin
* Master have several SS pins (SS1, SS2, …)
* Mater-slave connection table
  
    SPI Master  | SPI Slave
    ------------|------------
    SCK  | SCK
    MOSI  | MOSI
    MISO  | MISO
    SS1  | SS
  
* Master configures the clock frequency according to the slave’s clock frequency
* Master selects the slave device with a logic level 0 on the SS pin
* Master initiates the communication by sending a bit on the MOSI line
  * which is read by the slave
  * whereas the slave sends a bit on the MISO line which is read by the master
  
## 5. Connecting EEPROM
* Method 1: Hooking
  * hook mini probes to the SPI flash
* Method 2: SOIC clip
  * use a SOIC clip
* Method 3: Desoldering
  * remove SPI flash the from the PCB by de-soldering
  * solder it on a EEPROM adapter (or reader)
    * use an adapter which is suitable for EEPROM packaging type

* Adapter (Attify Badge) pin layout
  
    D0  | SCK Serial Clock
    D1  | MISO Master In Slave Out
    D2  | MOSI Master Out Slave In
    D3  | CS Chip Select
    
* Connect the SPI flash pins to the adapter (Attify Badge)
  
    SPI flash  | Adapter
    ------------|------------
    CLK  | TCK (D0)
    MOSI/DO  | TDI (D1)
    MISO/DI  | TDO (D2)
    CS  | TMS (D3)
    WP, HOLD, and Vcc | 3.3V
    GND  | GND 
    
* Connect the adapter to the analysis PC via USB
    
## 6. Reading data
* Read data from the device using an SPI flash
* Use the spiflash.py script

    ```
    /libmpsse
    ./configure
    make
    make install
    spiflash.py -s 5120000 --read=new.bin
    ```

* Dump the contents to a file
    
## 7. Writing data
* Write data to the SPI flash
* Use the spiflash.py script

  `spiflash.py -s 5120000 -w new.bin`

## References

* [Reading serial flash ROMs](https://www.youtube.com/watch?v=LxWkA1Uz2aA&ab_channel=Defenceindepth)
* [Dumping the Firmware from the device Using buspirate](https://www.iotpentest.com/2019/06/dumping-firmware-from-device-using.html)
