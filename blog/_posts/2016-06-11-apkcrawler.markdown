---
layout: post
title:  "APKCrawler"
date:   2016-06-11
author: nick
---
<div markdown='1'>
![Python Crawler]({{ site.blogimg }}pythoncrawler.jpg)
</div>
Today a blog article with an interview with [Nick Buse](https://github.com/NicholasBuse), long term contributor to [Open GApps](https://opengapps.org) and the originator of the [APKCrawler](https://github.com/opengapps/apkcrawler) project.

#### *When did you start the APKCrawler project?*
First commit was on August 5, 2015, but some prototyping began in July 2015

#### *Why did you start the project?*
Between the start of the Open GApps project in March 2015 and August 2015 [mfonville](https://github.com/mfonville) had compiled a long list of sites to check for new and updated APK files. When I first saw mfonville’s keyboard (below), I knew something needed to be done to automate the process.

![mfonville’s keyboard]({{ site.blogimg }}f5button.jpg)

#### *What was the first crawler you have written?*
The obvious choice then (and still is now) is [APKMirror.com](https://www.apkmirror.com/). The have the most complete and accessible list of variants (cpu, dpi, sdk) for all APKs.  This is probably due to their crowd sourced upload functionality.

#### *What is the most useful crawler?*
The AptoideCrawler. It is the \#1 source of APKs that we find and then re-contribute to APKMirror!  A close second is the new PlayStoreCrawler that mfonville and [therealssj](https://github.com/therealssj) have been working on. There is no more reliable source of APKs than the Google Play Store!

#### *What are the benefits?*
mfonville has been using the same keyboard for 6 months now, so that is a huge cost savings for him! Seriously though, any software person knows the [benefits of automation](https://xkcd.com/1205/). Now we can focus family and friends!

#### *Any challenges or issues?*
When a site does not provide a usable API, we rely on the [Python](https://www.python.org/) module [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) to parse the site’s DOM to get the APK’s information as well and download the APK itself.  The obvious drawback is when sites go through a redesign. Even with an API in place they break from time to time. One of [Aptoide’s](https://www.aptoide.com/) official API functions is already broken for months now. That is when I found an undocumented API and rewrote the crawler to be much more efficient. As of today it still kicks ass!

#### *Where do we get more info about this cool thing of yours?*
Check out our [GitHub repository](https://github.com/opengapps/apkcrawler) for the latest development (contributions are welcome!)
