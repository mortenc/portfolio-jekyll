---
layout: project
title:  "Mobile Check-In App"
desc:  "Speeding up the check in process at YMCA branches with a new iOS app."
client: "YMCA Twin Cities"
role: "Strategy, UX, Design"
employer: "FFW Agency"
year: 2016
hero: "/assets/img/ymca-hero.jpg"
color: "#52527b"
---

The YMCA of Greater Twin Cities needed a way to speed up the check-in process for their members during peak hours in their gyms and branches. To solve this problem we designed and built an iOS app for the organization’s employees to expedite the process. As the only creative on the project, I was responsible for all research, UX and UI design.

Checking in at the YMCA
-----------------------
The YMCA of Greater Twin Cities is one of the largest YMCAs in the US. With more than 250,000 members, the front desks at the organization’s many branches and gyms are often under a lot of pressure to both check in members and assist with other inquiries during peak hours. This prompted the need for a new, more portable, check-in solution, that the staff members can utilize to help expedite the check-in process during busy times.

In order to fully understand the existing check-in flow, I visited a YMCA branch, where I was introduced to their check-in system, and saw how the staff currently handles member check-ins.

{% include project-image.html file="ymca-prototype-video-thumb.jpg" caption="We designed several prototypes to ensure that the interactions felt smooth and natural." %}

Defining the concept
--------------------
It was clear from conversations with YMCA staff that a feasible (and very requested) solution to the check-in problem would be a portable check-in device that could be used to speed up the process during busy times.

In order to uncover potential technological solutions I dug into researching the portable barcode scanner space, together with one of our developers. We found several potential solutions that could largely be divided into two groups: software or hardware scanners.

{% include project-image.html type="wide" file="ymca-prototype-video-thumb.jpg" caption="We designed several prototypes to ensure that the interactions felt smooth and natural." %}

A deciding factor for choosing a solution was speed – if the scanning process was not fast, it would not help YMCA solve their issues during peak hours. So while our developer began to set up to performance tests for both software and hardware scanning, I began mapping out user flows and sketching initial designs for both scenarios.

{% include project-image.html type="full" file="ymca-prototype-video-thumb.jpg" caption="We designed several prototypes to ensure that the interactions felt smooth and natural." %}

Prototyping the Flows and Interactions
--------------------------------------
As I worked on the initial mockups of the app, I began to prototype the various user flows using [Principle](http://principleformac.com/). This allowed me to quickly put together a working prototype, so we could test the interactions in the app on an actual device.

I used the prototypes to further refine the designs and ensure that the user experience felt responsive and fast. We initially tested a version simulating a hardware scanning experience, but in the end changed to a software scanning solution.

Finalizing the MVP
------------------
Based on the initial performance tests and prototypes, we decided to move ahead with a software solution for the barcode scanning. Using built-in camera and the [Scandit SDK](http://www.scandit.com/) provided the speed we needed, without the hassle of acquiring additional hardware.

With this decision made, I was able to make the final adjustments to the design of the app. This initial version of the app is simple and highly focused in its utility; it allows YMCA staff members to either scan a member's card, or to enter the card number manually, in case the scan should fail. When a card is successfully scanned, the app loads a digital member card that shows whether or not the check-in was accepted, and displays the basic information that the staff needs – most importantly, a large image and preferred nickname for the member, so staff quickly and easily can verify his or her identity.

This initial version will serve as an MVP to test in several YMCA branches. With the feedback we collect from these initial trials, we plan to start iterating and improving further on the app, adding new features as the need arises.
