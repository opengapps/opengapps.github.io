---
layout: post
title:  "Statistics update"
date:   2016-04-13
author: mfonville
---
It was time to crunch again some updated numbers from the [opengapps.org](https://opengapps.org) website and the pre-built packages downloads. To gather the stats I wrote some better tools (Python instead of my old shell scripts) that fetch the data from the GitHub API, so future updates will be more easy.

#### OpenGApps.org
The average amount of unique daily visitors at [opengapps.org](https://opengapps.org) is according to Google Analytics around 55k. The amount of ad-blockers used is way over 50%. No surprise there with our tech-savvy crowd, luckily some people do contribute by <a href="#" onclick="window.paypal();return false;">donating</a> instead, for which I am very grateful! By multiplying the amount of downloads of each package variant with its size we were also able to find out how many bytes of packages are downloaded everyday: 30[TiB](https://en.wikipedia.org/wiki/Tebibyte), happy to be hosted by GitHub's cloud!
So, what packages are being downloaded? I compiled two sets of data, lifetime stats and those of March 2016, below.

#### Lifetime Architectures
![lifetime architectures]({{ site.blogimg }}20160413ArchsLifetime.png)

In this chart we see the architectures. Clearly *ARM* is still most popular. But *ARM64* is gaining ground and also *x86* is becoming more frequent. *x86_64* Doesn't exist that long and has such little share that it is marked as *Other* by Google Fusion Tables.

#### Lifetime APIs
![lifetime apis]({{ site.blogimg }}20160413APIsLifetime.png)

It is visible that *6.0* gained ground very quickly in the total number of downloads. One major reason is that [opengapps.org](https://opengapps.org) is still quite young (less than a year old) and *6.0* was released when the project was still gaining popularity. The *5.1* high tide has been missed.

#### Lifetime Variants
![lifetime variants]({{ site.blogimg }}20160413VariantsLifetime.png)

*Super* has been introduced more recently and is still not as popular as the other packages. Easily explained by the fact that it is only meant for power users that want to use a *gapps-config* with some of the more exotic applications.

#### March 2016 Architectures
![march architectures]({{ site.blogimg }}20160413ArchsMarch.png)

In the March architectures overview you can see there are no major shifts compared to the lifetime stats, but *ARM64* is very slowly growing.

#### March 2016 APIs
![march apis]({{ site.blogimg }}20160413APIsMarch.png)

In the March APIs it is visible that *6.0* is now the de-facto standard for ROMs. *5.0* is shrinking. Also *4.4* is becoming less popular.

#### March 2016 Variants
![march variants]({{ site.blogimg }}20160413VariantsMarch.png)

In the March variants overview it is visible that the smaller *pico* and *nano* packages are gaining. It seems that the growing size of Google's apps makes *stock* not always fit on `/system/` and leads to people switching to smaller packages, especially [compared to the popularity *stock* had on *5.1* in September last year](https://opengapps.org/blog/post/2015/09/24/some-early-statistics). Also *aroma* did shrink compared to September 2015, very probably caused by the unmaintained 'AROMA Installer' and the more frequent issues it poses on various devices and recent recoveries. You can read more about that in [Raul's post](https://opengapps.org/blog/post/2015/12/04/an-aroma-developer-insight).
