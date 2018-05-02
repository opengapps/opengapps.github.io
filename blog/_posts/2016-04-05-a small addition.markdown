---
layout: post
title:  "A small addition"
date:   2016-04-05
author: YashdSaraf
---
As [mfonville](https://github.com/mfonville) mentioned in his [Toybox blog post](https://opengapps.org/blog/post/2016/01/11/no-fun-to-play-with-toybox/),
it was decided to bundle a separate [busybox](https://www.busybox.net/) binary in the Open GApps installer.

*That's where [I (YashdSaraf)](https://github.com/yashdsaraf) came in*. I've been building busybox for Android for sometime now on [XDA Forums](https://forum.xda-developers.com/member.php?u=5423715). What started as a small pet project now has its own [XDA thread](https://forum.xda-developers.com/android/software-hacking/tool-busybox-flashable-archs-t3348543).

#### History
Earlier I used to build busybox on my Android device itself, but it soon posed an obstacle, as I could only support ARM architecture. So I decided to delve in the cross compiling business. I use custom-built buildroot toolchains using uClibc C-library to get the smallest and full-featured busybox binaries possible. This helped me support all the Android architectures available.

#### Open GApps busybox integration
Initially mfonville reached out to me for building a `busybox` binary with lzip support included as he was trying out lzma compression over xz, because xz embedded in the busybox binary wasn't fully functional. Finally it was decided that the installer will stick with xz as lzip was much slower and provided almost the same level of compression compared to xz. But the xz-embedded code that is part of the busybox source tree, was more of a hindrance because of its limitations and errors. So I was asked if I could also build an `xzdec` binary for the Open GApps project.

#### Bugs and Issues
Then came up an [issue on github](https://github.com/opengapps/opengapps/issues/278) where Tegra 2 device owners were getting "illegal instructions" error. Soon we realized that NEON support was the culprit here. Apparently even a modern SoC such as Tegra 2 lacked something as subtle as NEON support in their devices. The toolchain I built was configured to have VFPV3 support with NEON by default. So as simple as it may sound the solution was to build a toolchain without NEON support and using that to build busybox which was much easier said than done.

I also assisted the project by building the [infozip](http://www.info-zip.org/Zip.html)'s `zip` binary for advanced APK manipulation. Soon there was a hiccup in the working of this zip binary. MFonville and I invested a lot of time in bug hunting and it all came down to a nasty little variable `$ZIP` that was misleading the zip program. It was also addressed by XDA member osm0sis in his [post](https://forum.xda-developers.com/showpost.php?p=65911982&postcount=52).

Head over to [my XDA thread](https://forum.xda-developers.com/android/software-hacking/tool-busybox-flashable-archs-t3348543) for more information about my busybox binaries and their latest version.
