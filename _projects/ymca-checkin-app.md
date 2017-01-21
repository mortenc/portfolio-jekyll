---
layout: project
order: 2
bodyclass: "project"
list-type: "mobile"
title:  "YMCA Twin Cities"
client: "YMCA Twin Cities"
heading:  "Checking in at the YMCA"
desc-long:  "<span>The YMCA of Greater Twin Cities</span> needed a a way to expedite the member check-in process at their gyms and branches during peak hours. So we built an new iOS app that allows employees to scan membership cards on the fly."
desc-short:  "Checking in at the YMCA with a new mobile app"
role: "Research, UX, UI"
employer: "FFW Agency"
year: 2016
hero: "/assets/img/ymca-hero.jpg"
thumb: "/assets/img/ymca-thumb.jpg"
color: "#52527b"
---

## The Challenge
The YMCA of Greater Twin Cities serves more than 250,000 members across more than 25 locations in Minneapolis and St. Paul. This makes it one of the largest YMCAs in the US – but that success also comes with a set of challenges.

One such challenge is handling the large number of members checking into gym during peak hours. Employees working at the front desk are often under a lot of pressure to scan membership cards, while also assisting with other inquiries during peak hours. This challenge prompted the need for a new, more portable, check-in solution, that the staff could utilize to help expedite the check-in process during busy times.

> ### Problem Statement
> How might we design a mobile solution that allows YMCA employees to speed up the check-in process at their gyms during peak hours? The solution must be be fast, simple and cost-effective.

As the sole designer on the project, I was responsible for all things design-related; from research and ideation through UX and UI design to prototyping and testing. Also on the team was a Project Manager and iOS Developer.

{% include project-image.html type="grid" file="ymca-3-screens.jpg" caption="Screens from the final design." %}

## Researching the problem
In order to fully understand the challenge with the existing check-in flow, I visited the Southdale YMCA branch in Minneapolis. Here I was introduced to the existing check-in system, and saw how the staff handled member check-ins.

A big part of the problem was that the staff could only check in members using a sole scanner hooked up to stationary desktop computer behind the front desk. That meant that during rush hour, lines would start to form at the front desk, as staff struggled to simultanously scan membersip cards and answer other questions and inquiries from behind the desk.

*Research image here*

Observing and talking to the staff led to a number of useful insights and findings:

+ Employees need to be able to quickly and easily tell if a check-in is successful or failed, when they scan a card.
+ Employees use photos of the members to verify their identities, when they scan their cards – so a large photo is important.
+ Employees prefer to refer to members by their nicknames, so they need to be easily readable.
+ The solution should ideally be portable, so that it could also be used at outdoor events or in other situations.


## Make it portable – and fast
From my research and conversations with YMCA employees it was clear that a simple – and very feasible – solution would be to design an iOS app designed for iPhones, which could be used as portable check-in devices. Having a portable device would allow staff members to get out from behind the desk and check in members right at the entrance, thus clearing up the front desk to handling the more time-consuming tasks.

*Potentially image / illustration for here?*

There are several barcode scanning technologies that integrate with iOS on the market – from software frameworks that utilize the built-in camera to hardware sleds that attach to the phone. A deciding factor for choosing a solution was speed – if the scanning process wasn't fast, it wouldn't help solve the problem during peak hours – so our developer and I decided to test several potential solutions to evaluate the speed against the cost.

## Designing the app
I took a rapid and iterative approach to designing the app, testing several designs in order to zero in on a final user experience that would feel both inviting and fast. The UI had to immediately make it clear whether or not a member check-in was successful, and quickly allow the employee using the app to move on to the next check-in.

### Testing a headline
In the end I opted for a card-based design pattern that pops up a virtual card, whenever an employee scans a membership card. The UI uses bright colors and text to quickly communicate whether a check-in is succesful or not, and a simple downward swipe dismisses the card again.

{% include project-image.html type="grid" file="ymca-flow-and-mockup.jpg" caption="Mapping out the main screen flow – scanning a membership card." %}


## Prototyping the flows and interactions
As I designed the app, I also continually prototyped the interactions in [Principle](http://principleformac.com/). This allowed me to easily test, tweak and refine animation speed and easings to ensure a smooth, but snappy user experience.

The initial version of the app is simple and highly focused in its utility; it allows YMCA staff members to either scan a member's card, or to enter their card number manually, in case the scan should fail. When a card is successfully scanned, the app loads a digital member card that shows whether or not the check-in was accepted, and displays the basic information that the staff needs – most importantly, a large image and preferred nickname for the member, so staff quickly and easily can verify his or her identity.

{% include project-image.html type="grid" file="ymca-prototype-video-thumb.jpg" caption="We designed several prototypes to ensure that the interactions felt smooth and natural." %}


## The result - MVP
In the end, the result of the process was an iOS app that uses the built-in iPhone camera and the [Scandit SDK](http://www.scandit.com/) to scan membership cards, without the hassle of acquiring additional hardware. The app is fast

This initial version of the app serves as an MVP and is currently being tested in several of the YMCA Twin Cities branches. It is the intention to iterate and improve further on the app, and add new features as the need arises.
