---
layout: post
title:  "Material Design Development"
date:   2015-08-31
author: mfonville
---
[OpenGApps.org](https://opengapps.org) currently enjoys a nice Material Design Lite layout. But it did take some effort to get there...

#### The beginning
The intial website of Open Gapps was made from a GitHub template, with some little changes to the colors and mostly some javascript hacking for the download widget. The website did suffice for the most basic needs, one could easily download a GApps package easily on desktop and mobile. But the website itself was very ugly.

#### Material Design Lite
The moment Google released their new [Material Design Lite Project](https://getmdl.io) and [mfonville](https://github.com/mfonville) and [raulx222](https://github.com/raulpetru) got directly interested, the toolset was simple and it allowed to adapt a simple HTML page into a full Material Design compliant website with near-native look and feel for a webapp easily.

#### Prototype
So raulx222 hacked away and had within a day a prototyped website ready. Clearly it was not done yet, because there were still some issuse with parts of the layout, but it showed great promise. So MastahF got hacking away at the javascript. This was quite tricky, because several race-conditions appeared between the different javascript objects and libraries that we use. The GitHub API queries are e.g. performed via javascript and this implies that some of layout can only be rendered after an asychronous callback. Meanwhile the Google AdSense banner (that gives our project donation fund some income) is also rendered via javascript to have a responsive layout and Material Design Lite also uses javascript, especially to 'upgrade' the 'normal' HTML widgets into 'Material Design' widgets. The automatic download mechanism can only be run when the Material Design is rendered (because it needs to fetch the selected radio buttons) and when the GitHub API request has returned (so that it can know if the seletions where valid and that it can fetch the URL of the most recent build). These javascripts were all conflicting, e.g. sometimes the AdSense banner was rendered 'behind' the layout that was rendered by Material Design Lite, at other moments the website rendered by Material Design Lite did not show the content from GitHub when initially opening the website. Or the download would not activate, or would refer to a non-existent broken URL, or downloads would be triggered twice, or it would block the loading of the AdSense banner, etc.

#### Javascript hacks
Apparently the javascript needed some small hacks, so that it would give consistently the correct output. E.g. we now let the the AdSense banner rendering-script to first force the Material Design Layout, so that its size can succesfully been detected, applied and rendered. And only if those scripts are completed, the automatic downloads are triggered, or the it would fail at processing the MDL-form. And any response from the asychronous GitHub Query calls force the Material Design Layout to be re-rendered.

#### Automatic downloads
After this javascript hacking was done, raulx222 fixed the last issues with the layout. Some things could not be fixed though, e.g. we could not let the page open with 'About' by default, in combination with the automatic downloads because Material Design would not render the invisible radio buttons which would have to be processed. Meanwhile Material Design Lite does not allow (yet) to hotlink to another tab, so we could not let the automatic download links automatically be switched to the downloads tab.

#### Going live
We decided to go live at one moment though, because it was good enough of an improvement over the initial site and we have received a lot of positive feedback.

#### The future
We will keep adding small improvements to the site, especially when Material Design Lite gets updated. We especially look forward to their 1.1 update which is planned for October, which will include even more Material Design components like Snackbars and Toasts, which we plan to use for e.g. the obligatory cookies warning.

#### Mobile experience
I hope you guys like the website and we have a small tip for you: If you open the website in Chrome on your Android Device, you can add the website to your homescreen. When doing so, the website will behave completely like a native Material Design Android app. In the future we will expand the features of this app, when technically possible (there are still some GitHub limitations) with e.g. push messages for updates.﻿
