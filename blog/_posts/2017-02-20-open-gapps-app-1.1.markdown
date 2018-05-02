---
layout: post
title:  "Open GApps App 1.1"
date: 2017-02-20
author: codekidX
---
Hello everybody, I’m [Ashish Shekar a.k.a. CodekidX](https://github.com/codekidX/) and I’m the new member of the Open GApps App developers team. I’ll be listing all the things that I did for this 1.1 update and also who I am and what inspired me to join the team.

### Changes in version 1.1
[Version 1.1 of the Open GApps App](https://opengapps.org/app/) brings many new changes, listed here below.

#### Storage Chooser
One of the new feature that you’ll note right off-the-bat (if you were waiting for ExtSD support) is the new Storage & Download Directory Chooser, it’s open source and if you are a developer you can include it in your app [here](https://github.com/codekidX/storage-chooser/).

![Quick Overview Screenshot]({{ site.blogimg }}20160220overview_chooser.png)

I thought of the things that the user would like to see in a storage chooser, like the “Quick Overview” of the available disk space on a storage volume, so that you can decide where to download the Open GApps packages depending on the available space in your volume.

![Design Screenshot]({{ site.blogimg }}20160220design_1.png)
![Design Screenshot]({{ site.blogimg }}20160220design_2.png)

The design of the storage chooser is unlike any other similar library out there. It’s material design, for real. It follows the guidelines and I added some spice to it to look unique. Also you’ll be greeted with a smooth transition of the chooser that is provided by the library.

#### Day/Night Mode
![Day/Night Screenshots]({{ site.blogimg }}20160220day_mode.png)
![Day/Night Screenshots]({{ site.blogimg }}20160220night_mode.png)

The feature that has become one of the must have things in any app is a night mode theme. It’s a lot darker and way better looking than the proprietary dark colors and better integrated with all the other aspects of the app. It took some time for us to perfect it, but I think we did!

#### Keep older packages
![Keep packages Screenshot]({{ site.blogimg }}20160220keep_x_packages.png)

From 1.1 onwards the app will support more advanced cleaning up old Open GApps packages for you. All you need to do is set the number of packages in the settings to keep track, it’ll detect and delete old packages which will keep your device neat and clean. While offering you the option to always retain back-ups, if any issue with a new package version might arise.

#### Winter is coming!
With the 1.1 update you have the opportunity to find the new Easter Egg created by me, I made it a bit challenging so good luck finding it.

### Personal Background
I am an Electronics Engineer with a keen interest in Robotics, yeah there’s no relation with coding and development of an app but 3 years ago I needed an app for my own Home Automation System (yes I did beat Google to it) with voice recognition and stuff. I built the whole circuitry and the app from scratch and integrated in my home. Also you can find some of the things that I did as pet project for learning [here](http://ashishshekar.esy.es).  If you would be interested in a video or guide on how to do these projects yourself, I would be happy to share it!

### Joining the team
The *“how”* is one of the things that I can’t forget because of how funny it will sound in just about a minute. One fine day I decided to change the ROM of my device and it ended up being soft-bricked for some crazy reason (that I still couldn’t figure out despite of my 6-7 years of flashing experience). So I flashed the whole firmware to get everything working and the thing is I didn’t have GApps on my device which was a pain to get up and start up the PC (lazy to download it again on my laptop), sideload the GApps and then boot the device. So I decided, “Let’s make an app” so that it’ll always stay on my device no matter what. I designed everything, from the UI, UX; then it hit me that I need to ask permission from the Open GApps developer and guess what? The app was already in the process of being made by [Christoph a.k.a beatbrot](https://github.com/beatbrot/) and was in the end stage, well, that was a bummer, but [Maarten](https://github.com/mfonville/) was kind enough to give a link to a beta version of the app for me to test in our first conversation itself and have look at the app. Since it was the first android app for Christoph I already had some suggestions how we could improve the performance of the app.

### Wrap up
This was my first experience with the open-source community and it beats me that I was able to also create a useful library for the community. This made the experience unique and fun. In the near future I’ll help as part of the Open GApps App developers team in any way that I can. Also, if your feature is not included in this version, it might already be in development for our upcoming versions, because we have taken many suggestions into consideration. But all thoughts about new features and possible improvements are very welcome in the comment section below. It will make the app even more awesome!
