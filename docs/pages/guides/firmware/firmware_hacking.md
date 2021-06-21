---
title: Firmware Hacking
parent: Hacking Guides
has_children: false
nav_order: 7
---

# Firmware Reversing Methodology

## 1. Pentest objectives

- Sensitive data exposure
- Update mechanism to capture firmware
- Local data storage
- Vulnerabilities _(i.e. buffer overflow)_ to bypass authentication and _(i.e. command injection)_ to RCE
- Security configuration

## 2. Tools

- [Binwalk firmware analysis tool](https://github.com/ReFirmLabs/binwalk)
  - Binwalk is an open source tool for extracting, analyzing, and reverse engineering firmware images
  - It scans the image for known file type signatures
    - compressed streams
    - embedded file systems
  - Most tools depend on binwalk
- [Firmware Analysis Toolkit](https://github.com/attify/firmware-analysis-toolkit)
- [Automated scanner](https://gitlab.com/bytesweep/bytesweep)
- [Firmwalker](https://github.com/craigz28/firmwalker)
- [Binary Analysis Next Generation](https://github.com/armijnhemel/binaryanalysis-ng)
- [Firmadyne](https://github.com/firmadyne/firmadyne)
- [Firmware Analysis Comparison Toolkit](https://github.com/fkie-cad/FACT_core)
- [Firmware mod kit](https://github.com/rampageX/firmware-mod-kit)
- [Angr binary analysis framework](https://github.com/angr/angr)
- [Frida](https://github.com/frida/frida)
- [Radare2](https://github.com/radareorg/radare2)
- [QEMU](https://www.qemu.org/download/)

## 3. Firmware update

- Four techniques are common to get firmware
  - download the corresponding version of the firmware from the device manufacturer's website
  - search in _Google_ and check it out in _GitHub_
  - sniff the OTA _(over-the-air)_ to get the firmware binary while the device is performing an update
  - reverse the mobile app to understand how to get the firmware binary
  - and dump the firmware from the device's _UART_ or _JTAG_ or flash chip

- An attacker could intercept firmware when it is downloaded for updating device
  - Unencrypted HTTP traffic is intercepted via a transparent proxy _(Burp Suite)_
  - HTTPS traffic can be captured only if it is possible to _MitM_ _(arpspoof + mitmproxy + Burp)_

- Firstly, all states that trigger OTA update for device/hub firmware is identified
  - In general, device firmware is updated via mobile app
    - in this case the traffic between smartphone and cloud service is intercepted
  - In addition, hub can trigger OTA update either for itself or for the device
    - in this case the traffic between hub and cloud service is intercepted
  - Moreover, a local update (rather than OTA) via an SD card sometimes is available
    - this vulnerability is related to attack surface of device physical interface

- If the vendor only transmits update partition,
  - although full-firmware is not obtained,
  - most probably sensitive data can be accessed
  - this will affect severity to a lower level

- Reference
  1. https://resources.sei.cmu.edu/library/asset-view.cfm?assetID=453871

## 4. Firmware file analysis

- A standard firmware binary image has four parts. Respectively,
  - bin header
  - firmware header
  - compressed data
  - file system

- More precisely,
  - a bootloader _(i.e. U-Boot, Barebox, RedBoot)_
  - kernel
  - some kind of compressed data _(i.e. LZMA, Gzip, zip, zlib)_
  - a file system _(i.e. Squash FS, Cramfs, JFFS2, YAFFS2, ext2)_

- The _root_ folder in file system contains
  - all binaries
  - scripts and source code
  - configurations
  - and data _(credentials, ssh keys, etc.)_
  - NOTE: The root folder might have additional file system images inside

## 5. Filesystem extraction

- Method 1 - Binwalk (automated)

  ```
  binwalk -t <firmware-image>
  binwalk -e <firmware-image>
  ```

- Method 2 - Firmware mod kit
  - set `BINWALK` in `shared-ng.config` to the path of binwalk
  - copy the firmware inside the `firmware-mod-kit/` directory

    `./extract-firmware.sh <firmware-image-file>`

- If binwalk cannot decompress the filesystem using the `-e` switch, try other alternatives
  - Try specific tools, i.e. `unsquashfs`
  
  - Sometimes files are not stored in a file system but exist as a plain flash binary file
  
  - Firmware may be a proprietary with a modified and unknown file system and sections
    - when binwalk generates false positives
    - _manually_ extract using binwalk (help binwalk by tuning parameters)
  
  - The firmware may be encrypted, confirm this with entropy analysis
    - when binwalk fails to identify any specific section

      `binwalk -E <firmware-image>`

    - high entropy with a bit of variation indicates compression
    - high entropy with flat line indicates encrypted content
    - need to identify the encryption method and keys
    - _XOR_ encryption
      - key is identified by recurring strings

        `cat encrypted.bin | python decryptxor.py > decrypted.bin`
  
  - If it is not possible to extract data, try hardware-based extraction
    - https://www.youtube.com/watch?v=0G2g-tLMK70

## 6. Filesystem analysis

- Search for _"sensitive"_ data from firmware
  - Hard-coded credentials
    - that users are unable to change
  - Default credentials
    - that users rarely change
  - Backdoor access credentials
    - that is designed to be used for customer support
  - Hash and private certificates
  - Encryption algorithms with keys
  - API keys and access tokens
  - Update or staging URLs
  - Local path names and environment details
  - Authentication and Authorization mechanisms
  - Replace user/password and/or create new password
  
- Sample search queries

  `grep -inr 'telnet'`
  
  `firmware-analysis-toolki/firmwalker.sh <firmware-root-dir>`

## 7. Static binary analysis

- Reversing libraries usually helps to find sensitive data

  ```
  radare2 -a mips -b32 libdbox.so
    aaa
    afl
  ```

  - grep for interesting strings

    ```
    afl~wifi
    afl~gen
    afl~get
    ```
  
- Disassembly of sensitive functions helps to identify certain vulnerabilities
  - command injection
    - use of unsanitized input may result in OS command execution
  - buffer overflow
    - use of insecure string handling functions such as `strcpy`, `strcat`, etc.,
    - instead of their more secure `strncpy`, `strncat` counterparts,
    - may result in buffer overflows

## 8. Dynamic binary analysis

- Debug individual binaries in firmware to see if there are any vulnerabilities

- Binary emulation
  - Get binary architecture _(ARM, MIPS, PowerPC)_

    `readelf -f <binary>`

  - Need to emulate binaries to run it in our analysis machine
    - install _qemu_ (on our analysis box)
    - copy qemu binary to the root folder of the firmware filesystem
      - qemu version should be compatible with the binary architecture
      - for example MIPS
  
        ```
        which qemu-mipsel-static        
        cp /usr/bin/qemu-mipsel-static .
        ```

  - Emulate binary (wrong way)

    `./qemu-mipsel-static ./bin/<individual binary>`
  
    - will not run, because
    - qemu tries to load required libraries from `/lib` directory of host
    - but cannot find
    - we need to say qemu to look for from `/lib` of firmware filesystem
    - we need to change the working directory path in runtime via `chown`
    - `chown firmware-fs-root-dir/ ./qemu-mipsel-static ./bin/<individual binary>`

  - Emulate binary (correct way)

    `chown . ./qemu-mipsel-static ./bin/<individual binary>`
  
- Firmware emulation
  - Advantages
    - to access all the individual binaries in the firmware image
    - to hook a debugger to any specific binary and perform vulnerability research
    - to perform remote exploitation research
    - to perform network pentest on the firmware
    - to perform web application pentest on the firmware
  
  - Challenges
    - firmware is designed to run on another architecture
      - bypass with QEMU
    - bootup process might require configurations and additional information from NVRAM
      - hook all the calls being made by the firmware to NVRAM and can fake the return values
    - firmware might be dependent on physical hardware components to run
      - no solution

  - Full emulation
    - Firmware Analysis Toolkit (FAT) based on Firmadyne
      - an interactive script
      - asks password which is _firmadyne_
      - sets up a network access
      - then runs the firmware
      - now the network services on firmware is accessible via the assigned IP

      - copy the firmware in `firmware-analysis-toolkit/`
      - in `firmadyne.config` file set `FIRMWARE_DIR` to `firmware-analysis-toolkit/`

        `python fat.py`

## 9. Firmware backdooring (Modifying sensitive data)

- Extract filesystem on firmware

- Develop a _backdoor_ (by Osanda Malith, _@OsandaMalith_) and compile it to run on specific architecture (i.e. MIPS)
  - backdoor opens a port and connects it to a binary allowing to execute commands when interacting service

  - compile programs for a different architecture than your analysis machine
    - cross-compiling toolchain _BuildRoot_

      ```
      install BuildRoot
      make menuconfig
      ```

    - navigate to the _Target Options_ and change the _Target Architecture_
    - navigate to the _Toolchain_, select_ Build Cross GDB for Host_
    - save configuration

    - `make`

    - compile `bindshell.c` with the _GCC for MIPS_, which was created by _BuildRoot_

      `./mipsel-buildroot-linux-uclibc-gcc bindshell.c -static - o bindshell`

    - bindshell can be executed on MIPS now

- Modify an `.sh` file in `/etc/init.d/` to place the backdoor path so it could be started automatically at bootup

- Recompile the firmware

  `firmware-mod-kit/build-firmware.sh <firmware-root-dir>/ -nopad -min`
  - produces `new-firmware.bin` file

- Then modified firmware is flashed to device
  - test it by emulation before flashing
  
    ```
    python fat.py
    nc <emulated-IP> <backdoor-port>
    ```

## 10. Firmware diffing (bindiff)

## 11. References

- https://www.refirmlabs.com/binwalk/
