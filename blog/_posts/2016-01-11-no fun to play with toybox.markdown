---
layout: post
title:  "It ain't no fun to play with Toybox (yet)"
date:   2016-01-11
author: mfonville
---
<div markdown='1'>
![Toybox]({{ site.blogimg }}toybox.jpg)
</div>
The title might sound cryptic to most readers, but for most GApps developers 2016 did start with a lot of bug reports from CM Recovery users. Reports with errors like “I got error 255” while we don't have such error code specified ourselves, or “mount failed with error 1”. Cause of all this trouble is a new command line tool called Toybox and the decision of Cyanogenmod that the Christmas holidays were the perfect moment to embed it in their recovery instead of Busybox.

Most users will probably wonder: *what is Toybox and why did Cyanogenmod switch to it and what was Busybox in the first place?*

#### Busybox
Let's start with the last question first: *what is Busybox?* Busybox is a GPL-licensed effort that offers many Unix tools (commands that offer functionality like “copy this file”, “search for this string”, “mount this partition”) in a single small binary and already exists since 1999. The concept of it is great, it offers a lot of functionality, comparable to an operating system, but within a small 2MiB binary. As such Busybox is perfect for use in embedded software or, more applicable to our situation, the Android recovery.
That is why TWRP, CWM and until recently CM Recovery were all using Busybox as core provider of functionality. It is a powerful tool that enabled us to use advanced logic within the Open GApps installer.

#### Toybox
But *what is Toybox?* Toybox's goal and functionality are meant to be just like Busybox and it is even being developed by the very same person that maintained Busybox for many years ([Rob Landley](https://landley.net)). But where Busybox is licensed as GPLv2, Toybox is using the BSD license. Because Google has chosen for a policy to not include any GPL in Android's user space, it disqualified Busybox to be included in Android's upstream AOSP recovery repository. But Toybox does have a compatible license which enables it to be upstreamed into AOSP. This is in general a very positive development, because a more powerful recovery in AOSP is very welcome.

Toybox is not yet finished though (see the [current status here](https://landley.net/toybox/status.html)). While the original recovery in the AOSP project had barely any capabilities, for them the adaptation of the still under-development Toybox is a huge step forward. But the alternative recoveries were using the powerful Busybox. CM Recovery decided to switch from Busybox to Toybox. But because Toybox still does miss some essential commands that we rely on in the Open GApps installer (`unzip`, `awk`, `xz`) that are not implemented (yet). This breaks the Open GApps installer on CM Recoveries that are bundled with the CM13 nightlies.

#### CM Recovery
*Why did Cyanogenmod switch?* We don't know. Of course it convenient to stay as close as possible to upstream as possible, but in our opinion Cyanogenmod has switched way too early from Busybox to Toybox for their recovery. As Open GApps we are very unhappy with the timing of their decision. We believe that at least the posix subset should have been fully implemented in Toybox before they should have switched. As Open GApps we now have the choice whether

1. we will rewrite our code to the limited Toybox capabilities (if possible at all),
2. defy CM Recovery as supportable effort,
3. bundle our own Busybox in the installer,
4. hope that Toybox will develop the missing commands at lightspeed,
5. or that Cyanogenmod reconsiders their decision.﻿

**UPDATE: we went with option 3**
