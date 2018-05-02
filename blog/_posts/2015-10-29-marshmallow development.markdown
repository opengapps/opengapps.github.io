---
layout: post
title:  "Marshmallow development"
date:   2015-10-29
author: mfonville
---
<div markdown='1'>
![Marshmallow]({{ site.blogimg }}marshmallow_logo.png)
</div>
Finally a post about Marshmallow!

#### No builds yet
Most important information first: we don't provide any stable builds for Marshmallow yet, in the cause of that is because Marshmallow poses a couple of challenges that have not been properly resolved yet.
We only want to offer pre-built Open GApps packages when these issues are resolved.

#### Challenges
So, what are these challenges you ask?
We will highlight a few:

* Marshmallow comes with several new core applications. Our scripts had to be updated to package and install these applications too. This has been done and implemented already in our code.
* Google's Marshmallow images have for some applications no pre-extracted libraries. They read the libraries from within the APK. For some reason AOSP ROMs do not always accept libraries this way, and still demand pre-extracted libraries. We still don't know why they differ in behaviour, but this is something that should be resolved by the ROMs and consistent behaviour should be defined.
* Google finally fixed the security mechanisms for apps on `/system/` partition and demands all APKs to be properly signed and verified. This does mean that we cannot remove the libraries from the APK, or it would not pass this verification anymore. In combination with the previous point, this would mean that all libraries would take twice the system space, if they would have to be both within the APK next to being pre-extracted.
* Only applications that are signed with the platform key are automatically granted all permissions on `/system/`. All other applications have to request these permissions. On Google's stock images this is no problem, because both the platform as the Google Apps are signed by Google. But on AOSP ROMs, the ROM is not signed by Google, resulting in that the Google Apps don't get their permissions automatically assigned.
* Which leads to our following point, that the core Google Apps assume that they have already been granted all permissions, and if they don't have the permissions, they just crash and give constant FCs on the screen while the device is booting.
* The only 'solution' to work around this problem for now, is not bundling some core applications like SetupWizard. Which is something that in our opinion is not good enough of a workaround for pre-built packages to the public.
* The real solution would be to patches in the AOSP ROMs to also automatically grant permissions to Google Apps too, or e.g. use an init script that can interact with the Android Shell to perform the granting of the permissions automatically.
* But we reasoned that we are not alone in this problem. So we are waiting for some of the 'good' vendors that play nice with open source, like Sony, to release the source code of their changes to AOSP and to check how they chose to work around this problem. Because also they don't have access to Google's platform key, but they do have to bundle these Google Apps with their ROM.

#### GApps devs
The very nice thing about these problems though, is that it gives more unity to the GApps devs community and most of us are working together and sharing our knowledge and progress. So kudos to dankoman, benzo and others for their efforts.

#### Track progress
For further information, please keep an eye on our [XDA thread](https://forum.xda-developers.com/android/software/Open-GApps-t3098071) and our [GitHub](https://github.com/opengapps/opengapps). If you are Android ROM dev and want to help on the ROM-related tweaks, please drop a note on the GitHub issue.﻿
