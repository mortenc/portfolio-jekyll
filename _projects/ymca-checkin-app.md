---
layout: project
order: 2
bodyclass: "project"
list-type: "mobile"
title:  "Mobile Check-In App"
client: "YMCA Twin Cities"
desc-long:  "<span>The YMCA of Greater Twin Cities</span> needed a a way to expedite the member check-in process at their gyms and branches during peak hours. So we built an new iOS app that allows employees to scan membership cards on the fly."
desc-short:  "Checking in at the YMCA with a new mobile app"
role: "Research, UX, UI"
employer: "FFW Agency"
year: 2016
hero: "/assets/img/ymca-hero.jpg"
thumb: "/assets/img/ymca-thumb.jpg"
color: "#52527b"
---

Checking in at the YMCA
-----------------------
The YMCA of Greater Twin Cities is one of the largest YMCAs in the US. With more than 250,000 members, the employees at the front desks at the organization’s many branches and gyms are often under a lot of pressure to both check in members and assist with other inquiries during peak hours.

This problem prompted the need for a new, more portable, check-in solution, that the staff can utilize to help expedite the check-in process during busy times.

As the sole designer on the project I was responsible for all things design-related; from research and ideation through UX and UI design to prototyping and testing. I worked closely with a project manager and iOS developer.

Defining the problem
--------------------
In order to fully understand the problem space around the existing check-in flow, I visited the Southdale YMCA branch in Minneapolis. Here I was introduced to the existing check-in system, and saw how the staff handled member check-ins.

A big part of the problem was that the staff could only check in members using a sole stationary machine behind the front desk. That meant that during rush hour, lines would start to form at the front desk, as staff had to handle both the check in and other questions and inquiries from behind the desk.

Make it portable – and fast
---------------------------
From observing and talking to the staff it became clear that a potential – and very feasible – solution to the problem would be a portable check-in device that could be used to speed up the process during busy times. Having a portable device would allow staff members to get out from behind the desk and check in members right at the entrance, thus clearing up the front desk to handling the more time-consuming tasks.

In order to uncover potential technological solutions, our Technical Archtiect and I dug into researching the portable barcode scanner space. A deciding factor for choosing a solution was speed – if the scanning process wasn't fast, it wouldn't help solve the problem during peak hours. So while our developer began to set up to performance tests for both software and hardware scanning, I began mapping out user flows and sketching initial designs for both scenarios.

Prototyping the Flows and Interactions
--------------------------------------
I took a rapid and iterative approach to designing the app, testing several designs in order to zero in on a final user experience that would feel both inviting and fast. The UI had to immediately make it clear whether or not a member check-in was successful, and quickly allow the employee using the app to move on to the next check-in.

In the end I opted for a card-based design pattern that pops up a virtual card, whenever an employee scans a membership card. The UI uses bright colors and text to quickly communicate whether a check-in is succesful or not, and a simple downward swipe dismisses the card again.

As I worked on the initial design ideas for the app, I continously prototyped the interactions in [Principle](http://principleformac.com/). This allowed me to quickly put together a working prototype, so we could test the interactions in the app on an actual device – and allowed me to tweak and refine animation speed and easings to ensure a smooth, but snappy user experience that feels just right.

Finalizing the MVP
------------------
Based on the initial performance tests and prototypes, we decided to move ahead with a software solution for the barcode scanning. Using built-in camera and the [Scandit SDK](http://www.scandit.com/) provided the speed we needed, without the hassle of acquiring additional hardware.

With this decision made, I was able to make the final adjustments to the design of the app. This initial version of the app is simple and highly focused in its utility; it allows YMCA staff members to either scan a member's card, or to enter the card number manually, in case the scan should fail. When a card is successfully scanned, the app loads a digital member card that shows whether or not the check-in was accepted, and displays the basic information that the staff needs – most importantly, a large image and preferred nickname for the member, so staff quickly and easily can verify his or her identity.

This initial version will serve as an MVP to test in several YMCA branches. With the feedback we collect from these initial trials, we plan to start iterating and improving further on the app, adding new features as the need arises.

{% include project-image.html file="ymca-prototype-video-thumb.jpg" caption="We designed several prototypes to ensure that the interactions felt smooth and natural." %}


{% include project-image.html type="grid" file="ymca-prototype-video-thumb.jpg" caption="We designed several prototypes to ensure that the interactions felt smooth and natural." %}

{% include project-image.html type="full" file="ymca-prototype-video-thumb.jpg" caption="We designed several prototypes to ensure that the interactions felt smooth and natural." %}
