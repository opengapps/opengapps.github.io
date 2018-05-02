---
layout: post
title:  "Open GApps’ first anniversary"
date:   2016-05-09
author: mfonville
---
<div markdown='1'>
![Android with cake]({{ site.blogimg }}androidbirthdaycake.png)
</div>
The very first initial Open GApps’ buildscript was published at May 2<sup>nd</sup> 2015. That means we can celebrate our first anniversary!

#### Start of the project
At very beginning the project was not yet branded as Open GApps, but released as a very rudimentary prototype of what *could* be done using shell scripts to rebuild a legacy PA GApps package. There was no separation of build-scripts, sources and processed APK storage yet. Neither was the code of the high quality and many errors existed at that point. But we have come a long way. By a lot of testing by the community, feedback and reading through many debug logs most bugs have been squashed.

#### Improving Open GApps
All code for the build-scripts have been overhauled since that first version, to find the a durable design that could be scaled well. We have come a long way, from supporting only *stock 5.1* packages to supporting all variants, *[AROMA](https://opengapps.org/blog/post/2015/12/04/an-aroma-developer-insight/)* support, becoming the first GApps that supported building for non-*arm* platforms and currently supporting all platforms and all major Android versions. Even support for flashing updated GApps on stock Nexus ROMs is supported!
But next to all these variants and platforms support, a lot of development goes into extending features. Both device-side, where we could build further upon the foundations laid by [Osm0sis](https://forum.xda-developers.com/member.php?u=4544860) and [TKruzze](https://forum.xda-developers.com/member.php?u=2777334) to introduce new features. But especially on the build-side, where the build-scripts and tools used have been greatly enhanced. E.g. the [APKCrawler](https://github.com/opengapps/apkcrawler) project by [MNBooze](https://github.com/nicholasbuse) has been of great value. Open GApps is the prime supplier of GoogleAPKs to APKMirror because of it, and the pre-built OpenGApps.org packages are always having the very latest APKs thanks to these great scripts.
But also other features, like [verifying APKs](https://opengapps.org/blog/post/2015/09/09/reliable-and-trusted-gapps/) for authenticity, [re-packaging Marshmallow APKs](https://opengapps.org/blog/post/2015/11/17/marshmallow-builds/) but also automatic detection whether a SetupWizard is made for phones or tablets has all been automatized and is now a matter of mere seconds!

#### OpenGApps.org
Also the project has greatly benefited from registering [OpenGApps.org](https://opengapps.org/) to make the project more visible and offering convenient downloads to users. This would not have been possible by help from many various contributors who all thought of possible improvements and took the [initiative](https://github.com/opengapps/opengapps.github.io/pulls?q=is%3Apr+is%3Aclosed) to provide a better user experience!

#### Future plans
So what is ahead? Currently we are busy overhauling the build environment, to improve the speed of the building process. That will allow for continuous integration and automatic testing to provide the build quality and faster release of new builds. Also *dynamic* builds will become feasible with this new build environment, enabling the possibility to build packages that can be flashed on any platform. Also we are still busy with developing a package for Android TV, but because I ([mfonville](https://github.com/mfonville)) lack an Android TV device myself, I can’t test which makes it hard to debug some issues.
