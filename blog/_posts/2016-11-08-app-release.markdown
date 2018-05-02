---
layout: post
title:  "OpenGApps App Release"
date: 2016-11-08
author: beatbrot
---
Hi everyone, my name is Christoph Loy aka [beatbrot](https://github.com/beatbrot) and today I’ll show you what I’ve been working on the last four months: [**the Open GApps App**](https://opengapps.org/app)!

### The App
Open GApps packages are downloaded via the [OpenGApps.org](https://opengapps.org) website. The user has to select the architecture, the Android-version as well as the variant. Afterwards, the user has to enter recovery and flash the file. Our goal was to simplify these steps even more with our new [Open GApps App](https://opengapps.org/app).
While the app still allows to select every possible GApps package, we tried to simplify this process even more, using a wizard.

![App CPU selection]({{ site.blogimg }}app-launch-00.png)
![App Android selection]({{ site.blogimg }}app-launch-01.png)

Using the wizard we can detect the device’s properties and older installations. That enables the app to recommend an appropriate package. It simplifies the process for beginners while still providing all the options to power users.

![App Variant selection]({{ site.blogimg }}app-launch-02.png)
![App home]({{ site.blogimg }}app-launch-03.png)

Another feature of the app that simplifies the life of its users is automatic MD5-Checking as well as automatic flashing via TWRP (if the user chooses to grant root access to the app). With this approach, we can ensure that the zips aren’t corrupt and also help to automate the process of flashing the GApps package.
Another thing we did for our power users was including the VersionLog for each package. With the app users can opt in to automatically fetch the VersionLog with their GApps package.

![App package dropdown]({{ site.blogimg }}app-launch-04.png)
![App VersionLog]({{ site.blogimg }}app-launch-05.png)

### The Development
Developing the app was a very challenging but interesting endeavor. I would like to share some background and experiences I encountered during the development.

#### Personal Background
At the moment I am a student Computer Science. While I already had several programming courses at university, I never had a course for Android Development, neither had I ever programmed an Android app.

I was interested in trying to develop an Android app and first I thought about a Recovery Manager app. I wanted it to have GApps downloading included, so I approached [Maarten](https://github.com/mfonville) for permission to automatically download OpenGApps.org packages. He asked me if I’d be interested in developing it as an *official* Open GApps App. I quickly agreed as I saw this as a huge opportunity.
While writing the first few lines of code that I wrote were completely new to me, it also was great fun, as I got into exploring all the details about Android app architecture. Luckily my previous Java experience helped me a lot. Near the final release [Ashish](https://github.com/codekidx) joined us and thanks to his experience, we were able to greatly improve some things for this initial release. While 1.0 was mostly my work, he will probably contribute a lot to future versions.

#### The Good
During the development of the app, I had the chance to gather some great experiences that I want to share here

* First and foremost: it was always a pleasure to work with Maarten, [Adam](https://github.com/yeti12) and Ashish. All of them were always nice and patient. Especially Maarten always helped me out with good advice.
* It’s a great insight in the internals of Android. While I flashed custom ROMs a lot in the past, I never had the feeling of understanding what’s actually happening
* “Touching” your code gives a great feeling of accomplishment. I was never really impressed by those C terminal applications with plain text, that I wrote. This, however, is a whole different story as you can feel your work
* Having a team that is able to really test the app. When I thought to be close to the 1.0 release, all members on the Open GApps Team tested the app extensively. Many more bugs did pop-up but they were really great in finding out how to reproduce, helping me to find the cause of the bug and fixing it.

#### The Not So Good
However, also some challenges appear that were hard to tackle for a beginner like me.

* Various side effects appear when the user closes the app, rotates the screen or resizes the app (Thanks to Android N). E.g. all references to the activity suddenly point to null which was especially painful since I implemented a lot of AsyncTasks
* Some libraries look more promising than they are in real world usage. In the beginning, I didn’t look a lot at the libraries I considered to use which leaded to a huge waste of time as I had to redo some things quite often.
* DownloadManager API is a pain to use. It’s lacking callbacks for a finished download, canceled download, etc. And checking the actual status is only possible via a weird implementation with cursors.
* Some Android SDK functions are just not documented at all. E.g. while it was clearly stated that an app needs the reboot-permission to restart the device, it didn’t work out for me first. Only after I’ve seen that a recovery-permission does exist in AOSP, I found that I did have to add it to the app. The documentation doesn’t say a single word about that.

#### Conclusion
As you saw, I started this project with zero experience in app development. However, thanks to the help of Open GApps Team I learned a lot of stuff and got a lot of experience with android development as well as working in a team. And additionally I was able to contribute to one of my favorite projects out there.
I can only recommend everyone doing the same. **Find a project you like and ask if you can contribute.** It’s a unique experience which you totally wouldn’t get from a regular company via an internship or anything similar.
