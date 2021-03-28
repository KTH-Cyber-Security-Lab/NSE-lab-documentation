---
title: 0x04 - Analyzing JTAG
parent: Hardware Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 4
---

# Analyzing JTAG
  
## 1. JTAG Internals
* JTAG is a hardware (debug) interface that communicates directly with the microcontroller
  * If the IoT device is not running a full-fledged OS or 
  * the hardware does not provide a serial interface, 
  * a lower-level debug approach, JTAG, is usually available
* JTAG is a standard way of testing and debugging chips on the device
  * identifying manufacturing defects
    * identifying faulty components 
    * missing components in a PCB
    * unconnected pins or incorrect placement of the device
  * device failure conditions
  * accessing individual pin values on each chip
  * overall system testing
  * debugging the various chips (actually running binaries or firmware)
* JTAG is not exactly a communication protocol
* Access instructions are found on the chip or on the microcontroller specification

* Operation mechanism
  * Testing technique is known as Boundary Scan
    * sends a data into one of the chips
    * compares the output to the input
    * verifies if it is OK
  * Boundary Scan cells embedded into the chips itself (near each pin)
  * Boundary Scan description language file 
    * defines the capabilities of any single device’s Boundary Scan logic
  * Boundary Scan instructions
    * BYPASS
    * SAMPLE/PRELOAD
    * EXTEST
    
  * TAP pins
    * TAP is a collective name given to the JTAG interfaces on a device
    * Test Clock (TCK)
    * Test Data In (TDI)
    * Test Data Out (TDO)
    * Test Mode Select (TMS)
    * Test Reset (TRST, optional)
  * TAP controller machine
    * consists of TCK, TMS, TRST
    * manages the overall exchange of data and instructions
  * I/O pins of the device
    * are connected serially that form a chain
    * accessed by the Test Access Port (TAP) for testing
    
  * Testing (Boundary Scan) Process
    * TAP controller applies test data on the TDI pins
    * BSR (Boundary Scan Register) monitors the input to the device
    * Data is captured by the Boundary Scan cell
    * Data then goes in the device through the TDI pins
    * Data comes out of the device through the TDO pins
    * Tester verifies the data on the output pin of the device

## 2. Pentest objectives
* Bypass almost all software based security controls
  * set breakpoints
  * inspect/modify registers/memory/stack
  * change binary/firmware execution flow
  * inject code into the process memory
  * bypass login
* Read from/write to flash chip
  * if PCB has JTAG access available and 
    * contains an onboard flash chip, then the contents can be read/written via JTAG
  * dump firmware/bootloader
  * write backdoored firmware
  * flash modified firmware to device for bypassing restrictions
* Debug interfaces sometimes deactivated intentionally for security purposes
  * either by software or hardware
  
## 3. Tools
* JTAG pinout identifier
  * JTAGulator (or)
  * JTAGEnum Arduino
* Communication
  * minicom (or)
  * screen (or)
  * Attify Badge GUI
* JTAG Converter/Adapter (any supported FTDI based hardware)
  * USB-TTL (or)
  * BusPriate (or)
  * Attify Badge (or)
  * Segger J-Link
* OpenOCD
* GDB-Multiarch

## 4. Identify JTAG pinouts
* Look JTAG pinouts up online to learn appearance
  * instead of pins or pads with holes, PCB usually have plain pads for JTAG
  * therefore soldering experience is needed
    * to gain experience practice on Raspberry Pi or Intel Galileo
* Open the device
* Identify the JTAG pads on the PCB

  TCK  | Test Clock 
  TDI  | Test Data In
  TDO  | Test Data Out
  TMS  | Test Mode Select

* Method1: JTAGulator
  * open-source hardware
  * has 24 I/O channels
  * discovers JTAG and UART pinouts
  * screen or minicom is used for interaction
  
  * connect relevant pins on target device to the JTAGulator channels
  * connect GND to GND
  
  * run a screen with the baudrate (need to identify before)

    `screen /dev/ttyUSB0 115200`

  * on the command line
    * enter V to set voltage (i.e 3.3)
    * enter B to set number of channels for BYPASS scan instruction
  * JTAGulator identifies corresponding pinouts
  
* Method2: Arduino flashed with JTAGEnum
  * much cheaper and slower
  * discovers only JTAG pinouts
  * Arduiono IDE
    * paste JTAGEnum application code
    * select port and Arduino type from menu options
    * upload
  * interact with Arduino via a serial connection
    * Serial Monitor of Arduino IDE or
    * screen or
    * minicom
  * on the command line
    * enter s to start scanning
  * JTAGEnum identifies corresponding pinouts
    
## 5. Connecting JTAG
* OpenOCD
  * open-source software
  * to perform On Chip Debugging via JTAG
  * interacts with a hardware debugger's JTAG port
    * debug chips
    * set breakpoints
    * program and interact flash chips
    * dump firmware and sensitive data
    
* Adapter (Attify Badge) pin layout

  D0  | TCK Test Clock
  D1  | TDI Test Data In
  D2  | TDO Test Data Out
  D3  | TMS Test Mode Select

* Connect the JTAG pins to the adapter (Attify Badge)

  JTAG  | Adapter
  ---|---
  CLK  | TCK (D0)
  TDI  | TDI (D1)
  TDO  | TDO (D2)
  TMS  | TMS (D3)
    
  * NOTE: The pins functioning as CLK, TDI, TDO, and TMS differs
    * based on the processor or controller of the target device.
    * Need to review datasheet
  * find the OpenOCD configuration file for the adapter (Attify Badge JTAG)
    *  badge.cfg is available
  * find the configuration file for the device
    * check if the target device's TAP controller is supported by OpenOCD

      `ls openocs/tcl/<target>`
    * if it does not exists, manually create one for it
  
  ```
  openocd –c "telnet_port 2121" –f badge.cfg –f target.cfg
  
  telnet localhost 2121
  reset init
  flash banks
  halt
  ```

## 6. Read data
* Read data over JTAG
* Method 1

  ```
  flash banks
  dump_image firmware.bin 0x08000000 0x00010000
  flash banks
  ```

* Method 2

  `mwd 0x00 0x20`
    
## 7. Write data to target
* Write data over JTAG
 
  ```
  flash banks
  flash write_image erase firmware.bin 0x08000000
  flash banks
  ```

## 8. Debugging with GDB
```
gdb-multiarch program.bin
  set architecture arm
  target remote localhost:3333
```
* hbreak < function-name >
* continue standard binary reversing

## References

* [JTAG Explained](https://blog.senr.io/blog/jtag-explained)
