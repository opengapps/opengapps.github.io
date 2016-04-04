---
layout: post
title:  "Multi DPI support"
date:   2015-10-06
author: mfonville
---
<div markdown='1'>
![Screens differ]({{ site.blogimg }}screensizes.jpg)
</div>
What, not a post about Marshmallow?
We know that all of you want to hear about Marshmallow and GApps support for it, and yes, we are busy with it. But it is not the time to blog about it yet. So instead, today a small post about one of the unique features of Open GApps: full multi DPI support.

#### Pioneering DPIs
Multi DPI support was already available in PA GApps, but only for a very limited set of applications: Google Play Services and Google Play Games. But throughout time, Google has released more applications that have DPI-specific versions. First, many organizations and packagers were unaware of this trend. E.g. APK-mirror would show you the very latest APK of an app, but unknowingly of its DPI. Luckily they also did spot our pioneering work on aggregating as many DPI-variations of each APK as possible, so nowadays you can find the DPI in the title of many of the APKs posted (and they also followed suit with our *nodpi* classification ;-) ). Many of the more rare DPI-specific versions are now regularly contributed by the Open GApps packagers.

#### Best APK for your device
Having these DPI-variations of each APK posed an issue for GApps packagers. Which version to bundle? Some APKs have a *universal* DPI version (but not all!), meaning that they contain the graphic resources for all DPI variations. Those are practical to package, because they are suitable for all devices. But having a lower version number then the DPI-specific versions, most users will receive an update to their DPI-specific version via the Play Store. The Play Store saves the APK on the `/data/` partition, and the advantage of having the GApp installed on the `/system/` partition in the first place is gone. Also, this slows down the device's boot process, because more APKs have to be processed by the Android package manager.
Another solution for a GApps packager would be to bundle the highest DPI version. That version will have the highest version number, so users won't get DPI-specific upgrades from the Play Store offered. Problem is though, that the resources are not optimized for the device. This can lead to distorted graphics, but also slows down the Android Launcher, that has to resize the icons, the app itself, that has to resize all the graphics, and leads to increased CPU and/or GPU use, leading to more heat and lower battery life. Though impact in practice is not that high, knowing that it can be better is for people that are looking for the best ROM also a reason to look for the best GApps implementation concerning this issue.

#### Package them all
That is why Open GApps bundles all DPI-specific versions (if available) in its package. Open GApps tries to install the best DPI package for your system. The exact matching if possible, and otherwise it falls back on a universal version or as last resort a version close to your DPI. This does mean that the Open GApps package became huge. E.g. PA GApps was already one of the largest GApps packages around with *stock*' being more than 500MiB. When we started to add DPI-specific content the *stock* package started to grow out over more than 1GiB and the latest Open GApps *stock* release contains more than 2GiB of APKs.

#### Strong compression
But luckily we were able to reduce the size of the package to around 500MiB again by using smart compression techniques. All APKs of the same application are stored within a common XZ-archive. The XZ-compression is able to detect similarities between these APKs. Since the graphics resources tend to only take up to 10% of the APK, and the other 90% is the same, a very high compression can be achieved. For each extra DPI-specific variation, the XZ-archive only needs a few 100KiB more.
To unpack these XZ archives, a XZ-archiver is necessary. The latest TWRP recoveries already contain these, and for as long as CWM is still around, we have bundled an XZ-decompressor within the package. Decompressing the XZ archives takes a bit more time, that is why OpenGApps installation takes quite long, but you'll know that afterwards you'll have the fastest GApps around!﻿
