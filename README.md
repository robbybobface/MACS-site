# MACS - A Modular Accessible Controller System

## Northeastern University EECE 2023 Capstone Competition Submission

### By Jarrett Anderson, William Freeman, Liam Kennedy, Michael McCooey, Natalie Potapov, and Jeff Zhou

---

This repo contains the code for the website that explore the development of MACS as our Capstone Submission. MACS was awarded 1st place at Northeastern's EECE 2023 Capstone Competition.

## Abstract

---

In recent years, video gaming has become a cornerstone of digital entertainment. Despite this, the rigid form factor of controllers and their proprietary interfaces make for an inflexible and inaccessible gaming experience that alienates a vast percentage of the population. Although companies like Microsoft and Sony have developed their own modular controllers, their attempts have left something to be desired. The MACS (Modular Accessible Controller System) seeks to address these problems using specially designed input modules that allow users to customize their controller according to their needs and preferences, enabling a more personalized and immersive experience.

To use the MACS, users assemble their controller by attaching hexagonal input modules either to a special module called the “central hub”, or to other modules. Users can select modules from a wide array of input types, including buttons, switches, dials, sliders, and joysticks. On connection, a module’s position relative to the central hub is calculated, saved, and sent to a computer, via a USB connection, running a custom configuration application. These coordinates are determined by PWM signals that each module sends to and receives from its neighbors. The app uses these coordinates to render the topology of the controller, which facilitates configuration of the modules. To detect user inputs, the central hub polls each module on the I2C bus for input data roughly once every millisecond. The central hub then uses this data to construct a USB report which is forwarded to the application. On the app, user configuration allows for non-traditional input mappings; for instance, a push button can be mapped to an analog input, such as a trigger. This makes the controller more flexible and customizable by allowing users to choose their favorite input types and remap those inputs according to their needs. The app then emulates these inputs on a virtual controller using the XInput interface.

The MACS is capable of handling arbitrarily many modules and input types, limited only by power supply, I2C bus length restrictions, and latency incurred by polling each module. As of now, the MACS supports up to 5 types of input modules; these modules are hot-swappable and can be rearranged and reconfigured as the user sees fit. The MACS is also compatible with any game system that supports XInput emulation, and given more time, more gaming platforms can be supported. Lastly, MACS can support any arbitrary digital or analog input type, which means modules can be created specifically to accommodate certain disabilities. In view of this, the MACS serves as a platform that enables people to enjoy video games regardless of any medical conditions or impairments.
