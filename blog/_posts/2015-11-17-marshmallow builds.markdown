---
layout: post
title:  "Marshmallow builds"
date:   2015-11-17
author: mfonville
---
Since the 6th of November we are releasing Marshmallow builds. The very first ones were still experimental and broken in some ways, but by now they should be pretty stable.

We were lucky that after our last post about Marshmallow challenges [Alex Naidis](https://github.com/TheCrazyLex) did reach out to us and created a patch for ROMs to fix the described permission issues. This patch is now part of CyanogenMod and most ROMs (also the AOSP-based ones) have added it by now. (It is funny to see the growing collection of references from that commit's description to our [Marshmallow tracking bug](https://github.com/opengapps/opengapps/issues/93).)

After these permission problems were fixed we still had to solve the duplicate library issue (extracted+inside the APK).
Our `x86` maintainer [Sean Hoyt](https://github.com/orgs/opengapps/people/deadman96385) did find [this commit]( https://github.com/android/platform_frameworks_base/commit/ff193d642eea7128faad837d19e347cd25212c27 ) that gave us the info how libs are now read from the APK.
Based on that information we could see that for reading the libs from the APK they have to be uncompressed and aligned within the APK's ZIP-structure. We were also able to confirm that the APKs were structured in the same manner on Google's Nexus images.

One problem is though, that all APKs distributed through the Play Store are by default compressing their libs. So the build scripts had to be adjusted to repackage the latest APKs when building for Marshmallow. This is done in the scripts during the build process by first temporarily extracting the libs from the APK. Then the (compressed) libs are removed from the APK. The last step is by adding the earlier extracted libs again back to the APK, but with a specific ZIP command to refrain from using any compression when adding.

You might wonder: *doesn't that break the validation and certificate of the APK?* Which is a valid question, to which luckily the answer is: *No*. Because even though the *outside* (deflated state) of the APK does change (e.g. the APK will be larger and will have a different md5 hash) all APK validation and certification mechanisms describe the contents of the ZIP in its inflated form. Because all (content of) the files within the ZIP itself stay the same, all the validation and certification are still valid :-)

Of course all this knowledge was shared with the other GApps devs, so that everybody can benefit from Marshmallow packages from their favourite provider ASAP.

So we have now working MarshMallow builds. Since today's build also `GoogleTTS` has been added for all *6.0* packages, since on some ROMs (but not all, apparently) the Setup Wizard demands it. We don't know why and what triggers it. But we don't want anybody to experience FCs during their setup.﻿