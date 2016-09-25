---
layout: post
title:  "Update & Pokémon Go APK"
date:   2016-07-11
author: mfonville
---
<div markdown='1'>
![Pokémon Go]({{ site.blogimg }}pokemongo.png)
</div>
Because of health issues development on the scripts has been a bit slow recently, sorry for that.
Nevertheless it was time to blog, so today a small update and a link to the [Pokémon Go APK](https://pokemonapk.github.io/pokemon-go/).

#### Build system overhaul
I have still have some major architectural overhauls for the Open GApps build system queued, but I need more time to fix some last issues with it.
When these changes are done, the build system will be much faster and use less disk space during builds, and prepares the way to multi-architecture/dynamic packages.

#### Moar and moar APKs
As could be read in our [previous blogpost]({{ site.blog }}post/2016/06/11/apkcrawler/) our APKCrawler project got some big updates and we are now crawling more intensively than ever before for new APKs.
*x86_64* tend to also be much more complete now.
Also we updated the playstorecrawler to be able to find updates for the Play Store itself directly, a mechanism that is a bit different than regular APKs.

#### What is up with TVStock?
We are still busy in the process of preparing a package for Android TV. It is not there yet (and first the build system overhaul has to be done). So no ETA yet.

#### GPG signed commits
Recently I switched to a new GPG key, because my old one was from 2005 and could not be considered safe anymore because of the low amount of bits.
Created a new one now and applied the necessary good practice (masterkey offline, various subkeys for daily use). Still in the process of the switch and propagation of the new key.
But I hope to include verified commits into our development workflow soon.

#### Pokémon Go
Pokémon Go is the biggest application hit ever, it seems. Even the devs are messing around with it (we can tell you it uses Google's [protobuf](https://developers.google.com/protocol-buffers/))!
Unfortunately eligibility is geo-location restricted, but using APKCrawler we could get the APK straight from the Play Store! [**You can download it here**](https://pokemonapk.github.io/pokemon-go/)
There is only an *arm* version at the moment, so those who have *x86* devices might encounter low performance (or it not working at all).
Let's hope Nintendo releases a multi-architecture version soon!

*Notice the Pokemon Go APK has been updated several times already and we will try to keep track of the most recent version*
