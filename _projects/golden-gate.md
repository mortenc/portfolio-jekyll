---
layout: project
order: 1
bodyclass: "project"
client: "Golden Gate Bridge"
title:  "Golden Gate Bridge"
heading:  "Redesigning a website for a world-famous bridge"
desc-short: "Redesigning a website for a world-famous bridge"
desc-long: "The Golden Gate Bridge, Highway & Transportation District needed a new website to better service the many visitors and travellers using their transportation services daily."
role: "Strategy · UX · UI"
employer: "FFW Agency"
link: "[Work-in-progress]"
link-desc: "Visit Website"
year: "2016-17"
type: "Website"
hero: "/assets/img/ggb-hero.jpg"
thumb: "/assets/img/ggb-thumb.jpg"
color: "#252c3e"
---

## The Project
In 2016 the Golden Gate Bridge, Highway & Transportation District decided that they needed a new website. The District maintains the Golden Gate Bridge - an iconic architectural landmark for the San Francisco Bay Area, and probably the most photographed bridge in the world – but also operates the Golden Gate Busses and Ferries that service the corridor north of San Francisco. Last year alone, more than 38 million vehicles crossed the Golden Gate Bridge and over 9 million customers rode the transit systems.

The District's old website had not seen an update in years, and had grown organically over time to become cluttered, confusing and visually outdated. To change this the District contracted with FFW to plan, conceptualize and design the foundation for a new website.

As Creative Director and Lead Designer on the project I led all discovery, strategy, UX/UI design and prototyping activities on the project. Besides me, the project team included a Project Manager and an additional UI Designer/Prototyper.

{% comment %}{% include project-image.html type="grid" file="ggb-responsive-mockups-2.png" caption="A snapshot of the final front page design for the new website." %}{% endcomment %}

{% include project-image.html type="grid" file="ggb-front-laptop.jpg" %}

## Understanding through Discovery
The foundation of any successful website redesign project is a thorough understanding of the context it exists in – the digital ecosystem, the users, the challenges and opportunities.

In order to etablish this foundation, we initialized the project with a discovery phase. Over the course of two weeks we conducted four workshops and interviewed more than 25 stakeholders from the District; from the executive management, to personnel from the bridge, bus and ferry departments, to customer service and marketing representatives.

### Website Objectives
Our stakeholder interviews and workshops served several purposes. Firstly, they enabled us to uncover key insights about the current pain points and challenges, target audiences and the content and structure of the website. Secondly, they allowed us to guide and align the many internal stakeholders at the District around a set of clear objectives for the project:

+ Provide the public with information on the District’s services as efficiently as possible.
+ Educate the public about the purpose of the District, and the interconnection of the ferry, bridge and bus services.
+ Support visitors looking for information about the Golden Gate Bridge, and explain the history of both the bridge and the District to those interested.
+ Accommodate inquiries from the general public, vendors and job seekers looking to engage with the District.

{% include project-image.html type="grid" file="ggb-front-phones.jpg" %}

{% comment %}{% include project-image.html type="grid" file="ggb-discovery-reports.jpg" caption="The key findings and insights from the discovery process were summarized in a project brief and presentation." %}{% endcomment %}

<!-- ## Findings and Themes
Outside of the general objectives, our discovery activities also revealed several high-level themes for the website redesign. We summarized these findings in a discovery brief that served as an executive summary of strategic challenges and considerations for the redesign.

### Information Architecture and Findability
The old website is not very easily navigable, which is generally attributed to four factors: an inconsistent information architecture, unclear labeling of menu items and sections, slack of prioritization of content on behalf of the users, and a subpar search functionality.

### Transportation and Tourism Duality
The District has a unique set of challenges, given the duality of its service offerings – at once a transporation agency and a tourist monument. This duality in the communication situation means that the website must accommodate a broad range of audiences, content and user journeys, which the old website doesn't do very succesfully.

### Engaging Visuals and Dynamic Content
The old website is seen as outdated and clunky, and it fails to leverage the amazing potential for visual and dynamic content offered by the bridge and the unique visual style. -->

## Target Audiences and User Journeys
A key challenge for redesigning the website was that it needs to service a very diverse group of users; from commuters on the bridge, busses or ferries to tourists looking for the best spot for selfie with the bridge, to researchers, vendors or potential employees looking for relevant information.

To ensure a clear prioritization among these audiences, we worked with the stakeholders to rank and divide them into primary and secondary groups. Among the *primary audiences* were customers for the bridge, busses and ferries, as well as tourists and visitors to the bridge. Among the *secondary audiences* were researchers, the general public, staff, and potential vendors and employees.

{% include project-image.html file="ggb-workshop.jpg" caption="Photo from one of the stakeholder workshops." %}

### User Journeys
In order to think deliberately about the the key use cases for the website, we asked stakeholders to help map out and prioritize some of the most common scenarios or user journeys on the website. A good technique for quickly mapping out this information is relying on "the Five Ws" – *Who, What, When, Where, Why* – a well-known research formula borrowed from journalism.

Mapping out these simple user journeys allowed us to start forming a clear picture of both the content needs and the prioritization for the website. The results were collated into a clear overview for us to reference throughout the design process.

{% include project-image.html type="grid" file="ggb-user-journey.png" caption="Example user journey for the Bridge Customers." %}

## Visual Exploration
An important part of the project was also helping the District to update and modernize the branding and visual style of their website. While the District already had several core brand elements in place, including logo and colors, they did not have a detailed styleguide built out, which gave us a lot of flexibility in defining the new direction.

To get discussions going I ran a [20 Second "Gut" Test](http://goodkickoffmeetings.com/2010/04/the-20-second-gut-test/) with key stakeholders on the project. In the test I showed a series of 15 website front pages for 20 seconds each, and asked people to rank them from 1 (“Strongly dislike website”) to 5 (“Really like website”) based on their first impressions. Following the test we discussed the various websites and rankings, with a focus on navigation, prioritization of content and visual style.

### Design concepts
Based on our research and discussions, I spent a week together with the our UI designer on the project, exploring various combinations of fonts and colors, and trying out several different direction for the overall UI system in Sketch.

The Golden Gate Bridge is known for its distinct orange color and art deco style; at once traditional and classical, as well as modern and playful. We tried to capture these distinctive characterics throughout the visual style.

{% include project-image.html type="grid" file="ggb-design-concepts.png" caption="We explored several different design directions for the proejct." %}

### Typography
One example of that was the basic font pairing for the site. In the end we settled on a combination of Chronicle Display – a Transitional style serif font – for headlines and display text, and Gotham for body copy; a combination that in my sense does a good job of mirroring the traditional, yet modern style:


{% include project-image.html file="ggb-typesetting.gif" caption="Typesetting a pairing of Chronicle Display and Gotham on an 8pt baseline grid." %}

## In-Browser Prototyping
As soon as we settled on the general design direction for the project, we switched over to designing directly in the browser. We built out the rest of the design as a prototype using HTML, SCSS and Javascript.

Designing directly in-browser allows you to not only _see_ your design, but also rapidly _test_ your assumptions and design patterns across screen sizes and devices. This gave us an opportunity to refine the interaction design, as we started to build out some of the key pages.

One such example is the Route Page - a page for showing the schedule for a specific bus route. A key use case for the website is to allow bus customers to easily view and browse bus these schedules, and the experience has to be just as seamless on-the-go from a smartphone, as it is at home in front of a laptop. Designing and displaying complex table data is always a challenge, and we researched several potential design patterns.

{% include project-video.html mp4="ggb-route-interaction.mp4" caption="The prototype for the Route page on desktop and mobile." %}

## The Result
The end result of the process was a prototype that fully outlines the new concept for the website, including key pages and design patterns. The website not only modernizes and matures the District's online presence, but seeks to create an experience that is much more accessible and engaging for the plethora of different audiences using the site every day.

The website is currently being developed by the District and is set to go live in the second half of 2017.

{% include project-image.html type="grid" file="ggb-route-in-phone.jpg" %}
