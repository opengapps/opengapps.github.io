---
layout: post
title:  "An AROMA developer insight"
date:   2015-12-04
author: raulx222
---
<div markdown='1'>
![Developer]({{ site.blogimg }}developer.png)
</div>
AROMA Open Gapps (previously known as AROMA LP-GAPPS) was created at the beginning of 2015. What triggered its creation, you ask?

#### AROMA LP-GAPPS
From a simple discussion between two friends about how awesome it would be, if you could only install those GApps that you really want in a simple manner. Because the standard packages (*nano*, *pico*, *mini*, *stock*, etc.) didn't satisfy our needs. This sparked the idea for AROMA LP-GAPPS and [raulx222](https://github.com/raulpetru) started to develop a config for AROMA-Installer and made a package based on PA GApps.

#### Joining Open GApps
On 1<sup>st</sup> of June, LP-GAPPS was further integrated with the Open GApps project, a new GApps project that used the same (keyword) install mechanism from the, at that point discontinued, PA GApps. This was a new beginning for LP-GAPPS and the best thing that happened to the project.

The main benefit of integration with the Open GApps project is that the AROMA packages were now build everyday containing the latest GApps, compared to the old situation where the packages were the AROMA-scripts had to be repackaged manually every release.

#### AROMA Installer
Now let's talk more about AROMA Installer, an essential ingredient for the project. What is AROMA Installer?

"AROMA" was taken from Bahasa Indonesia (Indonesian Language) and it means "Scent", but it is also an abbreviation of "AMARULLZ ANDROID ROM MANIFESTATION". It is an advanced update-binary for Android Recovery. It contains many features, like Wizard Installation, Touch User Interface (AROMA UI), Customizable Packages, System Inspecting, Themeable, and User Interactive. - [amarullz (Ahmad Amarullah)](https://github.com/amarullz)

AROMA Installer was created somewhere in 2012. This piece of software got very popular very fast and many ROMs developers were using it and still use it, because it is simply unique and very powerful. It does let users customize their installations based on their preferences through a very attractive GUI within the recovery environment.

#### AROMA maintenance
Somewhere in 2013 the development did almost stop completely, but AROMA Installer still works on most devices with *ARM* architecture.

Since then the smartphone industry also developed devices with other architectures, like *x86*, which are not compatible with the current AROMA Installer. But even not all *ARM* devices are compatible with AROMA Installer, because of various issues. But we believe these could very possibly be fixed through further development.

#### Lib AROMA
Since 2013 amarullz started to develop his "aromalib" which is the core component of AROMA Installer. So there's a newer, modified aromalib of which amarullz confirmed that it would be used in the next update of AROMA Installer. In May 2015 amarullz uploaded a video with a test application of libaroma on TWRP, you can see the [video here](https://www.youtube.com/watch?v=3hPMhBXhpqQ). But development of aromalib seems to go slow, which worries us as AROMA Installer users.

All we can do is to encourage amarullz to keep working on his powerful aromalib and help him to release a new update! If you appreciate his work and want to encourage further AROMA Installer development you can [donate to amarullz](https://forum.xda-developers.com/donatetome.php?u=402300) and you can check out his [other work](https://github.com/amarullz).

#### AROMA Installer future
We hope that we can receive an updated AROMA Installer in the near future. But of course we did not stop our own development and hacking around AROMA's current limitations. Sometimes we faced issues when implementing new features, because they did not work properly in the aroma package. But we managed to fix them! For example we were obliged to compile and bundle our own `xzdec` (for decompressing xz files on *ARM* devices) in order to decompress xz files within AROMA Installer. Without our own `xzdec` tool, using recovery's built-in decompression tool, the AROMA Installer would failing during decompression, probably because of memory issues.

#### AROMA Open GApps future
In the future we are planning to make the user interface of the aroma package more dynamic per Android version. E.g. not all keywords are available in the various aroma packages. With the new Super package we did expand our keywords to cover the newest app additions. But the aroma package for *4.4* and *5.0* are still based on the stock package, because *super* is only available for *5.1* and *6.0*. The current *aroma* config is still shared between these various versions and does contain all the keywords, even when they are not available. When we will make the interface more dynamic, the “unavailable keywords” can be hidden on Android versions where they are not applicable.﻿
